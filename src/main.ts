import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import svgIcon from './components/svgIcon.vue';
import './utils/svgImport.ts';
import 'vant/lib/index.css'; // 全局引入样式

createApp(App)
    .component('svg-icon', svgIcon)
    .use(router)
    .use(store)
    .mount('#app');
