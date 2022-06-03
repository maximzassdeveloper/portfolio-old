import { FC } from 'react'
import { NavList, SocialList } from '@/components'
import { Container } from '@/components/hoc'
import { Button, CustomLink } from '@/components/ui'
import s from './footer.module.scss'

export const Footer: FC = () => {
  return (
    <footer className={s.footer} data-scroll-section>
      <Container className={s.container}>

        <div className={s.col}>
          <p className={s.copyright}>2022© Максим Засс</p>

          <NavList className={s.menu} linkClassName={s.link} />
        </div>

        <div className={s.col}>
          <div className={s.button}>
            <Button size='small'>
              <CustomLink hash='#contact'>Связаться</CustomLink>
            </Button>
          </div>
          
          <SocialList className={s.socials} />
        </div>

      </Container>
    </footer>
  )
}