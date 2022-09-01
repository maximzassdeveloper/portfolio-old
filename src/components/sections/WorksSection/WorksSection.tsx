import { FC } from 'react'
import { gsap } from 'gsap'
import { Section } from '@/components/hoc'
import { Title } from '@/components/ui'
import { WorkList } from './WorkList/WorkList'
import { useAnimation } from '@/hooks'

import s from './works.module.scss'
import wls from './WorkList/work-list.module.scss'

export const WorksSection: FC = () => {

  useAnimation(horizontalAnimation)

  function horizontalAnimation() {
    const horizontal = document.querySelector(`.${wls.horizontal}`) as HTMLElement
    const list = document.querySelector(`.${wls.list}`)

    if (!horizontal || !list) return

    const distance = (list.scrollWidth - window.innerWidth)
    horizontal.style.height = (list.scrollWidth - list.scrollHeight) + 'px'

    gsap.to(list, {
      x: -distance,
      ease: 'none',
      scrollTrigger: {
        trigger: horizontal,
        scroller: '[data-scroll-container]',
        start: 'top top',
        end: () => '+=' + distance,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        scrub: true,
      }
    })
  }

  return (
    <Section
      id='works'
      className={s.works}
      addonAfterContainer={<WorkList />}
    >
      <Title splitText dataScroll>Проекты</Title>
    </Section>
  )
}