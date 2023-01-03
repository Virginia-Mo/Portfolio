<template>
    <div id="projects__container" v-if="showMainPage">
        <div id="projects__aboutHome">
            <router-link to="/menu">
                <img
                    src="@/assets/imgs/maison.png"
                    alt="Image retour a arrière"
                    class="imgHome"
                />
            </router-link>
        </div>
        <div id="projects__middleLine"></div>
        <div id="projects__titlesContainer">
            <h1 id="projects__h1">
                <span id="my">MY</span>
                <span id="projects">Projects</span>
            </h1>
            <MouseScroll />
        </div>
        <div id="projects__rightside">
            <div id="projects__lineRight"></div>
            <div id="projects__imgContainer">
                <img
                    src="@/assets/imgs/imgprojet.jpg"
                    alt="Photo de décoration"
                    id="projects__img"
                />
            </div>
        </div>
        <NavBar />
    </div>
    <footer class="blueFooter">
        <div
            class="arrowRight"
            @click=";(this.kdc = true), (this.showMainPage = false)"
        >
            &#8594;
        </div>
    </footer>
    <KiddyCare v-if="kdc" />
</template>
<script>
import KiddyCare from '@/components/KiddyCare.vue'
import MouseScroll from '@/components/MouseScroll.vue'
import NavBar from '@/components/NavBar.vue'

export default {
    name: 'projectsPortfolio',
    components: { KiddyCare, MouseScroll, NavBar },
    data() {
        return {
            showMainPage: true,
            kdc: false,
            pokedex: false,
        }
    },
    methods: {
        handleScroll(event) {
            const y = event.deltaY
            if (y > 0) {
                this.kdc = true
                this.showMainPage = false
            } else {
                this.kdc = false
                this.showMainPage = true
            }
        },
        handleKeyDown(event) {
            console.log('hello')
            if (event.key === 'ArrowDown') {
                this.kdc = true
                this.showMainPage = false
            } else {
                this.kdc = false
                this.showMainPage = true
            }
        },
    },

    mounted() {
        window.addEventListener('wheel', this.handleScroll)
        window.addEventListener('keydown', this.handleKeyDown)
    },
    unmounted() {
        window.removeEventListener('wheel', this.handleScroll)
        window.removeEventListener('keydown', this.handleKeyDown)
    },
}
</script>

<style>
.blueFooter {
    position: fixed;
    bottom: 0;
}
#projects__container {
    display: flex;
}
#projects__aboutHome {
    position: fixed;
}
#projects__middleLine {
    width: 35%;
    height: 0.2rem;
    display: flex;
    margin-top: 26rem;
    background-color: var(--darkBrown);
}
#projects__titlesContainer {
    background-color: var(--lightBlue);
    width: 60%;
    margin: 0;
    height: 100vh;
    font-size: 5rem;
}
#projects__h1 {
    color: var(--darkBrown);
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin: 10rem 1rem 0;
}
#my {
    font-family: var(--font-forum);
}
#projects {
    font-family: var(--font-brittany);
}
#projects__arrow {
    color: var(--darkBrown);
    width: -9%;
    margin: 2rem 1rem;
    font-size: 5rem;
    text-align: end;
}
#projects__rightside {
    display: none;
}
@media screen and (min-width: 768px) {
    #projects__h1 {
        margin: 50% 15% 0;
        font-size: 7rem;
        text-align: center;
    }
    .blueFooter {
        display: none;
    }
}
@media screen and (min-width: 1024px) {
    #projects__middleLine {
        width: 17%;
    }
    #projects__titlesContainer {
        width: 30%;
    }
    #projects__rightside {
        display: flex;
        width: 60%;
        background-image: url('@/assets/imgs/bgprojets.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    #projects__imgContainer {
        width: 25rem;
        background-color: var(--grey);
        height: 29rem;
        margin: 20% 0;
        padding: 2rem 3rem;
        border: solid 2px var(--darkBrown);
    }
    #projects__img {
        max-width: 100%;
        margin: auto;
    }
    #projects__lineRight {
        width: 35%;
        height: 0.2rem;
        display: flex;
        margin-top: 26rem;
        background-color: var(--darkBrown);
    }
}
</style>
