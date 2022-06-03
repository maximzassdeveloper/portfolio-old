import { FC, useEffect, useRef } from 'react'
import { NavList } from '@/components'
import { Container } from '@/components/hoc'
import { Button, CustomLink } from '@/components/ui'
import { useAppContext } from '@/context/AppContext'
import s from './header.module.scss'

export const Header: FC = () => {

  const { locoScroll } = useAppContext()
  const header = useRef<HTMLDivElement>(null)
  const oldY = useRef(0)

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

        <div className={s.logo}>
          <CustomLink className={s.link} route='/'>М. Засс</CustomLink>
        </div>

        <nav className={s.menu}>
          <NavList linkClassName={s.link} />
        </nav>

        <Button className={s.button} size='small'>
          <CustomLink hash='#contact' notHoverCursorAnimation>Связаться</CustomLink>
        </Button>
        {/* <span class="header-burger"></span> */}
      </Container>
    </header>
  )
}