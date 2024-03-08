<template>
    <div>
      <h2>引用element的例子</h2>
      <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
      <svg>
        <use xlink:href="#icon-first"></use>
      </svg>
    </div>
  </template>
  <script lang="ts" setup name="app">
  //引入图标
  import {Plus} from '@element-plus/icons-vue'
  
  </script>