import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useScrollAnimations() {
  function init() {
    const wrapper = document.querySelector('.hero__image-wrapper')
    const rect = wrapper.getBoundingClientRect()

    const scaleX = window.innerWidth / rect.width
    const scaleY = window.innerHeight / rect.height

    const tx = window.innerWidth / 2 - (rect.left + rect.width / 2)
    const ty = window.innerHeight / 2 - (rect.top + rect.height / 2)

    gsap.to(wrapper, {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: '+=100%',
        scrub: 1,
        pin: true,
      },
      scaleX,
      scaleY,
      x: tx,
      y: ty,
      transformOrigin: 'center center',
      ease: 'none',
    })
  }

  function destroy() {
    ScrollTrigger.getAll().forEach((t) => t.kill())
  }

  return { init, destroy }
}
