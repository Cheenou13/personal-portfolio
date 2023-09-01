<template>
    <div class=" rounded-[8px] transform-none inset-0 overflow-visible absolute" style="transform-origin: 50% 50% 0px;">
        <div class="bg-placeholder"></div>
        <a class="anchor" href="https://3d-manufacturing.netlify.app/" target="_blank">
            <div class="absolute pointer-events-none user-select-none top-0 right-0 left-0 bottom-0" style="border-radius: inherit;">
                <div class="contents pointer-events-none" style="border-radius: inherit;">
                    <img src="../../assets/imgs/3D.jpg" alt="first project">
                    
                </div>
            </div>
        </a>
    </div>
    <div class="outline-none flex flex-col justify-start transform-none opacity-100 bottom-[40px] left-[68px] whitespace-pre-wrap w-auto absolute" 
        style="transform-origin: 50% 50% 0px; word-break: break-word; word-wrap: break-word; color: rgb(245, 245, 245);">
        <p class="project-title">3D Manufacturing Lines</p>
    </div>
    <div class="project-description">
        <a class="github-link" href="https://github.com/Cheenou13/3D-rendering" target="_blank">Github</a>
    </div>
    <div class="logo-container">
        <div class=" pointer-events-none user-select-none top-0 left-0 right-0 bottom-0" style="border-radius: inherit;">
            <div class="contents pointer-events-none" style="border-radius: inherit;">
                <!-- <?xml version="1.0" encoding="UTF-8"?> -->
                <div class="rounded-full bg-slate-50 flex justify-center items-center place-content-center">
                    <svg fill="none" stroke-linecap="square" stroke-miterlimit="10" version="1.1" viewBox="0 0 226.77 226.77" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(8.964 4.2527)" fill-rule="evenodd" stroke="#000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="4">
                    <path d="m63.02 200.61-43.213-174.94 173.23 49.874z"/>
                    <path d="m106.39 50.612 21.591 87.496-86.567-24.945z"/>
                    <path d="m84.91 125.03-10.724-43.465 43.008 12.346z"/>
                    <path d="m63.458 38.153 10.724 43.465-43.008-12.346z"/>
                    <path d="m149.47 62.93 10.724 43.465-43.008-12.346z"/>
                    <path d="m84.915 125.06 10.724 43.465-43.008-12.346z"/>
                    </g>
                    </svg>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Project",
    setup () {
        

        return {}
    }
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
        image-rendering: auto;
    }
    .project-title {
        /* --font-selector: SW50ZXItU2VtaUJvbGQ=; */
        font-family: "Inter-SemiBold", "Inter", sans-serif;
        font-weight: 600;
        line-height: 127.02%;
        color: rgb(245, 245, 245);
        font-size: calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1));
    }

</style>