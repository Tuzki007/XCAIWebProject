<template>

  <div>

    <canvas ref="canvasRef" style="border: 1px solid black;">
      
    </canvas>

  </div>

</template>


<script setup>
import { ref, defineProps, watch, defineComponent, onMounted } from 'vue';
import { UserConfigStore } from '../components/xc_stores/XCUserConfigStore';
import Vue3DraggableResizable from 'vue3-draggable-resizable';
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'; // 引入样式
import { fabric } from 'fabric';

const userConfigStore = UserConfigStore();

const props = defineProps({
  imageViewUrl: String, 
});

// ---------- 画布图层 ----------
const canvasRef = ref(null);
let canvas;

onMounted(() => {

  if (canvasRef.value) {

    canvas = new fabric.Canvas(canvasRef.value);
    loadImageFromUrl(props.imageViewUrl);

    // 监听画布点击事件，将所有文字带到最前面
    canvas.on('mouse:down', (options) => {
      if (options.target) {
        console.log('Clicked on an object');
      } else {
        console.log('Clicked on canvas');
        imageToBack(); // 无论点击何处，都确保图片在底层
      }
    });
  }
});

// ---------- 文字部分 ----------
// 要插入的文字
const insertText = ref(userConfigStore.currentTitle);

// // 字体
// let textFont = 'Arial'

// // 字号
// let textFontSize = 20

// // 文字颜色
// let textColor = '#000000'

const textFont = ref(userConfigStore.currentFont);

const textFontSize = ref(userConfigStore.currentFontSize);

const textColor = ref(userConfigStore.currentColor);


// 插入文字Event
watch(() => userConfigStore.currentTitle, (newValue, oldValue) => {
  
  if (userConfigStore.insertButtonState == true) {
    
    insertText.value = newValue; // 更新 insertText 的值

    userConfigStore.insertButtonState = false

    insertTextOnImage()
  }
});

watch(() => userConfigStore.currentFont, (newValue, oldValue) => {

  textFont.value = newValue;
});

watch(() => userConfigStore.currentFontSize, (newValue, oldValue) => {
  
  textFontSize.value = newValue;
});

watch(() => userConfigStore.currentColor, (newValue, oldValue) => {
  
  textColor.value = newValue;
});

// 导出图片
watch(() => userConfigStore.exportButtonState, (newValue, oldValue) => {
  
  if (userConfigStore.exportButtonState == true) {

    userConfigStore.exportButtonState = false

    const dataURL = canvas.toDataURL({
      format: 'png',
      quality: 1
    });

    const link = document.createElement('a');
    link.download = 'xc_image.png';
    link.href = dataURL;
    link.click();
  }
});

// ---------- 图片部分 ----------
watch(() => props.imageViewUrl, (newVal) => {

  imageUrl.value = newVal;
});

// 画布canvas上的图片
let imageObj;

const loadImageFromUrl = (url) => {
  if (url) {
    fabric.Image.fromURL(url, (img) => {

      const maxWidth = 800;
      const maxHeight = 800;
      let scaleFactor = 1;

      if (img.width > maxWidth || img.height > maxHeight) {
        scaleFactor = Math.min(maxWidth / img.width, maxHeight / img.height);
      }

      const scaledWidth = img.width * scaleFactor;
      const scaledHeight = img.height * scaleFactor;

      img.scaleToWidth(scaledWidth);
      img.scaleToHeight(scaledHeight);
      img.set({
        selectable: false,
        evented: false
      });

      canvas.setWidth(scaledWidth);
      canvas.setHeight(scaledHeight);
      canvas.clear();

      // 保留图片对象
      if (imageObj) {
        canvas.remove(imageObj);
      }

      imageObj = img;

      canvas.add(imageObj);
      imageObj.sendToBack();
      canvas.renderAll();
    });
  }
};

const imageUrl = ref(props.imageViewUrl);

// 插入文字
const insertTextOnImage = () => {
  
  const textObj = new fabric.Text(insertText.value, {
    left: 100,
    top: 100,
    fontFamily: textFont.value,
    fontSize: textFontSize.value,
    fill: textColor.value,
    // fontFamily: 'Arial',
    // fontSize: 20,
    // fill: '#000000',
  });

  canvas.add(textObj);

  // 确保图片始终在底层
  imageToBack();

  // bringTextToFront();
};

// 将图片移动到最下面的函数
const imageToBack = () => {
  if (imageObj) {
    console.log('当前图片 imageObj',imageObj);
    imageObj.sendToBack();
    // canvas.renderAll();
  }
};

// 图片移动到最下面
const bringTextToFront = () => {

  const objects = canvas.getObjects();

  objects.forEach((obj) => {
    if (obj.type === 'image') {
      obj.sendToBack();
    } else if (obj.type === 'text') {

    } else {

    }
  });

  canvas.renderAll(); // 重新渲染画布
};

</script>

<style scoped>
.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.resizable-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.resizable-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.text-overlay {
  position: absolute;
  pointer-events: none;
}

.controls {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>
