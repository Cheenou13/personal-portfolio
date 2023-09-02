
<template>
    <div class="exp-desc-wrapper z-[2]">
        <div class="exp-desc-container">
            <p>UI/UX implementation, System Design, Database Optimazation, and Algorithm Analysis</p>
        </div>
        <div class="exp-intro-container">
            <p>Experienced Both Frontend and Backend development </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ExpDescription",
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
    .exp-desc-wrapper {
        opacity: 1;
        transform: perspective(1200px);
        height: 60px;
        width: 1080px;
        left: calc(50% - 1080px/2);
        top: 2924px;
        overflow: hidden;
        position: absolute;
    }
    .exp-desc-container {
        outline: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        transform: none;
        width: auto;
        height: 28px;
        left: -376px;
        right: -376px;
        top: 1px;
        position: absolute;
        white-space: pre-wrap;
        word-wrap: break-word;
        word-break: break-word;
    }
    .exp-desc-container p {
        font-family: "Inter-SemiBold", "Inter", sans-serif;
        font-size: 18px;
        font-weight: 600;
        line-height: 142.52%;
        text-align: center;
        color: rgb(245, 245, 245);
        padding: 0;
        margin: 0;
    }
    .exp-intro-container {
        outline: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        transform: translateX(-50%);
        height: auto;
        width: 660px;
        left: 50%;
        bottom: 0px;
        white-space: pre-wrap;
        word-break: break-word;
        word-wrap: break-word;
        position: absolute;
    }
    .exp-intro-container p {
        font-size: 16px;
        line-height: 1.3em;
        text-align: center;
        color: rgba(255, 255, 255, 0.3);
        padding: 0;
        margin: 0;
    }
</style>