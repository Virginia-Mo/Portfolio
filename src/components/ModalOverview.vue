<template>
    <Teleport to="#app">
        <div class="Projects_imgContainer animate__animated animate__zoomIn">
            <button @click="handleModalKDC" class="button__closeModal">
                X
            </button>

            <swiper
                :loop="true"
                :navigation="true"
                :grabCursor="true"
                :modules="modules"
                class="slideOverview"
            >
                <swiper-slide class="slideOverview">
                    <img
                        class="Projects__back"
                        src="@/assets/imgs/kdc_article.png"
                        alt="apercu du back-office"
                    />
                </swiper-slide>
                <swiper-slide class="slideOverview">
                    <img
                        class="Projects__back"
                        src="@/assets/imgs/kdc_blog.png"
                        alt="apercu du back-office"
                    />
                </swiper-slide>
            </swiper>
        </div>
    </Teleport>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { mapState, mapActions } from 'pinia'
import { getLanguage } from '@/stores/getLanguage.js'
// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'animate.css'

// import required modules
import { Navigation, Pagination } from 'swiper'
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation, Pagination],
        }
    },
    computed: {
        ...mapState(getLanguage, ['openModal']),
    },
    methods: {
        ...mapActions(getLanguage, ['handleModal']),
    },
}
</script>
<style>
.swiper-slide .slideOverview {
    width: 80%;
}
</style>
