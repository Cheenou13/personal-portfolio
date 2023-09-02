<template>
        <TextContents />
        <div :id="experience" class="">
        </div>
        <ExpDescription />
</template>

<script>
    import TextContents from './TextContents.vue';
    import ExpDescription from './ExpDescription.vue';
    export default {
        name: "MainExp",
        props: {
            experience: String,
        },
        components: {
            TextContents,
            ExpDescription,
        },
        setup () {
            

            return {}
        }
    }
</script>

<style scoped>

    /* .experience-wrapper {
        height: 471px;
        width: 1110px;
        left: calc(50% - 1110px/2);
        top: 2606px;
        position: absolute;
    } */

    #experienceRef {
        height: 25px;
        width: 41px;
        top: 2655px;
        left: calc(50% - 41px / 2);
        overflow: hidden;
        position: absolute;
    }

</style>