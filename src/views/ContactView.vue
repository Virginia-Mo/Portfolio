<template>
    <div id="contactContainer">
        <NavBarTop />
        <div id="contact__titlesContainer">
            <h1 id="contact__h1">
                <span id="contact__work">LET'S WORK</span>
                <span id="contact__together">Together</span>
            </h1>
            <div id="contact__detailsDiv">
                <div class="contact__details">
                    <div class="contact__imgContainer">
                        <icon class="icons__contact" name="phone" :size="50" color="#cbf7f8" />
                    </div>
                    <p class="contact__p">: 06.73.31.48.88</p>
                </div>
                <div class="contact__details">
                    <div class="contact__imgContainer">
                        <icon class="icons__contact" name="envelop" :size="50" color="#cbf7f8" />
                    </div>
                    <p class="contact__p">: antonio.vir@hotmail.com</p>
                </div>
                <div class="contact__details">
                    <div class="contact__imgContainer">
                        <icon class="icons__contact" name="sphere" :size="50" color="#cbf7f8" />
                    </div>
                    <p class="contact__p">
                        <router-link to="https://github.com/Virginia-Mo"
                            >GitHub</router-link
                        >
                        <router-link
                            to="https://www.linkedin.com/in/virginia-mo/"
                            >LinkedIn</router-link
                        >
                    </p>
                </div>
            </div>
        </div>
        <NavBar />
    </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import NavBarTop from '@/components/NavBarTop.vue'
import Icon from "@/components/Icon.vue";

export default {
    name: 'contactPortfolio',
    components: { NavBar, NavBarTop, Icon },
}
</script>
<style>
.contact__aboutHome {
    position: fixed;
    top: 0;
    right: 0;
}
#contactContainer {
    background-image: url('@/assets/imgs/pgcontact.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
}
#contact__h1 {
    color: var(--flashBlue);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 4.5rem;
}
#contact__work {
    font-family: var(--font-forum);
}
#contact__together {
    font-family: var(--font-brittany);
}
.contact__imgs {
    max-width: 100%;
}
.contact__imgContainer {
    width: 5rem;
    height: 5rem;
    background-color: var(--flashBlue);
    border-radius: 50%;
}
.icons__contact {
margin: 1rem;
}
.contact__details {
    padding: 1rem 0;
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1.5rem;
}
#contact__titlesContainer {
    padding: 3rem 0 0 4rem;
}
#contact__detailsDiv {
    margin-top: 5rem;
}
.contact__p {
    color: var(--darkBrown);
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.contact__p a {
    text-decoration: none;
    color: var(--darkBrown);
}
.contact__p a:visited {
    color: var(--darkBrown);
}
.contact__p a:hover {
    transform: scale(1.1);
}
#contact__aboutHome {
    position: fixed;
    top: 2px;
    right: 2px;
}
@media screen and (min-width: 1024px) {
    #contact__titlesContainer {
        padding: 3rem 0 0 11rem;
    }
    #contact__h1 {
        gap: 4.5rem;
    }
    #contact__work {
        font-size: 4rem;
    }
    #contact__together {
        font-size: 7rem;
    }
    #contact__detailsDiv {
        margin-top: 9rem;
    }
    .contact__details {
        padding: 1rem 0;
        font-size: 2.2rem;
    }
    .contact__imgContainer {
        width: 5rem;
    }
}

</style>
