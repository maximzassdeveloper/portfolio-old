import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'
import { Header, Footer } from '@/components'

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

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}