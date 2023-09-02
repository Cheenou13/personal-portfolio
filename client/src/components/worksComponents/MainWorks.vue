<template>
    <div class="years-exp-container">
        <div class="year-exp">
            <p class="years-contents">Over two years, I've designed and developed robust software/web applications, 
            and implemented cutting-edge microservices and APIs, driving business growth and enhancing user experiences.</p>
        </div>
        <div class="products-description">
            <p>Creating Responsive, Scalable, adaptable and high quality software products that produce efficient results.</p>
        </div>
    </div>
    <div :id="works" class="work-archor"></div>
    <Employers/>
    <Projects/>
</template>

<script>
    import Employers from './Employers.vue';
    import Projects from './Projects.vue';
    export default {
        name: "MainWorks",
        components: {
            Employers,
            Projects
        },
        props: {
            works: String,
        },
        setup () {
            

            return {}
        }
    }
</script>

<style scoped>


    .years-exp-container {
        opacity: 1;
        transform: perspective(1200px);
        height: 157px;
        width: 592px;
        top: 903px;
        left: calc(50% - 592px/2);
        overflow: visible;
        position: absolute;
    }
    .year-exp {
        outline: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        transform: translateX(-50%);
        height: auto;
        width: 591px;
        left: 50%;
        top: 0px;
        white-space: pre-wrap;
        word-break: break-word;
        word-wrap: break-word;
        position: absolute;
    }
    .years-contents {
        font-family: "Inter-SemiBold", "Inter", sans-serif;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        color: rgb(245, 245, 245);
        font-style: normal;
        line-height: 1.3em;
    }
    .work-archor {
        height: 25px;
        width: 41px;
        top: 741px;
        left: calc(50% - 41px/2);
        /* overflow: hidden; */
        position: absolute;
    }
    .products-description {
        outline: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        transform: translateX(-50%);
        height: auto;
        width: 438px;
        left: 50%;
        bottom: 16px;
        white-space: pre-wrap;
        word-break: break-word;
        word-wrap: break-word;
        position: absolute;

    }
    .products-description p {
        font-size: 16px;
        line-height: 1.3em;
        text-align: center;
        color: rgba(255, 255, 255, 0.3);
    }

</style>