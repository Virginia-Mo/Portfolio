<template>
    <div id="nav__container--notMobile">
        <nav id="nav">
            <swiper
                :slidesPerView="3"
                :grabCursor="true"
                :centeredSlides="true"
                :loop="true"
                :pagination="{
                    dynamicBullets: true,
                }"
                :modules="modules"
                class="mySwiper swiperNav"
            >
                <swiper-slide class="swiper-slide swiperSlide-Nav">
                      <div class="nav__iconDiv">
                        <router-link to="/menu">
                            <icon name="home" color="#fff" size="30" />
                        </router-link>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-slide swiperSlide-Nav">
                    <div class="nav__iconDiv">
                        <router-link to="/about">
                            <icon
                                name="profile-female"
                                color="#fff"
                                size="30"
                            />
                        </router-link></div
                ></swiper-slide>
                <swiper-slide class="swiper-slide swiperSlide-Nav">
                    <div class="nav__iconDiv">
                        <router-link to="/experience">
                            <icon
                                name="study, graduation, hat, college"
                                color="#fff"
                                size="30"
                            />
                        </router-link>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-slide swiperSlide-Nav">
                    <div class="nav__iconDiv">
                        <router-link to="/projects">
                            <icon name="file-code-o" color="#fff" size="30" />
                        </router-link></div
                ></swiper-slide>
                <swiper-slide class="swiper-slide swiperSlide-Nav">
                    <div class="nav__iconDiv">
                        <router-link to="/skills">
                            <icon name="html-five2" color="#fff" size="30" />
                        </router-link></div
                ></swiper-slide>
                <swiper-slide class="swiper-slide swiperSlide-Nav">
                    <div class="nav__iconDiv">
                        <router-link to="/contact">
                            <icon name="phone" color="#fff" size="30" />
                        </router-link></div
                ></swiper-slide>
            </swiper>
        </nav>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import Icon from '@/components/Icon.vue'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper'

export default {
    components: {
        Swiper,
        SwiperSlide,
        Icon,
    },
    data() {
        return {
            modules: [EffectCoverflow, Pagination],
        }
    },
}
</script>
<style>

.swiperNav {
    width: 100%;
    height: 100%;
    padding: 0.5rem 0.5rem 0;
}
.swiperSlide-Nav {
    background-position: center;
    background-size: cover;
    height: 3rem;
    text-align: center;
    width: 3.8rem;
    /* padding: 0.5rem 0.5rem 0; */
    margin-top: 0.5rem;
}
.swiper-slide-active {
    transform: scale(1.1);
}
/* .swiper-wrapper {
    padding-left: 1rem;
} */
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
    bottom: 0;
}
.swiper-pagination-bullet-active {
    background: var(--flashBlue);
}

#nav__container--notMobile {
    display: none;
    background-color: var(--lightBrown);
    width: 10%;
    position: absolute;
    bottom: -2rem;
    left: 50%;
    height: 4rem;
    border-radius: 5px 5px 0 0;
    transition: 0.5s;
}

#nav__container--notMobile:hover {
    transition: 0.5s;
    bottom: 0;
}
.nav__icons {
    max-width: 100%;
    transition: 2s;
}
#nav {
    box-sizing: border-box;
    display: flex;
    align-items: center;
}
@media screen and (min-width: 1280px) {
    #nav__container--notMobile {
    display: flex;
    }
}
</style>
