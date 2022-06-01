import { useAppContext } from '@/context/AppContext'
import { FC, useEffect } from 'react'
import s from './cursor.module.scss'

export const CustomCursor: FC = () => {

  const { cursorRef: cursor } = useAppContext()

  const onDocumentMouseMove = (e: MouseEvent) => {
    if (!cursor.current) return 
    cursor.current.style.left = e.pageX + 'px'
    cursor.current.style.top = e.pageY + 'px'
  }

  const onDocumentMouseDown = () => {
    cursor.current?.classList.add(s.click)
  }

  const onDocumentMouseUp = () => {
    cursor.current?.classList.remove(s.click)
  }

  useEffect(() => {
    document.addEventListener('mousemove', onDocumentMouseMove)
    document.addEventListener('mousedown', onDocumentMouseDown)
    document.addEventListener('mouseup', onDocumentMouseUp)

    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove)
      document.removeEventListener('mousedown', onDocumentMouseDown)
      document.removeEventListener('mouseup', onDocumentMouseUp)
    }
  }, [])

  return (
    <div className={s.cursor} ref={cursor}>
      <div className={s.cursorInner} />
    </div>
  )
}