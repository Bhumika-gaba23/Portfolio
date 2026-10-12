import { useEffect, useRef } from 'react'

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!finePointer.matches || reducedMotion.matches) return

    const cursor = cursorRef.current
    if (!cursor) return

    const root = document.documentElement
    root.classList.add('has-custom-cursor')

    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      cursor.style.left = `${event.clientX}px`
      cursor.style.top = `${event.clientY}px`
      cursor.classList.add('is-visible')
    }

    const hover = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return
      const target = event.target.closest('a, button, [role="button"]')
      cursor.classList.toggle('is-hovering', Boolean(target))
      cursor.classList.toggle('is-editing', Boolean(event.target.closest('input, textarea, select, [contenteditable="true"]')))
    }

    const leave = () => cursor.classList.remove('is-visible', 'is-hovering', 'is-editing')
    const press = () => cursor.classList.add('is-pressed')
    const release = () => cursor.classList.remove('is-pressed')

    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerover', hover, { passive: true })
    window.addEventListener('pointerdown', press, { passive: true })
    window.addEventListener('pointerup', release, { passive: true })
    document.documentElement.addEventListener('pointerleave', leave)

    return () => {
      root.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', hover)
      window.removeEventListener('pointerdown', press)
      window.removeEventListener('pointerup', release)
      document.documentElement.removeEventListener('pointerleave', leave)
    }
  }, [])

  return <div className="cursor-follower" ref={cursorRef} aria-hidden="true"><span /></div>
}
