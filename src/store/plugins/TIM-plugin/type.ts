export interface IChartDefineStoreOptions {
    SDKAppID: number
}

export interface TIMCoreLoginParams {
    userID: string
    userSig: string
}

export interface ITextPayload {
    text: string
}

export interface TextMessageEvent {
data:TextMessage,
name:string
}

export interface TextMessage {
    payload:ITextPayload
}