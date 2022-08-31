import { gsap, Expo } from 'gsap'
import styles from './header.module.scss'

export const headerAnimations = () => {
  const animations = {
    logo() {
      gsap.to(`.${styles.logo}`, {
        duration: .3,
        y: 0,
        opacity: 1,
        ease: Expo.easeIn
      })
    },
    navLinks() {
      gsap.to(`.${styles.menu} li a`, {
        duration: .2,
        y: 0,
        delay: .1,
        ease: Expo.easeIn,
        stagger: .1
      })
    },
    button() {
      gsap.to(`.${styles.button}`, {
        duration: .3,
        y: 0,
        opacity: 1,
        delay: .4,
        ease: Expo.easeIn
      })
    },
    burger() {
      const $burger = document.querySelector(`.${styles.burger}`)
      gsap.to($burger, {
        duration: .3,
        delay: .2,
        onStart: () => $burger?.classList.add(styles.animated)
      })
    },

    // Mobile menu animations
    openMobileMenu() {
      gsap.to(`.${styles.mobile}`, {
        duration: .2,
        x: 0,
        ease: Expo.easeIn
      })
      gsap.to(`.${styles.mobile} li a`, {
        duration: .2,
        y: 0,
        delay: .2,
        ease: Expo.easeIn,
        stagger: .1
      })
      gsap.to(`.${styles.mobile} .${styles.button}`, {
        duration: .3,
        y: 0,
        opacity: 1,
        delay: .6,
        ease: Expo.easeIn
      })
      const $burger = document.querySelector(`.${styles.burger}`)
      gsap.to($burger, {
        onStart: () => $burger?.classList.add(styles.close)
      })
    },
    closeMobileMenu() {
      gsap.to(`.${styles.mobile}`, {
        duration: .2,
        delay: .4,
        x: '100%',
        ease: Expo.easeIn
      })
      gsap.to(`.${styles.mobile} li a`, {
        duration: .2,
        y: '100%',
        ease: Expo.easeIn,
        stagger: .1
      })
      gsap.to(`.${styles.mobile} .${styles.button}`, {
        duration: .3,
        y: 10,
        opacity: 0,
        ease: Expo.easeIn
      })
      const $burger = document.querySelector(`.${styles.burger}`)
      gsap.to($burger, {
        onStart: () => $burger?.classList.remove(styles.close)
      })
    }
  }

  return animations
}