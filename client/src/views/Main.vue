<template>

    <div class="contents">
        <div class="content-body">
            <LandingPage :skills="skills" :works="works" :experience="experience"/>
            <MainWorks :works="works"/>
            <MainExp :experience="experience"/>
            <MainSkills :skills="skills"/>
            <transition name="dropdown">
                <FixedNavBar :showBar="showFixedNavBar" :skills="skills" :works="works" :experience="experience"/>
            </transition> 
        </div> 
    </div>
    
</template>

<script>
    import LandingPage from "../components/homeComponents/LandingPage.vue";
    import MainExp from "../components/expComponents/MainExp.vue";
    import MainWorks from "../components/worksComponents/MainWorks.vue";
    import MainSkills from "../components/skillsComponents/MainSkills.vue";
    import FixedNavBar from "../components/reusables/FixedNavBar.vue";
    export default {
        name: "Main",
        components: {
            LandingPage,
            MainExp,
            MainWorks,
            MainSkills,
            FixedNavBar,
        },
        data () {
            return {
                works: 'worksRef',
                experience: 'experienceRef',
                skills: 'skillsRef',
                showFixedNavBar: false,
            }
        },
        setup () {
            
            return {}
        },
        methods: {
            checkScroll() {
                const threshold = window.innerHeight * 0.10;  // 10% of viewport height
                // console.log("scroll Y: ", window.scrollY);
                if (window.scrollY > threshold) this.showFixedNavBar = true;
                else this.showFixedNavBar = false;
            }
        },
        mounted () {
            window.addEventListener('scroll', this.checkScroll);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.checkScroll);
        },
    }
</script>

<style scoped>
    .content-body {
        min-height: 100%;
        height: 5897px;
        width: auto;
        overflow: hidden;
        position: relative;
    }

    /* Starting state */
    .dropdown-enter {
        height: 88px;
        transform: translateY(-20px); /* Adjust this value for more/less dramatic effect */
    }

    /* Ending state */
    .dropdown-leave-to {
        height: 0px;
        transform: translateY(-20px); /* Same adjustment as above */
    }

    /* Transition state */
    .dropdown-enter-active, .dropdown-leave-active {
        transition: height 0.4s ease, transform 0.4s ease;
    }

</style>