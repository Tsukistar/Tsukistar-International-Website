import { defineStore } from 'pinia'

export const useScreenOrientationStore = defineStore({
  id: 'screenOrientation',
  state: () => ({
    orientation: window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  }),
  actions: {
    updateOrientation() {
      this.orientation = window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait'
    },
  },
})