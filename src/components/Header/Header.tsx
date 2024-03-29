import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { Container } from '@/components/hoc'
import { Button, CustomLink, NavList } from '@/components/ui'

import { filePath } from '@/utils/helper'
import { useAppContext } from '@/context/AppContext'
import { useAnimation } from '@/hooks'
import { headerAnimations } from './headerAnimation'

import classNames from 'classnames'
import s from './header.module.scss'

export const Header: FC = () => {

  const header = useRef<HTMLDivElement>(null)
  const oldY = useRef(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { locoScroll } = useAppContext()

  const animations = useMemo(() => headerAnimations(), [])
  useAnimation(() => {
    animations.logo()
    if (window.innerWidth > 768) {
      animations.navLinks()
      animations.button()
    }
    animations.burger()
  })

  const burgerHandler = () => {
    if (isMobileMenuOpen) {
      animations.closeMobileMenu()
      document.documentElement.style.overflowY = 'auto'
    } else {
      animations.openMobileMenu()
      header.current?.classList.remove(s.hidden)
      document.documentElement.style.overflowY = 'hidden'
    }
    setIsMobileMenuOpen(prev => !prev)
  }

  // Show header on scroll up
  const onScroll = (e: any) => {
    if (!header.current) return
    if (e.scroll.y > header.current.offsetHeight && e.scroll.y > oldY.current) {
      header.current.classList.add(s.hidden)
    } else {
      header.current.classList.remove(s.hidden)
    }
    oldY.current = e.scroll.y
  }

  useEffect(() => {
    locoScroll?.on('scroll', onScroll)
    header.current?.classList.remove(s.hidden)

    return () => {
      locoScroll?.off('scroll', onScroll)
    }
  }, [locoScroll])

  return <>
    <header className={s.header} ref={header}>
      <Container className={s.container}>

        <div className={s.logo}>
          <CustomLink className={s.link} href='/'>М. Засс</CustomLink>
        </div>

        <nav className={s.menu}>
          <NavList linkClassName={s.link} />
        </nav>

        <Button className={s.button} size='small'>
          <CustomLink
            href={filePath('resume-maxim-zass.pdf')}
            blank
            animateOnHover={false}
          >
            Резюме
          </CustomLink>
        </Button>

        <span className={s.burger} onClick={burgerHandler} />

      </Container>
    </header>

    <div className={classNames(s.mobile, { [s.active]: isMobileMenuOpen })}>
      <Container className={s.container}>

        <nav className={s.menu}>
          <NavList onLinkClick={burgerHandler} linkClassName={s.link} />
        </nav>

        <Button className={s.button} size='small'>
          <CustomLink
            href={filePath('resume-maxim-zass.pdf')}
            blank
            animateOnHover={false}
          >
            Резюме
          </CustomLink>
        </Button>

      </Container>
    </div>
  </>
}