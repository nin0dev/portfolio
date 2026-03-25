import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

let lenis

export function useLenis() {
  onMounted(() => {
    lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  onUnmounted(() => {
    lenis?.off('scroll', ScrollTrigger.update)
    lenis?.destroy()
  })
}
