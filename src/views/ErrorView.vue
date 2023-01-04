<template>
        <main id="errorContainer">
            <div id="error__content">
                <div id="error__content__text">
                    <img src="@/assets/imgs/error.png" alt="Error image" id="error__content__img" />
                    <p id="error__content__p">Page not found...</p>
                    <div id="error__homeLink">
                    <router-link to="/">Home</router-link>
                   </div> 
                   <a   id="error__content__a"
                        href="https://www.freepik.com/free-vector/error-404-concept-illustration_7741849.htm#query=error%20page&position=44&from_view=keyword"
                        >Image by storyset</a
                    >
                </div>
            </div>
        </main>
    <NavBarTop />
<NavBar />
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import NavBarTop from '@/components/NavBarTop.vue'

export default {
    name: 'errorPortfolio',
    components : { NavBar, NavBarTop },
}
</script>
<style>
#error__content {
    color: var(--lightBrown);
    font-family: var(--font-poppins);
    text-align: center;
    margin-top: 10rem;
}
#error__content__a {
    color: white;
    margin-top: 5rem;
}
#error__content__a:visited {
    color: white;
}
#error__content__img {
    max-width: 100%;
    width: 50rem;
}
#error__homeLink {
    margin: 2rem 0 5rem ;
}
#error__homeLink a {
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 1rem;
    border: solid 1px var(--lightBlue);
}
#error__homeLink a:hover {
    background-color: var(--lightBlue);
    color: var(--darkBrown);
    border: solid 1px var(--flashBlue);
}
#error__homeLink a:visited {
    color: var(--lightBrown);
}
</style>