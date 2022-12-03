<template>
    <Teleport to="#app">
        <div class="Projects_imgContainer">
            <button @click="handleModal" class="button__closeModal">
                X
            </button>

            <swiper
                :loop="true"
                :navigation="true"
                :grabCursor="true"
                :modules="modules"
                class="swipeKDC  slideOverview animate__animated animate__zoomIn"
            >
                <swiper-slide class="slideOverview">
                    <slot name="slide1"></slot>
                </swiper-slide>
                <swiper-slide class="slideOverview">
                    <slot name="slide2"></slot>
                </swiper-slide>
            </swiper>
        </div>
    </Teleport>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { mapState, mapActions} from 'pinia'
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
            modules: [Navigation, Pagination]
        }
    },
    computed : {
...mapState(getLanguage,["openModal"])
}, 
methods : {
    ...mapActions(getLanguage,["handleModal"])
}
}

</script>
<style>
.Projects_imgContainer {
    position: absolute;
    z-index: 10;
    width: 90%;
    top: 10%;
    left: 5%;
}
.swiper-slide .slideOverview {
    width: 100%;
}
</style>
