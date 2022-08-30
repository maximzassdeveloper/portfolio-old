import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'

interface MainProps {
  title?: string
  className?: string
}

export const Main: FC<PropsWithChildren<MainProps>> = ({ children, title, className, }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} - Максим Засс` : 'Максим Засс'}</title>
        <meta
          name='description'
          content='ортофолио UI/UX дизайнера и Frontend-разработчика'
        />
        <meta name="robots" content='index, follow' />
      </Head>

      <Header />

      <main className={className}>
        {children}
      </main>

      <Footer />
    </>
  )
}
