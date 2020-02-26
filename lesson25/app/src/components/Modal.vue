<template>
    <div class="test" :class="{'show': visible == true }">
        <span @click="switcher" class="close">X</span>
        <div><slot name="header"></slot></div>
        <div><slot name="content"></slot></div>
        <div><slot name="footer"></slot></div>
    </div>
</template>

<script>
    export default {
        name: 'Modal',
        props: {
            visible: Boolean
        },
        methods: {
            switcher () {
                this.$emit("receive")
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .test {
        width: 400px;
        height: 500px;
        display: flex;
        visibility: hidden;
        background-color: #a9a9a9;
    }
    .show {
        visibility: visible;
    }

    .close {
        cursor: pointer;
        margin: 5px;
        position: relative;
        top: 10px;
        left: 92%;
    }
</style>