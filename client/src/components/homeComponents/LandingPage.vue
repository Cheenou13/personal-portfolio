<template>
    <section>
        <header >
            <nav>
                <NavBar :skills="skills" :works="works" :experience="experience"/>
                <MainContent/>
            </nav>
        </header>
        <div class="dotlottie-container h-full w-full text-white z-20">
            <dotlottie-player 
                src="https://framerusercontent.com/modules/assets/6Hwubvigct3R3CXW9AZ1cvnVgrs~HSi6JbhLs8FDE1I8AFixXTRDU41ZWt4z5-iz0-4-2gM.zip" 
                autoplay="true" loop="" background="rgba(0, 85, 255, 0)" speed="1" direction="1" style="height: 100%; width: 100%;">
            </dotlottie-player>
        </div>
        <div class="container-bg">
            <div class="contents">
                <div class="h-full w-full opacity-100 overflow-hidden z-[-1] relative" style="background-color: rgb(18, 17, 32);">
                    <div class="bg-wrapper">
                        <div class="left"></div>
                        <div class="mid"></div>
                        <div class="right"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    import MainContent from './MainContent.vue';
    import NavBar from './NavBar.vue';
    export default {
        name: "LandingPage",
        props: {
            skills: String,
            works: String,
            experience: String,
        },
        components: {
            MainContent,
            NavBar
        },
        setup() {
    
            },
        data() {
            return {
                animation: "",

            }
        },
    }
</script>

<style  scoped>
    section {
        height: 100vh;
        width: 100vw;
        position: relative;
        overflow: hidden;
    }
    nav {
        opacity: 1;
        height: 771px;
        position: absolute;
        left: calc(50% - 1384px/2);
        width: 1384px;
        top: 13px;
        font-weight: 700;
        font-size: 14px;
    }
    .dotlottie-container {
        opacity: 0.1;
        transform: perspective(1200px);
        position: absolute;
        height: 7%;
        left: 0;
        right: 0;
        top: 490px;
        padding: 0 7em;
    }

    .container-bg {
        height: 612px;
        width: 1440px;
        left: calc(50% - 1440px/2);
        top: 260px;
        position: absolute;
    }
    .bg-wrapper {
        opacity: 1;
        height: 349px;
        width: 1254px;
        overflow: visible;
        left: calc(50% - 1254px/2);
        top: calc(49.83660130718957% - 349px / 2);
        position: absolute;
    }
    .left {
        opacity: 0.9;
        filter: blur(64px);
        background: radial-gradient(50% 50% at 50% 50%, hsl(263, 82%, 35%) 0%, rgba(87, 57, 53, 0) 100%);
        bottom: 0px;
        left: 0px;
        top: 0px;
        width: 838px;
        overflow: visible;
        position: absolute;
    }
    .mid {
        opacity: 0.95;
        filter: blur(64px);
        background: radial-gradient(50% 50% at 50% 50%, hsl(11, 32%, 44%) 0%, rgba(87, 57, 53, 0) 100%);
        bottom: 0px;
        right: 0px;
        top: 0px;
        width: 864px;
        overflow: visible;
        position: absolute;
    }
    .right {
        opacity: 0.7;
        filter: blur(64px);
        background: radial-gradient(50% 50% at 50% 50%, hsl(243, 50%, 48%) 0%, rgba(87, 57, 53, 0) 100%);
        height: 295px;
        width: 324px;
        left: calc(49.9202551834131% - 324px / 2);
        top: calc(49.83660130718957% - 295px / 2);
        overflow: visible;
        position: absolute;
    }

</style>