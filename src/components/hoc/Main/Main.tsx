import { FC, PropsWithChildren, useEffect, useRef } from 'react'
import Head from 'next/head'
import classNames from 'classnames'
import { Header } from '@/components'
import s from './main.module.scss'

interface MainProps {
  title?: string
  className?: string
}

export const Main: FC<PropsWithChildren<MainProps>> = ({ children, title, className }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} - Максим Засс` : 'Максим Засс'}</title>
        <meta name='description' content={'Портофолио UI/UX дизайнера и Frontend-разработчика'} />
        <meta name='robots' content={'index, follow'} />
      </Head>

      <Header />

      <main className={classNames(s.main, className)}>
        {children}
      </main>
    </>
  )
}