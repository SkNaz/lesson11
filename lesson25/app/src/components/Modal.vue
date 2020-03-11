<template>
    <div class="test" :class="{'show': visible == true }">
        <span @click="switcher" class="close">X</span>
        <div><slot></slot></div>
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
        border-radius: 8px;
        display: flex;
        visibility: hidden;
        background-color: #ffffff;
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
        color: red;
    }
</style>