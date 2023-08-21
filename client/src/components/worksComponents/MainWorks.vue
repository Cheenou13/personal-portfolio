<template>
        <div :id="works" class=" works-wrapper ">
            main works
            <bgTheme />
        </div>
        
</template>

<script>
    import bgTheme from '../reusables/bgTheme.vue';
    export default {
        name: "MainWorks",
        components: {
            bgTheme,
        },
        props: {
            works: String,
        },
        setup () {
            

            return {}
        }
    }
</script>

<style scoped>

    .works-wrapper {
        height: 100vh;
        width: 100vw;
        position: relative;
    }

</style>