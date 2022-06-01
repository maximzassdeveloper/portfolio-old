import { FC, PropsWithChildren } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { CustomEase } from 'gsap/dist/CustomEase'
gsap.registerPlugin(ScrollTrigger, CustomEase)

import { AppContextProvider } from '@/context/AppContext'
import { CustomCursor } from '@/components'

import dynamic from 'next/dynamic'
const LocoScroll = dynamic(
  () => import('@/components/LocoScroll'),
  { ssr: false }
)

export const AppWrapper: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <AppContextProvider>
      <div className='main' data-scroll-container>
        <CustomCursor />
        <LocoScroll />
        {children}
      </div>
    </AppContextProvider>
  )
}