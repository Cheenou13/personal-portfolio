<template>
    <div class="content-body">
        <LandingPage :skills="skills" :works="works" :experience="experience"/>
        <div :id="works" class=" h-screen w-full bg-slate-50">
            works
        </div>
        <div :id="experience" class="h-screen w-full bg-violet-400">
            experience
        </div>
        <div :id="skills" class="h-screen w-full bg-purple-400">
            skills
        </div>
    </div>
</template>

<script>
    import LandingPage from "../components/homeComponents/LandingPage.vue";
    export default {
        name: "Main",
        components: {
            LandingPage,
        },
        data () {
            return {
                works: 'worksRef',
                experience: 'experienceRef',
                skills: 'skillsRef',
            }
        },
        setup () {
            

            return {}
        }
    }
</script>

<style scoped>
    .content-body {
        min-height: 100%;   
        width: auto;
        /* overflow: hidden; */
        position: relative;
    }
</style>