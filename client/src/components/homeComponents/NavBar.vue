<template>
    <section>
        <!-- <div class=" contents" > -->
        <!-- <div class=" bg-slate-100 opacity-[1] h-[54px] relative w-full"> -->
        <nav class=" text-slate-200">
            <a class="works" href="">Works</a>
            <a class="experiences" href="">Experiences</a>
            <a class="skills" href="">Skills</a>
            <a class="about-me" href="">About me</a>
            <!-- hfh -->
        </nav>
        <!-- </div> -->
        <div class=" bg-slate-400 h-full w-full text-white z-20">
            content-body
        </div>
        <!-- </div>     -->
    </section>

</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style  scoped>
    section {
        /* height: 100vh; */
        display: flex;
        /* justify-content: center; */
        flex-direction: column;
        /* background-color: #f1f1f1; */
        /* position: absolute; */
        width: 100%;
        align-items: center;
        height: 100vh;
        margin: 0 auto;
        padding: 0 22em;

    }
    .works  {
        /* height: 39px; */
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
    /* class="opacity-[1] h-[54px] relative" */
    nav {
        opacity: 1;
        height: 54px;
        position: relative;
        width: 100%;
        margin-top: 1.5em;
        font-weight: 700;
        font-size: 14px;
    }
</style>