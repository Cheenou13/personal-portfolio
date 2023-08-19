<template>
    <div class="name-container">
        <p class="name">I'm Cheenou</p>
    </div>
    <div class="profile-container">
        <div class="profile-img-container">
            <div class="contents  rounded-full">
                <img src="../../assets/linkedIn.jpg" alt="">
            </div>
        </div>
    </div>
    <div class="role-container">
        <div class="role-layout">
            <p>Junior</p>
            <p>Software</p>
            <p>Developer</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainContent",

    setup () {
        

        return {}
    }
}
</script>

<style scoped>
    .name-container {
        outline: none;
        display: flex;
        justify-content: flex-start;
        opacity: 1;
        transform: perspective(1200px) translateX(-50%);
        height:auto;
        width: auto;
        left: 50%;
        top: 76px;
        white-space: pre;
        position: absolute;

    }
    .name {
        font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
        font-size: 40px;
        font-weight: 700;
        color: rgb(245, 245, 245);
        opacity: 1;
    }

    .profile-container {
        opacity: 1;
        transform: perspective(1200px) translateX(-50%);
        aspect-ratio: 1/1;
        height: var(auto, 154px);
        width: 154px;
        left: 50%;
        top: 157px;
        overflow: visible;
        position: absolute;
    }
    .profile-img-container {
        position: absolute;
        pointer-events:none;
        user-select: none;
        border-radius: inherit;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .profile-img-container img {
        pointer-events: none;
        user-select: none;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        object-position: center;
        object-fit: cover;
        image-rendering: auto;
    }
    .role-container {
        opacity: 1;
        transform: perspective(1200px);
        bottom: 107px;
        height: 292px;
        width: 594px;
        left: calc(50% - 594px/2);
        mix-blend-mode: overlay;
        overflow: visible;
        position: absolute;
    }
    .role-layout {
        outline: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        transform: translateX(-50%);
        height: auto;
        width: auto;
        top: 0;
        left: 50%;
        text-shadow: 0px 0px 0px #ddd7b0;
        white-space: pre;
        color: #0099ff;
        position: absolute;


    }
    .role-layout p {
        font-family: "Inter-Black", "Inter", sans-serif;
        font-size: 97px;
        font-weight: 900;
        letter-spacing: 0.02em;
        text-align: center;
        color: rgba(245, 245, 245, 0.8);
        line-height: 1em;
    }

</style>