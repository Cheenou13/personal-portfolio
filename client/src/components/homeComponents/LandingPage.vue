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
        <bgTheme/>
    </section>

</template>

<script>
    import MainContent from './MainContent.vue';
    import NavBar from './NavBar.vue';
    import bgTheme from '../reusables/bgTheme.vue';
    export default {
        name: "LandingPage",
        props: {
            skills: String,
            works: String,
            experience: String,
        },
        components: {
            MainContent,
            NavBar,
            bgTheme
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



</style>