<script setup></script>
<template>
    <footer id="footer" class="footer">
        <div class="footer__grid">
            <div class="footer__socials">
                <a href="https://www.github.com/nin0dev" class="footer__link">[ GITHUB ]</a>
                <a href="https://www.linkedin.com/in/nino-berber" class="footer__link">[ LINKEDIN ]</a>
                <a href="mailto:ninberber@gmail.com" class="footer__link">[ EMAIL ]</a>
            </div>

            <div class="footer__main">
                <p class="footer__text">Let's work together</p>
                <a href="https://tidycal.com/ninoberber" class="footer__cta">
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

            <div class="footer__name">NINO BERBER</div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
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
    font-size: 14px;
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
    padding: 20px 50px;
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

.footer__copyright {
    grid-column: 1 / 3;
    grid-row: 3;
    align-self: end;
    color: #444;
    font-family: 'NohemiBlack', sans-serif;
    text-transform: uppercase;
    font-size: 11px;
}

.footer__name {
    grid-column: 1;
    grid-row: 1;
    align-self: start;
    justify-self: start;
    font-family: 'NohemiBlack';
    font-size: 20px;
}

@media (min-width: 769px) and (max-width: 1100px) {
    .footer {
        height: auto;
        padding: 22px 0;
    }

    .footer__grid {
        padding: 36px 16px;
        row-gap: 18px;
    }

    .footer__text {
        font-size: clamp(30px, 4.1vw, 44px);
        margin-bottom: 16px;
    }

    .footer__cta {
        font-size: clamp(52px, 6.2vw, 76px);
        padding: 14px 22px;
    }

    .footer__socials {
        align-self: start;
    }

    .footer__link {
        font-size: 11px;
        margin-bottom: 6px;
    }
}

@media (max-width: 768px) {
    .footer {
        height: auto;
        padding: 90px 0 14px;
        align-items: flex-start;
    }

    .footer__grid {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto auto;
        padding: 0;
        row-gap: 26px;
        height: auto;
    }

    .footer__main {
        grid-column: 1 / 3;
        grid-row: 1;
    }

    .footer__text {
        margin: 0 0 14px;
        text-align: center;
        font-size: 32px;
        line-height: 0.9;
    }

    .footer__cta {
        padding: 12px 20px;
        font-size: 6vw;
        line-height: 0.9;
        text-align: center;
    }

    .cta__corner {
        width: 8px;
        height: 8px;
    }

    .footer__socials {
        grid-column: 2;
        grid-row: 2;
        align-self: end;
        justify-self: end;
        align-items: flex-end;
        gap: 5px;
    }

    .footer__link {
        margin: 0;
        font-size: 12px;
    }

    .footer__name {
        grid-column: 1;
        grid-row: 2;
        align-self: end;
        justify-self: start;
    }

    .footer__copyright {
        grid-column: 1 / 3;
        grid-row: 3;
        font-size: 9px;
    }
}

@media (max-width: 360px) {
    .footer {
        padding: 24px 0 10px;
    }

    .footer__grid {
        row-gap: 18px;
    }

    .footer__text {
        font-size: 24px;
        margin-bottom: 10px;
    }

    .footer__cta {
        font-size: 30px;
        padding: 9px 12px;
    }

    .cta__corner {
        width: 6px;
        height: 6px;
    }

    .footer__link {
        font-size: 10px;
    }

    .footer__copyright {
        font-size: 8px;
    }
}
</style>