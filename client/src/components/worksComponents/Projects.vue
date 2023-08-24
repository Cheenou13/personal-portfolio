<template>
    <div class="projects-wrapper">
        <div class="items-container">
            <div class=" inset-0 absolute">
                <div class="contents">
                    <div class="contents-container">
                        <Project/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Project from './Project.vue';
export default {
    name: "Projects",
    components: {
        Project
    },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
    .projects-wrapper {
        opacity: 1;
        transform: perspective(1200px);
        display: grid;
        gap: 16px;
        grid-auto-rows: min-content;
        grid-template-columns: repeat(auto-fill, 434px);
        justify-content: center;
        height: 23%;
        /* height:auto; */
        width: 93%;
        max-width: 1440px;
        padding: 0px;
        top: 1364px;
        left: calc(50% - min(1440px,92.63888888888889%) / 2);
        overflow: visible;
        position: absolute;
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
</style>