import router from '@/router';
import '@/styles/index.less';
import Antd from 'ant-design-vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(Antd).use(router).use(createPinia()).mount('#app');
