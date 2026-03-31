<script setup>
import { useHead } from '@unhead/vue'
import { onMounted } from 'vue';
import ProjectCase from '@/components/ProjectCase.vue';
import Footer from '@/components/Footer.vue';

useHead({
    title: 'Fictional Product Showcase - Project',
    meta: [{ name: 'description', content: 'A visual showcase page focused on storytelling, product framing, and smooth interactions.' }],
})

onMounted(() => {
    window.scrollTo(0, 0)
})
</script>

<template>
    <ProjectCase title="Fictional Product"
        :images="['/images/product-project_thumb.webp', '/images/product-project_thumb2.png']"
        description="A visual showcase page focused on storytelling, product framing, and smooth interactions."
        demoLink="https://nin0dev.github.io/product-page/" :tools="['HTML', 'CSS', 'JS']" />
    <Footer />
</template>
