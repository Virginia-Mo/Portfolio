<template>
    <div id="nav__container--notMobile">
        <nav id="nav">
            <swiper
                :grabCursor="true"
                :centeredSlides="true"
                :slidesPerView="'auto'"
                :loop="true"
                :pagination="{
                    dynamicBullets: true,
                }"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide>
                    <div class="nav__iconDiv">
                        <router-link to="/menu">
                            <img
                                src="@/assets/imgs/maison.png"
                                alt="Icone Menu"
                                class="nav__icons"
                            />
                        </router-link>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="nav__iconDiv">
                        <router-link to="/about">
                            <img
                                src="@/assets/imgs/id.png"
                                alt="Icone A propos"
                                class="nav__icons"
                            />
                        </router-link></div
                ></swiper-slide>
                <swiper-slide>
                    <div class="nav__iconDiv">
                        <router-link to="/experience">
                            <img
                                src="@/assets/imgs/education.png"
                                alt="Icone experience"
                                class="nav__icons"
                            />
                        </router-link></div
                ></swiper-slide>
                <swiper-slide>
                    <div class="nav__iconDiv">
                        <router-link to="/projects">
                            <img
                                src="@/assets/imgs/projects.png"
                                alt="Icone Menu"
                                class="nav__icons"
                            />
                        </router-link></div
                ></swiper-slide>
                <swiper-slide>
                    <div class="nav__iconDiv">
                        <router-link to="/skills">
                            <img
                                src="@/assets/imgs/competence.png"
                                alt=""
                                class="nav__icons"
                            />
                        </router-link></div
                ></swiper-slide>
                <swiper-slide>
                    <div class="nav__iconDiv">
                        <router-link to="/contact">
                            <img
                                src="@/assets/imgs/about.png"
                                alt=""
                                class="nav__icons"
                            />
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

// import required modules
import { EffectCoverflow, Pagination } from 'swiper'

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [EffectCoverflow, Pagination],
        }
    },
}
</script>
<style>
.swiper {
    width: 100%;
position: absolute;
z-index: 2;

  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 4rem;
    height:4rem;
    padding: 0.5rem 0.5rem 0;
  }
.swiper-slide-active {
    transform: scale(1.35);
}
  .swiper-slide img {
    display: block;
    width: 2.5rem;
  }
  .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom:0;

  }
  .swiper-pagination-bullet-active {
    background: var(--flashBlue);
  }

#nav__container--notMobile {
    width: 12%;
    position: absolute;
    bottom: -2rem;
    height: 4rem;
    background-color: var(--lightBrown);
    /* margin: 0 auto; */
    display: flex;
    /* justify-items: flex-start; */
    left: 50%;
    border-radius: 5px 5px 0 0;
    transition: 0.5s;
}
#nav__container--notMobile:hover {
    transition: 0.5s;
    bottom:0
}
.nav__icons {
    max-width: 100%;
    transition: 2s;
}
.nav__icons:hover {
    transform: scale(1.1);
    transition: 0.5s;
}
.nav__iconDiv {
    width: 2.5rem;
}
#nav {
    box-sizing: border-box;
    display: flex;
    gap: 0.5rem;
    align-items: center;
}
@media screen and (max-width : 768px){
#nav__container--notMobile {
   display: none;
}
}
</style>
