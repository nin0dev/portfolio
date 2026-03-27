<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import crmThumb from '@/assets/images/crm-project_thumb.png'
import productThumb from '@/assets/images/product-project_thumb.png'

gsap.registerPlugin(ScrollTrigger)

const works = [
    {
        id: 1,
        title: 'ReflexProd CRM',
        category: 'Development',
        tech: 'Next.js',
        image: crmThumb,
        link: '/projects/reflexprod-crm',
    },
    {
        id: 2,
        title: 'Fictional Product Showcase',
        category: 'Development',
        tech: 'HTML / CSS / JS',
        image: productThumb,
        link: '/projects/fictional-product-showcase',
    },
]

const cursor = ref(null)
const worksRef = ref(null)
let ctx
let hoverItems = []

function onMouseMove(e) {
    cursor.value.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
}
function onMouseEnter() {
    cursor.value.classList.add('is-active')
}
function onMouseLeave() {
    cursor.value.classList.remove('is-active')
}

onMounted(() => {
    ctx = gsap.context(() => {
        const images = gsap.utils.toArray('.works__image')

        images.forEach((image) => {
            gsap.from(image, {
                scale: 1.22,
                duration: 1.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: image.closest('.works__item'),
                    start: 'top 86%',
                    once: true,
                },
            })
        })
    }, worksRef.value)

    if (window.matchMedia('(max-width: 768px)').matches) return

    hoverItems = Array.from(document.querySelectorAll('.works__item'))
    hoverItems.forEach(item => {
        item.addEventListener('mouseenter', onMouseEnter)
        item.addEventListener('mouseleave', onMouseLeave)
    })
    window.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
    if (ctx) ctx.revert()

    hoverItems.forEach(item => {
        item.removeEventListener('mouseenter', onMouseEnter)
        item.removeEventListener('mouseleave', onMouseLeave)
    })

    window.removeEventListener('mousemove', onMouseMove)
})
</script>
<template>
    <section class="works" ref="worksRef">
        <div class="works__cursor" ref="cursor">
            <span class="works__cursor-corner works__cursor-corner--tl"></span>
            <span class="works__cursor-corner works__cursor-corner--tr"></span>
            <span class="works__cursor-corner works__cursor-corner--bl"></span>
            <span class="works__cursor-corner works__cursor-corner--br"></span>
            <span class="works__cursor-text">View Case</span>
        </div>
        <div class="works__intro">
            <div>
                <p class="works__tag">[MY WORKS]</p>
                <h2 class="works__title">
                    FEATURED WORKS<span class="cursor-underscore">_</span>
                </h2>
            </div>
        </div>
        <div class="works__grid">
            <RouterLink v-for="work in works" :key="work.id" :to="work.link" class="works__item">
                <div class="works__image-wrapper">
                    <img :src="work.image" :alt="work.title" class="works__image" />
                </div>

                <div class="works__meta">
                    <div class="works__meta-left">
                        <span class="works__meta-dot"></span>
                        <span class="works__meta-title">{{ work.title }}</span>
                    </div>
                    <div class="works__meta-right">
                        <span class="works__meta-tag">{{ work.category }}</span>
                        <span class="works__meta-tag works__meta-tag--outline">{{ work.tech }}</span>
                    </div>
                </div>
            </RouterLink>
        </div>
    </section>
</template>
<style scoped>
.works {
    min-height: 100vh;
}

.works__cursor.is-active {
    opacity: 1;
}

.works__cursor-corner {
    position: absolute;
    width: 10px;
    height: 10px;
}

.works__cursor-corner::before,
.works__cursor-corner::after {
    content: '';
    position: absolute;
    background: #FF4D00;
}

.works__cursor-corner::before {
    width: 100%;
    height: 1px;
    top: 0;
    left: 0;
}

.works__cursor-corner::after {
    width: 1px;
    height: 100%;
    top: 0;
    left: 0;
}

.works__cursor-corner--tl {
    top: 0;
    left: 0;
}

.works__cursor-corner--tr {
    top: 0;
    right: 0;
    transform: scaleX(-1);
}

.works__cursor-corner--bl {
    bottom: 0;
    left: 0;
    transform: scaleY(-1);
}

.works__cursor-corner--br {
    bottom: 0;
    right: 0;
    transform: scale(-1);
}

.works__cursor-text {
    font-family: 'NohemiBlack', sans-serif;
    color: #FF4D00;
}

.works__intro {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    width: 100%;
}

.works__intro>div:first-child {
    grid-column: 2 / 4;
}

.works__tag {
    font-family: 'NohemiBlack';
    font-size: 12px;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin: 0;
}

.works__title {
    font-family: 'Druk Text Trial';
    font-size: 64px;
    color: #FF4D00;
    letter-spacing: -0.05em;
    margin-top: 0;
}

.works__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
}

.works__item {
    position: relative;
    display: block;
    overflow: hidden;
    aspect-ratio: 16 / 11;
    text-decoration: none;
    border: 0.5px solid rgba(255, 255, 255, 0.06);
    cursor: none;
}

.works__cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 90px;
    height: 90px;
    pointer-events: none;
    z-index: 1000;
    opacity: 0;
    margin-left: -45px;
    margin-top: -45px;
    transition: opacity 0.2s ease;

    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(8px);
    border: 0.5px solid rgba(255, 255, 255, 0.3);
}

.works__image-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.works__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.works__meta {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    background: rgba(6, 8, 16, 0.82);
    backdrop-filter: blur(6px);
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.works__item:hover .works__meta {
    opacity: 1;
    transform: translateY(0);
}

.works__meta-left {
    display: flex;
    align-items: center;
    gap: 8px;
}

.works__meta-dot {
    display: block;
    width: 8px;
    height: 8px;
    background: #ff4400;
    flex-shrink: 0;
}

.works__meta-title {
    font-family: 'NohemiBlack', sans-serif;
    font-size: 11px;
    font-weight: 500;
    color: #f0ede8;
    text-transform: uppercase;
    letter-spacing: 0.06em;
}

.works__meta-right {
    display: flex;
    align-items: center;
    gap: 6px;
}

.works__meta-tag {
    font-family: 'NohemiBlack', sans-serif;
    font-size: 10px;
    font-weight: 400;
    color: #f0ede8;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 3px 8px;
    background: rgba(255, 255, 255, 0.1);
}

.works__meta-tag--outline {
    background: transparent;
    border: 0.5px solid rgba(255, 255, 255, 0.3);
}

.cursor-underscore {
    display: inline-block;
    animation: slow-cursor-blink 1.5s steps(1, end) infinite;
}

@keyframes slow-cursor-blink {

    0%,
    45% {
        opacity: 1;
    }

    50%,
    100% {
        opacity: 0;
    }
}

@media (min-width: 769px) and (max-width: 1100px) {
    .works {
        min-height: auto;
        margin-top: 100px;
    }

    .works__intro>div:first-child {
        grid-column: 2 / 5;
    }

    .works__title {
        font-size: clamp(48px, 7.4vw, 70px);
        line-height: 0.9;
        margin: 0 0 14px;
    }

    .works__item {
        aspect-ratio: 16 / 12;
    }

    .works__meta {
        opacity: 1;
        transform: translateY(0);
        padding: 9px 10px;
        align-items: flex-start;
        gap: 8px;
    }

    .works__meta-right {
        flex-wrap: wrap;
        justify-content: flex-end;
    }

    .works__meta-title {
        font-size: 10px;
    }

    .works__meta-tag {
        font-size: 9px;
        padding: 2px 5px;
    }
}

@media (max-width: 768px) {
    .works {
        height: auto;
        min-height: auto;
        margin-top: 90px;
    }

    .works__cursor {
        display: none;
    }

    .works__intro {
        display: block;
    }

    .works__intro>div:first-child {
        grid-column: auto;
    }

    .works__tag {
        font-size: 10px;
        margin-bottom: 6px;
    }

    .works__title {
        margin: 0 0 14px;
        font-size: clamp(40px, 12vw, 50px);
        line-height: 0.86;
    }

    .works__grid {
        grid-template-columns: 1fr;
        gap: 12px;
    }

    .works__item {
        aspect-ratio: 16 / 10;
        cursor: pointer;
    }

    .works__meta {
        opacity: 1;
        transform: translateY(0);
        padding: 7px 8px;
        background: rgba(6, 8, 16, 0.72);
    }

    .works__meta-title {
        font-size: 10px;
    }

    .works__meta-tag {
        font-size: 9px;
        padding: 2px 5px;
    }
}

@media (max-width: 360px) {
    .works {
        margin-top: 22px;
    }

    .works__tag {
        font-size: 9px;
    }

    .works__title {
        margin-bottom: 10px;
        font-size: clamp(34px, 11.5vw, 42px);
        line-height: 0.9;
    }

    .works__grid {
        gap: 8px;
    }

    .works__item {
        aspect-ratio: 16 / 10.5;
    }

    .works__meta {
        padding: 6px;
        gap: 6px;
    }

    .works__meta-left,
    .works__meta-right {
        gap: 4px;
    }

    .works__meta-dot {
        width: 6px;
        height: 6px;
    }

    .works__meta-title {
        font-size: 8px;
    }

    .works__meta-tag {
        font-size: 7px;
        padding: 2px 4px;
    }
}
</style>