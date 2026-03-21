<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLenis } from './composables/useLenis'
import '@/assets/css/main.css'

import Navbar from './components/Navbar.vue';
import HeroSection from './sections/HeroSection.vue';
import AboutSection from './sections/AboutSection.vue';
import WorksSection from './sections/WorksSection.vue';
import ContactSection from './sections/ContactSection.vue';

gsap.registerPlugin(ScrollTrigger)

const lenis = useLenis()
</script>

<template>
  <div class="grid-lines"></div>
  <VueLenis root />
  <Navbar />
  <main>
    <HeroSection id="hero" />
    <WorksSection id="works" />
    <AboutSection id="about" />
    <ContactSection id="contact" />
  </main>
</template>

<style>
.grid-line {
  position: fixed;
  top: 0;
  min-height: 100vh;
  width: 100vw;
  column-count: 6;
  column-rule: 1px solid #f5f4f4;
  pointer-events: none;
}
</style>
