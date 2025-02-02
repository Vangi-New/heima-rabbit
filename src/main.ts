// 引入 uView UI
import uView from 'vk-uview-ui'

import { createSSRApp } from 'vue'
import pinia from './stores'

import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)

  app.use(pinia)
  app.use(uView)
  return {
    app,
  }
}
