import 'pinia'
import TIMCore, { IChartDefineStoreOption } from './store/plugins/TIM-plugin/core'

declare module 'pinia' {
    export interface DefineStoreOptionsBase<S, Store> {
        TIMOptions?: () => IChartDefineStoreOptions
    }

    export interface PiniaCustomProperties {
      timCore:TIMCore

    }