import { defineStore } from 'pinia'

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
//Option Store 与 Vue 的选项式 API 类似
// export const useTokenStore = defineStore('token_store', {
//   // 你可以认为 state 是 store 的数据 (data)，getters 是 store 的计算属性 (computed)，而 actions 则是方法 (methods)。
//     state:() =>  ({
//         token:"",
//     }),
//     actions: {
//         setToken(token:string){
//             this.token = token
//         },
//         getToken():string{
//             return this.token
//         },
//     },
// })


// export const useProvince =defineStore('present_province',{
//     state: () =>  ({
//         province:{},
//     }),
//     actions: {
//         setProvince(province){
//             this.province = province
//         },
//         getProvince(){
//             return this.province
//         },
//     },
// })
// export const useLikeTime =defineStore('like_time',{
//     state: () =>  ({
//         lastTime:0,
//     }),
//     actions: {
//         setLastTime(nowTime){
//             this.lastTime =nowTime
//         },
//         getLastTime(){
//             return this.lastTime
//         },
//     },
// })
// //Setup Store 与 Vue 组合式 API 的 setup 函数 相似
// export const useTokenStore = defineStore('token', () => {
//     //在 Setup Store 中：
//     //ref() 就是 state 属性
//     //computed() 就是 getters
//     //function() 就是 actions

    
//     const token = ref("")
//     function setToken(myToken) {
//         token = myToken
//         alert(token)
//     }
//     function getToken() {
//         return token
//     }

//     return { token, setToken,getToken }
// })