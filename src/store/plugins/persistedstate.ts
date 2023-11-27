import { PiniaPluginContext } from "pinia";

export function persistedstate(context: PiniaPluginContext) {
    console.log("初始化时执行", " 模块:" + context.store.$id)
    //根据模块名，拿到对应的loacalStorage
    const currentState = JSON.parse(localStorage.getItem(context.store.$id) || "{}")

    //把数据放在pinia对应的模块里面
    context.store.$patch(currentState)


    context.store.$subscribe((_store, state) => {
        console.log(_store, state)
        //存入localStorage
        localStorage.setItem(_store.storeId, JSON.stringify(state))

    }, {
        detached: true,
    })

}