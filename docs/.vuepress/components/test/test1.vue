<template>
  <div class="demo-button">
    <div>
    <TKProportional
    :options = "option1"
    />
    <TKProportional
    :options = "option2"
    :width = 200
    :stroke-width = 20
    />
    </div>
  </div>
</template>

<script>

import 'tkcloud-ui'
import 'tkcloud-ui/dist/tkcloud-ui.css'

export default {
  name: 'app',
  data () {
    return {
      option1: [
        {
          label: 'jquery',
          value: 20
        },
        {
          label: 'angular',
          value: 20
        },
        {
          label: 'react',
          value: 25
        },
        {
          label: 'vue',
          value: 35
        }
      ],
      option2: [
        {
          label: 'jquery',
          value: 20,
          color: '#f00'
        },
        {
          label: 'angular',
          value: 20,
          color: 'green'
        },
        {
          label: 'react',
          value: 25,
          color: 'rgb(0,255,0)'
        },
        {
          label: 'vue',
          value: 35,
          color: 'rgba(0,0,0,0)'
        }
      ]
    }
  }
}
</script>
<style>
.demo-button{
  width:100%;
}
</style>
