<template>
        <div :id="skills" class=" skills-wrapper ">
            Main skills
            <bgTheme />
        </div>
</template>

<script>
    import bgTheme from '../reusables/bgTheme.vue';
    export default {
        name: "MainSkills",
        props: {
            skills: String,
        },
        components: {
            bgTheme,
        },
        setup () {
            

            return {}
        }
    }
</script>

<style scoped>

    .skills-wrapper {
        height: 100vh;
        width: 100vw;
        position: relative;
    }

</style>