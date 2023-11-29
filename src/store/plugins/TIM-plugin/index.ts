/**
 * IM SDK初始化
 * 登录、收发功能
 */

import { PiniaPluginContext } from "pinia";
import TIMCore from "./core"

export default (context:PiniaPluginContext) => {
     if (context.options.TIMOptions){
        const timeCore = new TIMCore(context.options.TIMOptions())
        context.store.timCore = timeCore
     }
}