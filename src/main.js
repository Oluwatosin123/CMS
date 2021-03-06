import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Highcharts from 'highcharts';
import VueHighcharts from 'vue-highcharts';
import axios from "axios";
import NProgress from "nprogress"

NProgress.configure({ showSpinner: false });
axios.interceptors.request.use((config) => {
    if (typeof window === 'undefined') return config;
    const token =  localStorage.getItem('token');
  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    NProgress.start()
    return config;
  })

  // instance.interceptors.request.use(config => {
  //   NProgress.start()
  //   return config
  // })
  
  // before a response is returned stop nprogress
  axios.interceptors.response.use(response => {
    console.log(response, "response");
    NProgress.done()
    return response
  })

axios.defaults.baseURL = "https://churchplusv3coreapi.azurewebsites.net/";

createApp(App).use(store).use(router).use(VueHighcharts, { Highcharts }).mount('#app')
