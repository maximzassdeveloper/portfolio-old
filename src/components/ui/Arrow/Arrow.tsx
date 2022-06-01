import { FC, MouseEvent, useRef } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { IMG_URL } from '@/config'
import { CustomLink } from '@/components/CustomLink/CustomLink'
import { dragOnHover } from '@/utils/dragOnHover'
import s from './arrow.module.scss'

interface ArrowProps {
  dataScroll?: boolean
  dataScrollSpeed?: string
  hash?: string
  className?: string
}

export const Arrow: FC<ArrowProps> = ({ className, dataScroll, hash, dataScrollSpeed }) => {

  const arrow = useRef<HTMLDivElement>(null)

  const mouseMoveHandler = (e: MouseEvent<HTMLDivElement>) => {
    if (!arrow.current) return
    dragOnHover(arrow.current, e, 8)
  }

  return (
    <CustomLink hash={hash} >
      <div 
        ref={arrow}
        className={classNames(s.arrow, className)}
        data-scroll={dataScroll}
        data-scroll-speed={dataScrollSpeed}
        onMouseMove={mouseMoveHandler}
      >        
        <Image src={IMG_URL + '/arrow-icon.svg'} alt='Arrow' width={70} height={70} />
      </div>
    </CustomLink>
  )
}