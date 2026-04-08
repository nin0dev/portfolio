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
        :images="['/images/crm-project_thumb.webp', '/images/crm-project_thumb2.webp', '/images/crm-project_thumb3.webp']" />
    <Footer />
</template>