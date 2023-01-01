<template>
    <div
        id="kiddycareContainer"
        :class="{ display: display }"
        class="projectsContainers"
        @keydown.down="handleScroll1"
    >
        <h1 id="kiddycare__h1" class="Projects__h1">KiddyCare</h1>
        <div class="Projects__underline"></div>
        <div class="Projects__mainDiv">
            <div class="Projects__firstdiv">
                <div class="projects__imgDiv kiddycare__imgDiv">
                    <a href="https://kiddycare.herokuapp.com/">
                        <img
                            src="@/assets/imgs/kdc.png"
                            alt="Photo projet KiddyCare"
                            id="kiddycare__img"
                        />
                    </a>
                </div>
            </div>
            <div class="Projects__secondDiv">
                <div class="Projects__detailsContainer projects__kdcContainer">
                    <p class="Projects__p" v-if="isFrench">
                        Kiddycare est un projet pour une école (qui n'existe pas). Ce site permet aux utilisateurs de s'informer sur ce que l'école a à offrir, lire les dernières nouvelles grâce à un blog et interagir avec les professeurs et l'équipe administrative de l'école via des messages et commentaires. <br />

                        Pour accéder aux demandes des parents, l'équipe administrative et les professeurs ont une partie de back-office. Ils n'ont cependant pas les mêmes droits : l'équipe administrative a accès à toutes les fonctionnalités alors que les professeurs n'ont accès qu'aux fonctionnalités du blog (créer et supprimer un article et ses commentaires.)<br /> J'ai codé ce projet en suivant une maquette graphique trouvée sur Internet (les copyrights sont dans le footer du site.).
                        <strong>Je n'ai utilisé aucun code contenu dans le template.</strong> Le site est responsive et s'adapte à tous types d'appareil. <br /> - > Pour le back-end, j'ai utilisé NodejS avec Express. L'architecture est un MVC, la base de donnée est PostgreSQL avec Sequelize. Views rendues avec EJS.
                        <br />
                        <strong>Une refonte de ce projet est en cours : Le front-end sera fait en React JS et les données du back-end transformé en API json.</strong><br />
                        Repo Github =>
                        <span class="go">
                            <a class="projects__links"  href="https://github.com/Virginia-Mo/kiddycare">
                                GO !</a> </span><br />
                        Le site est en ligne ici =>
                        <a class="projects__links" href="/http://kiddycare.herokuapp.com/" > kiddycare.herokuapp.com</a> (un petit temps d'attente est necessaire selon les dynos d'Heroku) Pour consulter la partie back-end, merci de me demander les identifiants. Vous pouvez voir un apercu ici :
                        <button
                            class="button__OpenModal"
                            @click="handleModalKDC"
                        >
                            CLICK
                        </button>

                        <Teleport to="#app" v-if="openModalKDC">
                            <div
                                class="Projects_imgContainer animate__animated animate__zoomIn"
                            >
                                <button
                                    @click="handleModalKDC"
                                    class="button__closeModal"
                                >
                                    X
                                </button>
                                <SwiperOverview>
                                    <template v-slot:slide1>
                                        <img
                                            class="Projects__back"
                                            src="@/assets/imgs/kdc_article.png"
                                            alt="apercu du back-office"/>
                                        </template>

                                    <template v-slot:slide2>
                                        <img
                                            class="Projects__back"
                                            src="@/assets/imgs/kdc_blog.png"
                                            alt="apercu du back-office"/>
                                        </template>
                                </SwiperOverview>
                            </div>
                        </Teleport>
                    </p>
                    <p class="Projects__p" v-if="isEnglish"> Here's a project for a -non-existing- school : KiddyCare ! A website giving the possibilities to targeted users (parents) to get details about the school through the different pages, request a Newsletter, book a class,leave comments for each articles posted in the school blog and leave a message.<br /> To access to all of those requests from users, the school manager and teachers have a back-office part. They don't have the same rights though : the school manager (admin) can access to everything whereas the teachers can only create/remove articles and related comments. <br /> I coded the front-end with HTML, CSS and Vanilla Javascript following the design of a template (link of copyrights are in the footer).
                        <strong>
                            I didn't use any code given in the template.The project is fully responsive.</strong><br />
 For the back-end part, I used NodeJS with Express. The architecture used is a MVC. For the datas, I used a relational database system : PostgreSQL. To access to those datas, I used Sequelize and made the views with EJS.
                        <br />
                        <strong>I'm currently working on improving this project : The front-end will be done with ReactJS and datas will be rendered through a JSON type API.</strong>
                        Repo Github =>
                        <span class="go">
                            <a
                                class="projects__links"
                                href="https://github.com/Virginia-Mo/Project_Shool_KiddyCare">
                                GO !</a> </span><br />
                        The project is deployed on Heroku at this adress :
                        <a
                            class="projects__links"
                            href="http://kiddycare.herokuapp.com/"
                        >
                            kiddycare.herokuapp.com</a
                        > (a short waiting time can be needed as the Heroku dynos wake up). To check the back-office part, you can ask me the login infos. Here's an overview :
                        <button
                            class="button__OpenModal"
                            @click="handleModalKDC"
                        >
                            CLICK
                        </button>

                        <Teleport to="#app" v-if="openModalKDC">
                            <div
                                class="Projects_imgContainer animate__animated animate__zoomIn"
                            >
                                <button
                                    @click="handleModalKDC"
                                    class="button__closeModal"
                                >
                                    X
                                </button>
                                <SwiperOverview>
                                    <template v-slot:slide1
                                        ><img
                                            class="Projects__back"
                                            src="@/assets/imgs/kdc_article.png"
                                            alt="apercu du back-office"
                                    /></template>

                                    <template v-slot:slide2
                                        ><img
                                            class="Projects__back"
                                            src="@/assets/imgs/kdc_blog.png"
                                            alt="apercu du back-office"
                                    /></template>
                                </SwiperOverview>
                            </div>
                        </Teleport>
                    </p>
                </div>
            </div>
            <NavBarTop />
        </div>
        <div id="footerContainer">
            <MouseScroll class="mousescroll__notMobile" />
            <footer class="blueFooter">
                <router-link to="/projects" class="Projects__arrowDiv">
                    <div class="arrow arrowLeft">&#8592;</div>
                </router-link>
                <router-link to="/projects/pokedex" class="Projects__arrowDiv">
                    <div class="arrow arrowRight">&#8594;</div>
                </router-link>
            </footer>
        </div>
    </div>
</template>
<script>
import MouseScroll from '@/components/MouseScroll.vue'
import NavBarTop from '@/components/NavBarTop.vue'

import { mapState, mapActions } from 'pinia'
import { getLanguage } from '@/stores/getLanguage.js'
// Import Swiper Vue.js components
//  import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-creative";
import 'animate.css'

// import required modules
// import {Navigation, Pagination } from "swiper";
import SwiperOverview from './SwiperOverview.vue'
export default {
    name: 'KiddyCare',
    // data() {
    //     return {
    //         modules: [Navigation, Pagination],
    //     }
    // },
    components: { MouseScroll, NavBarTop, SwiperOverview },
    computed: {
        ...mapState(getLanguage, ['isEnglish', 'isFrench', 'openModalKDC']),
    },
    methods: {
        ...mapActions(getLanguage, {
            handleModalKDC: 'handleModalKDC',
        }),

        // handleScroll1(event) {
        //     const y = event.deltaY
        //     if (y > 0) {
        //         this.pokedex = true
        //         this.display = true
        //     } else {
        //         this.pokedex = false
        //         this.display = false
        //     }
        // },
        // handleKeyDown1(event) {
        //     console.log('hello')
        //     if (event.key === 'ArrowDown') {
        //         this.pokedex = true
        //         this.display = true
        //     } else {
        //         this.pokedex = false
        //         this.display = false
        //     }
        // },
    },

    // mounted() {
    //     window.addEventListener('wheel', this.handleScroll1)
    //     window.addEventListener('keydown', this.handleKeyDown1)
    // },
    // unmounted() {
    //     window.removeEventListener('wheel', this.handleScroll1)
    //     window.removeEventListener('keydown', this.handleKeyDown1)
    // },
}
</script>

<style>
.swipeKDC {
    position: absolute;
    left: 10%;
    top: 10%;
    width: 80%;
    height: 80%;
}
.Projects__back {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.slideKDC {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.button__closeModal {
    position: absolute;
    z-index: 5;
    font-size: 1.3rem;
    height: 2rem;
    width: 2rem;
    top: 0;
    right: 0;
    border-radius: 50%;
    background-color: transparent;
    color: #027bff;
    border: solid 2px black;
}
.button__closeModal:hover {
    background-color: #027bff;
    color: white;
}
.display {
    display: none;
}
strong {
    font-weight: bold;
}
#kiddycareContainer {
    background-image: url('@/assets/imgs/bgkdc1.png');
}
#kiddycare__imgDiv {
    background-color: var(--grey);
    border: solid 3px var(--darkBrown);
    height: auto;
    width: 61%;
    padding: 2rem 2rem;
    margin: 0 auto;
}
#kiddycare__img {
    width: 100%;
}

@media screen and (min-width: 1024px) {
    .kiddycare__imgDiv {
        width: 45%;
        margin-left: 14rem;
    }
    #kiddycareContainer {
        background-image: url('@/assets/imgs/bgkdc.png');
    }
}
</style>
