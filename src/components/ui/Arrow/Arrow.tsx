import { forwardRef, useRef } from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import { composeRef } from '@/utils/composeRef'
import { imgPath } from '@/utils/helper'
import { useCursorHover, useMagnetic } from '@/hooks'
import { useAppContext } from '@/context/AppContext'
import { LocoScrollAttrs } from '@/types'

import s from './arrow.module.scss'

interface ArrowProps extends LocoScrollAttrs {
  className?: string
  scrollTo?: string | number
}

export const Arrow = forwardRef<HTMLDivElement, ArrowProps>((props, ref) => {

  const { className, scrollTo, ...locoAttrs } = props
  const arrow = useRef<HTMLDivElement>(null)
  const { locoScroll } = useAppContext()
  useMagnetic(arrow.current)
  useCursorHover({ el: arrow.current, cursorClass: 'hoverLink' })

  const clickHandler = () => {
    locoScroll.scrollTo(scrollTo)
  }

  return (
    <div
      ref={composeRef(arrow, ref)}
      className={classNames(s.arrow, className)}
      onClick={clickHandler}
      {...locoAttrs}
    >
      <Image
        src={imgPath('/arrow-icon.svg')}
        alt='Arrow'
        width={66}
        height={60}
      />
    </div>
  )
})