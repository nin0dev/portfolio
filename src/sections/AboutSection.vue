<script setup>
import { onMounted } from 'vue';

onMounted
</script>
<template>
    <section class="about" ref="aboutRef">
        <div class="about__grid">
            <div class="about__content-left">
                <p class="about__tag">[ABOUT ME]</p>
                <h2 class="about__title">
                    CRAFTING MODERN
                    WEB EXPERIENCES<span class="cursor-underscore">_</span>
                </h2>
                <div class="about__tools">
                    <div>
                        <p>React.js</p>
                        <p>Next.js</p>
                        <p>Vue.js</p>
                        <p>WordPress</p>
                        <p>GSAP</p>
                        <p>TAILWIND</p>
                    </div>
                    <div>
                        <p>HTML / CSS</p>
                        <p>Contentful</p>
                        <p>Git / Github</p>
                        <p>Illustrator / Photoshop</p>
                    </div>
                </div>
            </div>
            <div class="about__text">
                <p>[1.0]</p>
                <p>Web Developer & Creative Technologist crafting polished, high-performance digital experiences with a
                    strong focus on interaction, motion, and detail.</p>
                <p>[2.0]</p>
                <p>With years of experience across design and development, I specialize in translating visual ideas into
                    responsive, production-ready experiences for brands, products, and startups.</p>
                <p>[3.0]</p>
                <p>I’m passionate about building websites that not only look sharp, but also perform well, communicate
                    clearly, and leave a lasting impression.</p>
                <a href="/portfolio/#footer" class="about__button">
                    <span class="about__button--square"></span>
                    <span class="about__button-label">Get In Touch</span>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about {
    min-height: 90vh;
    display: flex;
    align-items: center;
    padding: 15px 0;
    box-sizing: border-box;
}

.about__grid {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    width: 100%;
}

.about__content-left {
    grid-column: 2 / 4;
}

.about__tag {
    font-family: 'NohemiBlack';
    font-size: 12px;
    color: #888;
    margin-bottom: 8px;
}

.about__title {
    font-family: 'Druk Text Trial';
    font-size: clamp(48px, 5.5vw, 64px);
    color: #FF4D00;
    line-height: 90%;
    letter-spacing: -0.05em;
    margin: 0 0 24px;
}

.about__tools {
    font-family: 'NohemiBlack';
    font-size: 12px;
    text-transform: uppercase;
    color: #888;
    line-height: 1.6;
    display: flex;
    gap: 15%;
}

.about__text {
    grid-column: 5 / 7;
    font-family: 'NohemiBlack';
    font-size: 14px;
    color: #F5F5F4;
    line-height: 1.5;
}

.about__text a {
    text-decoration: none;
}

.about__button {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: 'NohemiBlack';
    text-transform: uppercase;
    background-color: white;
    border: none;
    padding: 8px 8px 8px 22px;
    margin-top: 32px;
    color: #0d0d0d;
    cursor: pointer;
    overflow: hidden;
    isolation: isolate;
    transition: color 0.45s ease;
}

.about__button--square {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%) scale(1);
    transform-origin: center;
    z-index: 0;
    width: 9px;
    height: 9px;
    background-color: #FF4D00;
    transition: transform 0.55s cubic-bezier(0.2, 0.9, 0.2, 1);
}

.about__button-label {
    position: relative;
    z-index: 1;
}

.about__button:hover,
.about__button:focus-visible {
    color: #ffffff;
}

.about__button:hover .about__button--square,
.about__button:focus-visible .about__button--square {
    transform: translateY(-50%) scale(42);
}

@media (max-width: 1200px) {
    .about__grid {
        grid-template-columns: 0.5fr 2.5fr 0.2fr 2.5fr 0.3fr;
    }

    .about__content-left {
        grid-column: 2;
    }

    .about__text {
        grid-column: 4;
    }
}

@media (max-width: 768px) {
    .about {
        padding: 60px 20px;
    }

    .about__grid {
        display: block;
    }

    .about__title {
        font-size: 42px;
    }

    .about__text {
        margin-top: 40px;
    }
}
</style>