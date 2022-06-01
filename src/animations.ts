import { useEffect } from 'react'
import { useAppContext } from './context/AppContext'


export const useAnimation = (animation: () => void) => {

  const { locoScroll } = useAppContext()

  useEffect(() => {
    if (!!locoScroll) {
      animation()
    }
  }, [locoScroll])

}