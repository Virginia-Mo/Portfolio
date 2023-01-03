<template>
    <div id="pageContainer">
        <section id="education__Container">
            <div id="h1div">
            <h1 class="pageTitles" id="education__title">Education</h1>
        </div>
            <div id="education__line"></div>
            <div id="decoline"></div>
            <div class="education__detailsDiv" v-if="isFrench">
            <p class="education__p">
                <span class="education__dates">Octobre 22 à Décembre 22</span> -
                <span class="education__school">École O'Clock</span><br>
                Spécialisation React et projet professionnalisant en équipe. 
            </p>
            <p class="education__p">
                <span class="education__dates">Mai 22 à Août 22</span> -
                <span class="education__school">École O'Clock</span><br>
                Formation de développeuse web et mobile Fullstack <strong>Javascript</strong>.
            </p>
            <p class="education__p">
                <span class="education__dates">2010-2013</span> -
                <span class="education__school">IFSI Ambroise Paré, Boulogne Billancourt</span><br>
                École Infirmière. 
            </p></div>
            <div class="education__detailsDiv" v-if="isEnglish">
            <p class="education__p">
                <span class="education__dates">October 22 to December 22</span> -
                <span class="education__school">O'Clock school</span><br>
                React course and team project.
            </p>
            <p class="education__p">
                <span class="education__dates">May 22 to August 22</span> -
                <span class="education__school">O'Clock school</span><br>
                Web developer -Fullstack <strong>Javascript</strong>- course.
            </p>
            <p class="education__p">
                <span class="education__dates">2010-2013</span> -
                <span class="education__school">IFSI Ambroise Paré, Boulogne Billancourt</span><br>
                Nursing school
            </p></div>
<!-- 
<div id="decoImage">
    <img src="@/assets/imgs/round2.png" alt="image de décoration" id="decoImg">
</div> -->
</section>
        <section id="experience__Container">
            <div id="experience__imgDiv">
                <img src="@/assets/imgs/desk.jpg" alt="Image de décoration ordinateur" id="experience__img">
            </div>
            <div id="h1container">
            <h1 class="pageTitles" id="experience__title">Experiences</h1>
            </div>
            <div id="experience__mainContainer">
                <div id="linesDiv">
            <div class="experience__line"></div>
            <div class="experience__line" id="lastLine"></div>

        </div>
            <div class="experience__detailsDiv" v-if="isFrench">
            <p class="experience__p">
                <span class="experience__dates">Novembre 2022 à décembre 2022</span> -
                <span class="experience__school">École O'Clock</span><br>
                Développement d'un projet en équipe.
            </p>
            <p class="experience__p">
                <span class="experience__dates">Octobre 2021 à Avril 2022, Janvier 2019 à Novembre 2020</span> -
                <span class="experience__school">92800,Puteaux</span><br>
                Infirmière en laboratoire : prélèvement biologiques, mycologiques et bactériologique; aide technique.
            </p>
            <p class="experience__p" id="last__p">
                <span class="experience__dates">2013 à 2018</span> -
                <span class="experience__school">92100,Boulogne Billancourt</span><br>
               Infirmière en pédiatrie générale : 
               <ul>
                <li>Hospitalisation bébé/enfants</li>
                <li>Urgences pédiatriques</li>
                <li>Psychiatrie adolecents</li>
               </ul>
            </p>
        </div>
        <div class="experience__detailsDiv" v-if="isEnglish">
            <p class="experience__p">
                <span class="experience__dates">November 2022 to December 2022</span> -
                <span class="experience__school">O'Clock school</span><br>
                Making of a project with a team.
            </p>
            <p class="experience__p">
                <span class="experience__dates">October 2021 to April 2022, January 2019 to November 2020</span> -
                <span class="experience__school">92800,Puteaux</span><br>
                Nurse in a lab: taking blood, mycological and bacteriological samples; technical help.
            </p>
            <p class="experience__p" id="last__p">
                <span class="experience__dates">2013 à 2018</span> -
                <span class="experience__school">92100,Boulogne Billancourt</span><br>
               Nurse in paediatric ward : 
               <ul>
                <li>Hospitalization: babies/kids</li>
                <li>Emergency department (paediatric)</li>
                <li>Psychiatric ward for teenagers</li>
               </ul>
            </p>
        </div>

        </div>
    </section>
</div>
<NavBarTop />
<NavBar />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import NavBarTop from '@/components/NavBarTop.vue'

import { mapState } from 'pinia'
import { getLanguage } from '@/stores/getLanguage.js'


export default {
    name : "experiencePortfolio",
    components : { NavBar, NavBarTop },
    computed : {
...mapState(getLanguage,["isEnglish", "isFrench"])
},
}
</script>
<style scoped>

#pageContainer {
   background-image: url("@/assets/imgs/bg.png");
   background-repeat: no-repeat;
   background-size: cover;
background-position: bottom;
height: 100vh;
}
#experience__aboutHome {
    position: fixed;
    top: 0;
    right: 0;
}
.pageTitles {
    font-family: var(--font-brittany);
}
#education__title {
    font-size: 4rem;  
    padding-top: 3.5rem;
}
#h1div {
    padding: 2rem;
    border-radius: 10rem;
    width: 18rem;
    height: 11rem;
    background-color: var(--grey);
    margin: -11% 0 0 1rem;
    transform: rotate(356deg);
}
.education__detailsDiv {
    color: var(--darkBrown);
    font-family: var(--font-poppins);
    margin: 3rem 4rem;
    font-size:1.1rem;
    line-height: 1.5rem;
}
.education__p {
    margin: 2rem 0;
}
.education__dates, .experience__dates {
    font-weight: bold;
}
.education__school, .experience__school {
    text-decoration: underline;
    font-style: italic;
}

#decoImg {
    display: none;
}
#experience__img{
    max-width: 70%;
    border-radius: 20px;
    box-shadow: 0.1rem 0.1rem 0.5rem black;
}
#experience__imgDiv {
width: auto;
margin: 1rem auto;
text-align: center;
}
#experience__Container {
    background-color: var(--lightBlue);
    border: solid 2.5px var(--flashBlue);
    margin: 2rem;
}
#experience__title {
    font-size: 2.3rem;
    transform: rotate(12deg);
}
#h1container {
    padding: 2rem;
    border-radius: 10rem;
    width: 14rem;
    height: 5.5rem;
    background-color: var(--grey);
    transform: rotate(348deg);
    margin: -1.5rem auto;
}
.experience__detailsDiv {
    font-size: 1.1rem;
    font-family: var(--font-poppins);
    margin: 4rem 1rem 1rem;
    line-height: 1.5rem;
}
.experience__p {
    margin: 1rem;
}
#last__p {
    margin: 1rem 1rem 0.5rem;
}
ul {
    font-size: 1rem;
    line-height: 1rem;
    margin: 0 5rem;
}
li {
    list-style: circle;
}
#experience__mainContainer {
    display: flex;
}
#linesDiv {
    padding-top: 5rem;
    display: none;
}
.experience__line {
    width: 0.2rem;
    height: 7rem;
    background-color: var(--black);
    margin:1rem;
    position: relative;
}
.experience__line::before,
.experience__line::after {
    position: absolute;
    content: '';
    width: 8px;
    height: 8px;
    background-color: var(--black);
    bottom: 0;
    right: -0.19rem;
    transform: rotate(45deg);
}
.experience__line::before {
    top: 0;
    right: -0.19rem;
} 
#lastLine {
    margin: -1.5rem 1rem;
}

@media screen and (min-width : 400px){
    #experience__img{
    max-width: 100%;
    width: 70%;
}
}

@media screen and (min-width : 1024px){
#pageContainer {
    display: flex;
    height: 100vh
}
#education__Container {
    flex: 2;
}
#experience__Container {
    flex: 1;
    overflow: auto;
}
.education__detailsDiv {
    margin: 4rem 8rem;
    font-size: 1.5rem;
   line-height: 2.3rem;
}
#experience__img {
    border-radius: 0;
}
#education__title {
font-size: 5rem;
    padding-top: 5.5rem;
}
#h1div {
    width: 21rem;
    height: 14rem;
    margin: -11% 0 0 4rem;
}
#linesDiv {
    padding-top: 5rem;
    display: block;
}
.experience__detailsDiv {
    font-size: 1.2rem;
   line-height: 1.7rem;
}

}
@media screen and (min-width : 1300px){
    #experience__imgDiv {
        width: 100%;
    }
#pageContainer {
    background-position: inherit;
}
}@media screen and (min-width : 1450px){
#pageContainer {
    background-size: contain;
}
#h1div {
    width: 21rem;
    height: 14rem;
    margin: -7% 0 0 9rem;
}
}
</style>