import { defineStore } from "pinia";

export const useMobileStore = defineStore({
    id: "mobile",
    state: () => ({
        isMobile: false,
    }),
    getters: {
        getIsMobile: (state) => state.isMobile,
    },
    actions: {
        setIsMobile(value: boolean) {
            this.isMobile = value;
        },
    },
});