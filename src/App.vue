<template>
<div id="app">
    <b-container fluid>
        <b-row class="pt-2">
            <b-col cols="3" class="ml-2">
                <b-card class="card-poem p-5" img-src="/Hasil.png" img-alt="Hasil Paudyal" img-top>
                    <b-card-text class="card-text-poem">
                        <strong>H</strong>ere I am<br><strong>A</strong> cut above you all<br><strong>S</strong>ilent as a grave<br><strong>I</strong>n favour of your death<br><br><strong>L</strong>ethal is my pen<br><strong>P</strong>erfect would be again<br><strong>A</strong> fortune is with me<br><strong>U</strong>nbeatable this shall be<br><br><strong>D</strong>are you come near<br><strong>Y</strong>ell you out there<br><strong>A</strong>nd who is this me<br><strong>L</strong>inks the first letters to me </b-card-text>
                </b-card>
            </b-col>
            <b-col>
                <b-img v-show="isHomePage" class="pb-3" src="/cover.jpg" rounded fluid alt="Hasil Cover"></b-img>
                <b-nav v-bind:class="{'fixed-top':!isHomePage}" align="right" small @scroll="handleSCroll">
                    <b-nav-item>
                        <b-link to="/">Home</b-link>
                    </b-nav-item>
                    <b-nav-item>
                        <b-link to="/projects">Projects</b-link>
                    </b-nav-item>
                    <b-nav-item>
                        <b-link to="/quotes">Quotes</b-link>
                    </b-nav-item>
                </b-nav>
                <transition name="fade">
                    <router-view />
                </transition>
                <footer class="mt-3">
                    Oh great! I never recognized Sunshine shining me, within me.
                </footer>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
}

.fade-enter-active {
    transition-delay: .25s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}
</style>

<script>
export default {
    data() {
        return {
            isHomePage: true,
            changeQuote: false
        }
    },
    methods: {
        handleSCroll() {
            // fixing the navbar
            if (this.$router.history.current.name == 'home') {
                let header = document.querySelector(".nav");
                if (window.pageYOffset > header.offsetTop) {
                    header.classList.add('fixed-top');
                } else {
                    header.classList.remove('fixed-top');
                }
            }
            // changing the quote on footer
            let footer = document.querySelector("footer");
            if (window.pageYOffset+window.innerHeight > footer.offsetTop) {
                this.changeQuote = true;
                console.log('footer visible')
            }
            if(this.changeQuote && window.pageYOffset+window.innerHeight < footer.offsetTop){
                console.log('change footer content')
                this.changeQuote = false;
            }
        }
    },
    created() {
        window.addEventListener('scroll', this.handleSCroll);
        this.$router.history.current.name == 'home' ? this.isHomePage = true : this.isHomePage = false
    },
    watch: {
        $route(to, from) {
            to.name == 'home' ? this.isHomePage = true : this.isHomePage = false;
        }
    }
}
</script>

<style lang="scss">
body {
    font-family: 'Comfortaa', cursive;
    background-color: #fdf7ff;
}

.nav {
    background-color: #AC252D;
    color: #FFFFFF;
    height: 35px;
    border-radius: 8px;
}

.nav-item a {
    color: #ffffff;
}

.fixed-top{
    left: 26%;
    border-radius: 0px 0px 10px 10px;
    width: 73%;
}

.card-poem {
    border: none;
    border-radius: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    box-shadow: 0px 0px 10px 0px #d0d0d0;
    position: fixed;
    width: 23%;

    img {
        margin: auto;
    }
}

.card-text-poem {
    text-align: center;
    letter-spacing: 1px;
    font-size: 16px;
    line-height: 20px;
    margin: 20px auto;
    color: #6E161C;
}

footer {
    color: #ffffff;
    padding: 7px 0px;
    background-color: #ac252d;
    text-align: center;
    font-size: 10px;
    border-radius: 10px 10px 0px 0px;
    bottom: 0px;
}
</style>
