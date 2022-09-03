import { FC } from 'react'
import { Main } from '@/components/hoc'
import { ContactSection } from '@/components/sections'

export const Contact: FC = () => {
  return (
    <Main title='Контакты'>
      <ContactSection showArrowTop={false} />
    </Main>
  )
}