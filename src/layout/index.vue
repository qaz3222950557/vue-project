<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
        <div class="layout_slider">
            <Logo></Logo>
            <!-- 滚动组件 -->
            <el-scrollbar class="scrollbar">
                <!-- 菜单组件 -->
                <el-menu :collapse="layoutSettingStore.fold" :default-active="$route.path" background-color="#001529"
                    text-color="white">
                    <!-- 根据路由动态生成菜单 -->
                    <Menu :menuList="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabbar" :class="{ fold: layoutSettingStore.fold }">
            <Tabbar></Tabbar>
        </div>
        <!-- 内容展示区域 -->
        <div class="layout_main" :class="{ fold: layoutSettingStore.fold }">
            <Main></Main>
        </div>

    </div>
</template>
<script lang="ts" setup>
//引入路由对象
import { useRoute } from 'vue-router';
//引入左侧导航栏引入logo组件
import Logo from '@/layout/logo/index.vue'
//引入左侧导航栏菜单组件
import Menu from '@/layout/menu/index.vue'
//引入顶部导航栏
import Tabbar from '@/layout/tabbar/index.vue'
//引入右侧内存展示区域
import Main from './main/index.vue'
//引入用户相关的小仓库
import useUserStore from '@/store/modules/user';
//引入layout配置相关的仓库
import useLayoutSettingStore from '@/store/modules/setting';


//获取layout配置相关的仓库
let layoutSettingStore = useLayoutSettingStore()
//获取用户相关的小仓库
let userStore = useUserStore();
//获取路由对象
let $route = useRoute()


</script>

<style lang="scss" scoped name="Layout">
.layout_container {
    width: 100%;
    height: 100vh;

    .layout_slider {
        color: white;
        width: $base-menu-width;
        height: 100vh;
        background: $base-menu-background;
        transition: all 0.3s;

        .scrollbar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height);

            .el-menu {
                border-right: none
            }
        }
    }

    .layout_tabbar {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        top: 0px;
        left: $base-menu-width;
        transition: all 0.3s;

        &.fold {
            width: calc(100vw - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }

    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-tabbar-height);
        background-color: yellowgreen;
        left: $base-menu-width;
        top: $base-tabbar-height;
        padding: 20px;
        overflow: auto;
        transition: all 0.3s;

        &.fold {
            width: calc(100vw - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }
}
</style>