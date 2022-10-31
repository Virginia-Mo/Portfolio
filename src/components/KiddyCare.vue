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
                <div id="kiddycare__imgDiv">
                    <img
                        src="@/assets/imgs/kdc.png"
                        alt="Photo projet KiddyCare"
                        id="kiddycare__img"
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
                    @click="(this.pokedex = true), (this.display = true)"
                >
                    &#8594;
                </div>
            </footer>
        </div>
    </div>
    <Pokedex v-if="pokedex" />
</template>
<script>
import Pokedex from '@/components/Pokedex.vue'
import MouseScroll from '@/components/MouseScroll.vue'

export default {
    name: 'KiddyCare',
    components: { Pokedex, MouseScroll},
    data() {
        return {
            pokedex: false,
            display: false,
        }
    },
    methods: {
        handleScroll1(event) {
            const y = event.deltaY
            if (y > 0) {
                this.pokedex = true
                this.display = true
            } else {
                this.pokedex = false
                this.display = false
            }
        },
        handleKeyDown1(event) {
            console.log('hello')
            if (event.key === 'ArrowDown') {
                this.pokedex = true
                this.display = true
            } else {
                this.pokedex = false
                this.display = false
            }
        },
    },

    mounted() {
        window.addEventListener('wheel', this.handleScroll1)
        window.addEventListener('keydown', this.handleKeyDown1)
    },
    unmounted() {
        window.removeEventListener('wheel', this.handleScroll1)
        window.removeEventListener('keydown', this.handleKeyDown1)
    },
}
</script>

<style>
.display {
    display: none;
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
@media screen and (min-width: 768px) {
    #kiddycareContainer {
        background-image: url('@/assets/imgs/bgkdc.png');
    }
}
@media screen and (min-width: 1024px) {
    #kiddycare__imgDiv {
        width: 45%;
        margin: -5rem 0 0 -5rem;
    }
}
</style>
