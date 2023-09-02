<template>
    <div class="wrapper">
        <div class="contents">
            <div class="text-container-bg">
                <div class="content-container-wrapper z-[1]">
                    <div class="contents">
                        <div class="h-full w-full opacity-100 ">
                            <div class="bg-left"></div>
                            <div class="bg-mid"></div>
                            <div class="bg-right"></div>
                        </div>
                    </div>
                </div>
                <div class="inner-content-container">
                    <div class="experiece-content-container">
                        <p>2+ YEARS XP</p>
                    </div>
                    <div class="experiece-content-container-2">
                        <p>2+ YEARS XP</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "TextContents",
        props: {

        },
        setup () {
        }
    }
</script>

<style scoped>
    .wrapper {
        height: 471px;
        width: 1100px;
        left: calc(50% - 1100px/2);
        top: 2606px;
        position: absolute;
    }
    .text-container-bg {
        background-color: rgb(18, 17, 32);
        height: 100%;
        width: 100%;
        opacity: 1;
        overflow: visible;
        position: relative;
    }
    .top-content-container-bg {
        opacity: 0.8;
        transform: translate(-50%, -50%);
        aspect-ratio: 2.5869218500797446 / 1;
        height: var(--framer-aspect-ratio-supported, 384px);
        width: 993px;
        left: 50%;
        top: 50%;
        overflow: visible;
        position: absolute;
    }
    .content-container-wrapper {
        opacity: 1;
        inset: -80px -16px -91px 0;
        position: absolute;
       
    }
    .inner-content-container {
        transform: perspective(1200px);
        opacity: 1;
        height: 292px;
        width: 580px;
        left: calc(49.72222222222224% - 580px / 2);
        top: calc(49.734325185972395% - 292px / 2);
        overflow: hidden;
        position: absolute;
    }
    .bg-left {
        background: radial-gradient(50% 50% at 50% 50%, hsl(263, 82%, 35%) 0%, rgba(87, 57, 53, 0) 100%);
        filter: blur(64px);
        opacity: 1;
        height: 251px;
        width: 603px;
        top: calc(50.00000000000002% - 251px / 2);
        left: 107px;
        overflow: visible;
        position: absolute;
    }
    .bg-mid {
        background: radial-gradient(50% 50% at 50% 50%, hsl(11, 32%, 44%) 0%, rgba(87, 57, 53, 0) 100%);
        filter: blur(64px);
        opacity: 0.95;
        height: 251px;
        width: 621px;
        top: calc(50.00000000000002% - 251px / 2);
        right: 107px;
        overflow: visible;
        position: absolute;
    }
    .bg-right {
        background: radial-gradient(50% 50% at 50% 50%, hsl(243, 50%, 48%) 0%, rgba(87, 57, 53, 0) 100%);
        filter: blur(64px);
        opacity: 0.7;
        height: 213px;
        width: 233px;
        left: calc(49.910394265233% - 233px / 2);
        top: calc(50.00000000000002% - 213px / 2);
        overflow: visible;
        position: absolute;
    }
    .experiece-content-container {
        outline: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        /* background-color: rgba(245, 245, 245, 0.8); */
        color: rgb(0, 153, 255);
        /* text-decoration: underline; */
        text-shadow: rgba(0, 0, 0, 0.15) 0px 8px 13px;
        transform: translate(-50%, -50%);
        opacity: 1;
        height: auto;
        width: auto;
        top: 50%;
        left: 50%;
        white-space: pre;
        position: absolute;
    }
    .experiece-content-container p {
        font-family: "Inter-Black", "Inter", sans-serif;
        font-size: 56px;
        font-weight: 900;
        letter-spacing: 0.02em;
        line-height: 1em;
        text-align: center;
        color: rgba(245, 245, 245, 0.8);
        opacity: 0.85;
    }

    .experiece-content-container-2 {
        outline: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        /* background-color: rgba(245, 245, 245, 0.8); */
        color: rgb(0, 153, 255);
        /* text-decoration: underline; */
        text-shadow: rgb(221, 215, 176) 0px 0px 0px;
        transform: translate(-50%, -50%);
        opacity: 1;
        height: auto;
        width: auto;
        top: 50%;
        left: 50%;
        white-space: pre;
        position: absolute;

    }
    .experiece-content-container-2 p {
        font-family: "Inter-Black", "Inter", sans-serif;
        font-size: 56px;
        font-weight: 900;
        letter-spacing: 0.02em;
        line-height: 1em;
        text-align: center;
        color: rgba(245, 245, 245, 0.8);
        opacity: 0.85;
    }
</style>