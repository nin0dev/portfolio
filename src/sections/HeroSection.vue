<script></script>
<template>
    <header>
        <div class="container">
            <div class="hero__upper">
                <img src="/src/assets/images/crm-project_thumb.png" alt="My CRM project" />
                <span>Front-End</span>
            </div>
            <div class="hero__lower">
                <span><b>Web</b> Developer</span>
            </div>
        </div>
    </header>
</template>
<style scoped>
header {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

header .hero__upper {
    display: flex;
    align-items: center;
}

.hero__upper img {
    height: 20vh;
    width: 30vw;
    object-fit: cover;
}

.hero__upper span {
    line-height: 0;
}

.hero__lower span {
    line-height: 1;
}

span {
    font-family: 'Druk Text Trial';
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 11vw;
    letter-spacing: -5%;
}

span b {
    color: #FF4D00;
}
</style>