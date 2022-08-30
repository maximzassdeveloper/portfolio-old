import { forwardRef, useRef } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { CustomLink } from '@/components/ui'

import { composeRef } from '@/utils/composeRef'
import { imgPath } from '@/utils/helper'
import { useMagnetic } from '@/hooks'

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
  useMagnetic(arrow.current)

  return (
    <CustomLink hash={hash} >
      <div
        ref={composeRef(arrow, ref)}
        className={classNames(s.arrow, className)}
        data-scroll={dataScroll}
        data-scroll-speed={dataScrollSpeed}
      >
        <Image src={imgPath('/arrow-icon.svg')} alt='Arrow' width={66} height={60} />
      </div>
    </CustomLink>
  )
})