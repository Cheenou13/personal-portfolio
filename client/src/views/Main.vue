<template>
    <div class="content-body">
        <LandingPage :skills="skills" :works="works" :experience="experience"/>
        <MainWorks :id="works"/>
        <MainExp :id="experience"/>
        <MainSkills :id="skills"/>
    </div>  
</template>

<script>
    import LandingPage from "../components/homeComponents/LandingPage.vue";
    import MainExp from "../components/expComponents/MainExp.vue";
    import MainWorks from "../components/worksComponents/MainWorks.vue";
    import MainSkills from "../components/skillsComponents/MainSkills.vue";
    export default {
        name: "Main",
        components: {
            LandingPage,
            MainExp,
            MainWorks,
            MainSkills
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
        overflow: hidden;
        position: relative;
    }
</style>