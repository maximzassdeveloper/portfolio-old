import { RefObject, useEffect } from 'react'
import { useAppContext } from '@/context/AppContext'
import cursorStyles from '@/components/CustomCursor/cursor.module.scss'

interface IOptions {
  cursorClass?: string
  onMouseEnter?: (e: MouseEvent) => void
  onMouseLeave?: (e: MouseEvent) => void
}

export const useCursorHover = (
  target: RefObject<any>,
  options: IOptions
) => {

  const { cursorRef } = useAppContext()

  const onMouseEnter = (e: MouseEvent) => {
    if (options.cursorClass) {
      cursorRef.current?.classList.add(cursorStyles[options.cursorClass])
    }
    options.onMouseEnter?.(e)
  }

  const onMouseLeave = (e: MouseEvent) => {
    if (options.cursorClass) {
      cursorRef.current?.classList.remove(cursorStyles[options.cursorClass])
    }
    options.onMouseLeave?.(e)
  }

  useEffect(() => {
    if (!cursorRef.current || !target?.current) return

    target.current.addEventListener('mouseenter', onMouseEnter)
    target.current.addEventListener('mouseleave', onMouseLeave)

    return () => {
      target.current?.removeEventListener('mouseenter', onMouseEnter)
      target.current?.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return { cursorRef }

}