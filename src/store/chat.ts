import { defineStore } from "pinia";

export const useTIMStore = defineStore('chat',{
    TIMOptions(){ 
        return{
            SDKAppID:1600014384
        }
    },

    actions:{
        subscribeMessage(event:any){}
    }
})