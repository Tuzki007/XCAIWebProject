<template>

  <el-collapse accordion>

    <el-collapse-item title="照片底色">
      <template slot="照片底色">
        一致性 Consistency
        <!-- <i class="header-icon el-icon-info"></i> -->
      </template>
      <div>内容1</div>
      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
    </el-collapse-item>

    <el-collapse-item title="照片尺寸">
      <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
      <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
    </el-collapse-item>

    <el-collapse-item title="超清美颜" class="custom-content">
      <div>简化流程：设计简洁直观的操作流程；</div>
      <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
      <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
    </el-collapse-item>

    <el-collapse-item title="智能补光">
      <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
      <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
    </el-collapse-item>

    <!-- <el-collapse-item>
      <template #title>
        <div class="title-content">
          <span class="title-text">编辑照片</span>
        </div>
      </template>
      <el-input v-model="inputViewContent" placeholder="请输入内容"></el-input>
      <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
      <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
    </el-collapse-item> -->

    <XCEditorImageInputTextCollapse 
      v-model="inputContent" 
      title="编辑照片" 
      placeholder="请输入内容"
    />

    <el-collapse-item>
      <template #title>
        <div class="title-content">
          <el-icon>
            <document />
          </el-icon>
          <span class="title-text">照片底色</span>
        </div>
      </template>

      <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    </el-collapse-item>

  </el-collapse>

</template>


<script setup>
import { defineProps, computed, ref, watch } from 'vue';
import { Document } from '@element-plus/icons-vue';
import XCEditorImageInputTextCollapse from './xc_collapse_cell_item/XCEditorImageInputTextCollapse.vue'

// const inputViewContent = ref('');
const inputContent = ref('初始内容');

// watch(
//   () => inputViewContent,
//   (inputContent, preInputContent) => {
//     console.log('zxc inputContent',inputContent);
//     console.log('zxc preInputContent',preInputContent);
//   }
// );

</script>

<style scoped>

.title-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.title-text {
  margin-left: 8px;
}

.custom-content {
  text-align: center; /* 修改内容文字的对齐方式 */
}

.el-collapse-item__header {
  justify-content: center; /* 使用Flexbox居中标题 */
}

</style>