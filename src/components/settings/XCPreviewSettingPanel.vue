<template>
  <el-popover
    placement="bottom"
    trigger="manual"
    v-model:visible="previewSettingPanelVisible"
    width="500"
    class="centered-popover">

    <template #reference>
      <slot></slot>
    </template>

    <div class="content-wrapper">
      
      <div class="left-panel">
        <ul>

          <!-- <li v-for="(option, index) in SETTING_CONFIG_OPTIONS" :key="index" @click="selectItem(index)">
          
            {{ option.titleLabel }}
          </li> -->

          <div v-for="(option, index) in SETTING_CONFIG_OPTIONS" :key="index" @click="selectItem(index)">
          
            {{ option.titleLabel }}
          </div>

        </ul>
      </div>

      <div class="right-panel">

        <div v-if="selectedSection !== null">

          <template v-if="SETTING_CONFIG_OPTIONS[selectedSection].titleLabel === '倍数'">
            
            <el-select v-model="selectedItem1" placeholder="请选择倍数" @change="handelZoomChange">
              <el-option
                v-for="item in SETTING_CONFIG_OPTIONS[selectedSection].contentValue"
                :key="item.value"
                :label="item.titleLabel"
                :value="item.value">

              </el-option>
            
            </el-select>
            
          </template>

          <template v-else-if="SETTING_CONFIG_OPTIONS[selectedSection].titleLabel === '颜色'">

            <el-select v-model="selectedItem2" placeholder="请选择颜色" @change="handelColorChange">
            
              <el-option
                v-for="item in SETTING_CONFIG_OPTIONS[selectedSection].contentValue"
                :key="item.value"
                :label="item.titleLabel"
                :value="item.value">
              </el-option>
            
            </el-select>
          
          </template>
        </div>

        <div v-else>
          选择一个选项以显示详细信息。
        </div>
      </div>
    </div>
  </el-popover>
</template>

  

<script setup>

import { ref, watchEffect } from 'vue';
import { ElPopover, ElButton } from 'element-plus';
import { MAGNIFICATION_TIMES_OPTIONS, XC_SELECT_COLOR_OPTIONS, SETTING_CONFIG_OPTIONS } from '../xc_utils/XCConst.tsx';
import { UserConfigStore } from '../xc_stores/XCUserConfigStore.ts'

const props = defineProps({

  previewSettingPanelVisible: Boolean
});
  
const previewSettingPanelVisible = ref(props.previewSettingPanelVisible);
  
watchEffect(() => {
  
  previewSettingPanelVisible.value = props.previewSettingPanelVisible;
});

// const items = ref([
//   { title: '选项1', content: 'F**K TMD 设置面板内容1' },
//   { title: '选项2', content: 'F**K TMD 设置面板内容2' },
//   { title: '选项3', content: 'F**K TMD 设置面板内容3' },
//   // 更多选项...
// ]);

const selectedSection = ref(null);
const selectedItem1 = ref(null);
const selectedItem2 = ref(null);

// 创建UserConfigStore实例
const userConfigStore = UserConfigStore()


// 选中左侧列表
function selectItem(index) {
  selectedSection.value = index;
  console.log(' 选中的index ',index);
}

// 选中右侧 - 放大
function handelZoomChange(value){
  
  console.log('Zoom Selected value:', value);

  if (value == 1) {
    // 原始尺寸
    userConfigStore.currentMultiple = 1;
  } else if (value == 2) {
    // 放大 x2
    userConfigStore.currentMultiple = 2;
  } else if (value == 3) {
    // 放大 x3
    userConfigStore.currentMultiple = 3;
  } else if (value == 4) {
    // 放大 x4
    userConfigStore.currentMultiple = 4;
  }

  console.log('缩放尺寸 userConfigStore.currentMultiple',userConfigStore.currentMultiple);

}

// 选中右侧 - 颜色
function handelColorChange(value){
  
  console.log('Color Selected value:', value);

  if (value == 1) {
    userConfigStore.currentColor = '白色';
  } else if (value == 2) {
    userConfigStore.currentColor = '紫色';
  }

  console.log('颜色 userConfigStore.currentColor',userConfigStore.currentColor);

}



</script>


<style scoped>

.centered-popover .el-popper {
  position: fixed !important; 
  top: 50% !important; 
  left: 50% !important; 
  transform: translate(-50%, -50%) !important; 
  background-color: #e0f2f1; /* 浅绿色背景 */
  border-radius: 16px; /* 圆角 */
}

.content-wrapper {
  display: flex;
}
.left-panel {
  width: 50%;
}
.right-panel {
  width: 50%;
}

</style>

  
