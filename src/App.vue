<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div>
    <div 
      class="drop-zone"
      @dragover.prevent="handleDragOver"
      @drop.prevent="handleDrop"
    >
      拖拽图片到这里
    </div>
    <div v-if="imageUrl">
      <img :src="imageUrl" alt="Dropped Image" class="uploaded-image"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import HelloWorld from './components/HelloWorld.vue'

const imageUrl = ref(null);

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  const files = event.dataTransfer.files;
  if (files.length > 0) {
    const file = files[0];
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // 用于展示图片
        imageUrl.value = e.target.result;
      };
      // 将文件作为 Data URL 读取
      reader.readAsDataURL(file);
    }
  }
}

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style>
#app {
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
}

</style>
