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
            opacity: 0,
        })


        const split2 = new SplitText('.hero__info--desc, .hero__info--skills, .hero__info--location', {
            type: 'lines',
            mask: 'lines',
        })

        gsap.from(split2.lines, {
            xPercent: -60,
            duration: .9,
            ease: 'power4.out',
            stagger: 0.1,
            delay: 0.2,
            opacity: 0,
        })

        gsap.from('.hero__image', {
            yPercent: -120,
            duration: .9,
            ease: 'power4.out',
            delay: 0.2,
            opacity: 0,
        })
    }, heroRef.value)
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
                Interactive developer.<br>
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
    grid-template-columns: repeat(6, minmax(0, 1fr));
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
    font-size: clamp(60px, 10vw, 160px);
    margin: 0;
    line-height: .9;
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
    aspect-ratio: 4.12 / 1;
    background-image: url('/src/assets/images/background3.png');
    transform: rotate(180deg);
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

@media (min-width: 769px) and (max-width: 1100px) {
    .hero {
        height: auto;
        align-items: flex-start;
        padding-top: 40px;
    }

    h2 {
        font-size: clamp(72px, 9.2vw, 110px);
        line-height: 0.88;
    }

    .hero__image {
        aspect-ratio: 4.4 / 1;
    }

    .hero__info {
        margin-top: 16px;
        font-size: 10px;
        line-height: 1.4;
        padding-right: 12px;
    }

    .hero__info--location {
        justify-self: end;
        text-align: right;
    }
}

@media (max-width: 768px) {
    .hero {
        height: auto;
        align-items: flex-start;
        padding-top: 64px;
    }

    .hero__grid {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 6px;
    }

    h2 {
        font-size: clamp(56px, 19.2vw, 68px);
        line-height: 0.88;
    }

    .hero__image-wrapper {
        display: flex;
        width: 100%;
        margin: 10px 0 8px;
        order: 3;
    }

    .hero__image {
        width: 100%;
        height: 118px;
        font-size: initial;
    }

    .hero__title-top {
        order: 1;
    }

    .hero__title-bottom {
        order: 2;
    }

    .hero__info {
        display: block;
        margin-top: 0;
        padding-right: 0;
        font-size: 9px;
        letter-spacing: 0.01em;
        line-height: 1.45;
    }

    .hero__info--desc {
        order: 4;
    }

    .hero__info--skills {
        order: 5;
        margin-top: 10px;
    }

    .hero__info--location {
        order: 6;
        margin-top: 10px;
        align-self: flex-end;
    }
}
</style>