<template>
    <div class="aboutContainer">
        <!-- <div id="Menu__aboutHome">
            <router-link to="/menu">
                <img
                    src="@/assets/imgs/maison.png"
                    alt="Image retour a arrière"
                    id="imgHome"
                />
            </router-link>
        </div> -->
        <NavBarTop />
        <div id="About__titlediv">
            <h1 id="About__h1">About Me</h1>
            <div id="light">
                <div id="About__line">
                    <span class="l1"></span>
                    <span class="l2"></span>
                    <span class="l3"></span>
                    <span class="l4"></span>
                </div>
            </div>
        </div>
        <div id="About__div">
            <div id="About__img">
                <div id="About__imgContainer">
                    <img
                        src="@/assets/imgs/me.png"
                        alt="Photo de moi"
                        id="meImg"
                    />
                </div>
                <div id="About__addedBorder"></div>
            </div>
            <div id="About__detailsContainer">
                <p id="About__details">
                    Anciennement infirmière, je suis désormais développeuse web
                    Front-end avec une spécialisation ReactJS. Rigoureuse et
                    sérieuse dans mon travail, je recherche un CDI en tant que
                    développeuse web à partir de janvier 2023.
                </p>
            </div>
        </div>
        <div id="About__blueDeco"></div>
        <NavBar />
    </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import NavBarTop from '@/components/NavBarTop.vue'

export default {
    name: 'aboutPortfolio',
    components: { NavBar, NavBarTop },
}
</script>
<style scoped>
.aboutContainer {
    height: 100vh;
}
#About__h1 {
    font-family: var(--font-brittany);
    color: var(--flashBlue);
    font-size: 4rem;
    padding-top: 3rem;
    margin-bottom: 3rem;
    text-align: center;
    word-spacing: 1rem;
}
#About__titlediv {
    padding-top: 3rem;
}
#About__line {
    width: 100%;
    height: 2px;
    margin: auto;
    background-color: var(--darkBrown);
    position: absolute;
    left: 0;
    top: 12rem;
    animation: lineH linear;
    animation-duration: 2s;
    animation-iteration-count: 1;
}
@keyframes lineH {
    0% {
        opacity: 0.4;
        width: 0%;
    }
    100% {
        opacity: 1;
        width: 85%;
    }
}
#About__img {
    margin-top: 2rem;
}
#meImg {
    max-width: 100%;
    border-radius: 50%;
    height: 78%;
    margin: 11%;
}
#About__imgContainer {
    background-color: var(--grey);
    width: 16rem;
    text-align: center;
    margin: 0 auto;
    height: 16rem;
    border-radius: 50%;
}
#Menu__aboutHome {
    position: fixed;
    display: flex;
    z-index: 1;
    right: 0;
    top: 0;
    justify-content: end;
    width: 10rem;
    height: 4rem;
    background-color: var(--grey);
}
#About__detailsContainer {
    font-size: 1.6rem;
    font-family: var(--font-poppins);
    color: var(--darkBrown);
    margin: 3rem;
    line-height: 2rem;
}
#About__blueDeco {
    width: 10rem;
    height: 2.5rem;
    background-color: var(--lightBlue);
}
@media screen and (min-width: 768px) {
    #About__h1 {
        text-align: left;
        margin-left: 3rem;
    }
    #About__details {
        width: 60%;
    }
    #About__imgContainer {
        border-radius: 0;
        width: 18rem;
        height: 20rem;
        position: absolute;
        top: 10rem;
        right: 3rem;
    }
    #meImg {
        border-radius: 0;
        height: 90%;
        margin: 5%;
    }
    #About__div {
        display: flex;
        flex-direction: row-reverse;
        margin: 3rem;
    }
    #About__line {
        width: 89%;
        margin: 0;
    }
    #About__addedBorder {
        width: 19rem;
        height: 23rem;
        position: absolute;
        z-index: 2;
        top: 9rem;
        right: 1rem;
        background-repeat: no-repeat;
        background-image: linear-gradient(
                to right,
                var(--darkBrown) 100%,
                var(--darkBrown) 100%
            ),
            linear-gradient(
                to bottom,
                var(--darkBrown) 100%,
                var(--darkBrown) 100%
            ),
            linear-gradient(
                to right,
                var(--darkBrown) 100%,
                var(--darkBrown) 100%
            ),
            linear-gradient(
                to bottom,
                var(--darkBrown) 100%,
                var(--darkBrown) 100%
            );
        background-size: 100% 3px, 3px 100%, 100% 3px, 3px 100%;
        background-position: 0 0, 100% 0, 100% 100%, 0 100%;
        animation: bg linear 1;
        animation-delay: 2.1s;
        animation-duration: 2.5s;
    }
    @keyframes bg {
        0% {
            background-size: 0 3px, 3px 0, 0 3px, 3px 0;
        }
        25% {
            background-size: 100% 3px, 3px 0, 0 3px, 3px 0;
        }
        50% {
            background-size: 100% 3px, 3px 100%, 0 3px, 3px 0;
        }
        75% {
            background-size: 100% 3px, 3px 100%, 100% 3px, 3px 0;
        }
        100% {
            background-size: 100% 3px, 3px 100%, 100% 3px, 3px 100%;
        }
    }

    #About__blueDeco {
        position: absolute;
        bottom: 0;
    }
}
@media (min-width: 1024px) {
    #About__h1 {
        font-size: 7rem;
    }
    #About__imgContainer {
        border-radius: 0;
        width: 22rem;
        height: 26rem;
        position: absolute;
        top: 11rem;
        right: 7rem;
    }
    #meImg {
        border-radius: 0;
        height: 90%;
        margin: 6%;
    }
    #About__addedBorder {
        width: 23rem;
        height: 28rem;
        top: 10rem;
        right: 5rem;
    }
    #About__details {
        width: 52%;
    }
    #About__blueDeco,
    #Menu__aboutHome {
        width: 25rem;
    }
    #About__line {
        top: 16rem;
    }
}
</style>
