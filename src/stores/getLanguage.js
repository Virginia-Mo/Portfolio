import { defineStore } from 'pinia'

export const getLanguage = defineStore('getLanguage', {
    state: () => ({
        isFrench: true,
        isEnglish: false,
        openModalKDC: false,
        openModalPNB: false,
    }),
    actions: {
        handleFrench() {
            this.isFrench = true
            this.isEnglish = false
        },
        handleEnglish() {
            this.isEnglish = true
            this.isFrench = false
        },
        handleModalKDC() {
            this.openModalKDC = !this.openModalKDC
        },
        handleModalPNB() {
            this.openModalPNB = !this.openModalPNB
        }
    },
})
