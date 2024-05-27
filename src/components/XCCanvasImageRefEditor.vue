<!-- <template>
    <div>
      <input type="file" @change="loadImage" accept="image/*" />
      <input type="text" v-model="text" placeholder="Enter text here" />
      <button @click="addText">Add Text</button>
      <button @click="exportImage">Export Image</button>
      <canvas ref="canvasRef" style="border: 1px solid black;"></canvas>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { fabric } from 'fabric';
  
  const canvasRef = ref<HTMLCanvasElement | null>(null);
  const text = ref('');
  let canvas: fabric.Canvas | undefined;
  
  onMounted(() => {
    if (canvasRef.value) {
      canvas = new fabric.Canvas(canvasRef.value);
    }
  });
  
  const loadImage = (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target!.result as string;
        img.onload = () => {
          const fabricImg = new fabric.Image(img, {
            left: 0,
            top: 0,
            scaleX: canvas!.getWidth() / img.width,
            scaleY: canvas!.getHeight() / img.height
          });
          canvas!.clear();
          canvas!.add(fabricImg);
        };
      };
      reader.readAsDataURL(file);
    }
  };
  
  const addText = () => {
    const textObj = new fabric.Text(text.value, {
      left: 50,
      top: 50,
      fontFamily: 'Arial',
      fontSize: 20,
      fill: '#000000'
    });
    canvas!.add(textObj);
  };
  
  const exportImage = () => {
    const dataURL = canvas!.toDataURL({
      format: 'png',
      quality: 1
    });
    const link = document.createElement('a');
    link.download = 'image.png';
    link.href = dataURL;
    link.click();
  };
  </script>
  
  <style scoped>
  canvas {
    border: 1px solid black;
  }
  </style>
   -->





<template>
  <div>
    <input type="file" @change="loadImage" accept="image/*" />
    <input type="text" v-model="text" placeholder="Enter text here" />
    <button @click="addText">Add Text</button>
    <button @click="exportImage">Export Image</button>
    <canvas ref="canvasRef" style="border: 1px solid black;"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fabric } from 'fabric';

const canvasRef = ref<HTMLCanvasElement | null>(null);
const text = ref('');
let canvas: fabric.Canvas | undefined;

onMounted(() => {
  if (canvasRef.value) {
    canvas = new fabric.Canvas(canvasRef.value);
  }
});

const loadImage = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target!.result as string;
      img.onload = () => {
        // Remove scale adjustment, set canvas size to image size
        canvas!.setWidth(img.width);
        canvas!.setHeight(img.height);
        const fabricImg = new fabric.Image(img, {
          left: 0,
          top: 0
        });
        canvas!.clear();
        canvas!.add(fabricImg);
        canvas!.renderAll();
        // Pre-add a text field to make sure it appears on top of the image
        addText();
      };
    };
    reader.readAsDataURL(file);
  }
};

const addText = () => {
  const textObj = new fabric.Text(text.value, {
    left: 50,
    top: 50,
    fontFamily: 'Arial',
    fontSize: 20,
    // fill: '#FFFFFF',
    fill: '#000000',
  });
  canvas!.add(textObj);
  textObj.bringToFront();
  // canvas!.renderAll();
};

const exportImage = () => {
  const dataURL = canvas!.toDataURL({
    format: 'png',
    quality: 1
  });
  const link = document.createElement('a');
  link.download = 'image.png';
  link.href = dataURL;
  link.click();
};
</script>



