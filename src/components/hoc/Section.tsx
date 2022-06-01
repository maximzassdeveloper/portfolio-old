import { FC, PropsWithChildren, ReactNode } from 'react'
import { Container } from './Container'

interface SectionProps {
  id?: string
  className?: string
  containerClassName?: string
  addonAfterContainer?: ReactNode
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({ 
  children, id, className, containerClassName, addonAfterContainer 
}) => {
  return (
    <section className={className} id={id} data-scroll-section>
      <Container className={containerClassName}>
        {children}
      </Container>
      {addonAfterContainer}
    </section>
  )
}