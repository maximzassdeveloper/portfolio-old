import { FC, useEffect, RefObject } from 'react'
import { useAppContext } from '@/context/AppContext'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { CustomEase } from 'gsap/dist/CustomEase'
import { useRouter } from 'next/router'
gsap.registerPlugin(ScrollTrigger, CustomEase)


interface LocoScrollProps {
  scrollContainer: RefObject<HTMLDivElement>
}

export const LocoScroll: FC<LocoScrollProps> = ({ scrollContainer }) => {

  const { setLocoScroll } = useAppContext()
  const router = useRouter()

  const locoScrollInit = () => {
    const LocomotiveScroll = require('locomotive-scroll').default
    const locoScroll = new LocomotiveScroll({
      el: scrollContainer.current,
      smooth: true,
      multiplier: .7,
      gestureDirection: 'both',
      getDirection: true,
      tablet: {
        breakpoint: 992
      }
    })

    return locoScroll
  }

  useEffect(() => {
    const locoScroll = locoScrollInit()
    if (!locoScroll) return

    ScrollTrigger.scrollerProxy(scrollContainer.current, {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
      },
      pinType: scrollContainer.current?.style.transform ? 'transform' : 'fixed'
    })

    const onLocoScroll = () => ScrollTrigger.update()
    const locoUpdate = () => locoScroll.update()

    locoScroll.on('scroll', onLocoScroll)
    ScrollTrigger.defaults({ scroller: scrollContainer.current })
    ScrollTrigger.addEventListener('refresh', locoUpdate)
    ScrollTrigger.refresh()

    setLocoScroll(locoScroll)

    return () => {
      locoScroll.off('scroll', onLocoScroll)
      ScrollTrigger.removeEventListener('refresh', locoUpdate)
      locoScroll.destroy()
    }
  }, [router.pathname])

  return <></>
}