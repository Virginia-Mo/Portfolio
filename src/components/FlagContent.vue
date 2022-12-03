<template>
    <aside id="flagContent__div">
        <div id="Flag__container">
            <button class="Flag__button" @click="handleFrench()">
                <img
                    src="@/assets/imgs/france.png"
                    alt="drapeau de la France"
                    class="Flag__img"
                />
            </button>
        </div>
        <div class="Flag__container">
            <button class="Flag__button" @click="handleEnglish()">
                <img
                    src="@/assets/imgs/usa.png"
                    alt="USA Flag"
                    class="Flag__img"
                />
            </button>
        </div>
    </aside>
</template>
<script>
import { mapActions } from 'pinia'
import { getLanguage } from '@/stores/getLanguage.js'

export default {
    name: 'FlagContent',

    methods: {
        ...mapActions(getLanguage, { 
            handleFrench: "handleFrench" ,
            handleEnglish: "handleEnglish"
    }),
    },
    data() {
        return {
            isEnglish: false,
        }
    },
}
</script>
<style>
.Flag__img {
    max-width: 100%;
}
.Flag__button {
    background-color: transparent;
    border: none;
    width: 3.5rem;
    transition: transform 1s;
}
.Flag__button:hover {
    transform: scale(1.1);
    transition: transform 0.3s
}
#flagContent__div {
    display: flex;
    padding-top: 0.7rem;
}
</style>
