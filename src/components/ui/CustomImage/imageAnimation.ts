import { gsap } from 'gsap'

export const imageAnimations = (styles: { [key: string]: string }) => {
  const animations = {
    image() {
      gsap.to(`.${styles.image}`, {
        scrollTrigger: {
          trigger: `.${styles.image}`,
          start: 'top 60%'
        },
        duration: .2,
        opacity: 1,
        y: 0,
      })
      gsap.to(`.${styles.image} img`, {
        scrollTrigger: {
          trigger: `.${styles.image}`,
          start: 'top 60%'
        },
        duration: .2,
        scale: 1,
      })
    }
  }

  return animations
}