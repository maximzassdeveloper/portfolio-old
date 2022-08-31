import { RefObject } from 'react'
import { Expo, gsap } from 'gsap'

export const firstAnimations = (arrowRef: RefObject<HTMLDivElement>) => {
  if (!arrowRef.current) return
  gsap.to(arrowRef.current, {
    duration: .5,
    scale: 1,
    y: 0,
    x: 0,
    opacity: 1,
    ease: Expo.easeInOut
  })
}