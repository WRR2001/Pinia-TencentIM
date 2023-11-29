<template>
  <a-layout class="layout-box" id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">客服平台</div>
      <a-menu @click="linkPage" v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="home">
          <user-outlined />
          <span>首页</span>
        </a-menu-item>
        <a-menu-item key="customer-service">
          <video-camera-outlined />
          <span>客服</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>预留</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-header" style="background: #fff; padding-left:0">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        <a-button type="link" :size="size" @click="loginout">退出登录</a-button>
      </a-layout-header>

      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { useRouter } from 'vue-router'
const selectedKeys = ref<string[]>(['1']);
const collapsed = ref<boolean>(false);

const router = useRouter()

const TIMStore = useTIMStore()

TIMStore.timCore.messageReceived = (event) => {
  TIMStore.subscribeMessage(event)
}

const loginout = () => {
  router.push("./login")
}

const linkPage = ({ key }: { key: string }) => {
  router.push(key)

}

import type { SizeType } from 'ant-design-vue/es/config-provider';
import { useTIMStore } from '../store/chat';
const size = ref<SizeType>('large');
</script>
<style scoped>
.layout-box {
  height: 100vh;
}

.layout-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
  