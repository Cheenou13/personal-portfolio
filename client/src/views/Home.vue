<template>
    <div class="content-body">
        <NavBar/>
    </div>
</template>

<script>
    import NavBar from "../components/homePonents/NavBar.vue";
    export default {
        name: "Home",
        components: {
            NavBar
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