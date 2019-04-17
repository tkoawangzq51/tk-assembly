<template>
  <div class = "tk-proportbar"
        :title = "proportionalTitle">
      <div
        class="tk-proportional"
        @click="handleClick"
        :style="{height: strokeWidth + 'px', width: width + 'px'}"
      >
          <div v-for = "todo in options" :key="todo.label + todo.value" :style="{width: todo.value + '%','background-color': todo.color,height: strokeWidth+'px'}" class="tk-proportional-progress" aria-label="" itemprop="keywords" :alt="todo.label"></div>
      </div>
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
    width: Number,
    strokeWidth: {
      type: Number,
      default: 8
    }
  },
  computed: {
    proportionalTitle () {
      let title = ''
      for (let i in this.options) {
        if (i !== '0') {
          title = title + '\n' + this.options[i].label + ':' + this.options[i].value + '%'
        } else {
          title = this.options[i].label + ':' + this.options[i].value + '%'
        }
      }
      return title
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
  },

  filters: {
    optionsstyle: function (todo) {
      let style = 'width:' + todo.value + '%; '
      if (typeof todo.color === 'string') {
        style += 'background-color:' + todo.color
      }
      return style
    }
  }
}
</script>

<style scoped>
.tk-proportional{
  width:100%;
  background-color: #eee;
  border-radius: 5px;
  height: 8px;
}
.language-color{
  height:8px;
}
.tk-proportional{
    display: inline-block;
    width: 100%;
    margin-right: 0;
    padding-right: 0;
    line-height: 1.5;
    overflow: hidden;
}
.tk-proportional-progress{
    width: 30%;
    float: left;
    height: 8px;
}
.tk-proportional .tk-proportional-progress:first-child {
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;
}
.tk-proportional .tk-proportional-progress:last-child {
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
}
.tk-proportional .tk-proportional-progress:nth-child(7n+1){
  background-color: #ff7373
}
.tk-proportional .tk-proportional-progress:nth-child(7n+2){
  background-color: #ffc273
}
.tk-proportional .tk-proportional-progress:nth-child(7n+3){
  background-color: #fffa73
}
.tk-proportional .tk-proportional-progress:nth-child(7n+4){
  background-color: #9eff73
}
.tk-proportional .tk-proportional-progress:nth-child(7n+5){
  background-color: #73dcff
}
.tk-proportional .tk-proportional-progress:nth-child(7n+6){
  background-color: #7387ff
}
.tk-proportional .tk-proportional-progress:nth-child(7n+7){
  background-color: #bf73ff
}

</style>
