<template>
    <div id="nav__container">
        <nav id="nav">
            <div class="nav__iconDiv">
                <router-link to="/menu">
                    <img src="@/assets/imgs/maison.png" alt="Icone Menu" class="nav__icons">
                </router-link>
            </div>
            <div class="nav__iconDiv">
                <router-link to="/about">
                    <img src="@/assets/imgs/id.png" alt="Icone A propos" class="nav__icons">
            </router-link>
        </div>
        <div class="nav__iconDiv">
            <router-link to="/experience">
                <img src="@/assets/imgs/education.png" alt="Icone experience" class="nav__icons">
            </router-link>
        </div>
        <div class="nav__iconDiv">
        <router-link to="/projects">
            <img src="@/assets/imgs/projects.png" alt="Icone Menu" class="nav__icons">
        </router-link>
    </div>
        <div class="nav__iconDiv">
            <router-link to="/skills">
                <img src="@/assets/imgs/competence.png" alt="" class="nav__icons">
            </router-link>
        </div>
        <div class="nav__iconDiv">
            <router-link to="/contact">
                <img src="@/assets/imgs/about.png" alt="" class="nav__icons">
            </router-link>
        </div>
        </nav>
    </div>
</template>
<style>
#nav__container {
    width: 15%;
    position: absolute;
    bottom: 0;
    height: 3rem;
    background-color:var(--lightBrown);
    /* margin: 0 auto; */
    display: flex;
    /* justify-items: flex-start; */
    left: 50%;
    border-radius: 5px 5px 0 0;

}
.nav__icons {
    max-width: 100%;
    transition:2s
}
.nav__icons:hover {
   transform: scale(1.3);
   transition: 0.5s;
}
.nav__iconDiv {
    width: 2.5rem;
}
#nav {
    box-sizing: border-box;
    display: flex;
    gap: 0.5rem;
    align-items: center;
}
</style>