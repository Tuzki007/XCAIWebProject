declare namespace XCUserConfigModel {

    export interface UserConfig {
      
        // 当前缩放倍数
        currentMultiple: number;
      
        // 当前颜色
        currentColor: string;

        // 当前字体
        currentFont: string;

        // 当前字号
        currentFontSize: string;

        // 当前文字
        currentTitle: string;

        // 当前图片
        currentImage: any;

        // 插入按钮是否被点击
        insertButtonState: boolean;

        // 导出图片(true 导出)
        exportButtonState: boolean;
    }
  }