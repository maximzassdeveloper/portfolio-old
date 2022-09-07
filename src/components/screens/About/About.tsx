import { FC } from 'react'
import { Main } from '@/components/hoc'
import { AboutSection } from '@/components/sections'
import s from './about.module.scss'

export const About: FC = () => {
  return (
    <Main title='Обо мне'>
      <AboutSection className={s.about} />
    </Main>
  )
}