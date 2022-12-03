import { defineStore } from 'pinia'

export const getLanguage = defineStore('getLanguage', {
    state: () => ({
        isFrench: true,
        isEnglish: false,
        openModal: false,
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
        handleModal() {
            this.openModal = !this.openModal
        },
    },
})
