<template>
    <div id="popnbubbleContainer" class="projectsContainers">
        <h1 id="popnbubble__h1" class="Projects__h1">Pop'n'Bubble</h1>
        <div class="Projects__underline" id="popnbubble__underline"></div>
        <div class="Projects__mainDiv">
            <div class="Projects__firstdiv">
                <div id="popnbubble__imgDiv">
                    <img
                        src="@/assets/imgs/logopnb.png"
                        alt="Photo projet popnbubble"
                        id="popnbubble__img"
                    />
                </div>
            </div>
            <div class="Projects__secondDiv">
                <div class="Projects__detailsContainer">
                    <p class="Projects__p" id="popnbubble__p">
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
        <NavBar />
    </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue"
export default {
    name: 'PopnBubble',
    components : { NavBar } 
}
</script>

<style>
#popnbubbleContainer {
    background-image: url('@/assets/imgs/bgpnb.png');
}
#popnbubble__imgDiv {
    background-color: var(--grey);
    border: solid 3px var(--darkBrown);
    height: auto;
    width: 61%;
    padding: 2rem 2rem;
    margin: 0 auto;
}
#popnbubble__img {
    width: 100%;
}
@media screen and (min-width: 768px) {
    #popnbubble__underline {
        margin-left: 30rem;
        width: 14%;
    }
}
@media screen and (min-width: 1024px) {
    #popnbubble__imgDiv {
        width: 40%;
        margin: 11rem 0 0 20rem;
    }
    #popnbubble__h1 {
        padding: 5rem 5rem 3rem 26rem;
    }
    #popnbubble__p {
        padding-left: 19rem;
        width: 43rem;
    }
}
</style>
