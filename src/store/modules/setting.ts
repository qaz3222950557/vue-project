//小仓库：layout组件相关配置仓库
import { defineStore } from 'pinia'
const useLayoutSettingStore = defineStore('SettingStore', {
    state: () => {
        return {
            fold: false,//用户控制菜单折叠还是展开
            refresh: false,//点击刷新按钮后用于控制刷新
        }
    }
})
export default useLayoutSettingStore;