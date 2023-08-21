<template>
        <div :id="experience" class=" experience-wrapper ">
            main experience
            <bgTheme />
        </div>
</template>

<script>
    import bgTheme from '../reusables/bgTheme.vue';
    export default {
        name: "MainExp",
        props: {
            experience: String,
        },
        components: {
            bgTheme
        },
        setup () {
            

            return {}
        }
    }
</script>

<style scoped>

    .experience-wrapper {
        height: 100vh;
        width: 100vw;
        position: relative;
    }

</style>