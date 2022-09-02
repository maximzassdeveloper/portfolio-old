import { createContext, FC, PropsWithChildren, useContext, useRef, RefObject, useState } from 'react'

interface IAppContext {
  locoScroll: any
  setLocoScroll: (locoScroll: any) => void
  cursorRef: RefObject<HTMLDivElement>
}

export const AppContext = createContext({} as IAppContext)
export const useAppContext = () => useContext(AppContext)


export const AppContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {

  const [locoScroll, setLocoScroll] = useState<any>(null)
  const cursorRef = useRef<HTMLDivElement>(null)


  const defaultContext: IAppContext = {
    locoScroll,
    setLocoScroll,
    cursorRef
  }

  return (
    <AppContext.Provider value={defaultContext}>
      {children}
    </AppContext.Provider>
  )
}