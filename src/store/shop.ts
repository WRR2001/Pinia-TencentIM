import { defineStore } from 'pinia'

interface IGoods {
    name: string,
    price: number,
    num?: number,
    select?: boolean
}

export const useShopStore = defineStore('shop', {
    state() {
        return {
            goods: [
                {
                    name: '矿泉水',
                    price: 3
                },
                {
                    name: '黄桃罐头',
                    price: 16
                },
                {
                    name: '薯片',
                    price: 7
                }
            ] as IGoods[],
            isAllSelect: false
        }
    },
    actions: {
        updateNum(index: number, num: number) {
            //初始化num
            this.goods[index].num = this.goods[index].num || 1

            this.goods[index].num! += num
        },
        allSelectChange() {
            this.goods.forEach((item) => {
                item.select = this.isAllSelect
            })
        },
        singleChange() {
            this.isAllSelect = this.goods.every(item => item.select)
        }
    },
    getters: {
        total():number{
            return this.goods
                .filter((item) => item.select)
                .reduce((total, item) => total + item.price * (item.num || 1),0)
        }
    }
})