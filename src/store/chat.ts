import { defineStore } from "pinia";
import { TextMessageEvent } from "./plugins/TIM-plugin/type";

export const useTIMStore = defineStore('chat',{

    state(){
        return {
conversationList:[]
        }
    },

    TIMOptions(){ 
        return{
            SDKAppID:1600014384
        }
    },

    actions:{
        subscribeMessage(event:TextMessageEvent){},

        getSessionList(){
            this.conversationList = await this.timCore.tim?.getConversationList()
            console.log(this.conversationList,"heeeeeeeeeeeeeeeeeeeeeello")
        }

    }

})