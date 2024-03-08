//通过vue-router插件实现路由模板配置
import { createRouter, createWebHashHistory } from 'vue-router'
//引入常量路由
import { constantRoute } from './route'

//创建路由器
const router = createRouter({
    //路由模式hash
    history: createWebHashHistory(),
    routes: constantRoute,
    //滚动行为,切换页面时页面来到最顶部
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }

})
export default router