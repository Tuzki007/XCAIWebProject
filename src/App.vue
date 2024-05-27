<!-- <script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->





<template>
  
  <!-- <div>
    <div 
      class="drop-zone" @dragover.prevent="handleDragOver" @drop.prevent="handleDrop"
    >
      拖拽图片到这里
    </div>
    <div v-if="imageUrl">
      <img :src="imageUrl" alt="Dropped Image" class="uploaded-image"/>
    </div>
  </div> -->

  
  <div id="app">

    <!-- <XCToolbar 
    @insert-image-click="xcToolBarInsertImageAction" 
    @acquire-image-data = "xcToolBarHandleImageData" 
    />
    
    <div class="main-content">
      <XCImageEditor :xcImageData="xc_image_editor_data" />
      <XCCanvasImageRefEditor/>
      <Sidebar />
    </div> -->

    <el-container>

      <el-header hight="400px">

        <XCCanvasImageRefEditor/>
      
      </el-header>
      
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
import XCToolbar from './components/XCToolbar.vue'
import XCImageEditor from './components/XCImageEditor.vue'
import XCCanvasImageRefEditor from './components/XCCanvasImageRefEditor.vue'
// import Sidebar from './components/XCRightSidebar.vue'
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



// var xc_image_editor_data = ref('');

// const imageUrl = ref(null);

// function handleDragOver(event) {
//   event.preventDefault(); // 阻止默认行为
// }

// function handleDrop(event) {
//   event.preventDefault();
//   const files = event.dataTransfer.files;
//   if (files.length > 0) {
//     const file = files[0];
//     if (file.type.startsWith('image/')) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         imageUrl.value = e.target.result;
//         console.log(imageUrl.value);
//       };
//       reader.readAsDataURL(file);
//     }
//   }
// }


// const xcToolBarInsertImageAction = () => {
//   console.log(`收到子组件的按钮点击事件 插入图片`);
// };

// const xcToolBarHandleImageData = (data) => {
  
//   xc_image_editor_data.value = data
// }

// export default {
//   components: {
//     XCToolbar,
//     XCImageEditor,
//     // Sidebar
//   },
//   methods: {
    
//     xcToolBarInsertImageAction() {

//       console.log(`收到子组件的按钮点击事件 插入图片`);
//     },

//     xcToolBarHandleImageData(data) {

//       xc_image_editor_data.value = data
//     }
//   }
// }

// 处理图片数据
// function arrayBufferToBase64(buffer) {
//   let binary = '';
//   const bytes = new Uint8Array(buffer);
//   const len = bytes.byteLength;
//   for (let i = 0; i < len; i++) {
//     binary += String.fromCharCode(bytes[i]);
//   }
//   return window.btoa(binary);
// }

// export default {
//   name: 'App',
//   components: {
//     // HelloWorld
//   }
// }

</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.drop-zone {
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  margin: 20px;
}
.uploaded-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin-top: 20px;
} */

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





