<template>
    <section>
 
        <nav class=" ">
            <div class="nav-bar">

                <a class="works" href="">Works</a>
                <a class="experiences" href="">Experiences</a>
                <a class="skills" href="">Skills</a>
                <a class="contact-me rounded p-[0.70em] whitespace-nowrap " href="">Contact Me</a>
            </div>
        </nav>
        <div class="dotlottie-container h-full w-full text-white z-20">
            <dotlottie-player 
                src="https://framerusercontent.com/modules/assets/6Hwubvigct3R3CXW9AZ1cvnVgrs~HSi6JbhLs8FDE1I8AFixXTRDU41ZWt4z5-iz0-4-2gM.zip" 
                autoplay="true" loop="" background="rgba(0, 85, 255, 0)" speed="1" direction="1" style="height: 100%; width: 100%;">
            </dotlottie-player>

        </div>
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
        /* display: flex; */
        /* flex-direction: column; */
        position: relative;
        width: 100%;
        align-items: center;
        height: 100vh;
        margin: 0 auto;
        /* padding: 0 22em; */

    }
    .works  {
        height: 39px;
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
    .contact-me {
        height: 39px;
        position: absolute;
        right: 0px;
        top: calc(50% - 39px/2);
        width: 100px;
        background: none 0% 0% / auto repeat scroll padding-box border-box rgba(130, 130, 138, 0.2);
    }
    .contact-me:hover {
        background: linear-gradient(98deg, rgb(78, 25, 219) 0%, rgb(110, 50, 200) 100%);
        color: #fff;
    }
    nav {
        opacity: 1;
        height: 771px;
        position: absolute;
        left: calc(50% - 1384px/2);
        width: 1384px;
        overflow: auto;
        top: 22px;
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
    .nav-bar {
        opacity: 1;
        color: rgb(101 100 109);
        transform: perspective(1200px);
        height: 54px;
        left: 0;
        right: 0;
        top: -9px;
        position: absolute;
        z-index: 1;

    }
    a {
        outline: none;
        display: flex;
        align-items: center;
    }
</style>