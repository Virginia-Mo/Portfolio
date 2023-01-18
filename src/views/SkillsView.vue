<template>
    <div id="skillMainContainer">
        <div id="skills__titlediv">
            <h1 id="skills__h1" v-if="isEnglish">Skills</h1>
            <h1 id="skills__h1" v-if="isFrench">Compétences</h1>
            <div class="Menu__separator"></div>
        </div>
        <div id="skills__skillsContainer">
            <div id="skills__front" class="skills__div">
                <h2 class="skills__subtitles animate__animated animate__fadeIn animate__slower">Front-end</h2>
                <p class="skills__details">
                    <ul class="skills_ul">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SCSS</li>
                        <li>Javascript</li>
                    </ul>
                </p>
            <br>
                <h3 class="skills__h3">Librairies</h3>
                <p class="skills__details">
                    <ul class="skills_ul">
                        <li>Vue JS : Vue Router, Pinia..</li>
                        <li>React : React Router, Redux..</li>
                    </ul>
                </p>
            </div>
            <div id="skills__back" class="skills__div">
                <h2 class="skills__subtitles animate__animated animate__fadeIn animate__slower">Back-end</h2>
                    <p class="skills__details">
                    <ul class="skills_ul">
                        <li>NodeJS</li>
                        <li>Express (+ Sequelize)</li>
                        <li>PostgreSQL</li>
                        <li>POO, MVC, API REST</li>
                    </ul>
                </p>
                <br>
                <h3 class="skills__h3">CMS</h3>
                <p class="skills__details">
                    <ul class="skills_ul">
                        <li>Strapi</li>
                    </ul>
                </p>
            </div>
            <div id="skills__soft" class="skills__div">
                <h2 class="skills__subtitles animate__animated animate__fadeIn animate__slower">Soft Skills</h2>
                <p class="skills__details">
                    <ul class="skills_ul"  v-if="isFrench">
                        <li>Patience</li>
                        <li>Auto-apprentissage</li>
                        <li>Curieuse</li>
                        <li>Empathique</li>
                    </ul>
                    <ul class="skills_ul"  v-if="isEnglish">
                        <li>Patience</li>
                        <li>Self-learning</li>
                        <li>Curious</li>
                        <li>Empathy</li>
                    </ul>
                </p>
            </div>
        </div>
        
        <NavBarTop />
    <NavBar />
    </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import NavBarTop from '@/components/NavBarTop.vue'

import { mapState } from 'pinia'
import { getLanguage } from '@/stores/getLanguage.js'

export default {
    name : "SkillsPortfolio",
    components : { NavBar, NavBarTop },
    computed: {
        ...mapState(getLanguage, ['isEnglish', 'isFrench']),
    },
} 
</script>
<style>
#skillMainContainer {
    font-family: var(--font-poppins);
    margin: 1rem ;
    border: solid 1px var(--lightBrown);
      background-image: url("@/assets/imgs/bgskills.png");
   background-repeat: no-repeat;
   background-size: 100% 100%; 
}
#skills__skillsContainer {
    margin: 3rem 0;
}
#skills__h1 {
    font-family: var(--font-brittany);
    font-size: 4rem;
    color: var(--flashBlue);
    text-align: center;
    line-height: 6rem;
}
.skills__div {
    text-align: center;
    margin: 3rem 1rem;
    line-height: 3rem;
}
.skills__subtitles {
    color: var(--flashBlue);
    font-weight: bold;
    font-size: 2rem;
    padding-bottom: 1rem;
}
.skills_ul {
    font-size: 1.3rem;
    color: var(--darkBrown);
}
.skills__h3 {
    font-size: 1.8rem;
    color: var(--lightBlue);
}
#skills__aboutHome {
    margin: 1rem;
position: fixed;
top: 0;
right: 0;
}
@media screen and (min-width:1024px){
#skills__skillsContainer {
    display: flex;
    justify-content: space-around;
    margin-top: 5rem;
}
#skills__h1 {
    font-size: 5.5rem;
    margin-top: 4rem;
}
#skillMainContainer {
    margin: 3rem 5rem;
}
.skills__ul {
    font-size: 1.6rem;
}
.skills__subtitles {
    font-size: 2.5rem;
}
.skills__h3 {
    font-size: 2.2rem;
}
}
</style>