<template>
    <div id="popnbubbleContainer" class="projectsContainers">
        <h1 id="popnbubble__h1" class="Projects__h1">Pop'n'Bubble</h1>
        <div class="Projects__underline" id="popnbubble__underline"></div>
        <div class="Projects__mainDiv">
            <div class="Projects__firstdiv">
                <div class="projects__imgDiv popnbubble__imgDiv">
                    <a href="https://popnbubble.netlify.app/" >
                    <img
                        src="@/assets/imgs/logopnb.png"
                        alt="Photo projet popnbubble"
                        id="popnbubble__img"
                        target="_blank"
                    />
                    </a>
                </div>
            </div>
            <div class="Projects__secondDiv">
                <div class="Projects__detailsContainer">
                    <p class="Projects__p" id="popnbubble__p" v-if="isFrench">
                        Voici un projet que j'ai créé en me formant à VueJS.

Il présente une boutique de Bubble Tea (qui n'existe pas). Ce site permet à la boutique de présenter diverses informations  ainsi que de présenter un système de Click'n'Collect aux clients.<br/>

Le propriétaire de la boutique a accès à un back-office crée avec Strapi. Il peut donc consulter les commandes passées, les messages des clients et aussi modifier le menu facilement grâce à cette plateforme.<br/>
Les langages utilisés sont : <br/>
<ul class="Projects__ul">
   <li class="Projects__li">Front-end : VueJS 3 avec Options API, Pinia pour le store et Vue Router. </li>
   <li class="Projects__li">Back-end : CMS -> Strapi, avec Cloudinary pour le stockage des photos, base de données PostgreSQL.</li>
   <li class="Projects__li">Bibliothèque d'animations : AOS, Animate.css, Swiper.</li>
</ul>
Des améliorations auront bientôt lieu.<br/>
Repo Github => <span class="go"><a class="projects__links" href="https://github.com/Virginia-Mo/Pop-n-Bubble"> GO !</a> </span><br/>
Vous pouvez consulter le projet ici => <a href="https://popnbubble.netlify.app/" class="projects__links">Pop'n'Bubble</a> (un petit temps d'attente sera sûrement requis pour l'accès au menu.)
Pour consulter la partie back-end, merci de me demander les identifiants. Voici un aperçu : <button class="button__OpenModal" @click="handleModalPNB">CLICK</button>
<Teleport to="#app"  v-if="openModalPNB">  
        <div class="Projects_imgContainer animate__animated animate__zoomIn">
            <button @click="handleModalPNB" class="button__closeModal">
                X
            </button>
            <SwiperOverview>
                <template v-slot:slide1> <img class="Projects__back" src="@/assets/imgs/pnb_flavor.png" alt="apercu du back-office" /></template>      
                <template v-slot:slide2> <img class="Projects__back" src='@/assets/imgs/pnb_order.png'  alt="apercu du back-office" /></template>
            </SwiperOverview>   
        </div>
    </Teleport>     
</p>

<p class="Projects__p" id="popnbubble__p" v-if="isEnglish">
    Here's a project I made while learning href use Vuejs.
   It presents a fake Bubble Tea shop. This website enables the shop's owner to provide contact informations, the menu, the best sales as well as a Click'n'Collect system for the customers. As a matter of fact, customers can order bubble teas and choose when to come pick them up.<br/>
    The shop owner has access to a back-office part created with Strapi. He can check the orders, customers messages and change the menu and the best sales easily trhough this CMS.
    Some improvements are planned.

For this project I used the following techs :
<ul class="Projects__ul">
    <li class="Projects__li">Front-end : Vuejs 3 with Options API, Pinia for the store and Vue Router; including HTML, CSS and JavaScript.</li>
    <li class="Projects__li">Back-end : CMS : Strapi, with Cloudinary as a storage place and a PostgreSQL database. Deployed on heroku.</li>
    <li class="Projects__li">Animations librairies : AOS, Animate.css, Swiper.</li>
</ul>
Repo Github => <span class="go"><a class="projects__links" to="https://github.com/Virginia-Mo/Pop-n-Bubble"> GO !</a> </span><br/>
You can see the result here : <a href="https://popnbubble.netlify.app/" class="projects__links">Pop'n'Bubble</a>(a short waiting time can be needed as the Heroku dynos wake up).
To check the back-office part, you can ask me the login infos. Here's an overview : <button class="button__OpenModal" @click="handleModal">CLICK</button>
<Teleport to="#app"  v-if="openModalPNB">  
        <div class="Projects_imgContainer animate__animated animate__zoomIn">
            <button @click="handleModalPNB" class="button__closeModal">
                X
            </button>
            <SwiperOverview>
                <template v-slot:slide1> <img class="Projects__back" src="@/assets/imgs/pnb_flavor.png" alt="apercu du back-office" /></template>      
                <template v-slot:slide2> <img class="Projects__back" src='@/assets/imgs/pnb_order.png'  alt="apercu du back-office" /></template>
            </SwiperOverview>   
        </div>
    </Teleport>     
                    </p>
                </div>
            </div>
         <NavBarTop />
        </div>

        <MouseScroll class="mouseScroll__notMobile"/>
<footer class="blueFooter">
            
    <router-link to="/projects/pokedex" class="Projects__arrowDiv">
                    <div class="arrow arrowLeft">&#8592;</div>
                </router-link>
                <router-link to="/projects/madjikarite" class="Projects__arrowDiv">
                    <div class="arrow arrowRight">&#8594;</div>
                </router-link>
            
            </footer> 
    </div>
</template>
<script>
import NavBarTop from '@/components/NavBarTop.vue'
import SwiperOverview from './SwiperOverview.vue';
import MouseScroll from "./MouseScroll.vue";
import { mapActions, mapState } from 'pinia'
import { getLanguage } from '@/stores/getLanguage.js'

export default {
    name: 'PopnBubble',
    components : { NavBarTop, SwiperOverview, MouseScroll },
    computed : {
...mapState(getLanguage,["isEnglish", "isFrench", "openModalPNB"])
},
    methods : {
    ...mapActions(getLanguage, ["handleModalPNB"])
}
}
</script>

<style>
.Projects__ul {
    padding-left: 5rem;
}
.Projects__li {
    list-style:circle;
}

#popnbubbleContainer {
    background-color: var(--black);
}

#popnbubble__img {
    width: 100%;
}

@media screen and (min-width: 1250px) {
    #popnbubble__h1 {
        padding: 5rem 5rem 3rem 26rem;
    }
    #popnbubbleContainer {
    background-image: url('@/assets/imgs/bgpnb.png');
}
#popnbubble__underline {
        margin-left: 30rem;
        width: 14%;
    } 
#popnbubble__p {
        padding-left: 18rem;
        width: 65rem;
    }  
     .popnbubble__imgDiv {
  width: 40%; 
        margin: 11rem 0 0 6rem;
    }
}
</style>
