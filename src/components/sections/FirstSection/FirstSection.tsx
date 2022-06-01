import { FC, useEffect, useRef } from 'react'
import { Section } from '@/components/hoc'
import { Title, Arrow } from '@/components/ui'
import { init } from './three'
import s from './first.module.scss'

export const FirstSection: FC = () => {

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // init webgl sphere
    if (canvasRef.current) init(canvasRef.current)
  }, [])

  return (
    <Section 
      className={s.first} 
      id='first' 
      addonAfterContainer={<canvas ref={canvasRef} className={s.webgl} />}
    >

      <div className={s.content}>
        <Title level='h1' className={s.title + ' split-text'} dataScroll dataScrollSpeed='2'>
          <div className={s.line + ' line'}>Привет, я <span>Максим Засс</span></div>
          <div className={s.line + ' line'}>— <span>UI/UX</span> дизайнер</div>
          <div className={s.line + ' line'}>и <span>frontend</span>-разработчик<br /></div>
        </Title>
      </div>

      <Arrow 
        className={s.arrow} 
        hash='#about'
        dataScroll dataScrollSpeed='2' 
      />

    </Section>
  )
}