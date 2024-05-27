

<template>

  <div id="app">
    
    <el-container>
      
      <el-header hight="400px">

        <XCTopBarPanel/>

      </el-header>

      <el-container>

        <el-aside width="400px">
          <!-- Aside -->
          <XCLeftAsidePanel/>

        </el-aside>

        <el-container>

          <el-main>
            
            <XCImageMainPanel @imageDataCallBack="xcImageDataCallBack"/>
            
          </el-main>

        </el-container>

      </el-container>

      <el-footer>Footer</el-footer>

    </el-container>

  </div>

</template>



<script setup>

/* eslint-disable */

import { ref } from 'vue';
import XCImageMainPanel from './components/panel/XCImageMainPanel.vue'
import XCTopBarPanel from './components/panel/editor_image_panel/XCTopBarPanel.vue'
import XCLeftAsidePanel from './components/panel/editor_image_panel/XCLeftAsidePanel.vue'


// -------------------- 回调事件 --------------------

// ---------- （1）Panel回调事件 ----------

// ---------- （2）Panel回调事件 ----------

// ---------- （3）XCImageMainPanel回调事件 ----------
// XCImageMainPanel 回调事件

const selectedImageUrl = ref(null);

const xcImageDataCallBack = (url) => {
  selectedImageUrl.value = url;
  // console.log('selectedImageUrl',selectedImageUrl);
};

</script>

<style>
#app {
  display: flex;
  flex-direction: column;
}
.main-content {
  display: flex;
  justify-content: space-between;
}

.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>





