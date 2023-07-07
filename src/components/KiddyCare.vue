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
                    <a href="https://kiddycare.netlify.app/" target="_blank">
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
                        KiddyCare est un projet crée en fullstack, fonctionnel et responsive.
                        C'est une école fictive offrant divers cours. Ce site permet aux utilisateurs de s'informer sur
                        ce que l'école a à offrir, lire les dernières nouvelles
                        grâce à un blog et interagir avec les professeurs et
                        l'équipe administrative de l'école via des messages et
                        commentaires. <br />

                        Un back-office a été mis en place pour gérer les données et les messages.<br />
                        Le site est responsive et s'adapte à tous types
                        d'appareil. <br />
                        <strong>Back-end</strong>:  NodeJS et Express.
                        L'architecture est un MVC, la base de donnée est faite
                        avec PostgreSQL et Sequelize.
                        <br />
                        <strong>Front-end</strong>: React , React Redux et React Router.<br />
                        <strong>Sécurité</strong>: Mise en place de middlewares permettant de vérifier le rôle de l'utilisateur connecté (accès back-office), de nettoyer les formulaires pour éviter les attaques XSS, utilisation de Sequelize SQL avec des requêtes préparées.
                        <br />
                        Repo Github =>
                        <span class="go">
                            <a
                                class="projects__links"
                                target="_blank"
                                href="https://github.com/Virginia-Mo/Front-end_KiddyCare_V2"
                            >
                                Front-end</a></span>&
                        <span class="go">
                            <a
                                class="projects__links"
                                target="_blank"
                                href="https://github.com/Virginia-Mo/Back-end_KiddyCare_V2"
                            >
                                Back-end</a
                            > </span
                        ><br />
                        Le site est en ligne ici =>
                        <a
                            class="projects__links"
                            target="_blank"
                            href="https://kiddycare.netlify.app/"
                        >
                        kiddycare.netlify.app</a
                        >
                        <br>
                        J'ai initialement fait ce projet en full back-end, les pages étant générées via les Views d'EJS. 
                        Le repo Github de ce projet : <span class="go">
                            <a
                                class="projects__links"
                                target="_blank"
                                href="https://github.com/Virginia-Mo/Project_Shool_KiddyCare"
                            >
                                GO !</a
                            > </span
                        ><br />
                       <!-- Pour consulter la partie back-end, merci de me
                        demander les identifiants. Vous pouvez voir un apercu
                        ici :
                        <button
                            class="button__OpenModal"
                            @click="handleModalKDC"
                        >
                            CLICK
                        </button>

                        <Teleport to="#app" v-if="openModalKDC">
                            <div
                                class="Projects_imgContainer animate__animated animate__zoomIn">
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
                                            src="@/assets/imgs/bo1.png"
                                            alt="apercu du back-office"
                                        />
                                    </template>

                                    <template v-slot:slide2>
                                        <img
                                            class="Projects__back"
                                            src="@/assets/imgs/bo2.png"
                                            alt="apercu du back-office"
                                        />
                                    </template>
                                    <template v-slot:slide3>
                                        <img
                                            class="Projects__back"
                                            src="@/assets/imgs/bo3.png"
                                            alt="apercu du back-office"
                                        />
                                    </template>
                                </SwiperOverview>
                            </div>
                        </Teleport> -->
                    </p>
                    <p class="Projects__p" v-if="isEnglish">
                        Here's a fullstack project for a -non-existing- school : KiddyCare
                        ! A website giving the possibilities to targeted users
                        (parents) to get details about the school through the
                        different pages, request a Newsletter, book a
                        class,leave comments for each articles posted in the
                        school blog and leave a message.<br />
                        To access to all of those requests from users, the
                        school manager and teachers have a back-office part.
                        <strong>Back-end</strong>: NodeJS and Express. The
                        architecture used is a MVC. For the datas, I used a
                        relational database system : PostgreSQL. To access to
                        those datas, I used Sequelize.
                        <br />
                        <strong>Front-end</strong>: React, React Redux, React Router.<br />
                        <strong>Security</strong>: Some middlewares have been created to filter the connected user (access to the back-office), clean the form input to avoir XSS attacks and I also used Sequelize which makes prepared SQL requests.
                        Repo Github =>
                        <span class="go">
                            <a
                                class="projects__links"
                                target="_blank"
                                href="https://github.com/Virginia-Mo/Front-end_KiddyCare_V2"
                            >
                                Front-end</a></span>&
                        <span class="go">
                            <a
                                class="projects__links"
                                target="_blank"
                                href="https://github.com/Virginia-Mo/Back-end_KiddyCare_V2"
                            >
                                Back-end</a
                            > </span
                        ><br />
                        
                        The project is deployed on Heroku at this adress :
                        <a
                            class="projects__links"
                            target="_blank"
                            href="https://kiddycare.netlify.app/"
                        >
                        kiddycare.netlify.app</a
                        >
                        <br>
                        I initially created this projet using full back-end tech, pages being generated throw Views in EJS. 
                        This project's repo is here : <span class="go">
                            <a
                                class="projects__links"
                                target="_blank"
                                href="https://github.com/Virginia-Mo/Project_Shool_KiddyCare"
                            >
                                GO !</a
                            > </span
                        ><br />
                      <!-- To check the back-office part, you can ask me
                        the login infos. Here's an overview :
                        <button
                            class="button__OpenModal"
                            @click="handleModalKDC"
                        >
                            CLICK
                        </button>

                        <Teleport to="#app" v-if="openModalKDC">
                            <div
                                class="Projects_imgContainer animate__animated animate__zoomIn">
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
                                            src="@/assets/imgs/bo1.png"
                                            alt="apercu du back-office"
                                        />
                                    </template>

                                    <template v-slot:slide2>
                                        <img
                                            class="Projects__back"
                                            src="@/assets/imgs/bo2.png"
                                            alt="apercu du back-office"
                                        />
                                    </template>
                                    <template v-slot:slide3>
                                        <img
                                            class="Projects__back"
                                            src="@/assets/imgs/bo3.png"
                                            alt="apercu du back-office"
                                        />
                                    </template>
                                </SwiperOverview>
                            </div>
                        </Teleport> -->
                    </p>
                </div>
            </div>
            <NavBarTop />
        </div>
       <MouseScroll class="mousescroll__notMobile" />
        <div id="footerContainer">
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
import SwiperOverview from './SwiperOverview.vue'

import { mapState, mapActions } from 'pinia'
import { getLanguage } from '@/stores/getLanguage.js'

import 'animate.css'

export default {
    name: 'KiddyCare',
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

    mounted() {
        window.scrollTo(0, 0)
        // window.addEventListener('wheel', this.handleScroll1)
        // window.addEventListener('keydown', this.handleKeyDown1)
    },
    // unmounted() {
    //     window.removeEventListener('wheel', this.handleScroll1)
    //     window.removeEventListener('keydown', this.handleKeyDown1)
    // },
}
</script>

<style>
.go {
    margin-right: 0.5rem;
}
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
