<template>
    <div class="items-container">
        <div class=" inset-0 absolute">
            <div class="contents">
                <div class="contents-container">
                    <!--  -->
                    <div class=" rounded-[8px] transform-none inset-0 overflow-visible absolute" style="transform-origin: 50% 50% 0px;">
                        <div class="bg-placeholder"></div>
                        <a class="anchor bg-slate-50"  :href="isFinshed ? netlify: '/not-found'" target="_blank">
                            <div class="flex justify-center items-center absolute pointer-events-none user-select-none top-0 right-0 left-0 bottom-0" style="border-radius: inherit;">
                                <div class="contents pointer-events-none" style="border-radius: inherit;">
                                    <img v-if="isFinshed" :src='projectcontent' alt="first project">
                                    <p class="text-[#000] text-[18px] font-semibold" v-else>{{ projectcontent }}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="outline-none flex flex-col justify-start transform-none opacity-100 bottom-[40px] left-[68px] whitespace-pre-wrap w-auto absolute" 
                        style="transform-origin: 50% 50% 0px; word-break: break-word; word-wrap: break-word; color: rgb(245, 245, 245);">
                        <p class="project-title">{{ title }}</p>
                    </div>
                    <div class="project-description">
                        <a class="github-link" :href="gitHub" target="_blank">Github</a>
                    </div>
                    <div class="logo-container">
                        <div class=" pointer-events-none user-select-none top-0 left-0 right-0 bottom-0" style="border-radius: inherit;">
                            <div class="contents pointer-events-none" style="border-radius: inherit;">
                                <div class="rounded-full bg-slate-50 flex justify-center items-center place-content-center">
                                    <slot></slot>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                </div>
            </div>
        </div>
    </div>

</template>

<script>


export default {
    props: {
        gitHub: String,
        title: String,
        netlify: String,
        isFinshed: Boolean,
        projectcontent: String,
    },
    setup () {
        

        return {

        }
    },
    data() {
        return {
            // gitHub: this.gitHub,
            test_gitHub: "https://github.com/Cheenou13/3D-rendering",
            test_title: "3D Manufacturing Lines",
            test_netlify: "https://3d-manufacturing.netlify.app/",
            test_isFinshed: true,
            test_projectContent: "imgSrc"
        }
    },
}
</script>

<style scoped>
    .project-description {
        outline: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        color: rgba(158, 158, 158, 1);
        transform: none;
        transform-origin: 50% 50% 0px;
        height: 17px;
        /* width: 91px; */
        width: auto;
        left: 68px;
        bottom: 20px;
        white-space: pre-wrap;
        word-break: break-word;
        word-wrap: break-word;
        position: absolute;
    }
    .project-description p {
        font-family: "Inter-Regular", "Inter", sans-serif;
        font-size: 13px;
        font-weight: 500;
        line-height: 127.02%;
        color: rgba(158, 158, 158, 1);
    }
    .logo-container {
        transform: none;
        transform-origin: 50% 50% 0px;
        height: 40px;
        width: 40px;
        left: 18px;
        top: 339px;
        position: absolute;
    }
    .logo-container img {
        pointer-events: none;
        user-select: none;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        object-position: center;
        object-fit: contain;
        image-rendering: auto;
    }
    .bg-placeholder {
        background-color: rgba(130, 130, 138, 0.2);
        border-radius: 8px;
        transform: none;
        transform-origin: 50% 50% 0px;
        inset: 0px;
        max-width: 100%;
        min-width: 100px;
        position: absolute;
    }
    .anchor {
        transform: none;
        transform-origin: 50% 50% 0px;
        aspect-ratio: 1.3311036789297659 / 1;
        height: var(--framer-aspect-ratio-supported, 299px);
        width: 398px;
        max-width: 100%;
        min-width: 100px;
        top: 20px;
        left: calc(50% - min(100%,max(100px,398px)) / 2);
        text-decoration: none;
        position: absolute;
    }
    .anchor img {
        pointer-events: none;
        user-select: none;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        object-position: center;
        object-fit: cover;
        /* image-rendering: auto; */
    }
    .project-title {
        /* --font-selector: SW50ZXItU2VtaUJvbGQ=; */
        font-family: "Inter-SemiBold", "Inter", sans-serif;
        font-weight: 600;
        line-height: 127.02%;
        color: rgb(245, 245, 245);
        font-size: calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1));
    }

    .items-container {
        opacity: 1;
        transform: none;
        align-self: start;
        justify-self: start;
        height: 399px;
        width: 100%;
        overflow: hidden;
        position: relative;
        transition: transform 0.3s ease 0s;

    }
    .contents-container {
        opacity: 1;
        height: 100%;
        width: 100%;
        transform: none;
        transform-origin: 50% 50% 0px;
        overflow: visible;
        position: relative;
    }
    .items-container:hover{
        transform: scale(1.02);
        
    }
    .items-container:hover .github-link {
        color: rgba(0, 103, 246, 1);
    }


</style>