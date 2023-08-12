<template>
    <section>
        <!-- <div class=" contents" > -->
        <!-- <div class=" bg-slate-100 opacity-[1] h-[54px] relative w-full"> -->
        <nav class=" text-slate-200">
            <a class="works" href="">Works</a>
            <a class="experiences" href="">Experiences</a>
            <a class="skills" href="">Skills</a>
            <a class="about-me" href="">About me</a>
            <!-- hfh -->
        </nav>
        <!-- </div> -->
        <div class="dotlottie-container h-full w-full text-white z-20">
            <dotlottie-player 
                src="https://framerusercontent.com/modules/assets/6Hwubvigct3R3CXW9AZ1cvnVgrs~HSi6JbhLs8FDE1I8AFixXTRDU41ZWt4z5-iz0-4-2gM.zip" 
                autoplay="true" loop="" background="rgba(0, 85, 255, 0)" speed="1" direction="1" style="height: 100%; width: 100%;">
            </dotlottie-player>

        </div>
        <!-- </div>     -->
    </section>

</template>

<script>

    export default {
        name: "NavBar",
        components: {

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
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        height: 100vh;
        margin: 0 auto;
        padding: 0 22em;

    }
    .works  {
        /* height: 39px; */
        position: absolute;
        right: 376px;
        top: calc(50% - 39px/2);
        width: 70px;
    }
    .experiences {
        height: 39px;
        position: absolute;
        right: 276px;
        top: calc(50% - 39px/2);
        width: 82px;
    }
    .skills {
        height: 39px;
        position: absolute;
        right: 180px;
        top: calc(50% - 39px/2);
        width: 82px;
    }
    .about-me {
        height: 39px;
        position: absolute;
        right: 0px;
        top: calc(50% - 39px/2);
        width: 82px;
    }
    /* class="opacity-[1] h-[54px] relative" */
    nav {
        opacity: 1;
        height: 54px;
        position: relative;
        width: 100%;
        margin-top: 1.5em;
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
    }
</style>