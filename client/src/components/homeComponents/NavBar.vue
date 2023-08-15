<template>
    <section>
        <nav>
            <div class="nav-bar">
                <!-- <div style="display: contents; ">
                    <div class="style-ref-0">
                        <a class="works" href="">
                            <div class="style-ref-1">
                                <div class="contents">
                                    <div class="style-ref-2">
                                        <div class="style-ref-3">
                                            <div class="style-ref-4">
                                                <div class="contents">
                                                    <div class="style-ref-5">
                                                        <div class="style-ref-6">
                                                            <p class="text-styling text-white">Works</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="experiences" href="">
                            <div class="style-ref-1">
                                <div class="contents">
                                    <div class="style-ref-2">
                                        <div class="style-ref-3">
                                            <div class="style-ref-4">
                                                <div class="contents">
                                                    <div class="style-ref-5">
                                                        <div class="style-ref-6">
                                                            <p class="text-styling text-white">Experiences</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="skills" href="">
                            <div class="style-ref-1">
                                <div class="contents">
                                    <div class="style-ref-2">
                                        <div class="style-ref-3">
                                            <div class="style-ref-4">
                                                <div class="contents">
                                                    <div class="style-ref-5">
                                                        <div class="style-ref-6">
                                                            <p class="text-styling text-white">Skills</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div class="contact-container">
                            <div class="style-contact-1">
                                <div style="display: contents;">
                                    <a href="" class="contact-me ">
                                        <div class="style-contact-2">
                                            <p class="p-0 m-0 text-slate-200">Contact Me</p>
                                        </div>
                                        <div class="hover-bg-color"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="contents w-full h-full">
                    <div class="flex gap-2">
                        <a href="" class=" works text-white"> 
                            <p class="text-white py-3 px-3 rounded-md">
                                Works
                            </p>
                        </a>
                        <a href="" class=" experiences text-white"> Experience</a>
                        <a href="" class=" skills text-white"> Skills</a>
                        <div class="contact-container">
                            <div class="style-contact-1">
                                <div style="display: contents;">
                                    <a href="" class="contact-me ">
                                        <div class="style-contact-2">
                                            <p class="p-0 m-0 text-slate-200">Contact Me</p>
                                        </div>
                                        <div class="hover-bg-color"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
    .style-contact-1 {
        opacity: 1;
        height: 51px;
        width: 170px;
        left: calc(50.256% - 170px/2);
        top: calc(49.4382% - 51px/2);
        position: absolute;
    }
    .style-contact-2 {
        outline: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        color: rgb(245, 245, 245);
        opacity: 0.9;
        transform: translate(-50%, -50%);
        height: auto;
        width: auto;
        left: 50%;
        top: 49%;
        position: absolute;
        white-space: pre;
    }
    .contact-container {
        opacity: 1;
        bottom: -17px;
        overflow: visible;
        position: absolute;
        right: -14px;
        top: -18px;
        width: 205px;
    }
    section {
        /* display: flex; */
        /* flex-direction: column; */
        position: relative;
        width: 100%;
        /* align-items: center; */
        height: 100vh;
        margin: 0 auto;
        /* padding: 0 22em; */

    }
    .works  {
        /* background-color: aqua; */
        opacity: 1;
        height: 39px;
        overflow: visible;
        position: absolute;
        right: 376px;
        top:calc(50.00000000000002% - 39px / 2);
        width: 70px;
    }
    .experiences {
        height: 39px;
        position: absolute;
        right: 266px;
        top: calc(50% - 39px/2);
        width: 106px;
    }
    .skills {
        height: 39px;
        position: absolute;
        right: 180px;
        top: calc(50% - 39px/2);
        width: 82px;
    }
    .contact-me {
        height:100%;
        width: 100%;
        opacity: 1;
        background: none 0% 0% / auto repeat scroll padding-box border-box rgba(130, 130, 138, 0.2);
        border-radius: 8px;
        position: relative;
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
    .style-ref-0 {
        /* background-color: aliceblue; */
        display: flex;
        height: 100%;
        width: 100%;
        opacity: 1;
        overflow: visible;
        position: relative;
    }
    .style-ref-1 {
        opacity: 1;
        inset: -2px 0 -1px;
        position: absolute;
    }
    .style-ref-2 {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        overflow: hidden;
        gap: 10px;
        padding: 0;
        position: relative;
        opacity: 1;
        border-radius: 4px;
        will-change: transform;
    }
    .style-ref-3 {
        background: rgba(0, 0, 0, 0);
        opacity: 1;
        border-radius: 8px;
        flex: 1 0 0px;
        height: 42px;
        width: 1px;
        overflow: visible;
        position: relative;
    }
    .style-ref-4{
        opacity:0.5;
        height: 18px;
        width: 42px;
        left: calc(50% - 42px/2);
        top: calc(50% - 18px/2);
        position: absolute;
    }
    .style-ref-5 {
        height: 100%;
        width: 100%;
        opacity: 1;
        overflow: visible;
        position: relative;
    }
    .style-ref-6 {
        height: auto;
        width: auto;
        outline: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        color: rgb(245, 245, 245);
        opacity: 0.8;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 47%;
        white-space: pre;
        position: absolute;
    }
    .works p {
        opacity: 0.5;
    }
    .works:hover p {
        background-color: rgb(32, 31, 48);

    }
    .works:hover p{
        opacity: 0.8;
    }
</style>