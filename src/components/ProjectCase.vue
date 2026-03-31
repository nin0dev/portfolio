<template>
    <LenisScrollTrigger>
        <main class="project-page">
            <RouterLink to="/" class="project-page__back">← Back to home</RouterLink>
            <section class="project-page__hero">
                <p class="project-page__tag">[ Project ]</p>
                <h1>{{ props.title }}</h1>
                <p>
                    {{ props.description }}
                </p>
                <div class="project-page__tools">
                    <div v-for="(tool, index) in props.tools" :key="index" class="project-page__tool">{{ tool }}</div>
                </div>
                <button class="project-demo-button" v-if="demoLink && demoLink.trim() !== ''">
                    <a :href="demoLink" target="_blank">
                        Check out demo
                    </a>
                </button>
                <div class="carousel">
                    <div class="swiper-container">
                        <div class="swiper" ref="swiperRef">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(image, index) in props.images" :key="index">
                                    <img :src="image" :alt="`Image ${index + 1} for ${props.title} project`"
                                        class="project-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="stack-container">
                        <img v-for="(image, index) in props.images" :key="index" :src="image"
                            :alt="`Image ${index + 1} for ${props.title} project`" class="project-image" />
                    </div>
                </div>
            </section>
        </main>
    </LenisScrollTrigger>
</template>
<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import LenisScrollTrigger from './LenisScrollTrigger.vue';
import { useHead } from '@unhead/vue';
import Swiper from 'swiper';
import 'swiper/css';

const props = defineProps({
    title: String,
    images: Array,
    description: String,
    demoLink: String,
    tools: Array,
});

useHead({
    title: [props.title],
    meta: [{ name: 'description', content: props.description }],
});

const swiperRef = ref(null);
let swiperInstance = null;

const initializeSwiper = () => {
    if (window.innerWidth > 768 && props.images.length > 0) {
        swiperInstance = new Swiper(swiperRef.value, {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: false,
            freeMode: false,
            mousewheel: true,
            pagination: false,
            navigation: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: false,
            grabCursor: true,
        });
    }
};

const destroySwiper = () => {
    if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
    }
};

onMounted(() => {
    initializeSwiper();
    window.addEventListener('resize', initializeSwiper);
});

onBeforeUnmount(() => {
    destroySwiper();
    window.removeEventListener('resize', initializeSwiper);
});
</script>
<style scoped>
.project-page {
    min-height: 100vh;
    padding: 32px 40px;
    color: #f4f4f4;
    font-family: 'NohemiBlack', sans-serif;
}

.project-page__back {
    display: inline-block;
    margin-bottom: 24px;
    color: #f4f4f4;
    text-decoration: none;
    font-size: 14px;
}


.project-page__tag {
    color: #888;
    font-size: 12px;
    text-transform: uppercase;
}

.project-page__tools {
    display: flex;
    align-items: center;
    gap: 3px
}

.project-page__tool {
    font-size: 13px;
    background-color: transparent;
    border: .7px solid rgba(255, 255, 255, 0.871);
    padding: 3px 8px 1px 8px;
}

.project-page__hero img {
    margin-top: 18px;
    width: 100%;
    display: block;
}

.project-demo-button {
    background-color: #ff4d00;
    border: none;
    color: white;
    font-family: 'NohemiBlack';
    padding: 8px;
    margin-top: 20px;
}

.carousel {
    margin-top: 50px;
    width: 100%;
    overflow: hidden;
}

.swiper-container {
    display: block;
}

.swiper {
    width: 100%;
    height: auto;
    padding: 5px 0;
}

.stack-container {
    display: none;
}

.stack-container img {
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: 20px;
}

@media (min-width: 769px) {
    .stack-container {
        display: none !important;
    }

    .swiper-container {
        display: block !important;
    }
}

@media (max-width: 768px) {
    .swiper-container {
        display: none !important;
    }

    .stack-container {
        display: block !important;
    }
}

h1 {
    margin: 8px 0 10px;
    font-family: 'Druk Text Trial', sans-serif;
    color: #ff4d00;
    font-size: clamp(42px, 8vw, 86px);
    line-height: 0.9;
    text-transform: uppercase;
}

p {
    font-size: 14px;
    line-height: 1.4;
}

a {
    color: white;
    text-decoration: none;
}

@media (max-width: 768px) {
    .project-page {
        padding: 16px 10px;
    }

    .project-page__tool {
        font-size: 11px;
        background-color: transparent;
        border: .7px solid rgba(255, 255, 255, 0.871);
        padding: 3px 8px 1px 8px;
    }

    p {
        font-size: 12px;
    }
}
</style>