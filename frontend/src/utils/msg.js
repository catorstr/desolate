
//封装element puls 的消息提示框

//导入反馈组件
import { h } from 'vue'
import {ElMessageBox,ElMessage,ElNotification} from 'element-plus'

//消息提示框
export function $tips_msg (tips_type,message){
    ElMessage({
        showClose:true,//显示关闭标价
        message,//提示内容
        duration:3000,//显示三秒钟
        type:tips_type,//提示类型：success，warning，error ...
    })
}

//通知框
export function $notification (types,title,message){
    ElNotification({
        title: title,
        message: h('i', { style: 'color: teal' }, message),
        type: types,
        offset:50,
    })
}
