import { FC } from 'react'
import Image, { ImageProps } from 'next/image'
import { useAnimation } from '@/animations'
import { imageAnimations } from './imageAnimation'
import classNames from 'classnames'
import s from './image.module.scss'

interface CustomImageProps extends ImageProps {
  dataScroll?: boolean
  dataScrollSpeed?: string
}

export const CustomImage: FC<CustomImageProps> = ({ 
  className, dataScroll = true, dataScrollSpeed, alt, ...rest 
}) => {

  const animations = imageAnimations(s)
  useAnimation(animations.image)

  return (
    <div 
      className={classNames(s.image, className)}
      data-scroll={dataScroll}
      data-scroll-speed={dataScrollSpeed}
    >
      <Image {...rest} alt={alt || ''} />
    </div>
  )
}