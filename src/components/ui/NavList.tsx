import { FC, MouseEventHandler } from 'react'
import { CustomLink } from '@/components/ui'

interface NavListProps {
  className?: string
  onLinkClick?: MouseEventHandler
  linkClassName?: string
}

const menuArray = [
  { name: 'Обо мне', hash: '#about' },
  { name: 'Проекты', hash: '#works' },
  { name: 'Контакты', hash: '#contact' }
]

export const NavList: FC<NavListProps> = ({ className, onLinkClick, linkClassName }) => {
  return (
    <ul className={className}>
      {menuArray.map(item => 
        <li key={item.name+item.hash}>
          <CustomLink
            onClick={onLinkClick}
            className={linkClassName}
            hash={item.hash}
          >
            {item.name}
          </CustomLink>
        </li>
      )}
    </ul>
  )
}