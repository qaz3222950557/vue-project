<template>
    <div>
        <!-- <h2>{{ menuList }}</h2> -->
        <template v-for="(item) in menuList" :key="item.path">
            <!-- 没有子路由 -->
            <el-menu-item v-if="!item.children && !item.meta.hidden" :index="item.path" @click="goRoute">
                <template #title>
                    <el-icon>
                        <component :is="item.meta.icon"></component>
                    </el-icon>
                    <span>{{ item.meta.title }}</span>
                </template>
            </el-menu-item>
            <!-- 有子路由，但是只有1个子路由 -->
            <el-menu-item v-if="item.children && item.children.length==1" :index="item.children[0].path" @click="goRoute">
                <template #title>
                    <el-icon>
                        <component :is="item.meta.icon"></component>
                    </el-icon>
                    <span>{{ item.children[0].meta.title }}</span>
                </template>
            </el-menu-item>
            <!-- 有子路由 -->
            <el-sub-menu v-if="item.children && item.children.length>1 && !item.meta.hidden" :index="item.path" >
                <template #title>
                    <el-icon>
                        <component :is="item.meta.icon"></component>
                    </el-icon>
                    <span>{{ item.meta.title }}</span>
                </template>
                <index :menuList="item.children"></index>
            </el-sub-menu>
        </template>
    </div>
</template>


<script lang="ts" setup name="Menu">
import { useRouter } from 'vue-router';

//获取父组件传递过来的全部路由数组
defineProps(['menuList'])
//获取路由器对象
let $router=useRouter()

//点击菜单的回调
const goRoute=(vc:any)=>{
    $router.push(vc.index)
}

</script>

<style lang="scss" scoped>

</style>