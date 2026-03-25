<script>
</script>
<template>
    <section class="about">
        <div class="about__grid">
            <div>
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
                    strong focus on interaction, motion, and detail.
                    I build modern websites and interfaces that feel intuitive, refined, and memorable.
                </p>
                <p>[2.0]</p>
                <p>
                    With years of experience across design and development, I specialize in translating visual ideas
                    into
                    responsive, production-ready experiences for brands, products, and startups.
                    My work combines clean execution, thoughtful UX, and modern front-end technologies.
                </p>
                <p>[3.0]</p>
                <p>
                    I’m passionate about building websites that not only look sharp, but also perform well, communicate
                    clearly, and leave a lasting impression.
                    My work combines clean execution, thoughtful UX, and modern front-end technologies.
                </p>
                <button class="about__button"><span class="about__button--square"></span><span
                        class="about__button-label">Get In Touch</span></button>
            </div>
        </div>
    </section>
</template>
<style scoped>
.about {
    height: 90vh;
}

.about__grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    width: 100%;
}

.about__tag {
    font-family: 'NohemiBlack';
    font-size: 12px;
    color: #888;
}

.about__grid h2 {
    font-family: 'Druk Text Trial';
    font-size: 64px;
    color: #FF4D00;
    line-height: 90%;
    letter-spacing: -0.05em;
}

.about__grid>div:first-child {
    grid-column: 2 / 4;
}

.about__tools {
    font-family: 'NohemiBlack';
    font-size: 12px;
    text-transform: uppercase;
    color: #888;
    line-height: 14%;
    display: flex;
    gap: 165px;
}

.about__text {
    grid-column: 5 / 7;
    font-family: 'NohemiBlack';
    font-size: 14px;
    color: #F5F5F4;
}

.about__button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 7px;
    font-family: 'NohemiBlack';
    text-transform: uppercase;
    background-color: white;
    border: none;
    padding: 8px 4px 8px 22px;
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

.cursor-underscore {
    display: inline-block;
    animation: slow-cursor-blink 1.8s steps(1, end) infinite;
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

@media (max-width: 768px) {
    .about {
        height: auto;
        min-height: auto;
        margin-top: 34px;
    }

    .about__grid {
        grid-template-columns: 1fr;
        gap: 14px;
    }

    .about__grid>div:first-child,
    .about__text {
        grid-column: 1;
    }

    .about__tag {
        font-size: 10px;
        margin-bottom: 4px;
    }

    .about__grid h2 {
        font-size: clamp(42px, 12vw, 52px);
        line-height: 0.86;
        margin: 0 0 12px;
    }

    .about__text {
        font-size: 13px;
        line-height: 1.35;
    }

    .about__text p {
        margin: 0 0 8px;
    }

    .about__tools {
        margin-top: 12px;
        font-size: 10px;
        justify-content: space-between;
        gap: 24px;
        line-height: 1.1;
    }

    .about__button {
        font-size: 12px;
        margin-top: 16px;
        padding: 7px 10px;
    }
}

@media (max-width: 360px) {
    .about {
        margin-top: 22px;
    }

    .about__grid {
        gap: 10px;
    }

    .about__tag {
        font-size: 9px;
        margin-bottom: 3px;
    }

    .about__grid h2 {
        font-size: clamp(34px, 11.5vw, 42px);
        line-height: 0.9;
        margin-bottom: 8px;
    }

    .about__text {
        font-size: 11px;
        line-height: 1.3;
    }

    .about__text p {
        margin: 0 0 6px;
    }

    .about__tools {
        margin-top: 10px;
        font-size: 9px;
        gap: 16px;
    }

    .about__button {
        font-size: 10px;
        margin-top: 12px;
        padding: 6px 8px 6px 18px;
    }

    .about__button--square {
        left: 7px;
        width: 7px;
        height: 7px;
    }
}
</style>