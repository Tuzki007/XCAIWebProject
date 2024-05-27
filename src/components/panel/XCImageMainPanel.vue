<template>

    <template v-if="imageUrl == ''">

      <div class="drag_image_container">
        <el-button type = "success" @click="openImageFile">
            打开图片
        </el-button>
        <input type="file" ref="fileInput" @change="handleFileChange" style="display: none;" accept="image/*" />

        <div class="drop-zone" @dragover.prevent="handleDragOver" @drop.prevent="handleDrop">
            拖拽图片到这里
        </div>
      </div>
    </template>
      <div v-if="imageUrl">
        <!-- <img :src="imageUrl" alt="Dropped Image" class="uploaded-image"/> -->

        <!-- <XCImageEditorImagePanel :panelImageUrl = "imageUrl" /> -->
        <XCImageView :imageViewUrl = "imageUrl"/>
      </div>
    <template v-else>

    </template>

</template>


<script setup>

/* eslint-disable */
import { ref, defineEmits, watch } from 'vue';
import { UserConfigStore } from '../xc_stores/XCUserConfigStore';
import  XCImageEditorImagePanel  from './editor_image_panel/XCImageEditorImagePanel.vue';
import  XCImageView from '../../views/XCImageView.vue'

const userConfigStore = UserConfigStore();

const insertText = ref(userConfigStore.currentTitle);

watch(() => insertText,(newValue, oldValue) => {
  console.log('zzzzzz newValue',newValue);
})

// ---------- CallBack回调事件 ----------
// insert-image-click - 插入图片事件
// imageDataCallBack - 获取图片内容回调用事件
// const emit = defineEmits(['insert-image-click'],["imageDataCallBack"])
const emit = defineEmits(['imageDataCallBack']);


// --------------- 本地变量 ---------------
const fileInput = ref(null);
// 图片内容
const imageUrl = ref('');


// --------------- 按钮点击事件 ---------------
// 打开相册按钮事件
const openImageFile = () => {
  fileInput.value.click();
};

// 打开相册方法
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {

      imageUrl.value = e.target.result;

      // console.log('imageUrl',imageUrl);

      // 给全局单例添加图片
      userConfigStore.currentImage = imageUrl.value
      // userConfigStore.setCurrentImage(imageUrl.value)
      // 回调用事件
      // emit('imageDataCallBack', imageUrl.value);
      emit('imageDataCallBack', imageUrl.value);
    };
    reader.readAsDataURL(file);
  }
};

// --------------- 拖拽图片事件 ---------------
// 图片拖拽事件
function handleDragOver(event) {
  // 阻止默认行为
  event.preventDefault();
}

// 图片拖拽事件
function handleDrop(event) {
  event.preventDefault();
  const files = event.dataTransfer.files;
  if (files.length > 0) {
    const file = files[0];
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // 拖拽进来的图片赋值给imageUrl
        imageUrl.value = e.target.result;
        console.log(imageUrl.value);
      };
      reader.readAsDataURL(file);
    }
  }
}

</script>


<style scoped>

.container {
  display: flex;
  align-items: center; /* 垂直居中 */
  gap: 10px; /* 控件之间的间距 */
}

.drop-zone {
  border: 2px dashed #ccc;
  padding: 10px;
  text-align: center;
  cursor: pointer;
}

</style>
