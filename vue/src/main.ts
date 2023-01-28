import { type Component, createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './router';
import App from './App.vue';

import '@unocss/reset/tailwind.css';
import './assets/index.css';
import 'uno.css';

const pinia = createPinia();
const app = createApp(App as Component);

app.use(router);
app.use(pinia);
app.mount('body');
