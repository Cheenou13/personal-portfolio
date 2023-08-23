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
        height: 471px;
        width: 1110px;
        left: calc(50% - 1110px/2);
        top: 2606px;
        position: absolute;
    }

</style>