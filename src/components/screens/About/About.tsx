import { FC } from 'react'
import { Main } from '@/components/hoc'
import { AboutSection } from '@/components/sections'

export const About: FC = () => {
  return (
    <Main title='Обо мне'>
      <AboutSection />
    </Main>
  )
}