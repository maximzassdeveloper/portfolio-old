import { FC, PropsWithChildren, useEffect, useRef } from 'react'
import SplitType from 'split-type'
import classNames from 'classnames'

import { gsap } from 'gsap'
import { CustomEase } from 'gsap/dist/CustomEase'
import { useAnimation } from '@/animations'

import s from './title.module.scss'

interface TitleProps {
  level?: 'h1' | 'h2' | 'h3' | 'p'
  dataScroll?: boolean
  dataScrollSpeed?: string
  splitText?: boolean
  className?: string
  notTitle?: boolean
}

export const Title: FC<PropsWithChildren<TitleProps>> = ({ 
  children, level, dataScroll, dataScrollSpeed, splitText, className, notTitle
}) => {

  const ref = useRef<HTMLHeadingElement>(null)
  const Tag = level ?? 'h2'

  useAnimation(titleAnimation)

  function titleAnimation () {
    if (!ref.current) return

    const lines = ref.current.querySelectorAll('.line')
    if (!lines?.length) return

    gsap.to(lines, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 60%'
      },
      duration: .5,
      rotateX: 0,
      y: 0,
      z: 0,
      opacity: 1,
      stagger: .08,
      ease: CustomEase.create('custom', 'M0,0 C0,0 0.025,0.603 0.45,0.84 0.694,0.976 1,1 1,1'),
      onComplete: () => ref.current?.classList.add(s.detect)
    })
  }

  useEffect(() => {
    if (!splitText || !ref.current) return 

    new SplitType(ref.current, { types: 'lines' })
  }, [splitText])

  return (
    <Tag
      ref={ref}
      className={classNames(className, { 'split-text': splitText, [s.title]: !notTitle })}
      data-scroll={dataScroll}
      data-scroll-speed={dataScrollSpeed}
    >
      {children}
    </Tag>
  )
}