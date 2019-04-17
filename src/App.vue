<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TKProportional
    :options = "options"
    />
    <TKProportional
    :options = "options"
    />
    <TKProportional
    :options = "options"
    :width = "200"
    :stroke-width = 20
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
          value: 20,
          color: 'red'
        },
        {
          label: 'ssda'
        },
        {
          value: 28,
          label: 'sdda'
        },
        {
          value: 25,
          label: 'sdfa'
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
