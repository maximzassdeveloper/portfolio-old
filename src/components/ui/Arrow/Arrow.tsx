import { forwardRef, MouseEvent, useRef } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { CustomLink } from '@/components/ui'

import { dragOnHover } from '@/utils/dragOnHover'
import { composeRef } from '@/utils/composeRef'
import { imgPath } from '@/utils/helper'

import s from './arrow.module.scss'

interface ArrowProps {
  dataScroll?: boolean
  dataScrollSpeed?: string
  hash?: string
  className?: string
}

export const Arrow = forwardRef<HTMLDivElement, ArrowProps>((props, ref) => {

  const { className, dataScroll, hash, dataScrollSpeed } = props

  const arrow = useRef<HTMLDivElement>(null)

  const mouseMoveHandler = (e: MouseEvent<HTMLDivElement>) => {
    if (!arrow.current) return
    dragOnHover(arrow.current, e, 8)
  }

  return (
    <CustomLink hash={hash} >
      <div 
        ref={composeRef(arrow, ref)}
        className={classNames(s.arrow, className)}
        data-scroll={dataScroll}
        data-scroll-speed={dataScrollSpeed}
        onMouseMove={mouseMoveHandler}
      >        
        <Image src={imgPath('/arrow-icon.svg')} alt='Arrow' width={66} height={60} />
      </div>
    </CustomLink>
  )
})