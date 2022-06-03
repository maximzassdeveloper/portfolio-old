import { FC, PropsWithChildren, MouseEvent as ReactMouseEvent, useRef } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { useAppContext } from '@/context/AppContext'
import { useCursorHover } from '@/hooks'
import s from './link.module.scss'

interface CustomLinkProps {
  route?: string
  hash?: string
  notHoverCursorAnimation?: boolean
  notSpaLink?: string
  className?: string
}

export const CustomLink: FC<PropsWithChildren<CustomLinkProps>> = ({ 
  children, route = '/', hash, notSpaLink, notHoverCursorAnimation, className 
}) => {

  const { locoScroll, hash: hashRef } = useAppContext()
  const router = useRouter()
  const link = useRef<HTMLAnchorElement>(null)
  !notHoverCursorAnimation && useCursorHover(link, { cursorClass: 'hoverLink' })

  const handleClick = (e: ReactMouseEvent<HTMLAnchorElement>) => {
    if (!!notSpaLink) return
    e.preventDefault()

    // If route (url) change
    if (route && router.pathname !== route) {
      if (hash) hashRef.current = hash
      return router.push(route)
    } 

    if (hash && locoScroll) {
      locoScroll.scrollTo(hash === 'top' ? 0 : hash)
    }
  }

  return (
    <a
      ref={link}
      target={notSpaLink ? '_blank' : undefined}
      rel={notSpaLink ? 'noopener' : undefined}
      href={notSpaLink ? notSpaLink : route}
      className={classNames(s.link, className)} 
      onClick={handleClick}
    >
      {children}
    </a>
  )
}