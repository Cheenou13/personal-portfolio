<template>
    <section>
        <div class="left-header w-[50%] flex flex-row gap-3">
            <div class="logo">Logo</div>
            <div class="search">linkedIn</div>
        </div>
        <div class="right-header w-[50%]  ">Right Header</div>
    </section>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style  scoped>
    section {
        background-color: #f1f1f1;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        height: 54px;
        padding: 10px;
        /* width: 100%; */
        /* font-size: 30px; */
        margin: 10px;
    }
</style>