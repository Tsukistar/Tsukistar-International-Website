import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

// assuming the translations are at ./locales and we have English and Chinese translations
import en from './locales/en.json'
import zh from './locales/zh.json'

const i18n = createI18n({
    legacy: false,
    locale: 'zh-CN', // set locale
    fallbackLocale: 'zh-CN', // set fallback locale
    messages: {
      'en-US': en,
      'zh-CN': zh
    }, // set locale messages
  })

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
