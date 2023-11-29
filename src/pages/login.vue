<template>
    <div class="login-box">
        <a-card style="width: 300px">
            <h2 class="title">xx客服平台</h2>
            <a-form :model="formState" @finish="login" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }"
                autocomplete="off">
                <a-form-item label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名！' }]">
                    <a-input v-model:value="formState.username" />
                </a-form-item>

                <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入密码！' }]">
                    <a-input-password v-model:value="formState.password" />
                </a-form-item>

                <!-- <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
                    <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
                </a-form-item> -->

                <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                    <a-button type="primary" html-type="submit">登录</a-button>
                </a-form-item>
            </a-form>
        </a-card>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
import { genTestUserSig } from "./../../debug";
import { useTIMStore } from "./../store/chat";

const formState = reactive({
    username: "",
    password: ""
})

const router = useRouter()

const TIMStore = useTIMStore()

const login = async () => {
    
    const {userSig} = genTestUserSig({
        userID:formState.username,
        SDKAppID:1600014384,
        secretKey:'8924eb01fd950d55b25774b688b2f27c28fb393d94490b6d3114a642d11b2e15'
    })
    await TIMStore.timCore.timLogin({
        userSig,
        userID:formState.username
    })
    router.push('/home')
}
</script>

<style scoped>
.login-box {
    background-color: #2d3447;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.title{
    text-align: center;
}
</style>