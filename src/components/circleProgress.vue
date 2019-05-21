<template>
    <div class = "circle">
        <svg :viewBox="getview()" :width="width" :height="width" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient x1="1" y1="0" x2="0" y2="0" id="gradient1">
                    <stop offset="0%" :stop-color="barColor[0] || barColor"></stop>
                    <stop offset="100%" :stop-color="barColor[1] || barColor"></stop>
                </linearGradient>
                <linearGradient x1="1" y1="0" x2="0" y2="0" id="gradient2">
                    <stop offset="0%" :stop-color="barColor[2] || barColor"></stop>
                    <stop offset="100%" :stop-color="barColor[1] || barColor"></stop>
                </linearGradient>
            </defs>
        <g :transform="rettran()">
            <circle :r="(width-radius)/2"
                :cy="width/2"
                :cx="width/2"
                :stroke-width="radius"
                :stroke="backgroundColor"
                fill="none"
            />
            <circle ref="$bar"
                :r="(width-radius)/2"
                :cy="width/2"
                :cx="width/2"
                stroke="url(#gradient1)"
                :stroke-width="radius"
                :stroke-linecap="isRound ? 'round' : 'square'"
                :stroke-dasharray="retdas()"
                :stroke-dashoffset="isAnimation ? (width-radius) * 3.14 : (width - radius) * 3.14 * (100 - progress) / 100"
                fill="none"
            />
            <circle ref="$bar1"
                :r="(width-radius)/2"
                :cy="width/2"
                :cx="width/2"
                stroke="url(#gradient2)"
                :stroke-width="radius"
                :stroke-linecap="isRound ? 'round' : 'square'"
                :stroke-dasharray="retdas()"
                :stroke-dashoffset="isAnimation ? (width-radius) * 3.14 : (width - radius) * 3.14 * (100 - progress) / 100"
                fill="none"
            />
            </g>
            <text :x="width/2" :y="width/2" :font-size="textfont+'px'"  text-anchor="middle"  style="fill:#000">
                {{text}}
            </text>
        </svg>
    </div>
</template>
<script>
export default {
  props: {
    width: [Number, String], // 圆的大小
    radius: [Number, String], // 进度条厚度
    progress: [Number, String], // 进度条百分比
    barColor: [String, Array], // 进度条颜色
    backgroundColor: String, // 背景颜色
    isAnimation: { // 是否是动画效果
      type: Boolean,
      default: true
    },
    isRound: { // 是否是圆形画笔
      type: Boolean,
      default: true
    },
    id: { // 组件的id，多组件共存时使用
      type: [String, Number],
      default: 1
    },
    duration: { // 整个动画时长
      type: [String, Number],
      default: 1000
    },
    delay: { // 延迟多久执行
      type: [String, Number],
      default: 200
    },
    timeFunction: { // 动画缓动函数
      type: String,
      default: 'cubic-bezier(0.99, 0.01, 0.22, 0.94)'
    },
    text: {
      type: String,
      default: ''
    },
    textfont: [Number, String]
  },
  data () {
    return {
      idStr: `circle_progress_keyframes_${this.id}`
    }
  },
  beforeDestroy () {
    // 清除旧组件的样式标签
    document.getElementById(this.idStr) && document.getElementById(this.idStr).remove()
  },
  mounted () {
    if (this.isAnimation) {
      // 重复定义判断
      if (document.getElementById(this.idStr)) {
        console.warn('vue-circle-progress should not have same id style')
        document.getElementById(this.idStr).remove()
      } // 生成动画样式文件
      let style = document.createElement('style')
      style.id = this.idStr
      style.type = 'text/css'
      let keyframes = `
            @keyframes circle_progress_keyframes_name_${this.id} {
            from {stroke-dashoffset: ${(this.width - this.radius) * 3.14}px;}
            to {stroke-dashoffset: ${(this.width * 3.14 - this.radius) * (100 - this.progress) / 100}px;}}
            .circle_progress_bar${this.id} {animation: circle_progress_keyframes_name_${this.id} ${this.duration}ms ${this.delay}ms ${this.timeFunction} forwards;}`
      let sadads = 50
      if (this.progress >= 50) {
        sadads = 50
      } else if (this.progress < 50) {
        sadads = this.progress
      }
      keyframes += `
            @keyframes circle_progress_keyframes_name_1${this.id} {
            from {stroke-dashoffset: ${(this.width - this.radius) * 3.14}px;}
            to {stroke-dashoffset: ${(this.width * 3.14 - this.radius) * (100 - sadads) / 100}px;}}
            .circle_progress_bar1${this.id} {animation: circle_progress_keyframes_name_1${this.id} ${this.duration}ms ${this.delay}ms ${this.timeFunction} forwards;}`
      style.innerHTML = keyframes
      // 添加新样式文件
      document.getElementsByTagName('head')[0].appendChild(style) // 往svg元素中添加动画class
      this.$refs.$bar.classList.add(`circle_progress_bar${this.id}`)
      this.$refs.$bar1.classList.add(`circle_progress_bar1${this.id}`)
    }
  },
  methods: {
    retdas () {
      let sdadas = (this.width - this.radius) * 3.14 + ' ' + (this.width - this.radius) * 3.14
      return sdadas
    },
    getview () {
      let sdadas = '0 0 ' + this.width + ' ' + this.width
      return sdadas
    },
    rettran () {
      let sdadas = 'matrix(0,-1,1,0,0,' + this.width + ')'
      return sdadas
    }
  }
}
</script>
<style scoped>
svg {
    transform: rotate(-0.05deg);
}
.time-second{
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin-top: -.75em;
    text-align: center;
    font-size: 100px;
}
</style>
