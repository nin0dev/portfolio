import { useLenis as useVueLenis } from 'lenis/vue'
import { watch } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useLenis() {
  const lenis = useVueLenis()

  watch(lenis, (instance) => {
    if (instance) {
      instance.on('scroll', ScrollTrigger.update)
    }
  })
}
