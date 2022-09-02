import { FC } from 'react'
import { Section } from '@/components/hoc'
import { Arrow, Title, SocialList } from '@/components/ui'
import s from './contact.module.scss'

export const ContactSection: FC = () => {
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

        <SocialList linkClassName={s.link} />

        <Arrow className={s.arrow} scrollTo={0} data-scroll />
      </div>
    </Section>
  )
}
