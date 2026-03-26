<script setup>
import { useHead } from '@unhead/vue'
import Footer from '@/components/Footer.vue';
import { onMounted } from 'vue';

useHead({
    title: 'Fictional Product Showcase - Project',
    meta: [{ name: 'description', content: 'Fictional Product Showcase project case study.' }],
})

onMounted(() => {
    window.scrollTo(0, 0)
})
</script>

<template>
    <main class="project-page">
        <RouterLink to="/" class="project-page__back"><- Back to home</RouterLink>
                <section class="project-page__hero">
                    <p class="project-page__tag">[ Project ]</p>
                    <h1>Fictional Product Showcase</h1>
                    <p>
                        A visual showcase page focused on storytelling, product framing, and smooth interactions.
                    </p>
                    <img src="/src/assets/images/product-project_thumb.png" alt="Fictional Product Showcase preview" />
                </section>
                <Footer />
    </main>
</template>

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

.project-page__hero {
    max-width: 920px;
}

.project-page__tag {
    color: #888;
    font-size: 12px;
    text-transform: uppercase;
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

img {
    margin-top: 18px;
    width: 100%;
    display: block;
    border: 0.5px solid rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
    .project-page {
        padding: 16px 10px;
    }

    p {
        font-size: 12px;
    }
}
</style>
