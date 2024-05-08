import { writable } from 'svelte/store'

export const APP_STATUS={
INIT:0,
LOADING:1,
CHATTING:2,
ERROR:3
}

export const appStatus=writable(APP_STATUS.INIT)
export const appStatusInfo=writable({id:"",url:"",pages:0})

export const  setAppStatusLoading=()=>{
    appStatus.set(APP_STATUS.LOADING)
}

export const  setAppStatusError=()=>{    
    appStatus.set(APP_STATUS.ERROR)
}

export const  setAppStatusChatting=({id,url,pages}:{id:string,url:string,pages:number})=>{    
    appStatus.set(APP_STATUS.CHATTING)
    appStatusInfo.set({id,url,pages})
}