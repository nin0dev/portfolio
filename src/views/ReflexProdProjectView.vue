<script setup>
import { useHead } from '@unhead/vue'
import { onMounted } from 'vue';
import ProjectCase from '@/components/ProjectCase.vue';
import Footer from '@/components/Footer.vue';

useHead({
    title: 'ReflexProd CRM - Project',
    meta: [{ name: 'description', content: 'Fictional Product Showcase project case study.' }],
})

onMounted(() => {
    window.scrollTo(0, 0)
})
</script>

<template>
    <ProjectCase title="ReflexProd CRM – Project"
        description="A CRM-focused product build with a clean dashboard system and scalable component architecture."
        :images="['/src/assets/images/crm-project_thumb.webp', '/src/assets/images/crm-project_thumb2.png', '/src/assets/images/crm-project_thumb3.png']" />
    <Footer />
</template>