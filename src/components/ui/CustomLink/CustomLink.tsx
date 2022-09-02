import { FC, PropsWithChildren, useRef } from 'react'
import classNames from 'classnames'
import Link, { LinkProps } from 'next/link'
import { useCursorHover } from '@/hooks'
import s from './link.module.scss'

interface CustomLinkProps extends LinkProps {
  href: string
  animateOnHover?: boolean
  blank?: boolean
  className?: string
}

export const CustomLink: FC<PropsWithChildren<CustomLinkProps>> = ({
  children, href, animateOnHover = true, blank, className, onClick, ...rest
}) => {

  const link = useRef<HTMLAnchorElement>(null)
  animateOnHover && useCursorHover({ el: link.current, cursorClass: 'hoverLink' })

  return (
    <Link
      href={href}
      passHref={blank}
      {...rest}
    >
      <a
        ref={link}
        className={classNames(s.link, className)}
        target={blank ? '_blank' : '_self'}
        rel={blank ? 'noopener' : undefined}
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  )
}