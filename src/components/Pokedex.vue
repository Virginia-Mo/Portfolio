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
                <div id="pokedex__imgDiv">
                    <img
                        src="@/assets/imgs/pkdx.png"
                        alt="Photo projet Pokedex"
                        id="pokedex__img"
                    />
                </div>
            </div>
            <div class="Projects__secondDiv">
                <div class="Projects__detailsContainer">
                    <p class="Projects__p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Deleniti illo, optio nostrum animi repudiandae,
                        iusto veritatis numquam voluptas exercitationem ipsam
                        neque, quia doloremque odit cumque. Tenetur vitae facere
                        dolore adipisci.
                    </p>
                </div>
            </div>
            <div class="Projects__aboutHome">
                <router-link to="/menu">
                    <img
                        src="@/assets/imgs/maison.png"
                        alt="Image retour a arrière"
                        id="imgHome"
                    />
                </router-link>
            </div>
        </div>
        <div id="footerContainer">
            <MouseScroll />
            <footer class="blueFooter">
                <div
                    class="arrowRight"
                    @click="(this.popnbubble = true), (this.displayPnb = true)"
                >
                    &#8594;
                </div>
            </footer>
        </div>
    </div>
    <PopnBubble v-if="popnbubble" />
</template>
<script>
import PopnBubble from '@/components/PopnBubble.vue'
import MouseScroll from '@/components/MouseScroll.vue'

export default {
    name: 'Pokedex',
    components: { PopnBubble, MouseScroll },
    data() {
        return {
            displayPnb: false,
            popnbubble: false,
        }
    },
    methods: {
        handleScroll2(event) {
            const y = event.deltaY
            if (y > 0) {
                this.popnbubble = true
                this.displayPnb = true
            } else {
                this.popnbubble = false
                this.displayPnb = false
            }
        },
        handleKeyDown2(event) {
            console.log('hello')
            if (event.key === 'ArrowDown') {
                this.popnbubble = true
                this.displayPnb = true
            } else {
                this.popnbubble = false
                this.displayPnb = false
            }
        },
    },

    mounted() {
        window.addEventListener('wheel', this.handleScroll2)
        window.addEventListener('keydown', this.handleKeyDown2)
    },
    unmounted() {
        window.removeEventListener('wheel', this.handleScroll2)
        window.removeEventListener('keydown', this.handleKeyDown2)
    },
}
</script>

<style>
.displayPnb {
    display: none;
}
#pokedexContainer {
    background-image: url('@/assets/imgs/bgpokedex.png');
}
#pokedex__imgDiv {
    background-color: var(--grey);
    border: solid 3px var(--darkBrown);
    height: auto;
    width: 61%;
    padding: 2rem 2rem;
    margin: 0 auto;
}
#pokedex__img {
    width: 100%;
}
@media screen and (min-width: 1024px) {
    #pokedex__imgDiv {
        width: 45%;
        margin: -8rem 0 0 17rem;
    }
}
</style>
