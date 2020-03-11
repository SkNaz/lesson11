<template>
  <div id="app" :class="{'back': backgr == true }">
    <button @click="use">HIT ME</button>
    <modal :visible="visible" @receive="reuse">
      <template>text</template>
      <template></template>
      <template></template>
    </modal>
  </div>
</template>

<script>
import Modal from './components/Modal'

export default {
  name: 'App',
  data () {
    return {
       visible: false,
       backgr: false
    }
  },
  components: {
    Modal: Modal
  },
  methods: {
    use () {
      this.visible = true;
      this.backgr = true;
    },
    reuse () {
      this.visible = false;
      this.backgr = false;
    }
  }
}
</script>

<style>
body {
  margin: 0px;
  width: 100vw;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  width: 100vw;
  height: 100vh;
}
.back {
  background-color: #a9a9a9;
}
</style>
