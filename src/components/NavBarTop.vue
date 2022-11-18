<template>
    <div id="navBarTop--notMobile">
        <router-link to="/menu">
            <img
                src="@/assets/imgs/maison.png"
                alt="Image retour a arrière"
                class="imgHome"
            />
        </router-link>
    </div>
    <div id="navBarTop--mobile">
        <div class="box">
            <button
                :class="[{active : isOpenBurger} , {notActive : !isOpenBurger}]"
                class="btn"
                @click="toggleMenu()"
            >
                <span class="span"></span>
                <span class="span"></span>
                <span class="span"></span>
            </button>
        </div>
        <nav
        :class="[{menuOpen : isOpenBurger} , {menuClose : !isOpenBurger}]"
        class="navBarTop__links">
            <router-link class="navLinks" to="/home">Home</router-link>
            <router-link class="navLinks" to="/about"
                >A Propos / About</router-link
            >
            <router-link class="navLinks" to="/experience"
                >Experiences</router-link
            >
            <router-link class="navLinks" to="/projects">Projects</router-link>
            <router-link class="navLinks" to="/skills"
                >Compétences / Skills</router-link
            >
            <router-link class="navLinks" to="/contact">Contact</router-link>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'NavBarTop',
    data() {
        return {
            isOpenBurger: false,
        }
    },
    methods: {
        toggleMenu() {
            console.log('click menu')
            this.isOpenBurger = !this.isOpenBurger
        },
    },
}
</script>
<style>
/* #navBarTop--mobile {
    width: 12%;
    position: absolute;
    bottom: -2rem;
    height: 4rem;
    background-color: var(--lightBrown);
    /* margin: 0 auto; */
/* display: flex; */
/* justify-items: flex-start; */
/* left: 50%;
    border-radius: 5px 5px 0 0;
    transition: 0.5s; */
/* }  */

#navBarTop--notMobile {
    position: fixed;
    right: 0.5rem;
    top: 0.5rem;
}
#navBarTop--mobile:hover {
    transition: 0.5s;
    bottom: 0;
}
.navBarTop__links {
    color: var(--grey);
    background-color: var(--lightBrown);
    opacity: 0.9;
    height: auto;
    position: fixed;
    top: 0;
    gap: 4rem;
    font-size: 1.7rem;
    padding: 2rem 2rem 3rem;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    border-radius: 10px 0 0 10px;
}
.menuClose {
   right: -30rem;
   transition: right 1s ease;
}
.menuOpen {
   right: 0;
    transition: right 0.7s cubic-bezier(0.05, 0.15, 0.65, 1.12)
;
}
.navLinks {
    color: black;
    text-decoration: none;
    font-weight: 600;
}
.navLinks:hover {
    transform: scale(1.1);
}
#nav {
    box-sizing: border-box;
    display: flex;
    gap: 0.5rem;
    align-items: center;
}
@media screen and (max-width: 768px) {
    #navBarTop--notMobile {
        display: none;
    }
}
@media screen and (min-width: 768px) {
    #navBarTop--mobile {
        display: none;
    }
}
/* BUTTON STYLES */
.box {
    border-radius: 2px;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    /* transform: translate(-50%, -50%); */
    width: 4rem;
    height: 4rem;
    z-index: 2;
    border-radius: 50%;
    background: var(--grey);
    box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);

}
.btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    background-color: inherit;
}

.span {
    margin: 0.5rem;
    display: block;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    height: 4px;
    background: #b27d50;
    transition: all 0.3s;
    position: relative;
}

.span + .span {
    margin-top: 11px;
}

.active span:nth-child(1) {
    animation: ease 0.7s top forwards;
}

.notActive span:nth-child(1) {
    animation: ease 0.7s top-2 forwards;
}

.active span:nth-child(2) {
    animation: ease 0.7s scaled forwards;
}

.notActive span:nth-child(2) {
    animation: ease 0.7s scaled-2 forwards;
}

.active span:nth-child(3) {
    animation: ease 0.7s bottom forwards;
    margin-top: 24px;
}

.notActive span:nth-child(3) {
    animation: ease 0.7s bottom-2 forwards;
}


@keyframes top {
    0% {
        top: 0;
        transform: rotate(0);
    }
    50% {
        top: 22px;
        transform: rotate(0);
    }
    100% {
        top: 22px;
        transform: rotate(45deg);
    }
}

@keyframes top-2 {
    0% {
        top: 22px;
        transform: rotate(45deg);
    }
    50% {
        top: 22px;
        transform: rotate(0deg);
    }
    100% {
        top: 0;
        transform: rotate(0deg);
    }
}

@keyframes bottom {
    0% {
        bottom: 0;
        transform: rotate(0);
    }
    50% {
        bottom: 22px;
        transform: rotate(0);
    }
    100% {
        bottom: 22px;
        transform: rotate(135deg);
    }
}

@keyframes bottom-2 {
    0% {
        bottom: 22px;
        transform: rotate(135deg);
    }
    50% {
        bottom: 22px;
        transform: rotate(0);
    }
    100% {
        bottom: 0;
        transform: rotate(0);
    }
}

@keyframes scaled {
    50% {
        transform: scale(0);
    }
    100% {
        transform: scale(0);
    }
}

@keyframes scaled-2 {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}
</style>
