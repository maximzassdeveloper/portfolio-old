import { FC, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Work } from '../Work/Work'
import { works } from '@/data'
import s from './work-list.module.scss'

export const WorkList: FC = () => {

  const horizontal = useRef<HTMLDivElement>(null)
  const list = useRef<HTMLDivElement>(null)

  useEffect(() => {
    horizontalAnimation()
  }, [])

  function horizontalAnimation() {
    const horizontal = document.querySelector(`.${s.horizontal}`) as HTMLElement
    const list = document.querySelector(`.${s.list}`)

    if (!horizontal || !list) return

    const distance = (list.scrollWidth - window.innerWidth)

    gsap.to(list, {
      x: -distance,
      y: distance,
      ease: 'none',
      scrollTrigger: {
        trigger: horizontal,
        start: 'top top',
        end: () => '+=' + distance,
        scrub: true,
      }
    })
  }

  return (
    <div
      className={s.horizontal}
      style={{ height: `calc(${works.length * 100}vw - 100vh)` }}
      ref={horizontal}
    >
      <div
        className={s.scrolled}
      // data-scroll
      // data-scroll-sticky={true}
      // data-scroll-target={`.${s.horizontal}`}
      >
        <div className={s.list} ref={list}>
          {works.map(work =>
            <Work key={work.id} work={work} />
          )}
        </div>
      </div>
    </div>
  )
}