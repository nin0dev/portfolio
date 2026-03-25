<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const works = [
    {
        id: 1,
        title: 'ReflexProd CRM',
        category: 'Development',
        tech: 'Next.js',
        image: '/src/assets/images/crm-project_thumb.png',
        link: '#',
    },
    {
        id: 2,
        title: 'Fictional Product Showcase',
        category: 'Development',
        tech: 'HTML / CSS / JS',
        image: '/src/assets/images/product-project_thumb.png',
        link: '#',
    },
]

const cursor = ref(null)

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
    if (window.matchMedia('(max-width: 768px)').matches) return

    const items = document.querySelectorAll('.works__item')
    items.forEach(item => {
        item.addEventListener('mouseenter', onMouseEnter)
        item.addEventListener('mouseleave', onMouseLeave)
    })
    window.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove)
})
</script>
<template>
    <section class="works">
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
                    FEATURED WORKS_
                </h2>
            </div>
        </div>
        <div class="works__grid">
            <a v-for="work in works" :key="work.id" :href="work.link" class="works__item">
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
            </a>
        </div>
    </section>
</template>
<style scoped>
.works {
    height: 100vh;
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
}

.works__title {
    font-family: 'Druk Text Trial';
    font-size: 64px;
    color: #FF4D00;
    line-height: 90%;
    letter-spacing: -0.05em;
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

.works__list {
    margin: 14px 0 0;
    padding: 0;
    list-style: none;
}

.works__list-item {
    display: grid;
    grid-template-columns: 58px 78px 1fr auto;
    gap: 10px;
    padding: 7px 0;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.08);
    color: #d8dae4;
    font-family: 'NohemiBlack', sans-serif;
    font-size: 12px;
}

.works__list-item a {
    color: #c8cad4;
    text-decoration: none;
}

@media (max-width: 768px) {
    .works {
        height: auto;
        min-height: auto;
        margin-top: 34px;
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

    .works__list {
        margin-top: 10px;
    }

    .works__list-item {
        grid-template-columns: 34px 60px 1fr auto;
        gap: 6px;
        font-size: 9px;
        line-height: 1.2;
    }
}
</style>