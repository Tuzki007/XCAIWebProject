
<template>
  <div class="xc_toolbar">

    <input type="file" ref="fileInput" @change="handleFileChange" multiple style="display: none;">

    <button @click="xcInsertImageClick('action1')">插入图片</button>

    <XCPreviewSettingPanel :previewSettingPanelVisible="popoverVisible">

      <button @click="togglePopover">按钮2</button>

    </XCPreviewSettingPanel>

    <button @click="onButtonClick('action3')">按钮3</button>

  </div>
</template>

<script setup>

/* eslint-disable */

import { ref, defineEmits, watch } from 'vue'
import XCPreviewSettingPanel from './settings/XCPreviewSettingPanel.vue'
import { UserConfigStore } from './xc_stores/XCUserConfigStore.ts'


// 创建UserConfigStore实例
const userConfigStore = UserConfigStore()
// 创建文件读取
const fileInput = ref(null);

// ---------- 暴露该方法，让父类能够拿到 ----------
// insert-image-click - 插入图片事件
// acquire-image-data - 获取图片内容事件
const emit = defineEmits(['insert-image-click'],["acquire-image-data"])


// 选择、插入图片时间
const xcInsertImageClick = (action) => {
  emit('insert-image-click', action);
  console.log(`按钮 ${action} 插入图片`);
  fileInput.value.click();

  // 测试打印全局存储
  console.log('缩放尺寸 userConfigStore.currentMultiple',userConfigStore.currentMultiple);
  console.log('颜色 userConfigStore.currentColor',userConfigStore.currentColor);
};

// const xcInsertImageClick = (action) => {
//   emit('insert-image-click', action);
//   console.log(`按钮 ${action} 插入图片`);
// };

const onButtonClick = (action) => {
  console.log(`按钮 ${action} 被点击了`);
};

// 获取下载路径方法
const handleFileChange = (event) => {

  const files = event.target.files;

  if (files.length > 0) {

    const file = files[0];

    const reader = new FileReader();

    reader.onload = (e) => {

      // console.log(e.target.result); // 这里是文件的内容
      emit('acquire-image-data', e.target.result);
    };
    reader.readAsDataURL(file); // 或者 reader.readAsText(file) 读取文本内容
  }
};



// ----------- 展示弹窗方法
const popoverVisible = ref(false);

function togglePopover() {
  console.log("展示弹窗控件");
  popoverVisible.value = !popoverVisible.value;
}


</script>

<style>

.xc_toolbar {
  display: flex; /* 使用Flexbox使按钮横向排列 */
  justify-content: space-between; /* 按钮之间平均分布空间 */
  padding: 10px; /* 内边距 */
  background-color: #f4f4f4; /* 背景色 */
}

button {
  padding: 8px 16px; /* 按钮的内边距 */
  margin: 0 5px; /* 按钮间隔 */
  background-color: #eee; /* 按钮背景色 */
  border: none; /* 去除边框 */
  border-radius: 4px; /* 圆角边框 */
  cursor: pointer; /* 鼠标样式 */
  transition: background-color 0.3s; /* 过渡效果 */
}

button:hover {
  background-color: #ddd; /* 鼠标悬浮时的背景色 */
}
</style>