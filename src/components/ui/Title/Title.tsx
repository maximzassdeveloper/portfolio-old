import { FC, PropsWithChildren, useEffect, useRef } from 'react'
import SplitType from 'split-type'
import classNames from 'classnames'
import { useAnimation } from '@/hooks'
import { titleAnimation } from './titleAnimation'
import s from './title.module.scss'

interface TitleProps {
  level?: 'h1' | 'h2' | 'h3' | 'p'
  dataScroll?: boolean
  dataScrollSpeed?: string
  splitText?: boolean
  className?: string
}

export const Title: FC<PropsWithChildren<TitleProps>> = ({
  children, level, dataScroll, dataScrollSpeed, splitText, className
}) => {

  const ref = useRef<HTMLHeadingElement>(null)
  const Tag = level ?? 'h2'

  useAnimation(() => titleAnimation(ref))

  useEffect(() => {
    if (!splitText || !ref.current) return

    new SplitType(ref.current, { types: 'lines' })
  }, [splitText])

  const classes = classNames(className, {
    'split-text': splitText,
    [s.title]: level !== 'p'
  })

  return (
    <Tag
      ref={ref}
      className={classes}
      // data-scroll={dataScroll}
      // data-scroll-speed={dataScrollSpeed}
      data-scroll
      data-scroll-direction='horizontal'
      data-scroll-spedd='2'
    >
      {children}
    </Tag>
  )
}