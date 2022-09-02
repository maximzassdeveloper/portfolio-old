import { FC, useRef } from 'react'
import Image from 'next/image'
import { IWork } from '@/types'
import { Title, CustomLink } from '@/components/ui'
import { useCursorHover } from '@/hooks'
import { imgPath } from '@/utils/helper'
import { useAppContext } from '@/context/AppContext'
import s from './work.module.scss'

interface WorkProps {
  work: IWork
}

export const Work: FC<WorkProps> = ({ work }) => {

  const workRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const { cursorRef } = useAppContext()

  useCursorHover({
    el: workRef.current,
    cursorClass: 'hoverWork',
    onMouseEnter,
    onMouseLeave
  })

  function onMouseEnter() {
    if (!cursorRef.current || !bgRef.current) return
    cursorRef.current.style.background = work.color
    bgRef.current.style.backgroundImage = `url('${imgPath(work.preview)}')`
    bgRef.current.classList.add(s.workBgActive)
  }

  function onMouseLeave() {
    if (!cursorRef.current || !bgRef.current) return
    cursorRef.current.style.background = '#ffffff'
    bgRef.current.style.backgroundImage = 'none'
    bgRef.current.classList.remove(s.workBgActive)
  }

  return (
    <div className={s.work} data-scroll ref={workRef}>
      <CustomLink href={`/work/${work.slug}`} animateOnHover={false}>

        <div className={s.workBg} ref={bgRef} />

        <div className={s.container}>

          <div className={s.image}>
            <div>
              <Image
                src={imgPath(work.preview)}
                layout='fill'
                alt={work.name}
              />
            </div>
          </div>

          <div className={s.content}>
            <Title
              className={s.title}
              level='h3'
              splitText
            >
              {work.name}
            </Title>
          </div>

        </div>

      </CustomLink>
    </div>
  )
}