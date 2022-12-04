<template>
    <div id="projects__container">
        <div id="projects__aboutHome">
            <router-link to="/menu">
                <icon name="home" color="#fff" size="30"/>
            </router-link>
        </div>
        <div id="projects__middleLine"></div>
        <div id="projects__titlesContainer">
            <h1 id="projects__h1">
                <span id="my">MY</span>
                <span id="projects">Projects</span>
            </h1>
            <MouseScroll class="mousescroll__notMobile mouse_scroll--pokedex"/>
            <nav class="nav__projects">
    <router-link class="nav__projects--a" to="/projects/kiddycare"> &#x2794; KiddyCare</router-link>
    <router-link class="nav__projects--a" to="/projects/pokedex">&#x2794; Pokedex</router-link>
    <router-link class="nav__projects--a" to="/projects/popnbubble"> &#x2794; Pop'n'Bubble</router-link> 
</nav>
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
    <router-link to="/projects/kiddycare">
                    <div
                        class="arrowRight"
                    >
                        &#8594;
                    </div>
                </router-link>
                </footer> 
</template>
<script>
import MouseScroll from './MouseScroll.vue';
import Icon from "@/components/Icon.vue";

export default {
    name: 'ProjectsPage',
    components : {MouseScroll, Icon}
}
</script>
<style>
.button__OpenModal {
    background-color: var(--grey);
    border: solid 2px var(--lightBlue);
    border-radius: 10px;
    color: var(--darkBrown);
    padding: 0.5rem;
    font-weight: bold;
}
.button__OpenModal:hover {
    background-color: #c0b295;
    color: var(--flashBlue);
    cursor: pointer;
}
.mousescroll__notMobile {
    display: none;
}
.nav__projects {
    display: flex;
    flex-direction: column;
text-align: center;
margin-top: 5rem;
}
.nav__projects--a {
    text-decoration: none;
    color: var(--lightBrown);
    font-size: 2.5rem;
    margin-top: 1.5rem;
}
.Projects__p {
    font-size: 1.1rem;
}
.blueFooter {
    width: 100%;
    background-color: var(--lightBlue);
    display: flex;
    justify-content: space-between;
}
.arrowRight, .arrowLeft {
    margin: 0 1rem;
}
.arrow {
    font-size: 2.5rem;
    color: var(--lightBrown);
    margin-right: 1rem;
}
.Projects__arrowDiv {
    text-decoration: none;
}
#projects__container {
    display: flex;
    background-color: black;
}
#projects__aboutHome {
    position: fixed;
    top: 1rem;
    left: 1rem;
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

@media screen and (min-width: 1250px) {
    .mousescroll__notMobile {
    display: block;
}
.blueFooter {
    display: none;
}
    #projects__h1 {
        margin: 50% 15% 0;
        font-size: 7rem;
        text-align: center;
    }
    .nav__projects {
        display: none;
    }

    .Projects__p {
        color: var(--darkBrown);
        font-size: 1.1rem;
    }
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
