<template>
  <button
    class="tk-proportional"
    @click="handleClick"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="button"
    :class="[
      type ? 'tk-proportional--' + type : '',
      buttonSize ? 'tk-proportional--' + buttonSize : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round
      }
    ]"
  >
      <span class="language-color" aria-label="Vue 60.0%" style="width:60.0%; background-color:#2c3e50;" itemprop="keywords">Vue</span>
  </button>
</template>
<script>
export default {
  name: 'TKProportional',

  inject: {
    elFormItem: {
      default: ''
    }
  },

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean
  },

  computed: {
    _elFormItemSize () {
      return (this.elFormItem || {}).elFormItemSize
    },
    buttonSize () {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
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
.top-bar-tooltip {
  font-size: 18px;
}

a {
  color: black;
}
</style>
