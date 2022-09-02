import { FC, useEffect } from 'react'
import { gsap } from 'gsap'
import { Section } from '@/components/hoc'
import { Title } from '@/components/ui'
import { WorkList } from './WorkList/WorkList'
import { useAnimation } from '@/hooks'

import s from './works.module.scss'
import wls from './WorkList/work-list.module.scss'

export const WorksSection: FC = () => {

  // useAnimation(horizontalAnimation)

  useEffect(() => {
    horizontalAnimation()
  }, [])

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
        start: 'top top',
        end: () => '+=' + distance,
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
      <Title splitText data-scroll>Проекты</Title>
    </Section>
  )
}