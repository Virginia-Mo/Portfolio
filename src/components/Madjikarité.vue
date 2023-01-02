<template>
    <div
        id="mkContainer"
        :class="{ display: display }"
        class="projectsContainers"
        @keydown.down="handleScroll1"
    >
        <h1 id="mk__h1" class="Projects__h1">Madjikarité</h1>
        <div class="Projects__underline" id="mk__underline"></div>
        <div class="Projects__mainDiv">
            <div id="mk__firstDiv">
                <div class="projects__imgDiv mk__imgDiv">
                    <a href="https://madjikarite-2esm.onrender.com/">
                        <img
                            src="@/assets/imgs/logomk.png"
                            alt="Photo projet Madjikarité"
                            id="madjikarité__img"
                            targer="_blank"
                        />
                    </a>
                </div>
            </div>
            <div  id="mk__secondDiv">
                <div class="Projects__detailsContainer projects__mkContainer">
                    <p class="Projects__p" v-if="isFrench">
                       Madjikarité est un projet de fin de formation fait en équipe pour une cliente réelle, Yankimadji. C'est un site de vente de produits cosmétiques naturels fait main. Ce projet a pour vocation de lutter contre l'excision des petites filles Tchad en donnant du travail aux femmes exciseuses via la culture du karité . 
                       Ce projet a été fait avec React et React Redux pour la partie front-end et Node JS, Express,PostgreSQL pour la partie back-end.
                       Ce site permet à l'utilisateur de se créer un compte, se connecter pour ensuite ajouter les produits de son choix dans son panier qui sera ensuite envoyer dans la partie back-office que Yankimadji contrôlera.
                       En effet, via le back-office, cette dernière peut accéder aux differentes commandes, aux produits en vente. Elle peut ajouter un produit et modifier ceux déjà existants.
                       La connexion des utilisateurs est sécurisée grâce à un token JWT.
                       L'équipe est composé de : 
                       <ul id="mk__ul">
                        <li><a target="_blank" href="https://github.com/madjikariteCaroline-K">&#x2794; Caroline K.</a></li>
                        <li> <a target="_blank" href="https://github.com/Jeremy-Nourri">&#x2794; Jérémy N.</a></li>
                        <li> <a target="_blank" href="https://github.com/NicolasZIELINSKI">&#x2794; Nicolas Z.</a></li>
                        <li><a target="_blank" href="https://github.com/PierreGoursolas">&#x2794; Pierre G.</a> </li>
                        <li><a target="_blank" href="https://github.com/Virginia-Mo">&#x2794; Virginia M.</a>  </li>
                       </ul>
                        <!-- Repo Github =>
                        <span class="go">
                            <a
                                class="projects__links"
                                href="https://github.com/O-clock-Icare/projet-08-madjikarite"
                            >
                                GO !</a
                            > </span><br /> -->
                        Le site est en ligne ici =>
                        <a
                            class="projects__links"
                            href="https://madjikarite-2esm.onrender.com/"
                        >
                            Madjikarité</a>
                        
                    </p>
                    <p class="Projects__p" v-if="isEnglish">
                        Madjikarité is a team-building project for a real client, Yankimadji. It’s a hand-made natural cosmetics sales website. The aim of this project is to fight against female genital mutilation in Chad by providing work to female genital mutilators through shea culture . 
                       This project was done with React and React Redux for the front-end part and Node JS, Express,PostgreSQL for the back-end part.
                       This website allows the user to create an account, login and then add the products of his choice in his shopping cart which will then be sent in the back-office part that Yankimadji will control.
                       Indeed, via the back office, she can access the various orders, the products on sale. She can add a product and update existing ones.
                       User login is secured with a JWT token.
                       The team is composed by : 
                       <ul>
                        <li>Pierre G. https://github.com/PierreGoursolas,</li>
                        <li>Virginia M. https://github.com/Virginia-Mo</li>
                        <li>Caroline K. https://github.com/madjikariteCaroline-K,</li>
                        <li>Jérémy N. https://github.com/Jeremy-Nourri,</li>
                        <li>Nicolas Z. https://github.com/NicolasZIELINSKI.</li>
                       </ul>
                        Repo Github =>
                        <span class="go">
                            <a
                                class="projects__links"
                                href="https://github.com/O-clock-Icare/projet-08-madjikarite"
                            >
                                GO !</a
                            > </span><br />
                        This website is online here =>
                        <a
                            class="projects__links"
                            href="https://madjikarite-2esm.onrender.com/"
                        >
                            Madjikarité</a>
                        
                    </p>
                </div>
            </div>
            <NavBarTop />
        </div>
        <div id="footerContainer">

            <footer class="blueFooter">
                <router-link to="/projects/popnbubble" class="Projects__arrowDiv">
        <div class="arrow arrowLeft">
                &#8592;
                </div>
            </router-link>

            </footer>
        </div>
        <NavBar />
    </div>
</template>
<script>
import MouseScroll from '@/components/MouseScroll.vue'
import NavBarTop from '@/components/NavBarTop.vue'
import NavBar from '@/components/NavBar.vue'
import { mapState} from 'pinia'
import { getLanguage } from '@/stores/getLanguage.js'

import 'animate.css'

import SwiperOverview from './SwiperOverview.vue'
export default {
    name: 'Madjikarite_Project',
    components: { MouseScroll, NavBarTop, NavBar},
    computed: {
        ...mapState(getLanguage, ['isEnglish', 'isFrench']),
    },
}
</script>
<style>
#mkContainer {
    background-image: url('@/assets/imgs/bgmadji.png');
    background-size: auto;
}
#mk__ul {
    text-align: center;
}

#mk__ul li a {
    color: var(--grey);
    text-decoration: none;
}
#mk__ul li a:hover {
   transform: scale(1.1);
   color: var(--flashBlue);
}
#madjikarité__img {
    width: 100%;
    max-width: 100%;
}
@media screen and (min-width: 1024px) {
    #mkContainer {
        background-size: 100% 100%;
    }
    #mk__secondDiv {
        width: 65%;
    }
    #mk__firstDiv {
        width: 20%;
        padding-top: 5rem;
        margin-right: 5rem;
    }
    #mk__h1 {
        text-align: center;
    }
    #mk__underline {
        margin: 0 auto;
        width: 18%;
    }
    .mk__imgDiv {
        width: 64%;
    }
}</style>