import { FC } from 'react'
import { Main } from '@/components/hoc'
import { WorksSection } from '@/components/sections'
import s from './works.module.scss'

export const Works: FC = () => {
  return (
    <Main title='Проекты'>
      <WorksSection className={s.works} />
    </Main>
  )
}