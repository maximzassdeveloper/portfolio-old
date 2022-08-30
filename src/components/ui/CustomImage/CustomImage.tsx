import { FC, useEffect, useRef } from 'react'
import Image, { ImageProps } from 'next/image'
import { gsap } from 'gsap'
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

  const ref = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  // const animations = imageAnimations(imageRef)
  useAnimation(anim)

  function anim() {
    if (!ref.current) return

    const img = ref.current.querySelector('img')
    if (!img) return

    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 60%'
      },
      duration: .2,
      opacity: 1,
      y: 0,
    })

    gsap.to(`.${s.image} img`, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 60%'
      },
      duration: .2,
      scale: 1
    })
  }

  return (
    <div
      ref={ref}
      className={classNames(s.image, className)}
      data-scroll={dataScroll}
      data-scroll-speed={dataScrollSpeed}
    >
      <Image {...rest} alt={alt || ''} />
    </div>
  )
}