import { FC, useEffect, useRef } from 'react'
import cn from 'classnames'
import { Section } from '@/components/hoc'
import { Title, Arrow } from '@/components/ui'
import { useAnimation } from '@/hooks'
import { firstAnimations } from './firstAnimations'
import { init } from './three'
import s from './first.module.scss'

export const FirstSection: FC = () => {

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const arrowRef = useRef<HTMLDivElement>(null)

  useAnimation(() => firstAnimations(arrowRef))

  useEffect(() => {
    // init webgl sphere
    if (canvasRef.current) init(canvasRef.current)
  }, [])

  return (
    <Section
      id='first'
      className={s.first}
      addonAfterContainer={<canvas ref={canvasRef} className={s.webgl} />}
    >

      <div className={s.content}>
        <Title
          level='h1'
          className={cn(s.title, 'split-text')}
          data-scroll
          data-scroll-speed='2'
        >
          <div className={cn(s.line, 'line')}>Привет, я <span>Максим Засс</span></div>
          <div className={cn(s.line, 'line')}>— <span>UI/UX</span> дизайнер</div>
          <div className={cn(s.line, 'line')}>и <span>frontend</span>-разработчик<br /></div>
        </Title>
      </div>

      <Arrow
        ref={arrowRef}
        className={s.arrow}
        scrollTo='#about'
        data-scroll
        data-scroll-speed='2'
      />

    </Section>
  )
}