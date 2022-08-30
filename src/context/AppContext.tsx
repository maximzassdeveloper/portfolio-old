import { createContext, FC, MutableRefObject, PropsWithChildren, useContext, useEffect, useRef, RefObject, useState } from 'react'

interface IAppContext {
  locoScroll: any
  setLocoScroll: (locoScroll: any) => void
  hash: MutableRefObject<string | null>
  cursorRef: RefObject<HTMLDivElement>
}

export const AppContext = createContext({} as IAppContext)
export const useAppContext = () => useContext(AppContext)


export const AppContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {

  const [locoScroll, setLocoScroll] = useState<any>(null)
  const hash = useRef<string | null>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  // const onRouteChanged = () => {
  //   locoScroll.scrollTo(hash.current)    
  //   hash.current = null
  // }

  // useEffect(() => {
  //   // Scroll to hash if change route
  //   if (hash.current && locoScroll) {
  //     onRouteChanged()
  //   }
  // }, [locoScroll])

  const defaultContext: IAppContext = {
    locoScroll,
    setLocoScroll,
    hash,
    cursorRef
  }

  return (
    <AppContext.Provider value={defaultContext}>
      {children}
    </AppContext.Provider>
  )
}