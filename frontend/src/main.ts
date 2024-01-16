import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";;
//导入路由
import router from "./router/index"
//导入pinia
import { createPinia } from 'pinia';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const pinia = createPinia()
let app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router);
app.use(pinia);
app.mount("#app");
