import { defineStore } from 'pinia'

// 用户配置信息
export const UserConfigStore = defineStore('userConfig', {

    state: (): XCUserConfigModel.UserConfig => ({
        currentMultiple : 1,
        currentColor : '#000000',
        currentFont : 'Arial',
        currentFontSize: 20,
        currentTitle : "",
        currentImage: "",
        insertButtonState: false,
        exportButtonState: false,
    }),

    actions: {
        // 添加图片
        setCurrentImage(image: string) {
          this.currentImage = image;
        },
        // 添加文字
        setInputText(text: string) {
          this.currentTitle = text;
        },
        // 添加字体
        setInputFont(text: string) {
            this.currentFont = text;
        }
      }

})