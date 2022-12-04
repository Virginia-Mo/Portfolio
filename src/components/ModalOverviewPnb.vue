<template>
    
        <div class="Projects_imgContainer test animate__animated animate__zoomIn">
            <button @click="handleModal" class="button__closeModal">
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
                    <img class="Projects__back" src="@/assets/imgs/pnb_flavor.png" alt="apercu du back-office" />
                </swiper-slide>
                <swiper-slide class="slideOverview">
                    <img class="Projects__back" src='@/assets/imgs/pnb_order.png'  alt="apercu du back-office" />
                </swiper-slide>
            </swiper>
       
        </div>
    
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
.test {
    position: absolute;
    z-index: 60;
    width: 90%;
    top: 10%;
    left: 5%;
}</style>