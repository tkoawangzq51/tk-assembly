<!--用户基本信息页面-->
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
import 'tkcloud-ui'
import 'tkcloud-ui/dist/tkcloud-ui.css'

// import CircleProgress from './components/circle'
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
<style scoped>
.p-test {
  padding: 60px;
  text-align: center;
  background-color: white;
}
.p-test ul {
    padding: 30px 20px;
    top: 50px;
    left: 50px;
    text-align: center;
    font-weight: bold;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1);
  }
.p-test li {
    margin-top: 14px;
    font-size: 16px;
    list-style: none;
  }
.p-test li:nth-child(1) {
    margin: 0
  }
.p-test label {
    display: inline-block;
    width: 140px;
    height: 24px;
    line-height: 24px;
    text-align: left;
  }
.p-test input {
    display: inline-block;
    padding: 0 10px;
    width: 150px;
    height: 24px;
    outline: none;
    font-size: 14px;
    border: solid 1px gray;
    border-radius: 2px;
    text-decoration: none
  }
.p-test .btn {
    margin: 30px auto 0;
    width: 200px;
    height: 40px;
    color: white;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
    border-radius: 4px;
    background-color: #3D8AC7;
  }
</style>
