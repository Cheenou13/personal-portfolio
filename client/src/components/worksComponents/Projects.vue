<template>
    <div class="projects-wrapper">
        <Project :title="name" :projectcontent="img" :gitHub="gitHub_url" :netlify="netlify_url" :isFinshed="true">
            <template v-slot:default>
                <svg fill="none" stroke-linecap="square" stroke-miterlimit="10" version="1.1" viewBox="0 0 226.77 226.77" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(8.964 4.2527)" fill-rule="evenodd" stroke="#000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="4">
                        <path d="m63.02 200.61-43.213-174.94 173.23 49.874z"/>
                        <path d="m106.39 50.612 21.591 87.496-86.567-24.945z"/>
                        <path d="m84.91 125.03-10.724-43.465 43.008 12.346z"/>
                        <path d="m63.458 38.153 10.724 43.465-43.008-12.346z"/>
                        <path d="m149.47 62.93 10.724 43.465-43.008-12.346z"/>
                        <path d="m84.915 125.06 10.724 43.465-43.008-12.346z"/>
                    </g>
                </svg>
            </template>
        </Project>
        <Project :title="'Dashbaord'" :projectcontent="'Upcoming Admin Dashboard'" :gitHub="'https://github.com/Cheenou13'" :netlify="netlify_url" :isFinshed="False">
            <template v-slot:default>
                <svg fill="none" stroke-linecap="square" stroke-miterlimit="10" version="1.1" viewBox="0 0 226.77 226.77" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(8.964 4.2527)" fill-rule="evenodd" stroke="#000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="4">
                        <path d="m63.02 200.61-43.213-174.94 173.23 49.874z"/>
                        <path d="m106.39 50.612 21.591 87.496-86.567-24.945z"/>
                        <path d="m84.91 125.03-10.724-43.465 43.008 12.346z"/>
                        <path d="m63.458 38.153 10.724 43.465-43.008-12.346z"/>
                        <path d="m149.47 62.93 10.724 43.465-43.008-12.346z"/>
                        <path d="m84.915 125.06 10.724 43.465-43.008-12.346z"/>
                    </g>
                </svg>
            </template>
        </Project>
        <Project :title="'Distributed Social Network'" :projectcontent="'Upcoming Distributed Social Network'" :gitHub="'https://github.com/Cheenou13'" :netlify="netlify_url" :isFinshed="False">
            <template v-slot:default>
                <svg fill="none" stroke-linecap="square" stroke-miterlimit="10" version="1.1" viewBox="0 0 226.77 226.77" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(8.964 4.2527)" fill-rule="evenodd" stroke="#000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="4">
                        <path d="m63.02 200.61-43.213-174.94 173.23 49.874z"/>
                        <path d="m106.39 50.612 21.591 87.496-86.567-24.945z"/>
                        <path d="m84.91 125.03-10.724-43.465 43.008 12.346z"/>
                        <path d="m63.458 38.153 10.724 43.465-43.008-12.346z"/>
                        <path d="m149.47 62.93 10.724 43.465-43.008-12.346z"/>
                        <path d="m84.915 125.06 10.724 43.465-43.008-12.346z"/>
                    </g>
                </svg>
            </template>
        </Project>
        <Project :title="'E-commerce '" :projectcontent="'Upcoming E-commerce'" :gitHub="'https://github.com/Cheenou13'" :netlify="netlify_url" :isFinshed="False">
            <template v-slot:default>
                <svg fill="none" stroke-linecap="square" stroke-miterlimit="10" version="1.1" viewBox="0 0 226.77 226.77" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(8.964 4.2527)" fill-rule="evenodd" stroke="#000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="4">
                        <path d="m63.02 200.61-43.213-174.94 173.23 49.874z"/>
                        <path d="m106.39 50.612 21.591 87.496-86.567-24.945z"/>
                        <path d="m84.91 125.03-10.724-43.465 43.008 12.346z"/>
                        <path d="m63.458 38.153 10.724 43.465-43.008-12.346z"/>
                        <path d="m149.47 62.93 10.724 43.465-43.008-12.346z"/>
                        <path d="m84.915 125.06 10.724 43.465-43.008-12.346z"/>
                    </g>
                </svg>
            </template>
        </Project>
        <Project :title="'Customizable GPT'" :projectcontent="'Upcoming Customizable GPT'" :gitHub="'https://github.com/Cheenou13'" :netlify="netlify_url" :isFinshed="False">
            <template v-slot:default>
                <svg fill="none" stroke-linecap="square" stroke-miterlimit="10" version="1.1" viewBox="0 0 226.77 226.77" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(8.964 4.2527)" fill-rule="evenodd" stroke="#000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="4">
                        <path d="m63.02 200.61-43.213-174.94 173.23 49.874z"/>
                        <path d="m106.39 50.612 21.591 87.496-86.567-24.945z"/>
                        <path d="m84.91 125.03-10.724-43.465 43.008 12.346z"/>
                        <path d="m63.458 38.153 10.724 43.465-43.008-12.346z"/>
                        <path d="m149.47 62.93 10.724 43.465-43.008-12.346z"/>
                        <path d="m84.915 125.06 10.724 43.465-43.008-12.346z"/>
                    </g>
                </svg>
            </template>
        </Project>

    </div>
</template>

<script>
import Project from '../reusables/Project.vue';
import imgSrc from '../../assets/imgs/3D.jpg';
export default {
    name: "Projects",
    components: {
        Project
    },
    data() {
        return {
            gitHub_url: "https://github.com/Cheenou13/3D-rendering",
            name: "3D Manufacturing Lines",
            netlify_url: "https://3d-manufacturing.netlify.app/",
            isFinshed: true,
            img: imgSrc
        }
    },
}
</script>

<style scoped>
    .projects-wrapper {
        opacity: 1;
        transform: perspective(1200px);
        display: grid;
        gap: 16px;
        grid-auto-rows: min-content;
        grid-template-columns: repeat(auto-fill, 434px);
        justify-content: center;
        height: 23%;
        /* height:auto; */
        width: 93%;
        max-width: 1440px;
        padding: 0px;
        top: 1364px;
        left: calc(50% - min(1440px,92.63888888888889%) / 2);
        overflow: visible;
        position: absolute;
    }

</style>