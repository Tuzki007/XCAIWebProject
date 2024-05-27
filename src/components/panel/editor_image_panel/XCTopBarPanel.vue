<template>
    <el-row :gutter="20">
        <el-col :span="6">
            <div class="grid-content bg-purple">
                <!-- <el-icon icon="el-icon-s-platform"/> -->
                <el-button type="primary" icon="el-icon-s-platform">
                    <span>XC Image Editor</span>
                </el-button>
            </div>
        </el-col>
        
        <el-col :span="6" :offset="12">
            <!-- <div class="grid-content bg-purple"></div> -->

            <el-button round type="warning">
                <span>重新上传</span>
            </el-button>
            <el-button round type="danger">
                <span>下载照片</span>
            </el-button>
        </el-col>
    </el-row>
</template>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>