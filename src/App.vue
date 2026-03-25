<script setup>
import { useHead } from '@unhead/vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '@/assets/css/main.css'
import '@/assets/css/fonts.css'

import Navbar from './components/Navbar.vue'
import HeroSection from './sections/HeroSection.vue'
import AboutSection from './sections/AboutSection.vue'
import WorksSection from './sections/WorksSection.vue'
import Footer from './components/Footer.vue'
import LenisScrollTrigger from './components/LenisScrollTrigger.vue'

import { useLenis } from '@/composables/useLenis'
useLenis()

gsap.registerPlugin(ScrollTrigger)

useHead({
  title: 'Nino Berber — Portfolio',
  meta: [
    { name: 'description', content: 'Passionate Front-end Web Developer' },
    { property: 'og:title', content: 'Nino Berber — Portfolio' },
  ],
})
</script>

<template>
  <div class="vertical-lines">
    <div class="vertical-lines__col"></div>
    <div class="vertical-lines__col"></div>
    <div class="vertical-lines__col"></div>
    <div class="vertical-lines__col"></div>
    <div class="vertical-lines__col"></div>
    <div class="vertical-lines__col"></div>
  </div>
  <LenisScrollTrigger>
    <Navbar />
    <main>
      <HeroSection id="hero" />
      <AboutSection id="about" />
      <WorksSection id="works" />
      <Footer />
    </main>
  </LenisScrollTrigger>
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

@media (max-width: 768px) {
  .vertical-lines {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 10px;
  }
}
</style>