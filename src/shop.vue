<template>
    <div>购物车</div>
    <div>
        全选 
        <input v-model="shopStore.isAllSelect" @change="allSelectChange" type="checkbox" name="" id="">
    </div>

    <div>
        <div v-for="(item, index) in shopStore.goods" :key="index">
            <input v-model="item.select" @change="singleChange" type="checkbox" name="" id="">
            商品名:{{ item.name }}--
            价格：{{ item.price }}--
            <button @click="updateNum(index, -1)">-</button>
            {{ item.num || 1 }}
            <button @click="updateNum(index, 1)">+</button>
            小计{{ item.price * (item.num || 1) }}
        </div>
    </div>

    <div>
        总价：{{ shopStore.total }}
    </div>
</template>

<script setup lang="ts">
import { useShopStore } from "./store/shop";

const shopStore = useShopStore()

const updateNum = (index: number, num: number) => {
    shopStore.updateNum(index, num)
}

const allSelectChange = ()=> {
    shopStore.allSelectChange()
}

const singleChange = () =>{
    shopStore.singleChange()
}
</script>