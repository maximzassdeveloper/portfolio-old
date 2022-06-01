import { MouseEvent } from 'react'

export const dragOnHover = (elem: HTMLElement, e: MouseEvent<any>, draggingNum: number = 8) => {
  const hWidth = elem.offsetWidth / 2
  const hHeight = elem.offsetHeight / 2
  const offsetX = e.nativeEvent.offsetX
  const offsetY = e.nativeEvent.offsetY

  const x = offsetX > hWidth ? offsetX - hWidth : -(hWidth - offsetX)
  const y = offsetY > hHeight ? offsetY - hHeight : -(hHeight - offsetY)

  elem.style.transform = `translate(${x / draggingNum}px, ${y / draggingNum}px)`
}