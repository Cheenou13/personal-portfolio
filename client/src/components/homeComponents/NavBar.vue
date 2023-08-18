<template>
    <section>
        <header >
            <nav>
                <div class="nav-bar">
                    <div class="contents w-full h-full">
                        <div class="absolute h-[54px] w-[50%] right-0">
                            <div class="contents">
                                <div class="flex flex-row h-full justify-end items-center gap-4">
                                    <a href="" class="works">
                                        <p class=" py-3 px-4 rounded-lg">
                                            Works
                                        </p>
                                    </a>
                                    <a href="" class=" experiences">
                                        <p class="py-3 px-4 rounded-lg ">
                                            Experience
                                        </p>
                                    </a>
                                    <a href="" class="skills">
                                        <p class="py-3 px-6 rounded-lg ">
                                            Skills
                                        </p>
                                    </a>
                                    <div class="contact-container">
                                        <div class="h-[51px]">
                                            <div class="contents">
                                                <a href="" class="contact-me ">
                                                    <div class=" flex outline-none flex-col whitespace-pre w-full">
                                                        <span class="p-0 m-0 text-center">Contact Me</span>
                                                    </div>
                                                    <div class="hover-bg-color"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="absolute h-[54px] w-[50%] left-0 ">

                            <div class="contents">
                                <div class="h-full w-full opacity-100 overflow-hidden relative">
                                    <div class="social-media-wrapper">
                                        <div class="contents">
                                            <a href="https://www.linkedin.com/in/cheenou-xiong-0a4639107/" target="_blank">
                                                <div class="svg-container ">
                                                    <div class="w-full h-full block">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin rounded-[0.2em]" viewBox="0 0 16 16">
                                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="name-container">
                    <p class="name">I'm Cheenou</p>
                </div>
                <div class="profile-container">
                    <div class="profile-img-container">
                        <div class="contents  rounded-full">
                            <img src="../../assets/linkedIn.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="role-container">
                    <div class="role-layout">
                        <p>Junior</p>
                        <p>Software</p>
                        <p>Developer</p>
                    </div>
                </div>
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
    .contact-container {
        opacity: 1;
        bottom: -17px;
        overflow: visible;
        color: rgb(245, 245, 245); 
        right: -14px;
        top: -18px;
        width: 186px;
    }
    section {
        position: relative;
        width: 100%;
        height: 100vh;
        margin: 0 auto;
    }
    .works  { 
        opacity: 1;
        height: 39px;
        overflow: visible;
        /* position: absolute; */
        right: 376px;
        top:calc(50.00000000000002% - 39px / 2);
        width: 70px;
    }
    .experiences {
        height: 39px;
        /* position: absolute; */
        right: 266px;
        top: calc(50% - 39px/2);
        width: 106px;
    }
    .skills {
        height: 39px;
        /* position: absolute; */
        right: 180px;
        top: calc(50% - 39px/2);
        width: 82px;
    }
    .contact-me {
        height:100%;
        width: 100%;
        opacity: 1;
        background: none 0% 0% / auto rgba(130, 130, 138, 0.2);
        border-radius: 8px;
        position: relative;
        transition: background 0.4s cubic-bezier(0.25, 0.1, 0.52, 1.04) 0.2s;
    }

    .contact-me:hover {
        background: linear-gradient(98deg, rgb(78, 25, 219) 0%, rgb(110, 50, 200) 100%);

    }

    .contact-me:hover .hover-bg-color {
        border-width: 2px;
        border-color: rgba(189, 165, 232, 0.25);
        border-style: solid;
        border-radius: 9px;
        opacity: 1;
        inset: -1px;
        overflow: visible;
        position: absolute;
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
    .nav-bar {
        opacity: 1;
        color: rgb(101 100 109);
        transform: perspective(1200px);
        height: 54px;
        left: 0;
        right: 0;
        top: 0;
        position: absolute;
        z-index: 1;

    }
    a {
        outline: none;
        display: flex;
        align-items: center;
    }

    .nav-bar p {
        color:rgb(245, 245, 245);
        opacity: 0.5;
        transition: background-color 0.4s ease 0s, opacity 0.4s ease 0s;
    }
    .works:hover p,  .experiences:hover p, .skills:hover p {
        opacity: 0.8;
        background-color: rgb(46, 45, 63);
        
    }
    .name-container {
        outline: none;
        display: flex;
        justify-content: flex-start;
        opacity: 1;
        transform: perspective(1200px) translateX(-50%);
        height:auto;
        width: auto;
        left: 50%;
        top: 76px;
        white-space: pre;
        position: absolute;

    }
    .name {
        font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
        font-size: 40px;
        font-weight: 700;
        color: rgb(245, 245, 245);
        opacity: 1;
    }

    .profile-container {
        opacity: 1;
        transform: perspective(1200px) translateX(-50%);
        aspect-ratio: 1/1;
        height: var(auto, 154px);
        width: 154px;
        left: 50%;
        top: 157px;
        overflow: visible;
        position: absolute;
    }
    .profile-img-container {
        position: absolute;
        pointer-events:none;
        user-select: none;
        border-radius: inherit;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .profile-img-container img {
        pointer-events: none;
        user-select: none;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        object-position: center;
        object-fit: cover;
        image-rendering: auto;
    }
    .role-container {
        opacity: 1;
        transform: perspective(1200px);
        bottom: 107px;
        height: 292px;
        width: 594px;
        left: calc(50% - 594px/2);
        mix-blend-mode: overlay;
        overflow: visible;
        position: absolute;
    }
    .role-layout {
        outline: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        transform: translateX(-50%);
        height: auto;
        width: auto;
        top: 0;
        left: 50%;
        text-shadow: 0px 0px 0px #ddd7b0;
        white-space: pre;
        color: #0099ff;
        position: absolute;


    }
    .role-layout p {
        font-family: "Inter-Black", "Inter", sans-serif;
        font-size: 97px;
        font-weight: 900;
        letter-spacing: 0.02em;
        text-align: center;
        color: rgba(245, 245, 245, 0.8);
        line-height: 1em;
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
    .social-media-wrapper {
        opacity: 1;
        bottom: 0px;
        top: 0px;
        /* left: calc(49.387755102040835% - 48px / 2); */
        width: 48px;
        position: absolute;
    }
    .social-media-wrapper a {
        background-color: rgba(18, 17, 32, 0);
        height: 100%;
        width: 100%;
        border-radius: 6px;
        cursor: pointer;
        overflow: hidden;
        text-decoration: none;
        will-change: transform;
        position: relative;
    }
    .svg-container {
        image-rendering: pixelated;
        opacity: 0.5;
        height: 22px;
        width: 22px;
        left: calc(50% - 22px/2);
        top: calc(50% - 22px/2);
        position: absolute;
        /* background-color: white; */
    }
</style>