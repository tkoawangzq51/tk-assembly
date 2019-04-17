<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TKProportional
    :options = "options"
    />
    <TKProportional
    :options = "options"
    size="small"
    />
  </div>
</template>

<script>
import TKProportional from './proportional'

export default {
  name: 'app',
  data () {
    return {
      options: [
        {
          value: 100,
          label: 'sda'
        }
      ]
    }
  },
  components: {
    TKProportional
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
