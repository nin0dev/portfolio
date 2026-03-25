<script setup></script>
<template>
    <footer class="footer">
        <div class="footer__grid">
            <div class="footer__initial footer__initial--n">N</div>
            <div class="footer__initial footer__initial--b">B</div>

            <div class="footer__socials">
                <a href="#" class="footer__link">[ Github ]</a>
                <a href="#" class="footer__link">[ Instagram ]</a>
                <a href="#" class="footer__link">[ LinkedIn ]</a>
                <a href="#" class="footer__link">[ Dribbble ]</a>
            </div>

            <div class="footer__main">
                <p class="footer__text">Let's work together</p>
                <a href="mailto:hello@example.com" class="footer__cta">
                    <span class="cta__corner cta__corner--tl"></span>
                    <span class="cta__corner cta__corner--tr"></span>
                    <span class="cta__corner cta__corner--bl"></span>
                    <span class="cta__corner cta__corner--br"></span>
                    <span class="cta__label">Schedule a call</span>
                </a>
            </div>

            <div class="footer__copyright">
                @ Copyright 2026
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    color: #f0ede8;
}

.footer::before {
    content: '';
    position: absolute;
    inset: 0;
    background-size: calc(100% / 6) 100%;
    pointer-events: none;
}

.footer__grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr auto 1fr;
    width: 100%;
    height: 100%;
    padding: 60px 40px;
    position: relative;
    z-index: 1;
}

.footer__initial {
    font-family: 'Druk Text Trial', sans-serif;
    font-size: 20vw;
    line-height: 0.7;
    position: absolute;
    pointer-events: none;
    font-weight: 700;
}

.footer__initial--n {
    color: #FF4D00;
    top: 50px;
    left: 40px;
}

.footer__initial--b {
    color: rgba(240, 237, 232, 1);
    bottom: 50px;
    right: 40px;
}

.footer__socials {
    grid-column: 6;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.footer__link {
    color: #888;
    text-decoration: none;
    font-family: 'NohemiBlack', sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    margin-bottom: 8px;
    transition: color 0.3s ease;
}

.footer__link:hover {
    color: #FF4D00;
}

.footer__main {
    grid-column: 1 / 7;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.footer__text {
    font-family: 'NohemiBlack', sans-serif;
    font-size: 4vw;
    color: #888;
    text-transform: uppercase;
    margin-bottom: 30px;
    letter-spacing: -0.02em;
}

.footer__cta {
    position: relative;
    font-family: 'Druk Text Trial', sans-serif;
    font-size: 7vw;
    color: #f0ede8;
    text-decoration: none;
    padding: 30px 80px;
    text-transform: uppercase;
    transition: color 0.3s ease, transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.footer__cta:hover {
    color: #FF4D00;
    transform: scale(1.02);
}

.cta__corner {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 1px solid currentColor;
    transition: all 0.3s ease;
}

.cta__corner--tl {
    top: 0;
    left: 0;
    border-right: 0;
    border-bottom: 0;
}

.cta__corner--tr {
    top: 0;
    right: 0;
    border-left: 0;
    border-bottom: 0;
}

.cta__corner--bl {
    bottom: 0;
    left: 0;
    border-right: 0;
    border-top: 0;
}

.cta__corner--br {
    bottom: 0;
    right: 0;
    border-left: 0;
    border-top: 0;
}

/* Copyright */
.footer__copyright {
    grid-column: 1 / 3;
    grid-row: 3;
    align-self: end;
    color: #444;
    font-family: 'NohemiBlack', sans-serif;
    text-transform: uppercase;
    font-size: 11px;
}

@media (max-width: 768px) {
    .footer__text {
        font-size: 8vw;
    }

    .footer__cta {
        font-size: 12vw;
        padding: 20px 40px;
    }

    .footer__initial {
        font-size: 40vw;
    }
}
</style>