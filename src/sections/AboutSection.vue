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
</style>