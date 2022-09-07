import { FC } from 'react'
import classNames from 'classnames'
import { Section } from '@/components/hoc'
import { Title } from '@/components/ui'
import { WorkList } from './WorkList/WorkList'
import s from './works.module.scss'

interface WorkSectionProps {
  className?: string
}

export const WorksSection: FC<WorkSectionProps> = ({ className }) => {
  return (
    <Section
      id='works'
      className={classNames(s.works, className)}
      addonAfterContainer={<WorkList />}
    >
      <Title splitText data-scroll>Проекты</Title>
    </Section>
  )
}