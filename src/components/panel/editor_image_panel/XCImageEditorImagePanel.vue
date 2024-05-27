<template>
    <div class="panel_background">
      <img :src="templeImageUrl" alt="Loaded Image" ref="xc_dragImage" class="centered_image"
      draggable="true" @dragstart="dragStart" @dragend="dragEnd">
    </div>
</template>
<!-- <template>
  <div class="panel_background">
    <canvas ref="canvas" :width="canvasWidth" :height="canvasHeight" class="centered_image"></canvas>
  </div>
</template> -->


<script setup lang="ts">
import { ref, defineProps, computed, watchEffect, watch, onMounted } from 'vue';
import { UserConfigStore } from '../../xc_stores/XCUserConfigStore';

const userConfigStore = UserConfigStore();

// --------------- 属性监听 ---------------
// 对父组件暴露
const props = defineProps({
  panelImageUrl: String,
});

watch(() => props.panelImageUrl, (newVal) => {
  templeImageUrl.value = newVal;
});

// --------------- 属性定义 ---------------
// 图片
const templeImageUrl = ref(props.panelImageUrl);
const xc_dragImage = ref(null);

// 拖拽
const initialX = ref(0);
const initialY = ref(0);
const offsetX = ref(0);
const offsetY = ref(0);

// 拖拽事件
const dragStart = (event:any) => {

  initialX.value = event.clientX;
  initialY.value = event.clientY;
  if (xc_dragImage.value != null) {
    offsetX.value = xc_dragImage.value.offsetLeft;
    offsetY.value = xc_dragImage.value.offsetTop;
  }
};

// 拖拽事件
const dragEnd = (event:any) => {
  const deltaX = event.clientX - initialX.value;
  const deltaY = event.clientY - initialY.value;

  if (xc_dragImage.value != null) {
    xc_dragImage.value.style.left = `${offsetX.value + deltaX}px`;
    xc_dragImage.value.style.top = `${offsetY.value + deltaY}px`;
  }
};

</script>

<style scoped>

.panel_background {
  width: 500px;
  height: 500px;
  background-color: white;
  border: 1px solid #ccc; /* Optional: to make the background border visible */
  display: flex;
  justify-content: center;
  align-items: center;
}

.centered_image {
  width: 400px;
  height: 400px;
  position: absolute;
}

.image-slot {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #f5f5f5;
  color: #909399;
  font-size: 14px;
}

.dot {
  animation: dots 1s steps(5, end) infinite;
}

@keyframes dots {
  0%, 20% {
    color: rgba(0, 0, 0, 0);
    text-shadow: .25em 0 0 rgba(0, 0, 0, 0),
                 .5em 0 0 rgba(0, 0, 0, 0);
  }
  40% {
    color: black;
    text-shadow: .25em 0 0 rgba(0, 0, 0, 0),
                 .5em 0 0 rgba(0, 0, 0, 0);
  }
  60% {
    text-shadow: .25em 0 0 black,
                 .5em 0 0 rgba(0, 0, 0, 0);
  }
  80%, 100% {
    text-shadow: .25em 0 0 black,
                 .5em 0 0 black;
  }
}

.centered_image {
  display: block;
  margin: auto;
}
</style>

