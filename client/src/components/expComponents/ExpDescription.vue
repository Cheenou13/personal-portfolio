
<template>
    <div class="exp-desc-wrapper bg-slate-50">
        <div class="exp-desc-container">

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
        width: 688px;
        left: calc(50% - 688px/2);
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
        height: 28px;
        left: -376px;
        right: -376px;
        top: 1px;
        position: absolute;
        white-space: pre-wrap;
        word-wrap: break-word;
        word-break: break-word;
    }
</style>