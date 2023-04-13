<template>
    <div class="aboutContainer">
        <!-- <div id="Menu__aboutHome">
            <router-link to="/menu">
                <img
                    src="@/assets/imgs/maison.png"
                    alt="Image retour a arrière"
                    id="imgHome"
                />
            </router-link>
        </div> -->
        <NavBarTop />
        <div id="About__titlediv">
            <h1 id="About__h1" v-if="isEnglish">About Me</h1>
            <h1 id="About__h1" v-if="isFrench">A Propos</h1>
            <div id="light">
                <div id="About__line">
                    <span class="l1"></span>
                    <span class="l2"></span>
                    <span class="l3"></span>
                    <span class="l4"></span>
                </div>
            </div>
        </div>
        <div id="About__div">
            <div id="About__img">
                <div id="About__imgContainer">
                    <img
                        src="@/assets/imgs/me.png"
                        alt="Photo de moi"
                        id="meImg"
                    />
                </div>
                <div id="About__addedBorder"></div>
            </div>
            <div id="About__detailsContainer">
                <div></div>
                <div>
                    <p id="About__details" v-if="isFrench">
                        Bonjour ! Je suis Virginia Mo et je viens d'une petite
                        ville près de Versailles.<br />
                        Après avoir travaillé près de 8 ans en tant
                        qu'infirmière, principalement en pédiatrie, j'ai décidé
                        de changer de voie. À la découverte du développement
                        web, j'ai tout de suite accroché.<br />
                        J'ai donc suivi une formation de développeuse web
                        fullstack Javascript chez o'Clock. <br />
                        J'ai pu apprendre de nouveaux langages, les bonnes
                        pratiques du code, améliorer ma logique et bien
                        d'autres. Mes expériences professionnelles m'ont permis
                        de développer de la rigueur, du sérieux et l'esprit
                        d'équipe. <br />
                        Je suis désormais développeuse web fullstack avec une
                        spécialisation en ReactJS.
                    </p>
                    <p id="About__details" v-if="isEnglish">
                        Hello! I'm Virginia Mo and I come from a little town by
                        Versailles.<br />
                        After working 8 years as a nurse, mainly in the
                        paediatric ward, I decided that it was time for me to
                        change job. After some reseaches, I discovered web
                        development and I immediatly loved it ! So I followed
                        the fullstack web development course provided by O'clock
                        school.<br />
                        I learnt new languages, ways to code "clean", to
                        improved my logic and many more. My past professionnal
                        experiences allowed me to develop my thorough and team
                        work spirit.<br />
                        I'm now a fullstack web developer with a specialisation
                        in ReactJS. I currently prefer Front-end development.
                    </p>
                </div>
            </div>
        </div>
        <div id="About__blueDeco"></div>
        <NavBar />
    </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import NavBarTop from '@/components/NavBarTop.vue'

import { mapState } from 'pinia'
import { getLanguage } from '@/stores/getLanguage.js'

export default {
    name: 'aboutPortfolio',
    components: { NavBar, NavBarTop },
    computed: {
        ...mapState(getLanguage, ['isEnglish', 'isFrench']),
    },
}
</script>
<style scoped>
.aboutContainer {
    height: 100vh;
}
#About__h1 {
    font-family: var(--font-brittany);
    color: var(--flashBlue);
    font-size: 4rem;
    padding-top: 3rem;
    margin-bottom: 3rem;
    text-align: center;
    word-spacing: 1rem;
}
#About__titlediv {
    padding-top: 3rem;
}
#About__line {
    width: 100%;
    height: 2px;
    margin: auto;
    background-color: var(--darkBrown);
    position: absolute;
    left: 0;
    top: 12rem;
    animation: lineH linear;
    animation-duration: 2s;
    animation-iteration-count: 1;
}
@keyframes lineH {
    0% {
        opacity: 0.4;
        width: 0%;
    }
    100% {
        opacity: 1;
        width: 85%;
    }
}
#About__img {
    margin-top: 2rem;
}
#meImg {
    max-width: 100%;
    border-radius: 50%;
    height: 78%;
    margin: 11%;
}
#About__imgContainer {
    background-color: var(--grey);
    width: 16rem;
    text-align: center;
    margin: 0 auto;
    height: 16rem;
    border-radius: 50%;
}
#Menu__aboutHome {
    position: fixed;
    display: flex;
    z-index: 1;
    right: 0;
    top: 0;
    justify-content: end;
    width: 10rem;
    height: 4rem;
    background-color: var(--grey);
}
#About__detailsContainer {
    font-size: 1.1rem;
    font-family: var(--font-poppins);
    color: var(--darkBrown);
    margin: 3rem;
    line-height: 1.5rem;
}
#About__blueDeco {
    width: 10rem;
    height: 2.5rem;
    background-color: var(--lightBlue);
}
@media screen and (min-width: 768px) {
    #About__h1 {
        text-align: left;
        margin-left: 3rem;
    }
    #About__details {
        width: 60%;
    }
    #About__imgContainer {
        border-radius: 0;
        width: 18rem;
        height: 20rem;
        position: absolute;
        top: 10rem;
        right: 3rem;
    }
    #meImg {
        border-radius: 0;
        height: 90%;
        margin: 5%;
    }
    #About__div {
        display: flex;
        flex-direction: row-reverse;
        margin: 3rem;
    }
    #About__line {
        width: 89%;
        margin: 0;
    }
    #About__addedBorder {
        width: 19rem;
        height: 23rem;
        position: absolute;
        z-index: 2;
        top: 9rem;
        right: 1rem;
        background-repeat: no-repeat;
        background-image: linear-gradient(
                to right,
                var(--darkBrown) 100%,
                var(--darkBrown) 100%
            ),
            linear-gradient(
                to bottom,
                var(--darkBrown) 100%,
                var(--darkBrown) 100%
            ),
            linear-gradient(
                to right,
                var(--darkBrown) 100%,
                var(--darkBrown) 100%
            ),
            linear-gradient(
                to bottom,
                var(--darkBrown) 100%,
                var(--darkBrown) 100%
            );
        background-size: 100% 3px, 3px 100%, 100% 3px, 3px 100%;
        background-position: 0 0, 100% 0, 100% 100%, 0 100%;
        animation: bg linear 1;
        animation-delay: 2.1s;
        animation-duration: 2.5s;
    }
    @keyframes bg {
        0% {
            background-size: 0 3px, 3px 0, 0 3px, 3px 0;
        }
        25% {
            background-size: 100% 3px, 3px 0, 0 3px, 3px 0;
        }
        50% {
            background-size: 100% 3px, 3px 100%, 0 3px, 3px 0;
        }
        75% {
            background-size: 100% 3px, 3px 100%, 100% 3px, 3px 0;
        }
        100% {
            background-size: 100% 3px, 3px 100%, 100% 3px, 3px 100%;
        }
    }

    #About__blueDeco {
        display: none;
    }
}
@media (min-width: 1024px) {
    #About__h1 {
        font-size: 7rem;
    }
    #About__imgContainer {
        border-radius: 0;
        width: 22rem;
        height: 26rem;
        position: absolute;
        top: 11rem;
        right: 7rem;
    }
    #meImg {
        border-radius: 0;
        height: 90%;
        margin: 6%;
    }
    #About__addedBorder {
        width: 23rem;
        height: 28rem;
        top: 10rem;
        right: 5rem;
    }
    #About__details {
        width: 52%;
        font-size: 1.3rem;
        line-height: 2rem;
    }
    #About__blueDeco,
    #Menu__aboutHome {
        width: 25rem;
    }
    #About__line {
        top: 16rem;
    }
}
</style>
