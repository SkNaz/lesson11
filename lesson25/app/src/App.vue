<template>
  <div id="app">
    <button @click="use">HIT ME</button>
    <modal :visible="visible" @receive="reuse">
      <template v-slot:header>BLOOD</template>
      <template v-slot:content>AIR</template>
      <template v-slot:footer>GRASS</template>
    </modal>
  </div>
</template>

<script>
import Modal from './components/Modal'

export default {
  name: 'App',
  data () {
    return {
       visible: false
    }
  },
  components: {
    Modal: Modal
  },
  methods: {
    use () {
      this.visible = true;
    },
    reuse () {
      this.visible = false;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
