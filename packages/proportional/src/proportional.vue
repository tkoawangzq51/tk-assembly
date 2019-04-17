<template>
  <div
    class="tk-proportional"
    @click="handleClick"
    :class="[
      proportionalSize ? 'tk-proportional--' + proportionalSize : ''
    ]"
  >
      <span class="language-color" aria-label="Vue 60.0%" style="width:60.0%; background-color:#2c3e50;" itemprop="keywords">Vue</span>
  </div>
</template>
<script>
export default {
  name: 'TKProportional',

  props: {
    options: {
      type: Array,
      default () {
        return []
      }
    },
    colors: {
      type: Array,
      default () {
        return []
      }
    },
    size: String
  },

  data () {
    return {
      color: []
    }
  },

  computed: {
    proportionalSize () {
      return this.size
    }
  },

  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    },
    handleInnerClick (evt) {
      if (this.disabled) {
        evt.stopPropagation()
      }
    }
  }
}
</script>

<style scoped>
.tk-proportional{
  width:100%;
}
.tk-proportional--small{
  width:100px;
}
</style>
