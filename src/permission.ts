//路由鉴权；鉴权，项目中路由能不能被访问的权限的设置(某一个路由什么条件下可以访问，什么条件下不能访问)
import router from '@/router'
//引入进度条
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
//取消进度条的加载小圆圈
nprogress.configure({ showSpinner: false })
//引入setting配置文件
import setting from './setting'
//获取用户相关的小仓库内部token数据,去判断用户是否登录成功
import useUserStore from './store/modules/user';
import pinia from './store'
const userStore = useUserStore(pinia);

//全局守卫：项目当中任意路由切换都会触发的钩子
//全局前置守卫
router.beforeEach(async (to, from, next) => {
    //to:要访问的路由
    //from:从哪个路由来
    //next:放行函数

    //设置进度条
    nprogress.start()
    //获取token,去判断用户登录、还是未登录
    const token = userStore.token
    //获取用户名字
    const username = userStore.username
    if (token) {
        //登录成功之后还想访问登录界面，不能访问，指向首页
        if (to.path == '/login') {
            next({ path: '/' })
        } else {
            //登录成功之后访问其他路由
            //有用户信息
            if (username) {
                next();
            } else {
                //如果没有用户信息，在守卫这里发请求获取到了用户信息再放行
                try {
                    await userStore.userInfo();
                    next()
                } catch (error) {
                    //token过期：获取不到用户信息了
                    //用户手动修改本地存储token
                    //退出登录->用户相关的数据清空
                    userStore.userLogout();
                    next({ path: '/login', query: { redirect: to.path } })
                }

            }
        }
    } else {
        if (to.path == '/login') {
            next()
        } else {
            next({ path: '/login', query: { redirect: to.path } })
        }
    }
})
//全局后置守卫
router.afterEach((to, from, next) => {
    document.title = setting.title + '-' + to.meta.title
    nprogress.done()
})
//第一个问题:任意路由切换实现进度条业务 ---nprogress
//第二个问题:路由鉴权(路由组件访问权限的设置)
//全部路由组件:登录|404|任意路由|首页|数据大屏|权限管理(三个子路由)|商品管理(四个子路由)


//用户未登录:可以访问login,其余六个路由不能访问(指向login)
//用户登录成功:不可以访问login[指向首页],其余的路由可以访问