<template>
  <div>
    Hello Pinia---{{ userStore.age }}
    <button @click="add">+1</button>
  </div>
  <div>×2：{{ userStore.doubleAge }}</div>
  <div>{{ userStore.getNameAndAge }}</div>
  <div>--------------------------------</div>
  <div>num={{ num }}</div>
  <button @click="numAdd">num加1</button>
  <div>--------------------------------</div>

  <!-- 如果页面上需要给计算属性传值，那么直接调用它并传递 -->
  <div>计算属性传递参数---{{ userStore.getAddAge(10) }}</div>
  <button @click="updateName">修改名称</button>
  {{ userStore.name }}
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from './store/user'

const userStore = useUserStore()

const num = ref(1)

/**
 * 不能从store中解构
 * 这样会破坏响应式
 */
// let { age } = useUserStore()

const add = () => {
  userStore.age++
}
const numAdd = () => {
  num.value++
}
const updateName = () => {
  userStore.saveName('小红')
  console.log(userStore.name)
}
</script>



