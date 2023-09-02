<template>

    <div class="social-media-wrapper">
        <div class="contents">
            <a :href="url" :class="className" target="_blank">
                <div class="svg-container">
                    <div class="flex justify-center items-center w-full h-full ">
                        <slot></slot>
                    </div>
                </div>
            </a>
        </div>
    </div>

</template>

<script>
export default {
    name: "SocialMedia",
    props: {
        url: String,
        className: String,
    },
    setup () {
        

        return {}
    },
    data () {
        return {
            url: this.url,
            className: this.className,
        }
    }

}
</script>

<style scoped>

.social-media-wrapper {
        opacity: 1;
        width: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .svg-container{
        image-rendering: pixelated;
        opacity: 0.5;
        height: 22px;
        width: 22px;
        /* left: calc(50% - 22px/2);
        top: calc(50% - 22px/2); */
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.4s ease 0s;
    }
    .a-tag:hover {
        border-radius: 8px;
        background-color: rgb(32, 31, 48);
        padding: 1rem;
    }
    .a-tag:hover .svg-container {
        opacity: 1;
    }

</style>