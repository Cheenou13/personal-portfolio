<template>

    <transition name="scroll-nav">

        <div v-show="showBar" class="scroll-nav-container">
            <div class="contents">
                <div class="content-links">
                    <div class="links">
                        <div class="nav-bar">
                            <div class="contents w-full h-full">
                                <div class="absolute h-[54px] w-[50%] right-0">
                                    <div class="contents">
                                        <div class="flex flex-row h-full justify-end items-center gap-4">

                                            <a :href="'#'+works" class="works">
                                                <p class=" py-3 px-4 rounded-lg">
                                                    Works
                                                </p>
                                            </a>
                                            <a :href="'#'+experience" class=" experiences">
                                                <p class="py-3 px-4 rounded-lg ">
                                                    Experience
                                                </p>
                                            </a>
                                            <a :href="'#'+skills" class="skills">
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
                                        <div class="flex justify-start gap-4 h-full w-full opacity-100 overflow-hidden relative px-4">
                                            <SocialMedia :className="archor_tag" :url="linkedIn_url">
                                                <template v-slot:default>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin rounded-[0.2em]" viewBox="0 0 16 16">
                                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                                    </svg>
                                                </template>
                                            </SocialMedia>
                                            <SocialMedia :className="archor_tag" :url="gitHub_url">
                                                <template v-slot:default>
                                                    <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle fill-white">
                                                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                                                    </svg>
                                                </template>
                                            </SocialMedia>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </transition>

</template>

<script>
import SocialMedia from './SocialMedia.vue';
export default {
    name: "FixedNavBar",
    components: {
        SocialMedia,
    },
    props: {
        works: String,
        experience: String,
        skills: String,
        showBar: Boolean,
    },
    data () {
        return {
            archor_tag: "a-tag",
            linkedIn_url: "https://www.linkedin.com/in/cheenou-xiong-0a4639107/",
            gitHub_url: "https://github.com/Cheenou13"
        }
    }
}
</script>

<style scoped>

    .contact-container {
        opacity: 1;
        bottom: -17px;
        overflow: visible;
        color: rgb(245, 245, 245); 
        right: -14px;
        top: -18px;
        width: 186px;
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

    .scroll-nav-container {
        z-index: 21;
        font-weight: 700;
        font-size: 14px;
        color: rgb(101 100 109);
        opacity: 1;
        transform: perspective(1200px);
        height: 80px;
        width: 1388px;
        position: fixed;
        top: 0;
        left: calc(50% - 1388px/2);
    }

    .content-links {
        border-top-width: 0px;
        border-left-width: 0.5px;
        border-right-width: 0.5px;
        border-bottom-width: 0.5px;
        border-color: rgba(67, 65, 85, 0.25);
        border-style: solid;
        backdrop-filter: blur(0px);
        background-color: rgba(15, 14, 28, 0.9);
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.18) 0px 0.602187px 0.602187px -1.25px, rgba(0, 0, 0, 0.16) 0px 2.28853px 2.28853px -2.5px, rgba(0, 0, 0, 0.063) 0px 10px 10px -3.75px;
        height: 100%;
        width: 100%;
        opacity: 1;
    }
    .links {
        opacity: 1;
        height: 54px;
        left: 32px;
        right: 32px;
        top: calc(50% - 54px/2);
        position: absolute;
        overflow: visible;
    }

    /* Initial state of element as it starts entering */
    .scroll-nav-enter-active {
        transform: translateY(0); /* It moves to its default position */
    }
    /* Initial state */
    .scroll-nav-enter-from, .scroll-nav-leave-to {
        transform: translateY(-100%);
    }

    /* Transitioned state */
    .scroll-nav-enter-to, .scroll-nav-leave-from {
        transform: translateY(0);
    }

    /* Transition effect */
    .scroll-nav-enter-active, .scroll-nav-leave-active {
        transition: transform 0.5s ease-out;
    }

</style>