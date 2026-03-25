<script setup>
import { ref } from 'vue'
import displayTime from '@/composables/displayTime'

const { formattedTime } = displayTime()
</script>

<template>
    <nav class="navbar">
        <p>{{ formattedTime }} EST</p>
        <ul class="nav__list">
            <li><a href="/#about">About</a></li>
            <li><a href="/#works">Works</a></li>
            <li><a href="/#contact">Contact</a></li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    font-family: 'Nohemi';
    font-weight: 300;
    font-size: 14px;
    color: white;
}

.nav__list {
    display: flex;
    align-items: center;
    gap: 33px;
    list-style: none;
    text-transform: uppercase;
}

.nav__list a {
    text-decoration: none;
    color: white;
}

.nav__list-item--selected {
    display: flex;
    align-items: center;
}

.nav__square--selected {
    width: 6px;
    height: 6px;
    background-color: #FF4D00;
    margin-right: 6px;
}
</style>