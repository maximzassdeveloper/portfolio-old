import { FC, MouseEventHandler } from 'react'
import { CustomLink } from '@/components/ui'

interface NavListProps {
  className?: string
  onLinkClick?: MouseEventHandler<HTMLAnchorElement>
  linkClassName?: string
}

export const NavList: FC<NavListProps> = ({ className, onLinkClick, linkClassName }) => {
  return (
    <ul className={className}>
      <li><CustomLink onClick={onLinkClick} className={linkClassName} hash='#about'>Обо мне</CustomLink></li>
      <li><CustomLink onClick={onLinkClick} className={linkClassName} hash='#works'>Проекты</CustomLink></li>
      <li><CustomLink onClick={onLinkClick} className={linkClassName} hash='#contact'>Контакты</CustomLink></li>
    </ul>
  )
}