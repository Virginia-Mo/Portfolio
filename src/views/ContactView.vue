<template>
    <div id="contactContainer">
        <NavBarTop />
        <div id="contact__titlesContainer">
            <h1 id="contact__h1">
                <span id="contact__work">LET'S WORK</span>
                <span id="contact__together">Together</span>
            </h1>
            <div id="contactDiv">
                <div id="contact__detailsDiv">
                    <div class="contact__details">
                        <div class="contact__imgContainer">
                            <icon
                                class="icons__contact"
                                name="phone"
                                :size="40"
                                color="#cbf7f8"
                            />
                        </div>
                        <p class="contact__p">: 06.73.31.48.88</p>
                    </div>
                    <div class="contact__details">
                        <div class="contact__imgContainer">
                            <icon
                                class="icons__contact"
                                name="envelop"
                                :size="40"
                                color="#cbf7f8"
                            />
                        </div>
                        <p class="contact__p">
                            : mo.antonio.virginia@gmail.com
                        </p>
                    </div>
                    <div class="contact__details">
                        <div class="contact__imgContainer">
                            <icon
                                class="icons__contact"
                                name="sphere"
                                :size="40"
                                color="#cbf7f8"
                            />
                        </div>
                        <p class="contact__p">
                            <a
                                target="_blank"
                                href="https://github.com/Virginia-Mo"
                                >GitHub</a
                            >
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/virginia-mo/"
                                >LinkedIn</a
                            >
                        </p>
                    </div>
                </div>

                <div class="contactFormDiv" v-if="!confirmMessage">
                    <h1 class="contactForm__title" v-if="isFrench">
                        Contactez moi !
                    </h1>
                    <h1 class="contactForm__title" v-if="isEnglish">
                        Message me !
                    </h1>
                    <form
                        ref="form"
                        @submit.prevent="sendEmail"
                        class="contactForm"
                    >
                        <label
                            class="contactForm__label"
                            for="user_name"
                            v-if="isFrench"
                            >Nom</label
                        >
                        <label
                            class="contactForm__label"
                            for="user_name"
                            v-if="isEnglish"
                            >Last Name</label
                        >
                        <input
                            class="contactForm__input"
                            type="text"
                            name="user_name"
                            required
                        />
                        <label
                            class="contactForm__label"
                            for="user_firstname"
                            v-if="isFrench"
                            >Prénom</label
                        >
                        <label
                            class="contactForm__label"
                            for="user_firstname"
                            v-if="isEnglish"
                            >First Name</label
                        >
                        <input
                            class="contactForm__input"
                            type="text"
                            name="user_firstname"
                            required
                        />
                        <label class="contactForm__label" for="user_email"
                            >Email</label
                        >
                        <input
                            class="contactForm__input"
                            type="email"
                            name="user_email"
                            required
                        />
                        <label
                            class="contactForm__label"
                            for="subject"
                            v-if="isFrench"
                            >Sujet</label
                        >
                        <label
                            class="contactForm__label"
                            for="subject"
                            v-if="isEnglish"
                            >Subject Line</label
                        >
                        <input
                            class="contactForm__input"
                            type="text"
                            name="subject"
                        />
                        <label class="contactForm__label" for="message"
                            >Message</label
                        >
                        <textarea
                            name="message"
                            class="contactForm__input"
                            id="contactForm__textArea"
                            required
                        ></textarea>
                        <button
                            class="contactForm__input"
                            id="contactForm__button"
                            type="submit"
                            v-if="isFrench"
                        >
                            Envoyer
                        </button>
                        <button
                            class="contactForm__input"
                            id="contactForm__button"
                            type="submit"
                            v-if="isEnglish"
                        >
                            Send
                        </button>
                    </form>
                </div>
                <div
                    class="contactFormDiv animate__animated animate__fadeIn"
                    v-if="confirmMessage"
                >
                    <h1
                        class="contactForm__title"
                        id="contactForm__thanks"
                        v-if="isFrench"
                    >
                        Merci !
                    </h1>
                    <h1
                        class="contactForm__title"
                        id="contactForm__thanks"
                        v-if="isEnglish"
                    >
                        Thank you !
                    </h1>
                    <p class="confirmEmail__p" v-if="isFrench">
                        Votre message a bien été envoyé, je vous répondrai dans
                        les plus brefs délais !
                    </p>
                    <p class="confirmEmail__p" v-if="isEnglish">
                        Your message has been sent, I will answer you as soon as
                        possible !
                    </p>
                </div>
            </div>
        </div>
        <NavBar />
    </div>
</template>
<script>
import emailjs from '@emailjs/browser'
import NavBar from '@/components/NavBar.vue'
import NavBarTop from '@/components/NavBarTop.vue'
import Icon from '@/components/Icon.vue'
import 'animate.css'
import { mapState } from 'pinia'
import { getLanguage } from '@/stores/getLanguage.js'

export default {
    name: 'contactPortfolio',
    data() {
        return {
            confirmMessage: false,
        }
    },
    components: {
        NavBar,
        NavBarTop,
        Icon,
    },
    computed: {
        ...mapState(getLanguage, ['isEnglish', 'isFrench']),
    },
    methods: {
        sendEmail() {
            emailjs
                .sendForm(
                    'service_g1hjm1f',
                    'contact_form',
                    this.$refs.form,
                    'TOy0J9-WmHfMl-zFJ'
                )
                .then(
                    (result) => {
                        console.log('SUCCESS!', result.text)
                        this.confirmMessage = true
                    },
                    (error) => {
                        console.log('FAILED...', error.text)
                    }
                )
        },
    },
}
</script>
<style>
.contactFormDiv {
    margin-top: 5rem;
}
.contact__aboutHome {
    position: fixed;
    top: 0;
    right: 0;
}
#contactContainer {
    background-image: url('@/assets/imgs/pgcontact.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-family: var(--font-poppins);
}
.confirmEmail__p {
    font-size: 1.5rem;
    color: var(--darkBrown);
    line-height: 2rem;
    margin: 3rem 4rem;
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
    width: 3.5rem;
    height: 3.5rem;
    background-color: var(--flashBlue);
    border-radius: 50%;
}
.icons__contact {
    margin: 0.5rem 0 0 0.8rem;
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
    word-break: break-word;
    padding-right: 1rem;
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
    color: var(--flashBlue);
}
#contact__aboutHome {
    position: fixed;
    top: 2px;
    right: 2px;
}
#contactDiv {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 2rem;
}
.contactForm {
    display: flex;
    flex-direction: column;
    padding-right: 1rem;
    margin-bottom: 2rem;
}
.contactForm__input {
    width: 90%;
    height: 2rem;
    border-radius: 5px;
    border: solid 1px var(--lightBrown);
}
#contact__detailsDiv,
.contactFormDiv {
    flex: 1;
}
#contactForm__thanks {
    text-align: center;
    font-size: 5rem;
}
#contactForm__textArea {
    height: 7rem;
}
.contactForm__label {
    color: var(--darkBrown);
    font-size: 1.5rem;
    padding: 0.5rem 0;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
}
#contactForm__button {
    margin: 2rem auto;
    background-color: transparent;
    border: solid 1px var(--lightBrown);
    color: var(--grey);
    font-family: var(--font-poppins);
    font-size: 1.4rem;
    width: 50%;
    height: 2.5rem;
}
#contactForm__button:hover {
    background-color: var(--lightBrown);
    color: var(--black);
}
.contactForm__title {
    font-size: 4rem;
    color: var(--flashBlue);
    font-family: var(--font-brittany);
    padding: 0 0 1.5rem 0;
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
        font-size: 1.8rem;
    }
    .contact__imgContainer {
        width: 4rem;
    }
    #contactDiv {
        flex-direction: row;
    }
    .contactFormDiv {
        margin-top: -5rem;
    }
    #contactContainer {
        height: 100vh;
    }
    .contactForm__input {
        width: 46%;
    }
    #contactForm__button {
        width: 20%;
        margin: 2rem 6rem;
    }
}
</style>
