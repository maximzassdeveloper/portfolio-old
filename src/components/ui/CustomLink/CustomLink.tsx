import { FC, PropsWithChildren, useRef } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import Link, { LinkProps } from 'next/link'
import { useCursorHover } from '@/hooks'
import { imgPath } from '@/utils/helper'
import s from './link.module.scss'

interface CustomLinkProps extends LinkProps {
  href: string
  animateOnHover?: boolean
  showArrow?: boolean
  arrowSize?: number
  blank?: boolean
  className?: string
}

export const CustomLink: FC<PropsWithChildren<CustomLinkProps>> = ({
  children,
  href,
  animateOnHover = true,
  blank,
  className,
  showArrow = false,
  arrowSize = 14,
  onClick,
  ...rest
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
        {showArrow && blank && (
          <div className={s.arrow} style={{ marginLeft: arrowSize / 2 }}>
            <Image
              src={imgPath('/blank-arrow.svg')}
              alt='Arrow'
              width={arrowSize}
              height={arrowSize}
            />
          </div>
        )}
      </a>

    </Link>
  )
}