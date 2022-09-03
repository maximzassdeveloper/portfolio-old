import { FC } from 'react'
import { Main } from '@/components/hoc'
import { WorksSection } from '@/components/sections'

export const Works: FC = () => {
  return (
    <Main title='Проекты'>
      <WorksSection />
    </Main>
  )
}