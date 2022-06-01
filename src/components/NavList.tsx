import { FC } from 'react'
import { CustomLink } from '@/components'

interface NavListProps {
  className?: string
  linkClassName?: string
}

export const NavList: FC<NavListProps> = ({ className, linkClassName }) => {
  return (
    <ul className={className}>
      <li><CustomLink className={linkClassName} hash='#about'>Обо мне</CustomLink></li>
      <li><CustomLink className={linkClassName} hash='#works'>Проекты</CustomLink></li>
      <li><CustomLink className={linkClassName} hash='#contact'>Контакты</CustomLink></li>
    </ul>
  )
}