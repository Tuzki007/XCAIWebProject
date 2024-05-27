
<template>
    <div class="xc_image_editor">
        <div v-if = "xcImageData" class="drag-container" @mousedown="startDrag">
            <img :src="xcImageData" alt="Loaded Image" ref="xc_dragImage">
        </div>
    </div>
</template>



<script setup>

/* eslint-disable */

import { ref, onUnmounted, watch, toRefs } from 'vue';

// const xc_imageData = ref('');

// 定义一个 prop 接收图片数据
const props = defineProps({
  xcImageData: String
});

// const { xcImageData } = toRefs(defineProps({
//   xcImageData: String
// }));

const xc_dragImage = ref(null);
const xc_position = ref({ x: 0, y: 0, startX: 0, startY: 0 });

watch(() => props.xcImageData, (newValue, oldValue) => {
  console.log(`xcImageData changed from ${oldValue} to ${newValue}`);
});

// watch(xcImageData, (newValue, oldValue) => {
//   console.log('xcImageData changed from', oldValue, 'to', newValue);
// });

// const handleImageData = (data) => {
//     xc_imageData.value = data;  // 设置图片数据
// };

const startDrag = (event) => {
  // 记录鼠标按下时的位置和图片的当前位置
  xc_position.value.startX = event.clientX - xc_position.value.x;
  xc_position.value.startY = event.clientY - xc_position.value.y;

  // 绑定事件
  document.addEventListener('mousemove', doDrag);
  document.addEventListener('mouseup', stopDrag);
};

const doDrag = (event) => {
  // 更新位置
  xc_position.value.x = event.clientX - xc_position.value.startX;
  xc_position.value.y = event.clientY - xc_position.value.startY;

  // 应用新位置
  if (xc_dragImage.value) {
    xc_dragImage.value.style.left = xc_position.value.x + 'px';
    xc_dragImage.value.style.top = xc_position.value.y + 'px';
  }
};

const stopDrag = () => {
  // 移除事件
  document.removeEventListener('mousemove', doDrag);
  document.removeEventListener('mouseup', stopDrag);
};

onUnmounted(() => {
  document.removeEventListener('mousemove', doDrag);
  document.removeEventListener('mouseup', stopDrag);
});


</script>



<style>
.drag-container {
  position: relative;
  width: fit-content;
  background-color: #f0f0f0; /* 例如设置为浅灰色 */
  cursor: grab; /* 为拖拽区域添加手型光标 */
}
img {
  position: absolute;
  cursor: grab;
}

</style>
