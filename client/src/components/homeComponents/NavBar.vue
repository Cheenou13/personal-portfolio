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
        background: none 0% 0% / auto repeat scroll padding-box border-box rgba(130, 130, 138, 0.2);
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

    p {
        color:rgb(245, 245, 245);
        opacity: 0.5;
        transition: background-color 0.4s ease 0s, opacity 0.4s ease 0s;
    }
    .works:hover p,  .experiences:hover p, .skills:hover p {
        opacity: 0.8;
        background-color: rgb(46, 45, 63);

    }


</style>