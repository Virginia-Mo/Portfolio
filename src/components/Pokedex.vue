p
<template>
    <div
        id="pokedexContainer"
        class="projectsContainers"
        :class="{ displayPnb: displayPnb }"
    >
        <h1 id="pokedex__h1" class="Projects__h1">The Pokedex</h1>
        <div class="Projects__underline"></div>
        <div class="Projects__mainDiv">
            <div class="Projects__firstdiv">
                <div class="projects__imgDiv pokedex__imgDiv">
                    <a target="_blank" href="https://thepokedexvm.netlify.app/">
                        <img
                            src="@/assets/imgs/pkdx.png"
                            alt="Photo projet Pokedex"
                            id="pokedex__img"
                        />
                    </a>
                </div>
            </div>
            <div class="Projects__secondDiv">
                <div
                    class="Projects__detailsContainer"
                    id="projects__pokedexDiv"
                >
                    <p class="Projects__p" v-if="isFrench">
                        Voici un petit projet que j'ai fait afin de m'entraîner
                        aux appels API.<br />
                        Le bien connu Pokedex ! <br />
                        Les utilisateurs, après avoir ouvert la pokeball,
                        peuvent accéder aux informations de différents pokemon
                        en tapant leur numéro ou nom en anglais. Ils peuvent
                        aussi voir les pokemons de façon random en cliquant sur
                        le bouton prévu à cet effet.<br />
                        Les langages utilisés sont HTML5, CSS3 et vanilla JS.<br />
                        Repo Github =>
                        <span class="go"
                            ><a
                                class="projects__links"
                                tagert="_blank"
                                href="https://github.com/Virginia-Mo/virginia-mo.github.io"
                            >
                                GO !</a
                            > </span
                        ><br />
                        Le projet se trouve ici =><a
                            target="_blank"
                            href="https://thepokedexvm.netlify.app/"
                            class="projects__links projects__links--pokedex"
                            >Pokedex</a
                        >.
                    </p>
                    <p class="Projects__p" v-if="isEnglish">
                        Here's a project I coded to work on API calls (and to
                        get a bit of nostalgia, pokemon was part of my
                        childhood). The world famous Pokedex ! Users can, after
                        opening the pokeball, access to all the informations
                        about differents pokemon by taping their number or name
                        (in English). They can also look for Pokemon randmly by
                        clicking the button meant for that purpose. Languages
                        used are HTML5, CSS3 and vanilla JS.<br />
                        Repo Github =>
                        <span class="go"
                            ><a
                                class="projects__links"
                                target="_blank"
                                href="https://github.com/Virginia-Mo/virginia-mo.github.io"
                            >
                                GO !</a
                            > </span
                        ><br />
                        You can find it here =>
                        <a
                            href="https://thepokedexvm.netlify.app/"
                            :target="_blank"
                            class="projects__links"
                            >Pokedex</a
                        >.
                    </p>
                </div>
            </div>
            <NavBarTop />
        </div>
        <div id="footerContainer">
            <MouseScroll class="mousescroll__notMobile mouse_scroll--pokedex" />
            <footer class="blueFooter blueFooter--pokedex">
                <router-link
                    to="/projects/kiddycare"
                    class="Projects__arrowDiv"
                >
                    <div class="arrow arrowLeft">&#8592;</div>
                </router-link>
                <router-link
                    to="/projects/popnbubble"
                    class="Projects__arrowDiv"
                >
                    <div class="arrow arrowRight">&#8594;</div>
                </router-link>
            </footer>
        </div>
    </div>
</template>
<script>
import MouseScroll from '@/components/MouseScroll.vue'
import NavBarTop from '@/components/NavBarTop.vue'

import { mapState } from 'pinia'
import { getLanguage } from '@/stores/getLanguage.js'

export default {
    name: 'PokedexProject',
    components: { MouseScroll, NavBarTop },
    mounted() {
        window.scrollTo(0, 0)
    },
    computed: {
        ...mapState(getLanguage, ['isEnglish', 'isFrench']),
    },
    // data() {
    //     return {
    //         displayPnb: false,
    //         popnbubble: false,
    //     }
    // },
    // methods: {
    //     handleScroll2(event) {
    //         const y = event.deltaY
    //         if (y > 0) {
    //             this.popnbubble = true
    //             this.displayPnb = true
    //         } else {
    //             this.popnbubble = false
    //             this.displayPnb = false
    //         }
    //     },
    //     handleKeyDown2(event) {
    //         console.log('hello')
    //         if (event.key === 'ArrowDown') {
    //             this.popnbubble = true
    //             this.displayPnb = true
    //         } else {
    //             this.popnbubble = false
    //             this.displayPnb = false
    //         }
    //     },
    // },

    // mounted() {
    //     window.addEventListener('wheel', this.handleScroll2)
    //     window.addEventListener('keydown', this.handleKeyDown2)
    // },
    // unmounted() {
    //     window.removeEventListener('wheel', this.handleScroll2)
    //     window.removeEventListener('keydown', this.handleKeyDown2)
    // },
}
</script>

<style>
.projects__links--pokedex {
    padding-bottom: 8rem;
}
#projects__pokedexDiv {
    height: 100vh;
}
.blueFooter--pokedex {
    position: fixed;
    bottom: 0;
}
.displayPnb {
    display: none;
}

#pokedex__img {
    width: 100%;
}
.mouse_scroll--pokedex {
    margin-top: 12.5rem;
}
#pokedexContainer {
    background-color: var(--black);
}
@media screen and (min-width: 1024px) {
    .pokedex__imgDiv {
        width: 45%;
        margin: -8rem 0 0 17rem;
    }
    #pokedexContainer {
        background-image: url('@/assets/imgs/bgpokedex.png');
    }
    #projects__pokedexDiv {
        height: auto;
    }
    .projects__links--pokedex {
        padding-bottom: 0.5rem;
    }
}
</style>
