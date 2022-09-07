import { FC, useEffect, useMemo } from 'react'
import { Section } from '@/components/hoc'
import { Arrow, Title, SocialList } from '@/components/ui'
import s from './contact.module.scss'

interface ContactSectionProps {
  showArrowTop?: boolean
}

export const ContactSection: FC<ContactSectionProps> = ({ showArrowTop = true }) => {

  const linkArrowSize = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth > 600 ? 20 : 14
    }
  }, [])

  return (
    <Section
      id='contact'
      className={s.contact}
      containerClassName={s.container}
    >
      <div className={s.info}>
        <Title className={s.title} splitText data-scroll>
          Контакты
        </Title>

        <SocialList linkClassName={s.link} showLinkArrow linkArrowSize={linkArrowSize} />

        {showArrowTop && <Arrow className={s.arrow} scrollTo={0} data-scroll />}
      </div>
    </Section>
  )
}
