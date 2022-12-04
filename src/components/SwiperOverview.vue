<template>
    <swiper
        :loop="true"
        :navigation="true"
        :grabCursor="true"
        :modules="modules"
        class="slideOverview"
    >
        <swiper-slide class="slideOverview">
            <slot name="slide1"></slot>
        </swiper-slide>
        <swiper-slide class="slideOverview">
            <slot name="slide2"></slot>
        </swiper-slide>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Navigation],
        }
    },
}
</script>
<style>
.swiper-slide .slideOverview {
    width: 80%;
}
</style>
