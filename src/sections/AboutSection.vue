<script>
</script>
<template>
    <section class="about">
        <div class="about__grid">
            <div>
                <p class="about__tag">[ABOUT ME]</p>
                <h2 class="about__title">
                    CRAFTING MODERN
                    WEB EXPERIENCES_
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
                <button class="about__button"><span class="about__button--square"></span>Get In Touch</button>
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
    display: flex;
    align-items: center;
    gap: 7px;
    font-family: 'NohemiBlack';
    text-transform: uppercase;
    background-color: white;
    border: none;
    padding: 8px 4px;
    margin-top: 32px;
}

.about__button--square {
    display: block;
    width: 9px;
    height: 9px;
    background-color: #FF4D00;
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
</style>