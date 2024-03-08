import { createApp } from 'vue'
import App from './App.vue'
//引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//配置element-plus国际化
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

//获取应用实例对象
const app = createApp(App)
//安装element-plus插件
app.use(ElementPlus, {
    locale: zhCn//element-plus国际化
})
// console.log(import.meta.env)

//svg插件需要配置代码
import 'virtual:svg-icons-register'

//引入自定义插件对象：注册整个项目全局组件
import gloalComponent from '@/components/index'
//安装自定义插件
app.use(gloalComponent)

//引入模板的全局的样式
import '@/styles/index.scss'


//测试代码，测试接口能否使用
import axios from 'axios'
axios({
    url: '/api/user/login',
    method: "post",
    data: {
        username: 'admin',
        password: '1112111'
    }
})

//注册路由
import router from './router'
app.use(router)

//引入仓库
import pinia from './store/index'
app.use(pinia)





//将应用挂载在挂载点上
app.mount('#app')
