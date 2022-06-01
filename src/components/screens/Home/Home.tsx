import { FC } from 'react'
import { Main } from '@/components/hoc'
import { AboutSection, ContactSection, FirstSection, WorksSection } from '@/components/sections'

export const Home: FC = () => {

  return (
    <Main>
      <FirstSection />
      <AboutSection />
      <WorksSection />
      <ContactSection />
    </Main>
  )
}