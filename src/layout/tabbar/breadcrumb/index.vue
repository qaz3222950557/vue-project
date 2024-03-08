<template>
    <!-- 顶部左侧静态 -->
    <el-icon style="margin-right: 10px;" @click="changeIcon">
        <component :is="layoutSettingStore.fold?'Fold':'Expand'"></component>
    </el-icon>
    <!-- 顶部左侧面包屑 -->
    <el-breadcrumb separator-icon="ArrowRight">
        <!-- 面包动态展示路由名字与标题 -->
        <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.meta.title"
            :to="item.path">
            <!-- 图标 -->
            <el-icon>
                <component :is="item.meta.icon"></component>
            </el-icon>
            <!-- 面包屑展示匹配路由的标题 -->
            <span style="margin:0px 5px">{{ item.meta.title }}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script lang="ts" setup name="Breadcrumb">
//引入layout配置相关的仓库
import useLayoutSettingStore from '@/store/modules/setting';
//引入路由对象
import { useRoute } from 'vue-router';
//获取路由对象
let $route = useRoute()


//获取layout配置相关的仓库
let layoutSettingStore = useLayoutSettingStore()

//点击图标的方法
const changeIcon = () => {
    layoutSettingStore.fold = !layoutSettingStore.fold
}
</script>
<style lang="scss" scoped></style>