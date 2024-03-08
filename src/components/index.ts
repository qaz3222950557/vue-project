// 引入作为全局对象的组件
import SvgIcon from './SvgIcon/TestSive.vue'
import Pagination from './Pagination/TestTest2.vue'
//引入element-plus提供全部图标组件
import *as ElementPlusIconsVue from '@element-plus/icons-vue'
// console.log(ElementPlusIconsVue);




//把组件放到对象中
const allGloabComponent: any = { SvgIcon, Pagination }

// 对外暴露插件对象
export default {
    // 这个方法一定要叫做install方法
    install(app: any) {
        // 注册项目全部的全局组件
        Object.keys(allGloabComponent).forEach(key => {
            app.component(key, allGloabComponent[key])
        });
        // 将element-plus提供图标注册为全局组件
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}