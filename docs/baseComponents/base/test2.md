# 可变色环形进度条
---

<Common-Democode title="基本用法" description="基本可变色环形进度条用法">
  <test-test2></test-test2>
  <highlight-code slot="codeText" lang="vue">
      <template>
        <section class = "p-test">
          <circle-progress
            v-if = "isShow"
            ref = "$circle"
            class = "progress"
            :isAnimation = "true"
            :isRound = "true"
            :width ="width"
            :radius = "radius"
            :progress = "progress"
            :barColor = "barColor"
            :text = "text"
            :duration = "duration"
            :fontColor = "fontColor"
            :delay = "delay"
            :timeFunction = "timeFunction"
            :backgroundColor = "backgroundColor"
            :textfont = "textfont"
          >
          </circle-progress>
          <ul>
            <li>
              <label for="width">圆宽（px）:</label>
              <input v-model="width" id="width" type="number" placeholder="例如：140"></li>
            <li>
              <label for="radius">进度条宽度（px）:</label>
              <input v-model="radius" id="radius" type="number" placeholder="例如：12"></li>
            <li>
              <label for="progress">进度百分比:</label>
              <input v-model="progress" id="progress" type="text" placeholder="例如：70"></li>
            <li>
              <label for="backgroundColor">背景颜色:</label>
              <input v-model="backgroundColor" id="backgroundColor" type="text" placeholder="例如：#FFE8CC">
            </li>
            <li>
              <label for="duration">动画时长（ms）:</label>
              <input v-model="duration" id="duration" type="number" placeholder="例如：1000">
            </li>
            <li>
                <label for="delay">延迟执行（ms）:</label>
                <input v-model="delay" id="delay" type="number" placeholder="例如：200">
            </li>
            <li>
                <label for="text">居中显示:</label>
                <input v-model="text" id="text" type="text" placeholder="例如：20">
            </li>
            <li>
                <label for="textfont">字体大小:</label>
                <input v-model="textfont" id="textfont" type="text" placeholder="例如：20">
            </li>
            <li>
                <label for="text">字体颜色:</label>
                <input v-model="fontColor" id="text" type="text" placeholder="例如：#FFE8CC">
            </li>
            <li>
                <label for="text">进度条颜色（开始）:</label>
            <input v-model="barColor[0]" id="text" type="text" placeholder="例如：#FFE8CC">
            </li>
            <li>
                <label for="text">进度条颜色（中间）:</label>
                <input v-model="barColor[1]" id="text" type="text" placeholder="例如：#FFE8CC">
            </li>
            <li>
                <label for="text">进度条颜色（最后）:</label>
                <input v-model="barColor[2]" id="text" type="text" placeholder="例如：#FFE8CC">
            </li>
            <li>
              <label for="timeFunction">缓动算法:</label>
              <input v-model="timeFunction" id="timeFunction" type="text" placeholder="例如：cubic-bezier(0.99, 0.01, 0.22, 0.94)">
            </li>
            <li>
              <div class="btn" @click="reset">重置动画</div>
            </li>
          </ul>
        </section>
    </template>
<script>
export default {
  data () {
    return {
      isShow: true,
      width: 200,
      radius: 20,
      progress: 70,
      duration: 1000,
      delay: 20,
      text: '20',
      textfont: 20,
      fontColor: '#4352f3',
      barColor: ['#4352f3', '#ab5aea', '#e52c5c'],
      backgroundColor: '#FFE8CC',
      timeFunction: 'cubic-bezier(0.99, 0.01, 0.22, 0.94)'
    }
  },
  methods: {
    reset () {
      this.$refs.$circle.load()
      this.isShow = false
      this.$nextTick(() => {
        this.isShow = true
      })
    }
  }
}
</script>
  </highlight-code>
</Common-Democode>

| 属性             | 说明           | 类型       |可选值                  |默认值   |
| -------------    |:-------------:| -------: | --------------------:  |-----:  |
| width            | 圆宽高（px）    | Number  |    >0                   |--      |
| radius           | 进度条宽度 (px) | Number  |    >0                   |--      |
| progress         | 进度条百分比（%）| Number  |>=0 &&<=100>             |--      |
| backgroundColor  | 背景颜色        | String  |色值                     |--      |
| duration         | 动画时长（ms）   | Number  |>=0                     |1000    |
| delay            | 动画延迟时长（ms）| Number  |>=0                     |200     |
| text             | 圆环中间显示的值 | String  |--                       |--      |
| textfont         | 字体大小（px）   | Number  |>0                      |--      |
| fontColor        | 字体颜色         | String  |色值                    |#e52c5c  |
| barColor         |进度条颜色        | String, Array  |色值或数组三个色值  |--      |
| timeFunction     | 缓动算法           | String  |--            |cubic-bezier(0.99, 0.01, 0.22, 0.94)     |