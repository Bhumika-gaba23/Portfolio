import { spawn } from 'node:child_process'
import { mkdir, writeFile } from 'node:fs/promises'

const chrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const port = 9333
const browser = spawn(chrome, ['--headless=new', `--remote-debugging-port=${port}`, '--user-data-dir=D:/portfolio/.chrome-capture', '--window-size=1880,920', '--hide-scrollbars', 'about:blank'])

async function waitForBrowser() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try { const response = await fetch(`http://127.0.0.1:${port}/json/version`); if (response.ok) return } catch { /* retry */ }
    await new Promise(resolve => setTimeout(resolve, 200))
  }
  throw new Error('Chrome debugging endpoint did not start')
}

await waitForBrowser()
const target = await fetch(`http://127.0.0.1:${port}/json/new?https://winkbooth.vercel.app/`, { method: 'PUT' }).then(response => response.json())
const socket = new WebSocket(target.webSocketDebuggerUrl)
await new Promise((resolve, reject) => { socket.addEventListener('open', resolve, { once: true }); socket.addEventListener('error', reject, { once: true }) })

let id = 0
const pending = new Map()
socket.addEventListener('message', event => {
  const message = JSON.parse(event.data)
  if (message.id && pending.has(message.id)) { pending.get(message.id)(message.result); pending.delete(message.id) }
})
const send = (method, params = {}) => new Promise(resolve => { const messageId = ++id; pending.set(messageId, resolve); socket.send(JSON.stringify({ id: messageId, method, params })) })

await send('Page.enable')
await send('Emulation.setDeviceMetricsOverride', { width: 1880, height: 920, deviceScaleFactor: 1, mobile: false })
await send('Page.navigate', { url: 'https://winkbooth.vercel.app/' })
await new Promise(resolve => setTimeout(resolve, 4500))
const screenshot = await send('Page.captureScreenshot', { format: 'png', fromSurface: true })
await mkdir('D:/portfolio/public', { recursive: true })
await writeFile('D:/portfolio/public/winkbooth.png', Buffer.from(screenshot.data, 'base64'))
await send('Browser.close')
socket.close()
browser.kill()
