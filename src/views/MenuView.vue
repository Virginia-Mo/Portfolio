<template>
    <div id="MenuContainer">
        <div id="MenuContainer2">
            <div id="Menu__HomeContainer">
                <FlagContent />
                <router-link to="/">
                    <icon class="" name="home" :size="50" color="#dfd8ca" />
                </router-link>
            </div>
            <h1 id="Menu__h1">Table of Content</h1>
            <div class="Menu__separator"></div>
            <section id="Menu__section">
                <div class="Menu__detailsContainer">
                    <router-link to="/about" class="Menu__links">
                        <p class="Menu__detailsP" v-if="isEnglish">About me</p>
                        <p class="Menu__detailsP" v-if="isFrench">A Propos</p>
                    </router-link>
                </div>
                <div class="Menu__detailsContainer2">
                    <router-link to="/experience" class="Menu__links">
                        <p class="Menu__detailsP">Education & Experience</p>
                    </router-link>
                </div>
                <div class="Menu__detailsContainer2">
                    <router-link to="/projects" class="Menu__links">
                        <p class="Menu__detailsP" v-if="isEnglish">Projects</p>
                        <p class="Menu__detailsP" v-if="isFrench">Projets</p>
                    </router-link>
                </div>
                <div class="Menu__detailsContainer">
                    <router-link to="/skills" class="Menu__links">
                        <p class="Menu__detailsP" v-if="isEnglish">Skills</p>
                        <p class="Menu__detailsP" v-if="isFrench">
                            Compétences
                        </p>
                    </router-link>
                </div>
                <div class="Menu__detailsContainer">
                    <router-link to="/contact" class="Menu__links">
                        <p class="Menu__detailsP">Contact</p>
                    </router-link>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import Icon from '@/components/Icon.vue'
import FlagContent from '@/components/FlagContent.vue'

import { mapState } from 'pinia'
import { getLanguage } from '@/stores/getLanguage.js'

export default {
    name: 'MenuPortfolio',
    components: { Icon, FlagContent },
    computed: {
        ...mapState(getLanguage, ['isEnglish', 'isFrench']),
    },
}
</script>
<style>
.Menu__links {
    color: var(--black);
    text-decoration: none;
}
.Menu__links:visited {
    color: var(--black);
}
.Menu__detailsP {
    font-family: 'Poppins', sans-serif;
    margin: 1rem auto;
    font-size: 1.4rem;
    text-align: center;
}
.Menu__separator {
    width: 40%;
    height: 2px;
    margin: auto;
    background-color: var(--darkBrown);
    position: relative;
    top: 28px;
    margin-bottom: 35px;
}
.Menu__separator::before,
.Menu__separator::after {
    position: absolute;
    content: '';
    width: 8px;
    height: 8px;
    background-color: var(--darkBrown);
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
}
.Menu__separator::before {
    right: 0;
}
#MenuContainer {
    height: 100vh;
}
#MenuContainer2 {
    border: solid 2px #dfd8ca66;
    width: 90%;
    height: 90vh;
    flex-direction: column;
    margin: 2rem auto;
}
#Menu__h1 {
    color: var(--flashBlue);
    font-family: 'Brittany Signature', sans-serif;
    font-size: 4rem;
    text-align: center;
}
#Menu__HomeContainer {
    display: flex;
    justify-content: flex-end;
}
.imgHome {
    width: 3rem;
    height: 3rem;
    margin: 0.5rem 0.5rem 4.5rem;
}
#Menu__section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 5rem;
}
.Menu__detailsContainer,
.Menu__detailsContainer2 {
    width: 100%;
    height: 4rem;
    background-size: contain;
    background-repeat: no-repeat;
}
.Menu__detailsContainer {
    background-image: url('@/assets/imgs/darkBlueBig.png');
}
.Menu__detailsContainer2 {
    background-image: url('@/assets/imgs/lightBlueMedium.png');
}

/* MEDIA QUERIES */
@media screen and (min-width: 432px) {
    .Menu__detailsContainer,
    .Menu__detailsContainer2 {
        background-size: cover;
    }
}
@media screen and (min-width: 767px) {
    .Menu__detailsContainer,
    .Menu__detailsContainer2 {
        width: 50%;
    }
}
@media screen and (min-width: 1024px) {
    .Menu__detailsContainer,
    .Menu__detailsContainer2 {
        width: 40%;
        height: 7rem;
    }
    #Menu__section {
        height: 5rem;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 3rem;
    }
    #Menu__h1 {
        font-size: 6rem;
    }
    .Menu__separator {
        width: 22%;
        top: 42px;
    }
    .Menu__detailsP {
        margin: 3rem auto;
        font-size: 1.8rem;
        text-align: center;
    }
}
</style>
