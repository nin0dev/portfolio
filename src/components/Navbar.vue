<script setup>
import { onUnmounted, ref, watch } from 'vue'
import displayTime from '@/composables/displayTime'

const { formattedTime } = displayTime()
const isMenuOpen = ref(false)

const socialLinks = [
    { label: 'Github', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Email', href: 'mailto:ninberber@gmail.com' },
]

const lockBodyScroll = (locked) => {
    document.body.style.overflow = locked ? 'hidden' : ''
}

watch(isMenuOpen, (open) => {
    lockBodyScroll(open)
})

onUnmounted(() => {
    lockBodyScroll(false)
})

const closeMenu = () => {
    isMenuOpen.value = false
}
</script>

<template>
    <nav class="navbar">
        <p>[ NINO BERBER ] • {{ formattedTime }} EST</p>
        <ul class="nav__list">
            <li><a href="/#about">About</a></li>
            <li><a href="/#works">Works</a></li>
            <li><a href="https://cal.com/ninoberber/call" target="_blank">Schedule a call <svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="16px" fill="currentColor">
                        <path d="m242-246-42-42 412-412H234v-60h480v480h-60v-378L242-246Z" />
                    </svg></a></li>
        </ul>
    </nav>

    <div class="mobile-nav">
        <p class="mobile-time">{{ formattedTime }} EST</p>

        <button class="mobile-menu-toggle" type="button" :aria-expanded="isMenuOpen" aria-controls="mobile-menu"
            @click="isMenuOpen = true">
            Menu
        </button>
    </div>

    <transition name="mobile-menu-fade">
        <aside v-if="isMenuOpen" id="mobile-menu" class="mobile-menu" role="dialog" aria-modal="true">
            <header class="mobile-menu__header">
                <p>{{ formattedTime }} EST</p>
                <button type="button" class="mobile-menu__close" @click="closeMenu">Close</button>
            </header>

            <div class="mobile-menu__center-wrap">
                <div class="mobile-menu__corners" aria-hidden="true">
                    <span class="corner corner--tl"></span>
                    <span class="corner corner--tr"></span>
                    <span class="corner corner--bl"></span>
                    <span class="corner corner--br"></span>
                </div>
                <ul class="mobile-menu__list">
                    <li>
                        <a href="/#about" class="active" @click="closeMenu">About</a>
                    </li>
                    <li><a href="/#works" @click="closeMenu">Works</a></li>
                    <li><a href="https://cal.com/ninoberber/call" target="_blank" @click="closeMenu">Schedule a call
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="48px"
                                fill="currentColor">
                                <path d="m242-246-42-42 412-412H234v-60h480v480h-60v-378L242-246Z" />
                            </svg>
                        </a></li>
                </ul>
            </div>

            <ul class="mobile-menu__socials">
                <li v-for="link in socialLinks" :key="link.label">
                    <a :href="link.href" target="_blank" rel="noopener noreferrer">[ {{ link.label }} ]</a>
                </li>
            </ul>
        </aside>
    </transition>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    font-family: 'NohemiBlack';
    font-weight: 300;
    font-size: 14px;
    color: white;
}

.nav__list {
    display: flex;
    align-items: end;
    gap: 33px;
    list-style: none;
    text-transform: uppercase;
}

.nav__list a {
    text-decoration: none;
    color: white;
}

.mobile-menu-toggle,
.mobile-menu,
.mobile-time,
.mobile-nav {
    display: none;
}

@media (max-width: 768px) {
    .navbar {
        display: none;
    }

    .mobile-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 6px 0 10px;
        margin-bottom: 6px;
        position: relative;
        z-index: 40;
    }

    .mobile-menu-toggle {
        display: inline-flex;
        position: static;
        background: transparent;
        border: 0;
        color: #ffffff;
        font-family: 'NohemiBlack';
        font-size: 13px;
        font-weight: 300;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        cursor: pointer;
    }

    .mobile-time {
        display: block;
        position: static;
        margin: 0;
        font-family: 'NohemiBlack';
        font-size: 13px;
        font-weight: 300;
        color: rgba(255, 255, 255, 0.75);
        line-height: 1;
    }

    .mobile-menu {
        display: flex;
        position: fixed;
        inset: 0;
        z-index: 50;
        padding: 12px 10px 14px;
        flex-direction: column;
        justify-content: space-between;
        background: radial-gradient(circle at 20% 20%, #14182e, #06070f 70%);
        color: #ffffff;
        font-family: 'NohemiBlack';
    }

    .mobile-menu__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
        line-height: 1;
        opacity: 0.72;
        font-weight: 300;
        text-transform: uppercase;
    }

    .mobile-menu__close {
        border: 0;
        background: transparent;
        color: inherit;
        text-transform: uppercase;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        cursor: pointer;
    }

    .mobile-menu__center-wrap {
        position: relative;
        display: grid;
        place-items: center;
        min-height: 40vh;
    }

    .mobile-menu__corners {
        position: absolute;
        inset: 14% 7%;
    }

    .corner {
        position: absolute;
        width: 12px;
        height: 12px;
        border: 2px solid rgba(203, 212, 234, 0.6);
    }

    .corner--tl {
        top: 0;
        left: 0;
        border-right: 0;
        border-bottom: 0;
    }

    .corner--tr {
        top: 0;
        right: 0;
        border-left: 0;
        border-bottom: 0;
    }

    .corner--bl {
        bottom: 0;
        left: 0;
        border-right: 0;
        border-top: 0;
    }

    .corner--br {
        right: 0;
        bottom: 0;
        border-left: 0;
        border-top: 0;
    }

    .mobile-menu__list {
        margin: 0;
        padding: 0;
        list-style: none;
        text-align: center;
        text-transform: uppercase;
    }

    .mobile-menu__list li+li {
        margin-top: 8px;
    }

    .mobile-menu__list a {
        position: relative;
        color: #eef2ff;
        text-decoration: none;
        font-size: clamp(26px, 10vw, 42px);
        font-weight: 300;
        line-height: 1.15;
    }

    .mobile-menu__socials {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
        font-size: 11px;
        opacity: 0.86;
    }

    .mobile-menu__socials a {
        text-decoration: none;
        color: #f6f8ff;
        letter-spacing: 0.02em;
    }
}

@media (max-width: 360px) {
    .mobile-nav {
        padding-top: 8px;
    }

    .mobile-time,
    .mobile-menu-toggle,
    .mobile-menu__header {
        font-size: 11px;
    }

    .mobile-menu {
        padding: 10px 8px 10px;
    }

    .mobile-menu__center-wrap {
        min-height: 34vh;
    }

    .mobile-menu__corners {
        inset: 16% 8%;
    }

    .corner {
        width: 10px;
        height: 10px;
        border-width: 1px;
    }

    .mobile-menu__list a {
        font-size: clamp(22px, 9vw, 30px);
    }

    .mobile-menu__socials {
        gap: 6px;
        font-size: 9px;
    }
}

.mobile-menu-fade-enter-active,
.mobile-menu-fade-leave-active {
    transition: opacity 0.28s ease;
}

.mobile-menu-fade-enter-from,
.mobile-menu-fade-leave-to {
    opacity: 0;
}
</style>