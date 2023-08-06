<template>
    <section>
        <div class=" contents">
            <div class=" h-full w-full opacity-[1]">
                <a class="works" href="">Works</a>
                <a class="experiences" href="">Experiences</a>
                <a class="skills" href="">Skills</a>
                <a class="about-me" href="">About me</a>
            </div>
        </div>    
    </section>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style  scoped>
    section {
        background-color: #f1f1f1;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        z-index: 1;
        align-items: center;
        height: 54px;
        margin: 16px;
        font-size: 14px;

    }
    .works  {
        height: 39px;
        position: absolute;
        right: 376px;
        top: calc(50% - 39px/2);
        width: 70px;
    }
    .experiences {
        height: 39px;
        position: absolute;
        right: 276px;
        top: calc(50% - 39px/2);
        width: 82px;
    }
    .skills {
        height: 39px;
        position: absolute;
        right: 180px;
        top: calc(50% - 39px/2);
        width: 82px;
    }
    .about-me {
        height: 39px;
        position: absolute;
        right: 0px;
        top: calc(50% - 39px/2);
        width: 82px;
    }
</style>