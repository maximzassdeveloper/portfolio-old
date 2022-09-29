import { FC, useRef } from 'react'
import Image, { ImageProps } from 'next/image'
import classNames from 'classnames'
import { useAnimation } from '@/hooks'
import { imageAnimation } from './imageAnimation'
import s from './image.module.scss'

interface CustomImageProps extends ImageProps {
  src: string
  dataScroll?: boolean
  dataScrollSpeed?: string
}

export const CustomImage: FC<CustomImageProps> = ({
  className, dataScroll = true, dataScrollSpeed, alt = '', src, ...rest
}) => {

  const ref = useRef<HTMLDivElement>(null)

  useAnimation(() => imageAnimation(ref))

  return (
    <div
      ref={ref}
      className={classNames(s.image, className)}
      data-scroll={dataScroll}
      data-scroll-speed={dataScrollSpeed}
    >
      <img alt={alt} src={src} {...rest} />
      {/* <Image {...rest} alt={alt} /> */}
    </div>
  )
}