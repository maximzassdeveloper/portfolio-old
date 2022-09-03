import { FC } from 'react'
import { Section } from '@/components/hoc'
import { Title } from '@/components/ui'
import { WorkList } from './WorkList/WorkList'

import s from './works.module.scss'

export const WorksSection: FC = () => {
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