import { gsap } from 'gsap'
import { RefObject } from 'react'

export const imageAnimations = (ref: RefObject<HTMLDivElement>) => {
  // gsap.to(ref.current, {
  //   scrollTrigger: {
  //     trigger: ref.current,
  //     start: 'top 60%'
  //   },
  //   duration: .2,
  //   opacity: 1,
  //   y: 0,
  // })
  // const img = ref.current?.querySelector('img')
  // if (img) {
  //   gsap.to(img, {
  //     scrollTrigger: {
  //       trigger: ref.current,
  //       start: 'top 60%'
  //     },
  //     duration: .2,
  //     scale: 1
  //   })
  // }

  if (!ref.current) return

  const img = ref.current.querySelector('img')
  if (!img) return

  gsap.to(ref.current, {
    scrollTrigger: {
      trigger: ref.current,
      start: 'top 60%'
    },
    duration: .2,
    opacity: 1,
    y: 0,
  })

  gsap.to(img, {
    scrollTrigger: {
      trigger: ref.current,
      start: 'top 60%'
    },
    duration: .2,
    scale: 1
  })

  // gsap.to(lines, {
  //   scrollTrigger: {
  //     trigger: ref.current,
  //     start: 'top 60%'
  //   },
  //   duration: .5,
  //   rotateX: 0,
  //   y: 0,
  //   z: 0,
  //   opacity: 1,
  //   stagger: .08,
  //   ease: CustomEase.create('custom', 'M0,0 C0,0 0.025,0.603 0.45,0.84 0.694,0.976 1,1 1,1'),
  //   onComplete: () => ref.current?.classList.add(s.detect)
  // })
}