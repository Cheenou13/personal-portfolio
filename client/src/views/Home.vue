<template>
    <div class="content-body">
        <LandingPage/>
    </div>
</template>

<script>
    import LandingPage from "../components/homeComponents/LandingPage.vue";
    export default {
        name: "Home",
        components: {
            LandingPage,
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