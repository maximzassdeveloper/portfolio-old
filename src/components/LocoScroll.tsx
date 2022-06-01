import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useAppContext } from '@/context/AppContext'
import { useRouter } from 'next/router'

const addLocoScroll = () => {
  
  const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLDivElement | null
  if (!LocomotiveScroll) return { 
    locoScroll: null,
    scrollContainer 
  }

  const locoScroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    multiplier: .7,
    tablet: {
      breakpoint: 992
    }
  })

  ScrollTrigger.scrollerProxy(scrollContainer, {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight}
    },
    pinType: scrollContainer?.style.transform ? 'transform' : 'fixed'
  })

  return {
    locoScroll,
    scrollContainer
  }
}

const LocoScroll = () => {

  const { setLocoScroll } = useAppContext()
  const router = useRouter()

  useEffect(() => {
    const { locoScroll, scrollContainer } = addLocoScroll()

    const onLocoScroll = () => ScrollTrigger.update()
    const locoUpdate = () => locoScroll && locoScroll.update()
    
    locoScroll?.on('scroll', onLocoScroll)

    ScrollTrigger.defaults({ scroller: scrollContainer })
    ScrollTrigger.addEventListener('refresh', locoUpdate)
    ScrollTrigger.refresh()

    if (locoScroll) setLocoScroll(locoScroll)

    return () => {
      locoScroll?.off('scroll', onLocoScroll)
      ScrollTrigger.removeEventListener('refresh', locoUpdate)
      locoScroll?.destroy()
      setLocoScroll(null)
    }
  }, [router.pathname])

  return null
}

export default LocoScroll