# 比例条
---

<Common-Democode title="基本用法" description="基本按钮用法">
  <test-test1></test-test1>
  <highlight-code slot="codeText" lang="vue">
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
      },
      components: {
        TKProportional
      }
    }
  </highlight-code>
</Common-Democode>

| 属性             | 说明           | 类型       |可选值                  |默认值  |
| -------------    |:-------------:| -------: | --------------------:  |-----:|
| width            | 比例条长度（px） | Number  |>0                       |100%  |
| stroke-width     | 比例条宽度 (px) | Number  |>0                       |8      |
| options          | 数据           | Array   |属性：label，value，color  |--   |