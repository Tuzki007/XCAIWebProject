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
// import { UserConfigStore } from '@/xc_s'
import { UserConfigStore } from '../../../xc_stores/XCUserConfigStore'

// import { UserConfigStore } from '@/stores'

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
  { value: 'Verdana', label: 'Verdana' },
  { value: 'Times New Roman', label: 'Times New Roman' },
  { value: 'Courier New', label: 'Courier New' },
  { value: 'Georgia', label: 'Georgia' }
]);

// 字号
const fontSizeOptions = ref([
  { value: 'size6', label: '6' },
  { value: 'size8', label: '8' },
  { value: 'size10', label: '10' },
  { value: 'size12', label: '12' },
  { value: 'size16', label: '16' },
  { value: 'size18', label: '18' },
  { value: 'size20', label: '20' },
  { value: 'size22', label: '22' },
  { value: 'size24', label: '24' },

]);

// 字体结果
const fontValue = ref('');
// 字号结果
const fontSizeValue = ref('');

// 插入文字按钮事件
const insertTextEvent = () => {

  // 按钮点击
  userConfigStore.insertButtonState = true

  // 设置文案
  userConfigStore.currentTitle = inputViewContent.value

  // 设置字体
  userConfigStore.currentFont = fontValue

  // 设置字号
  userConfigStore.currentFontSize = fontSizeValue
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
  