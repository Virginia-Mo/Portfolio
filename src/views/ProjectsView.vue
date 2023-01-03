<template>
    <div id="swiper-container">
        <swiper
            :slidesPerView="1"
            :spaceBetween="30"
            :loop="true"
            :direction="'vertical'"
            :modules="modules"
            :mousewheel="true"
            :effect="'fade'"
            class="swiperProjects"
        >
            <swiper-slide class="swiper-slideProjects">
                <ProjectsPage />
            </swiper-slide>
            <swiper-slide class="swiper-slideProjects showNotMobile">
                <KiddyCare />
            </swiper-slide>
            <swiper-slide class="swiper-slideProjects showNotMobile">
                <Pokedex />
            </swiper-slide>
            <swiper-slide class="swiper-slideProjects showNotMobile">
                <PopnBubble />
            </swiper-slide>
            <swiper-slide class="swiper-slideProjects showNotMobile">
                <Madjikarité />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

import { Mousewheel, EffectFade } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'

import ProjectsPage from '@/components/ProjectsPage.vue'
import Pokedex from '@/components/Pokedex.vue'
import KiddyCare from '@/components/KiddyCare.vue'
import PopnBubble from '@/components/PopnBubble.vue'
import Madjikarité from '@/components/Madjikarité.vue'

export default {
    components: {
        Swiper,
        SwiperSlide,
        ProjectsPage,
        KiddyCare,
        Pokedex,
        PopnBubble,
        Madjikarité,
    },
    data() {
        return {
            modules: [Mousewheel, EffectFade],
        }
    },
}
</script>
<style>
.showNotMobile {
    display: none;
}
.swiperProjects {
    width: 100%;
    height: 100vh;
}
.swiper-slideProjects {
    height: 100%;
    width: 100%;
}
.projects__links {
    color: var(--grey);
}
@media screen and (min-width: 1250px) {
    .showNotMobile {
        display: block;
    }
}
</style>
