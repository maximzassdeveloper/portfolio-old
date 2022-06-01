import { FC, useRef } from 'react'
import Image from 'next/image'
import { IWork } from '@/types'
import { CustomLink } from '@/components'
import { Title } from '@/components/ui'
import { useCursorHover } from '@/hooks'
import { IMG_URL } from '@/config'
import s from './work.module.scss'

interface WorkProps {
  work: IWork
}

export const Work: FC<WorkProps> = ({ work }) => {

  const workRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  const { cursorRef } = useCursorHover(workRef, {
    cursorClass: 'hoverWork',
    onMouseEnter,
    onMouseLeave,
    onMouseDown: onMouseLeave
  })

  function onMouseEnter () {
    if (!cursorRef.current || !bgRef.current) return
    cursorRef.current.style.background = work.color
    bgRef.current.style.backgroundImage = `url('${IMG_URL}/${work.preview}')`
    bgRef.current.classList.add(s.workBgActive)
  }

  function onMouseLeave () {
    if (!cursorRef.current || !bgRef.current) return
    cursorRef.current.style.background = '#ffffff'
    bgRef.current.style.backgroundImage = 'none'
    bgRef.current.classList.remove(s.workBgActive)
  }

  return (
    <div className={s.work} data-scroll ref={workRef}>
      <CustomLink route={`/work/${work.slug}`} notHoverCursorAnimation>

        <div className={s.workBg} ref={bgRef} />

        <div className={s.container}>

          <div className={s.image}>
            <div data-scroll data-scroll-speed="0.5" data-scroll-offset="0%, 0%">
              <Image 
                src={`${IMG_URL}/${work.preview}`} 
                data-scroll
                data-scroll-speed="0.5"
                data-scroll-offset="0%, 0%"
                layout='fill'
                alt={work.name}
              />
            </div>
          </div>

          <div className={s.content}>
            <Title className={s.title} level='h3' splitText>{work.name}</Title>
          </div>

        </div>

      </CustomLink>
    </div>
  )
}