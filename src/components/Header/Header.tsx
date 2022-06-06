import { FC, useEffect, useRef } from 'react'
import { gsap, Expo } from 'gsap'
import { NavList } from '@/components'
import { Container } from '@/components/hoc'
import { Button, CustomLink } from '@/components/ui'
import { useAppContext } from '@/context/AppContext'
import s from './header.module.scss'
import { useAnimation } from '@/animations'

export const Header: FC = () => {

  const { locoScroll } = useAppContext()
  const header = useRef<HTMLDivElement>(null)
  const oldY = useRef(0)

  // Refs for animations
  const navRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useAnimation(animation)

  function animation() {
    
    const navLinks = navRef.current?.querySelectorAll('li a')
    if (navLinks?.length) {
      gsap.to(navLinks, {
        duration: .2,
        y: 0,
        // delay: 1.3,
        delay: .1,
        ease: Expo.easeIn,
        stagger: .1
      })
    }

    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        duration: .3,
        y: 0,
        opacity: 1,
        // delay: 1.6,
        delay: .4,
        ease: Expo.easeIn
      })
    }

    if (logoRef.current) {
      gsap.to(logoRef.current, {
        duration: .3,
        y: 0,
        opacity: 1,
        // delay: 1.2,
        ease: Expo.easeIn
      })
    }

  }

  // Shown header on scroll up
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

    return () => {
      locoScroll?.off('scroll', onScroll)
    }
  }, [locoScroll])

  return (
    <header className={s.header} ref={header}>
      <Container className={s.container}>

        <div className={s.logo} ref={logoRef}>
          <CustomLink className={s.link} route='/'>М. Засс</CustomLink>
        </div>

        <nav className={s.menu} ref={navRef}>
          <NavList linkClassName={s.link} />
        </nav>

        <Button className={s.button} size='small' ref={buttonRef}>
          <CustomLink hash='#contact' notHoverCursorAnimation>Связаться</CustomLink>
        </Button>
        {/* <span class="header-burger"></span> */}
      </Container>
    </header>
  )
}