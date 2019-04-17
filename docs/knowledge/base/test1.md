# 测试案例1
---

<Common-Democode title="基本用法" description="基本按钮用法">
  <test-test1></test-test1>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-button">
        <div>
          <dt-button>默认按钮</dt-button>
          <dt-button type="primary">主要按钮</dt-button>
          <dt-button type="success">成功按钮</dt-button>
          <dt-button type="info">信息按钮</dt-button>
          <dt-button type="warning">警告按钮</dt-button>
          <dt-button type="danger">危险按钮</dt-button>
        </div>
      </div>
    </template>
  </highlight-code>
</Common-Democode>

| 属性             | 说明           | 类型    |可选值  |默认值  |
| -------------   |:-------------:| -------:| -----:|-----:|
| size            | 尺寸           | string  |small  |--    |