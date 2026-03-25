<script setup>
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLenis } from 'lenis/vue'
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import '@/assets/css/main.css'
import '@/assets/css/fonts.css'

import Navbar from './components/Navbar.vue'
import HeroSection from './sections/HeroSection.vue'
import AboutSection from './sections/AboutSection.vue'
import WorksSection from './sections/WorksSection.vue'
import ContactSection from './sections/ContactSection.vue'
import Footer from './components/Footer.vue'

gsap.registerPlugin(ScrollTrigger)

const { init, destroy } = useScrollAnimations()

useLenis(() => ScrollTrigger.update())

onMounted(() => init())
onUnmounted(() => destroy())
</script>

<template>
  <VueLenis root>
    <div class="vertical-lines">
      <div class="vertical-lines__col"></div>
      <div class="vertical-lines__col"></div>
      <div class="vertical-lines__col"></div>
      <div class="vertical-lines__col"></div>
      <div class="vertical-lines__col"></div>
      <div class="vertical-lines__col"></div>
    </div>
    <Navbar />
    <main>
      <HeroSection id="hero" />
      <div class="image-animation"></div>
      <AboutSection id="about" />
      <WorksSection id="works" />
      <ContactSection id="contact" />
      <Footer />
    </main>
  </VueLenis>
</template>

<style>
.vertical-lines {
  position: fixed;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 0 40px;
  pointer-events: none;
  z-index: 0;
}

.vertical-lines__col {
  border-right: 0.5px solid rgba(255, 255, 255, 0.1);
}

.vertical-lines__col:first-child {
  border-left: 0.5px solid rgba(255, 255, 255, 0.1);
}

.image-animation {
  height: 100vh;
}
</style>
