// 如果您已集成 v2.x 的 SDK，想升级到 V3 并且想尽可能地少改动项目代码，可以继续沿用 TIM
import TIM from '@tencentcloud/chat';
import TencentCloudChat, { ChatSDK } from '@tencentcloud/chat';
import TIMUploadPlugin from 'tim-upload-plugin';
import TIMProfanityFilterPlugin from 'tim-profanity-filter-plugin';
import { IChartDefineStoreOptions, ITextPayload, TextMessageEvent, TIMCoreLoginParams } from './type';


export default class TIMCore {

    public tim: ChatSDK | undefined

    public userID: string = ''



    constructor(props: IChartDefineStoreOptions) {
        this.initTimSdk(props.SDKAppID)
    }

    private initTimSdk = (SDKAppID: number) => {
        let options = {
            SDKAppID// 接入时需要将0替换为您的即时通信 IM 应用的 SDKAppID
        };
        // 创建 SDK 实例，`TIM.create()`方法对于同一个 `SDKAppID` 只会返回同一份实例
        let chat = TencentCloudChat.create(options); // SDK 实例通常用 chat 表示


        chat.setLogLevel(0); // 普通级别，日志量较多，接入时建议使用
        // chat.setLogLevel(1); // release 级别，SDK 输出关键信息，生产环境时建议使用


        // 注册腾讯云即时通信 IM 上传插件
        chat.registerPlugin({ 'tim-upload-plugin': TIMUploadPlugin });


        // 注册腾讯云即时通信 IM 本地审核插件
        chat.registerPlugin({ 'tim-profanity-filter-plugin': TIMProfanityFilterPlugin });

        this.tim = chat

    }

    public timLogin = async (options: TIMCoreLoginParams) => {
        //登录SDK
        await this.tim?.login(options)
        this.userID = options.userID
        this.bindTIMEvent()
    }

    private bindTIMEvent = ()=>{
        this.tim?.on(TIM.EVENT.SDK_READY,this.handleSDKReady,this)
    }

    private handleSDKReady=()=>{
        console.log("SDK准备完成")
        this.tim?.on(TIM.EVENT.MESSAGE_RECEIVED,this.handleMessageReceived,this)
    }

    private handleMessageReceived = (event:any)=>{
        console.log("接收一条消息",event)
        this.handleMessageReceived(event)
    }

    public messageReceived = (event:TextMessageEvent) =>{}

    private getMessageOptions=(userID:string,payload:ITextPayload)=>{
        return this.tim?.createTextMessage({
            to:userID,
            conversationType:TIM.TYPES.CONV_C2C,
            payload:{
                text:"hlwd",
            },
            needReadReceipt:true
        })
    }

    public sendMessage = async(userID:string,payload:ITextPayload)=>{
        const messageOption = this.getMessageOptions(userID,payload)
        await this.tim?.sendMessage(messageOption!)
        console.log("发送成功")
    }
}