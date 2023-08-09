<template>
    <div class="content-body">
        <NavBar/>

    </div>
</template>

<script>
    import NavBar from "../components/homeComponents/NavBar.vue";
    import LandingPage from "../components/homeComponents/LandingPage.vue";
    export default {
        name: "Home",
        components: {
            NavBar,

        },
        data () {
            return {}
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