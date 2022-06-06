import { FC } from 'react'
import classNames from 'classnames'
import { Section } from '@/components/hoc'
import { CustomImage, Title } from '@/components/ui'
import { imgPath } from '@/utils/helper'
import s from './about.module.scss'

export const AboutSection: FC = () => {
  return (
    <Section className={s.about} id='about'>
      <Title splitText dataScroll>Обо мне</Title>

      <div className={s.content}>

        <Title level='p' notTitle className={classNames(s.text, s.text1)} splitText dataScroll dataScrollSpeed='-1'>
          Занимаюсь веб-разработкой <br />
          более 3-х лет. Работал с <br />
          WordPress, React, Node js, Tilda.
        </Title>

        <CustomImage 
          className={classNames(s.image, s.image1)}
          src={imgPath('me1.jpg')}
          alt='Mаксим Засс фото 1' 
          height={570}
          width={430}
          dataScrollSpeed='2'
        />

        <CustomImage 
          className={classNames(s.image, s.image2)}
          src={imgPath('me2.jpg')}
          alt='Mаксим Засс фото 2' 
          height={500}
          width={500}
          dataScrollSpeed='1'
        />

        <Title level='p' notTitle className={classNames(s.text, s.text2)} splitText dataScroll dataScrollSpeed='2'>
          Для меня важно, чтобы сайт был <br />
          максимально удобным, лёгким и  <br />
          эстетичным. Сайт должен <br />
          приносить пользу и помогать <br />
          решать проблемы клиентов.
        </Title>

        <Title level='p' notTitle className={classNames(s.text, s.text3)} splitText dataScroll dataScrollSpeed='3'>
          Также я большое внимание <br />
          уделяю анимациям и <br />
          wow-эффектам, из-за которых <br />
          ваши потенциальные клиенты <br />
          не захотят покидать страницу.
        </Title>

      </div>
    </Section>
  )
}