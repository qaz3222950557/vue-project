<template>
    <el-button type="primary" size="small" icon="Refresh" circle @click="updateRefresh"></el-button>
    <el-button type="primary" size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
    <el-button type="primary" size="small" icon="Setting" circle></el-button>
    <img :src="userStore.avatar" alt="" style="width:32px;height:32px;margin:0px 10px;border-radius: 50%;">
    <!-- 下拉菜单 -->
    <el-dropdown>
        <span class="el-dropdown-link">
            {{ userStore.username }}
            <el-icon>
                <arrow-down></arrow-down>
            </el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>
<script lang="ts" setup name="Settin">
//引入配置仓库
import useLayoutSettingStore from '@/store/modules/setting';
//引入用户仓库
import useUserStore from '@/store/modules/user';
//引入路由器和路由对象
import { useRouter, useRoute } from 'vue-router';
//获取用户仓库
let userStore = useUserStore()
//获取配置仓库
let layoutSettingStore = useLayoutSettingStore()
//获取路由器和路由对象
let $router = useRouter()
let $route = useRoute()

//刷新按钮的回调，点击刷新后，main文件会监听数据发生变化而刷新界面
const updateRefresh = () => {
    layoutSettingStore.refresh = !layoutSettingStore.refresh
}
//全屏按钮的回调
const fullScreen = () => {
    //DOM对象的一个属性：可以用来判断当前是不是全屏模式(全屏：true)
    console.log(document.fullscreenElement)
    let full = document.fullscreenElement
    if (!full) {
        //文档根节点的方法requestFullscreen(),实现全屏模式
        document.documentElement.requestFullscreen()
    } else {
        //退去全屏模式
        document.exitFullscreen();
    }
}
//退出登录的回调
const logout = () => {
    //第一件事：需要向服务器发请求【退出登录接口】,暂时做不到，因为这是后端接口的事情
    //第二件事：仓库当中关于用于相关的数据清空[token|username|avatar]
    userStore.userLogout()
    //第三件事：跳转到登录界面
    $router.push({ path: '/login', query: { redirect: $route.path } })


}

</script>
<style lang="scss" scoped></style>