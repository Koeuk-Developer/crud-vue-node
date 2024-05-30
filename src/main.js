
// import 'axios/di/st/axios.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'
const app = Vue.createApp()
app.use(VueAxios, axios)
