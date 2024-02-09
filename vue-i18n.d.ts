import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $t: (key: string, value?: any, locale?: string, format?: any) => string
  }
}