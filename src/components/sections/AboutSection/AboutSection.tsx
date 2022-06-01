import { FC } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { Section } from '@/components/hoc'
import { Title } from '@/components/ui'
import { IMG_URL } from '@/config'
// import { useAnimation } from '@/animations'
import s from './about.module.scss'
// import { gsap } from 'gsap'
// import { CustomEase } from 'gsap/dist/CustomEase'

export const AboutSection: FC = () => {

  // useAnimation(textsAnimation)

  // function textsAnimation () {
  //   const texts = document.querySelectorAll(`.${s.text}`)
  //   texts.forEach(text => {
  //     gsap.to(text.querySelectorAll('.line'), {
  //       scrollTrigger: {
  //         trigger: text,
  //         start: 'top 60%'
  //       },
  //       duration: .5,
  //       rotateX: 0,
  //       y: 0,
  //       z: 0,
  //       opacity: 1,
  //       stagger: .08,
  //       ease: CustomEase.create('custom', 'M0,0 C0,0 0.025,0.603 0.45,0.84 0.694,0.976 1,1 1,1'),
  //       onComplete: () => text.classList.add(s.detect)
  //     })
  //   })
  // }

  return (
    <Section className={s.about} id='about'>
      <Title splitText dataScroll>Обо мне</Title>

      <div className={s.content}>

        <Title level='p' notTitle className={classNames(s.text, s.text1)} splitText dataScroll dataScrollSpeed='-1'>
          Занимаюсь веб-разработкой <br />
          более 3-х лет. Работал с <br />
          WordPress, React, Node js, Tilda.
        </Title>
        {/* <p className={classNames(s.text, s.text1)} data-scroll data-scroll-speed='-1'>
          Занимаюсь веб-разработкой <br />
          более 3-х лет. Работал с <br />
          WordPress, React, Node js, Tilda.
        </p> */}

        <div className={classNames(s.image, s.image1)} data-scroll data-scroll-speed='2'>
          <Image 
            src={IMG_URL + '/me1.jpg'} 
            alt='Mаксим Засс фото 1' 
            height={570}
            width={430}
          />
        </div>

        <div className={classNames(s.image, s.image2)} data-scroll data-scroll-speed='1'>
          <Image 
            src={IMG_URL + '/me2.jpg'} 
            alt='Mаксим Засс фото 2' 
            height={500}
            width={500}
          />
        </div>

        <Title level='p' notTitle className={classNames(s.text, s.text2)} splitText dataScroll dataScrollSpeed='2'>
          Для меня важно, чтобы сайт был <br />
          максимально удобным, лёгким и  <br />
          эстетичным. Сайт должен <br />
          приносить пользу и помогать <br />
          решать проблемы клиентов.
        </Title>
        {/* <p className={classNames(s.text, s.text2)} data-scroll data-scroll-speed='2'>
          Для меня важно, чтобы сайт был <br />
          максимально удобным, лёгким и  <br />
          эстетичным. Сайт должен <br />
          приносить пользу и помогать <br />
          решать проблемы клиентов.
        </p> */}

        <Title level='p' notTitle className={classNames(s.text, s.text3)} splitText dataScroll dataScrollSpeed='3'>
          Также я большое внимание <br />
          уделяю анимациям и <br />
          wow-эффектам, из-за которых <br />
          ваши потенциальные клиенты <br />
          не захотят покидать страницу.
        </Title>
        {/* <p className={classNames(s.text, s.text3)} data-scroll data-scroll-speed='3'>
          Также я большое внимание <br />
          уделяю анимациям и <br />
          wow-эффектам, из-за которых <br />
          ваши потенциальные клиенты <br />
          не захотят покидать страницу.
        </p> */}

      </div>
    </Section>
  )
}