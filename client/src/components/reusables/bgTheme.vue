<template>
    <div class="container-bg">
        <div class="contents">
            <div class="h-full w-full opacity-100 overflow-hidden z-[-1] relative" style="background-color: rgb(18, 17, 32);">
                <div class="bg-wrapper">
                    <div class="left"></div>
                    <div class="mid"></div>
                    <div class="right"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "bgTheme",
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

.container-bg {
        height: 612px;
        width: 1440px;
        left: calc(50% - 1440px/2);
        top: 260px;
        position: absolute;
    }
    .bg-wrapper {
        opacity: 1;
        height: 349px;
        width: 1254px;
        overflow: visible;
        left: calc(50% - 1254px/2);
        top: calc(49.83660130718957% - 349px / 2);
        position: absolute;
    }
    .left {
        opacity: 0.9;
        filter: blur(64px);
        background: radial-gradient(50% 50% at 50% 50%, hsl(263, 82%, 35%) 0%, rgba(87, 57, 53, 0) 100%);
        bottom: 0px;
        left: 0px;
        top: 0px;
        width: 838px;
        overflow: visible;
        position: absolute;
    }
    .mid {
        opacity: 0.95;
        filter: blur(64px);
        background: radial-gradient(50% 50% at 50% 50%, hsl(11, 32%, 44%) 0%, rgba(87, 57, 53, 0) 100%);
        bottom: 0px;
        right: 0px;
        top: 0px;
        width: 864px;
        overflow: visible;
        position: absolute;
    }
    .right {
        opacity: 0.7;
        filter: blur(64px);
        background: radial-gradient(50% 50% at 50% 50%, hsl(243, 50%, 48%) 0%, rgba(87, 57, 53, 0) 100%);
        height: 295px;
        width: 324px;
        left: calc(49.9202551834131% - 324px / 2);
        top: calc(49.83660130718957% - 295px / 2);
        overflow: visible;
        position: absolute;
    }
</style>