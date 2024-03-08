<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
                    <h1>Hello</h1>
                    <h2>欢迎来到繁星后台管理系统</h2>
                    <el-form-item prop="username">
                        <el-input :prefix-icon="User" v-model="loginForm.username" ></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="login_btn" type="primary" size="default" @click="login" :loading="loading">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>

import { reactive,ref } from 'vue';
//引入图标
import {User,Lock} from '@element-plus/icons-vue';
// 引入提示信息
import {ElNotification} from 'element-plus'
//引入用户仓库
import useUserStore from '@/store/modules/user';
//引入路由
import {useRouter} from  'vue-router'
//引入时间函数
import {getTime} from '@/utils/time'


let userStore=useUserStore()
//获取路由器
let $router=useRouter()
//收集账号和密码的数据
let loginForm=reactive({
    username:'admin',
    password:'111111'
})
//定义变量控制按钮加载效果
let loading=ref(false)
//获取el表单控件
let loginForms=ref()

//自定义校验规则函数
const validatorUserName=(rule:any,value:string,callback:any)=>{
   //rule为规则校验对象
   //value为表单元素文本内容
   //callback为函数，如果符合条件callback放行通过，不符合就注入错误提示信息 
   if(value.length>=5){
    callback();
   }else{
    callback(new Error('账号长度至少为5位'))
   }
}
const validatorPassword=(rule:any,value:string,callback:any)=>{
    if(value.length>=5){
    callback();
   }else{
    callback(new Error('密码长度至少为5位'))
   }
}
//登录按钮回调
const  login= async()=>{
    //确保全部表单验证通过再发请求
    let result=loginForms.value.validate()
    console.log(result)

    //开启按钮加载效果
    loading.value=true
    //点击按钮后通知仓库发登录请求
    //请求成功->首页展示数据的地方
    //请求失败->弹出登录失败信息
    try {
        //保证登录成功
        await userStore.userLogin(loginForm);
        //编程式导航跳转到展示数据首页
        $router.push('/home')
        //登录成功提示信息
        ElNotification({
            type:'success',
            message:'欢迎回来',
            title:`HI,${getTime()}好`
        })
        //登录成功加载效果取消
        loading.value=false
    } catch (error:any) {
        //登录失败加载效果取消
        loading.value=false
        //登录失败提示信息
        ElNotification({
            type:'error',
            message:error.message
        })
    }
    
}
//定义表单校验需要配置对象
const rules={
    username:[
        // // element提供的规则
        // {required:true,message:'用户名不能为空',trigger:'blur'},
        // {min:6,max:10,message:'账户长度至少为六位',trigger:'change'}

        //自定义组件校验规则
        {trigger:'change',validator:validatorUserName}
    ],
    password:[
        // {required:true,message:'密码不能为空',trigger:'blur'}
        {trigger:'change',validator:validatorPassword}
    ]
}



</script>


<style scoped lang="scss">
.login_container{
    width:100%;
    height: 100vh;
    background:url('@/assets/images/background.jpg') no-repeat;
    background-size:cover;
}
.login_form{
    position: relative;
    width:80%;
    top:30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size:cover;
}
h1{
    color:white;
    font-size:40px;
}
h2{
    color:white;
    font-size:20px;
    margin:20px 0px;
}
.login_btn{
    width:100%;
}
</style>
