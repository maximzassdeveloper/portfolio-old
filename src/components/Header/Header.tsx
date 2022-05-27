import Link from 'next/link'
import { FC } from 'react'
import s from './header.module.scss'

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.logo}>
          <Link href='/'>М. Засс</Link>
        </div>
        <nav className={s.menu}>
          <ul>
            <li><span className="link" data-hash="/#about">Обо мне</span></li>
            <li><span className="link" data-hash="/#works">Проекты</span></li>
            <li><span className="link" data-hash="/#contact">Контакты</span></li>
          </ul>
        </nav>
        {/* <a class="button header-button small" href="/" data-hash="#contact">Связаться</a> */}
        {/* <span class="header-burger"></span> */}
      </div>
    </header>
  )
}