<template>
    <!-- <RouterView></RouterView> -->
    <!-- 路由组件出口的位置 -->
    <RouterView v-slot="{ Component }">
        <Transition name="fade">
            <!-- 渲染layout一级路由组件的子路由 -->
            <component :is="Component" v-if="flag"></component>
        </Transition>
    </RouterView>
</template>
<script lang="ts" setup name="Main">
import { ref, watch, nextTick } from 'vue'
//引入配置仓库
import useLayoutSettingStore from '@/store/modules/setting';

//获取配置仓库
let layoutSettingStore = useLayoutSettingStore()
// 控制当前组件是否销毁重建
let flag = ref(true)

watch(() => layoutSettingStore.refresh, () => {
    //点击刷新按钮：路由组件销毁
    flag.value = false
    nextTick(() => {
        flag.value = true
    })
})
</script>
<style lang="scss" scoped>
// 添加路由组件渲染的过渡动画
.fade-enter-from {
    opacity: 0;
    transform: scale(0);
}

.fade-enter-active {
    // 过渡时间0.3秒
    transition: all .3s;
}

.fade-enter-t0 {
    opacity: 1;
    transform: scale(1);
}
</style>