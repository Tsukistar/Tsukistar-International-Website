import "./assets/css/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

// assuming the translations are at ./locales
import en_US from "./locales/en_US.json";
import zh_CN from "./locales/zh_CN.json";
import zh_TW from "./locales/zh_TW.json";

// get the browser language
const browserLanguage = navigator.language;

// set the default language
let defaultLanguage = "en-US";
const supportedLanguages = ["en-US", "zh-CN", "zh-TW"];
if (supportedLanguages.indexOf(browserLanguage) > -1) {
    defaultLanguage = browserLanguage;
}

// create the i18n instance with options
const i18n = createI18n({
    legacy: false,
    locale: defaultLanguage, // set locale
    fallbackLocale: defaultLanguage, // set fallback locale
    messages: {
        "en-US": en_US,
        "zh-CN": zh_CN,
        "zh-TW": zh_TW,
    }, // set locale messages
});

import App from "./App.vue";
import router from "./router";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(ElementPlus);

app.mount("#app");
