import { FC } from 'react'
import classNames from 'classnames'
import { Section } from '@/components/hoc'
import { CustomImage, Title } from '@/components/ui'
import { imgPath } from '@/utils/helper'
import s from './about.module.scss'

export const AboutSection: FC = () => {
  return (
    <Section className={s.about} id="about">
      <Title splitText data-scroll>
        Обо мне
      </Title>

      <div className={s.content}>
        <Title
          level="p"
          className={classNames(s.text, s.text1)}
          splitText
          data-scroll
          data-scroll-speed="-0.5"
        >
          Я всегда хотел создавать что-то новое.<br />
          Занятие веб-разработкой многое <br />
          изменило для меня, и с тех пор <br />
          я стараюсь продвигать свою работу <br />
          к новым горизонтам и с каждым проектом<br />
          повышать их качество и свои навыки.<br />

        </Title>

        <Title
          level="p"
          className={classNames(s.text, s.text2)}
          splitText
          data-scroll
          data-scroll-speed="-0.5"
        >
          Занимаюсь разработкой сайтов <br />
          более 3-х лет. По началу я работал <br />
          на фрилансе на WordPress и Tilda, <br />
          сейчас же предпочитаю React <br />
          и всё, что с ним связано.
        </Title>

        <CustomImage
          className={classNames(s.image, s.image1)}
          src={imgPath("me1.jpg")}
          alt="Mаксим Засс фото 1"
          priority
          height={570}
          width={430}
          dataScrollSpeed="2"
        />

        <CustomImage
          className={classNames(s.image, s.image2)}
          src={imgPath("me2.jpg")}
          alt="Mаксим Засс фото 2"
          priority
          height={500}
          width={500}
          dataScrollSpeed="1"
        />

        <Title
          level="p"
          className={classNames(s.text, s.text3)}
          splitText
          data-scroll
          data-scroll-speed="2"
        >
          Для меня важно, чтобы сайт был <br />
          максимально удобным, лёгким <br />
          и эстетичным. Сайт должен приносить <br />
          пользу и помогать решать проблемы <br />
          пользователей.
        </Title>

        <Title
          level="p"
          className={classNames(s.text, s.text4)}
          splitText
          data-scroll
          data-scroll-speed="3"
        >
          Также большое внимание уделяю <br />
          анимациям и wow-эффектам, <br />
          из-за которых ваши потенциальные <br />
          клиенты не захотят покидать страницу.
        </Title>
      </div>
    </Section>
  )
}
