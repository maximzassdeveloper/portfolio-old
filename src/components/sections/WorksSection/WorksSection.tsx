import { FC } from 'react'
import { Work } from '@/components/Work/Work'
import { Section } from '@/components/hoc'
import { Title } from '@/components/ui'
import { works } from '@/data'
import s from './works.module.scss'

export const WorkList: FC = () => {
  return <>
    {works.map(work =>
      <Work key={work.id} work={work} />
    )}
  </>
}

export const WorksSection: FC = () => {
  return (
    <Section className={s.works} id='works' addonAfterContainer={<WorkList />}>
      <Title splitText dataScroll>Проекты</Title>
    </Section>
  )
}