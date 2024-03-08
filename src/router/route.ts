//对外暴露常量路由
import login from '@/views/login/index.vue'
import e404 from '@/views/404/index.vue'
import home from '@/views/home/index.vue'
import layout from '@/layout/index.vue'

export const constantRoute = [
    {
        //登录
        path: '/login',
        component: login,
        name: 'Login',
        meta: {
            title: '登录',//菜单标题
            hidden: true,//代表路由标题在菜单中是否隐藏 true:隐藏 false:不隐藏
            icon: 'Promotion'//菜单文字左侧的图标，支持element-plus全部图标
        }
    },
    {
        //登录成功以后展示数据的路由
        path: '/',
        name: 'Layout',
        component: layout,
        meta: {
            title: 'layout',
            hidden: true,
            icon: 'Avatar'
        },
        children: [
            {
                path: '/home',
                component: home,
                name: 'Home',
                meta: {
                    title: '首页',
                    hidden: false,
                    icon: 'HomeFilled'
                }
            },
        ]
    },
    {
        path: '/screen',
        name: 'screen',
        component: () => import('@/views/screen/index.vue'),
        meta: {
            title: '数据大屏',
            hidden: false,
            icon: 'Platform'
        }

    },
    {
        path: '/acl',
        name: 'Acl',
        component: () => import('@/layout/index.vue'),
        naem: 'Acl',
        meta: {
            title: '权限管理',
            hidden: false,
            icon: 'Lock',
        },
        children: [
            {
                path: '/acl/user',
                name: 'Acl',
                component: () => import('@/views/acl/user/index.vue'),
                meta: {
                    title: '用户管理',
                    hidden: false,
                    icon: 'User'
                }
            },
            {
                path: '/acl/role',
                name: 'Role',
                component: () => import('@/views/acl/role/index.vue'),
                meta: {
                    title: '角色管理',
                    hidden: false,
                    icon: 'UserFilled'
                }
            },
            {
                path: '/acl/permission',
                name: 'Permission',
                component: () => import('@/views/acl/permission/index.vue'),
                meta: {
                    title: '菜单管理',
                    hidden: false,
                    icon: 'Monitor'
                }
            }
        ]
    },
    {
        path: '/product',
        component: () => import('@/layout/index.vue'),
        name: 'Product',
        meta: {
            title: '商品管理',
            icon: 'Goods',
        },
        redirect: '/product/trademark',
        children: [
            {
                path: '/product/trademark',
                component: () => import('@/views/product/trademark/index.vue'),
                name: "Trademark",
                meta: {
                    title: '品牌管理',
                    icon: 'ShoppingCartFull',
                }
            },
            {
                path: '/product/attr',
                component: () => import('@/views/product/attr/index.vue'),
                name: "Attr",
                meta: {
                    title: '属性管理',
                    icon: 'ChromeFilled',
                }
            },
            {
                path: '/product/spu',
                component: () => import('@/views/product/spu/index.vue'),
                name: "Spu",
                meta: {
                    title: 'SPU管理',
                    icon: 'Calendar',
                }
            },
            {
                path: '/product/sku',
                component: () => import('@/views/product/sku/index.vue'),
                name: "Sku",
                meta: {
                    title: 'SKU管理',
                    icon: 'Orange',
                }
            },
        ]
    },
    {
        //404路由
        path: '/404',
        name: '404',
        component: e404,
        meta: {
            title: '404',
            hidden: true,
            icon: 'DocumentDelete',
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Any',
        redirect: '/404',
        meta: {
            title: '任意路径',
            hidden: true,
            icon: 'DataLine'
        }
    }
]