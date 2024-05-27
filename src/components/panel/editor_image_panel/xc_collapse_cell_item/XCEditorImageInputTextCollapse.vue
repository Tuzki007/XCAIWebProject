<template>
    
    <el-collapse-item>
      
        <template #title>
        
            <div class="title-content">
        
                <span class="title-text">{{ title }}</span>
        
            </div>
      
        </template>

        <div class="input-container">
            <el-input v-model="inputViewContent" :placeholder="placeholder" class="rounded-input"></el-input>
        </div>

        <div class="font-option-container">
          <el-select v-model="fontValue" placeholder="请选择字体">
            <el-option
              v-for="item in fontOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>

        <div class="font-size-option-container">
          <el-select v-model="fontSizeValue" placeholder="请选择字号">
            <el-option
              v-for="item in fontSizeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>

        <div class="font-size-option-container">
          <el-select v-model="textColorValue" placeholder="请选择颜色">
            <el-option
              v-for="item in textColorOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>

        <el-button type="success" round @click="insertTextEvent">
            插入文字
        </el-button>

        <el-button type="warning" round @click="exportEditEvent">
            导出编辑
        </el-button>
    
    </el-collapse-item>

</template>
  

<script setup>
import { ref, defineProps, watch } from 'vue';
import { UserConfigStore } from '../../../xc_stores/XCUserConfigStore'

// 用户配置信息(单例)
const userConfigStore = UserConfigStore()
  
// 定义组件的属性
const props = defineProps({
    title: {
      type: String,
      default: '编辑'
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    modelValue: {
      type: String,
      default: ''
    }
});
  
// 使用 ref 创建响应式数据
const inputViewContent = ref(props.modelValue);

// 监听 inputViewContent 的变化，并同步更新父组件的 v-model
// watch(inputViewContent, (newValue) => {
//     emit('update:modelValue', newValue);
// });
  
// // 定义组件的事件
// const emit = defineEmits(['update:modelValue']);

// 字体选择
const fontOptions = ref([
  { value: 'Arial', label: 'Arial' },
  { value: 'Brush Script MT', label: 'Brush Script MT' },
  { value: 'Lucida Handwriting', label: 'Lucida Handwriting' },
  { value: 'Comic Sans MS', label: 'Comic Sans MS' },
  { value: 'Verdana', label: 'Verdana' },
  { value: 'Georgia', label: 'Georgia' },
  { value: 'Garamond', label: 'Garamond' },
  { value: 'Helvetica', label: 'Helvetica' },
  { value: 'Roboto', label: 'Roboto' },
]);

// 字号
const fontSizeOptions = ref([

  { value: 6, label: 'size6' },
  { value: 8, label: 'size8' },
  { value: 10, label: 'size10' },
  { value: 12, label: 'size12' },
  { value: 14, label: 'size14' },
  { value: 16, label: 'size16' },
  { value: 18, label: 'size18' },
  { value: 20, label: 'size20' },
  { value: 22, label: 'size22' },
  { value: 24, label: 'size24' },
  { value: 26, label: 'size26' },
  { value: 28, label: 'size28' },
  { value: 30, label: 'size30' },
  { value: 32, label: 'size32' },
  { value: 34, label: 'size34' },
  { value: 36, label: 'size36' },
  { value: 38, label: 'size38' },
]);

// 字号
const textColorOptions = ref([

  { value: '#FFFFFF', label: 'White' },
  { value: '#000000', label: 'Black' },
  { value: '#6A5ACD', label: 'SlateBlue' },
  { value: '#8470FF', label: 'LightSlateBlue' },
  { value: '#00BFFF', label: 'DeepSkyBlue' },
  { value: '#87CEFA', label: 'LightSkyBlue' },
  { value: '#54FF9F', label: 'SeaGreen1' },
  { value: '#00FF7F', label: 'SpringGreen1' },
  { value: '#FFF68F', label: 'Khaki1' },
  { value: '#FFFF00', label: 'Yellow1' },
  { value: '#FF6A6A', label: 'IndianRed1' },
  { value: '#FF3030', label: 'Firebrick1' },
]);

// 字体结果
const fontValue = ref('');
// 字号结果
const fontSizeValue = ref('');
// 字号结果
const textColorValue = ref('');

// 插入文字按钮事件
const insertTextEvent = () => {

  // 按钮点击
  userConfigStore.insertButtonState = true

  // 设置字体
  userConfigStore.currentFont = fontValue.value

  // 设置字号
  userConfigStore.currentFontSize = fontSizeValue.value

  // 设置颜色
  userConfigStore.currentColor = textColorValue.value

  // 设置文案
  userConfigStore.currentTitle = inputViewContent.value
}

// 导出按钮事件
const exportEditEvent = () => {

  userConfigStore.exportButtonState = true
  console.log("导出按钮事件");
}


</script>
  
<style scoped>

/* 标题 */
.title-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.title-text {
    font-weight: bold;
}

/* 输入框 */
.input-container {
  padding: 23px; /* 上下左右各20px的间距 */
  width: 100%;
  box-sizing: border-box; /* 包括内边距在内计算宽度 */
}

/* 字体选择框 */
.font-option-container{
  padding: 23px; /* 上下左右各20px的间距 */
  width: 100%;
  box-sizing: border-box; /* 包括内边距在内计算宽度 */
}

/* 字号选择框 */
.font-size-option-container{
  padding: 23px; /* 上下左右各20px的间距 */
  width: 100%;
  box-sizing: border-box; /* 包括内边距在内计算宽度 */
}

::v-deep .rounded-input .el-input__inner {
  border-radius: 30px; /* 调整为你想要的圆角大小 */
}


</style>
  