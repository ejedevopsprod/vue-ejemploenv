import { createApp } from 'vue'
import App from './App.vue'

console.log(process.env.VUE_APP_TITLE)

createApp(App).mount('#app')



/*
var app = new Vue({
    el: "#app",
    data: {
      message: "Hello World!!!"
    }
  });
  */