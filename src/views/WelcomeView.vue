<template>
    <div class="mainContainer">
        <div id="firstContainer">
            <div id="blueBanner"></div>
            <div id="BorderContainer">
                <router-link to="/menu" id="welcomeLink">
                    <div
                        id="titleContainer"
                        class="animate__animated animate__fadeInRight animate__slow"
                    >
                        <h1
                            id="title__name"
                            class="animate__animated animate__fadeIn animate__slower"
                        >
                            Virginia Mo
                        </h1>
                        <h2 id="title__job" class="ml2">Web developper</h2>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import 'animate.css'

export default {
    mounted() {
        var textWrapper = document.querySelector('.ml2')
        textWrapper.innerHTML = textWrapper.textContent.replace( /\S/g, "<span class='letter'>$&</span>" )

        anime.timeline({ loop: true })
            .add({
                targets: '.ml2 .letter',
                scale: [4, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: 'easeOutExpo',
                duration: 1000,
                delay: (el, i) => 90 * i,
            })
            .add({
                targets: '.ml2',
                opacity: 0,
                duration: 1000,
                easing: 'easeOutExpo',
                delay: 1000,
            })
    },
}
</script>
<style scoped>
/* MOBILE */
#firstContainer {
    margin: 0 0;
}

#blueBanner {
    background-color: var(--lightBlue);
    border-radius: 50%;
    width: 17rem;
    height: 17rem;
    position: absolute;
    z-index: 1;
    left: 6%;
    top: 34%;
}
#titleContainer {
    border: solid 4px var(--lightBrown);
    padding: 2rem 0.5rem;
    text-align: center;
}
#BorderContainer {
    position: absolute;
    z-index: 2;
    top: 40%;
    left: 10%;
}
#title__name {
    font-family: 'Brittany Signature', sans-serif;
    font-size: 3rem;
    padding-bottom: 2rem;
    --animate-duration: 2s;
}
#title__job {
    font-family: 'Forum', sans-serif;
    font-size: 2rem;
}
#welcomeLink {
    color: var(--black);
    text-decoration: none;
}
#welcomeLink:visited {
    color: var(--black);
}
@media screen and (min-width: 768px) {
    #firstContainer {
        margin: 0 9%;
    }
    #blueBanner {
        border-radius: 0%;
        width: 21rem;
        height: 21rem;
        transform: rotate(223deg);
        left: 16%;
        top: 31%;
    }
    #titleContainer {
        padding: 2rem;
    }
    #BorderContainer {
        top: 40%;
        left: 10%;
    }
    #title__name {
        font-size: 4.2rem;
        padding-bottom: 3rem;
    }
    #title__job {
        font-size: 2rem;
    }
}

/* DESKTOP */
@media screen and (min-width: 1024px) {
    #blueBanner {
        width: 45%;
        height: 250rem;
        transform: rotate(41deg);
        left: 31%;
        top: -171%;
    }
    #titleContainer {
        padding: 4rem;
        text-align: center;
    }
    #BorderContainer {
        top: 28%;
        left: 30%;
    }
    #title__name {
        font-size: 9rem;
        padding-bottom: 7rem;
    }
    #title__job {
        font-size: 5rem;
    }
    html,
    body {
        overflow: hidden;
    }
}
</style>
