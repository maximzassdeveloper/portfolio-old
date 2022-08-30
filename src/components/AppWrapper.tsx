import { FC, PropsWithChildren, useRef } from 'react'
import { AppContextProvider } from '@/context/AppContext'
import { CustomCursor } from '@/components/CustomCursor/CustomCursor'
import { LocoScroll } from './LocoScroll'

export const AppWrapper: FC<PropsWithChildren<{}>> = ({ children }) => {

  const scrollContainer = useRef<HTMLDivElement>(null)

  return (
    <AppContextProvider>
      <div className='main' ref={scrollContainer} data-scroll-container>
        <CustomCursor />
        <LocoScroll scrollContainer={scrollContainer} />
        {children}
      </div>
    </AppContextProvider>
  )
}