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
    Madjikarité
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

/* .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
} */

/* #swiper-container {
    overflow: hidden;
    height: 100vh;
}
.swiper {
    width: 100%;
    position: absolute;
    z-index: 2;
}

.swiper-slide {
    overflow: hidden;
    background-position: center;
    background-size: cover;
    height: 100vh;
    width: 100%;
    padding: 0.5rem 0.5rem 0;
}
.swiper-slide-active {
    transform: scale(1.35);
}
.swiper-slide img {
    display: block;
    width: 2.5rem;
}
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
    bottom: 0;
}
.swiper-pagination-bullet-active {
    background: var(--flashBlue);
} */
.projects__links {
    color: var(--grey);
}
@media screen and (min-width: 1250px) {
    .showNotMobile {
        display: block;
    }
}
</style>
