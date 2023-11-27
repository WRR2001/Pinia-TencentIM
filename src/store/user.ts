/**
 * 引入定义store的方法
 */
import { defineStore } from 'pinia'

const dely= ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(1)
        }, 1000);
    })
}

/**
 * pinia中使用defineStore方法来定义store
 * 第一个参数是store的唯一id 即模块名
 * 第二个参数是一个对象 store的配置项
 */
export const useUserStore = defineStore('user', {
    // state必须有返回值，返回值就是这个模块的状态
    // 并且pinia可以推断出state的类型
    state() {
        return {
            /**姓名 */
            name: '小明',
            /**年龄 */
            age: 18
        }
    },

    //类似computed计算属性
    getters: {
        doubleAge: (state) => state.age * 2,

        /**
         * 如果要在getters中调用其他的计算属性方法 
         * 不能使用箭头函数的形式
         * 
         * 这种写法this指向的是当前的store实例
         * 需要自己定义当前的方法的返回值类型
         */
        getNameAndAge(): string {
            console.log("计算属性getNameAndAge调用")
            return this.name + this.age
        },

        /**
         * 接收页面传过来的数据
         */
        getAddAge() {
            /**
             * 在计算属性内部，返回一个方法
             * 该方法会接收一个参数 这个参数就是页面传过来的数据
             * 
             */
            return (addnum: number) => this.age + addnum
        }
    },

    //当前模块的相关方法，存放业务逻辑
    //在pinia里 可以直接通过action修改state
    //支持同步和异步
    actions: {
        async saveName(name: string) {
            await dely()
            this.name = name
        }
    }
})