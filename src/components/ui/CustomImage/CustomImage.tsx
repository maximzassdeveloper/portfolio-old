import { FC, useRef } from 'react'
import Image, { ImageProps } from 'next/image'
import { gsap } from 'gsap'
import { useAnimation } from '@/animations'
import classNames from 'classnames'
import s from './image.module.scss'

interface CustomImageProps extends ImageProps {
  dataScroll?: boolean
  dataScrollSpeed?: string
}

export const CustomImage: FC<CustomImageProps> = ({ 
  className, dataScroll = true, dataScrollSpeed, ...rest 
}) => {

  const ref = useRef<HTMLDivElement>(null)
  useAnimation(imageAnimation)

  function imageAnimation() {
    if (!ref.current) return
    const imgTag = ref.current.querySelectorAll('img')
    if (!imgTag) return

    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 60%'
      },
      duration: .2,
      opacity: 1,
      y: 0,
      // ease: CustomEase.create("custom", "M0,0,C0,0,0.138,0.498,0.416,0.812,0.557,0.972,1,1,1,1")
    })
    gsap.to(imgTag, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 60%'
      },
      duration: .2,
      scale: 1,
      // ease: CustomEase.create("custom", "M0,0,C0,0,0.138,0.498,0.416,0.812,0.557,0.972,1,1,1,1")
    })
  }

  return (
    <div 
      ref={ref}
      className={classNames(s.image, className)}
      data-scroll={dataScroll}
      data-scroll-speed={dataScrollSpeed}
    >
      <Image {...rest} />
    </div>
  )
}