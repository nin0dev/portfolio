<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

const heroRef = ref(null)
let ctx

onMounted(async () => {
    await document.fonts.ready
    await nextTick()

    ctx = gsap.context(() => {
        const split = new SplitText('.hero__title-top, .hero__title-bottom', {
            type: 'lines',
            mask: 'lines',
        })

        gsap.from(split.lines, {
            yPercent: 100,
            duration: 1,
            ease: 'power4.out',
            stagger: 0.1,
            delay: 0.2,
        })
    }, heroRef.value)

    ctx = gsap.context(() => {
        const split = new SplitText('.hero__info--desc, .hero__info--skills, .hero__info--location', {
            type: 'lines',
            mask: 'lines',
        })

        gsap.from(split.lines, {
            xPercent: -60,
            duration: .9,
            ease: 'power4.out',
            stagger: 0.1,
            delay: 0.2,
        })
    })

})

onUnmounted(() => {
    if (ctx) ctx.revert()
})
</script>

<template>
    <header class="hero">
        <div class="hero__grid">
            <div class="hero__image-wrapper" ref="imageWrapperRef">
                <div class="hero__image"></div>
            </div>

            <h2 class="hero__title-top">Front-End</h2>

            <h2 class="hero__title-bottom"><b>Web </b>Developer</h2>

            <span class="hero__info hero__info--desc">
                Freelance interactive developer.<br>
                I build handcrafted websites<br>
                with motion, subtle details<br>
                and fun interactions
            </span>
            <span class="hero__info hero__info--skills">
                Front-End Development<br>
                Crafted & Animated Websites<br>
                WordPress<br>
                Shopify
            </span>
            <span class="hero__info hero__info--location">Based in Montreal</span>
        </div>
    </header>
</template>

<style scoped>
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 0;
}

.hero__grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto auto auto;
    width: 100%;
    align-items: start;
    position: relative;
    z-index: 1;
    column-gap: 0;
}

h2 {
    font-family: 'Druk Text Trial', sans-serif;
    color: #f4f4f4;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 10vw;
    margin: 0;
    line-height: .87;
    letter-spacing: -0.05em;
    min-width: 0;
    white-space: nowrap;
}

h2 b {
    color: #FF4D00;
}

.hero__image-wrapper {
    grid-column: 2 / 4;
    grid-row: 1;
    display: flex;
    align-items: flex-end;
    min-width: 0;
}

.hero__image {
    width: 100%;
    font-size: 10vw;
    height: 0.75em;
    background-image: url('/src/assets/images/background.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}

.hero__title-top {
    grid-column: 4 / 7;
    grid-row: 1;
}

.hero__title-bottom {
    grid-column: 2 / 7;
    grid-row: 2;
}

.hero__info {
    font-family: 'BricolageGrotesque', sans-serif;
    font-size: 11px;
    font-weight: 400;
    color: #888;
    text-transform: uppercase;
    line-height: 1.6;
    align-self: start;
    margin-top: 3vw;
    padding-right: 20px;
    min-width: 0
}

.hero__info--desc {
    grid-column: 2 / 4;
    grid-row: 3;
}

.hero__info--skills {
    grid-column: 4 / 6;
    grid-row: 3;
}

.hero__info--location {
    grid-column: 6 / 7;
    grid-row: 3;
}
</style>