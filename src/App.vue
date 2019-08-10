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
                    <b-nav-item>
                        <b-link to="/gallery">Gallery</b-link>
                    </b-nav-item>
                </b-nav>
                <transition name="fade">
                    <router-view />
                </transition>
                <footer class="mt-3">
                    <span v-for="quoteLine in quotes[quoteKey]" :key="quoteLine">
                        {{quoteLine}}<br>
                    </span>
                </footer>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<style lang="scss">
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
            changeQuote: false,
            quotes: [
                [
                    'May be its mine bad-luck',
                    'Or yours not to get me',
                    'But I still have hope',
                    'Of being yours'
                ],
                [
                    'If you know that I am genius',
                    'Then know that you made me genius',
                    'Everyone don\'t accept me as genius',
                    'Because they aren\'t genius to belief me as genius'
                ],
                [
                    'Life for me is just a result of experiments being performed by far more developed creatures.'
                ],
                [
                    'Dream big!',
                    'But not so big that it becomes a mess, and you may never reach reality.'
                ],
                [
                    'Dreaming of getting you',
                    'I loosed everything',
                    'Cheerfulness of smile',
                    'And all the dreams of life'
                ],
                [
                    'Give me another Chance',
                    'Then,',
                    'You will Get',
                    'Less than I Gain...'
                ],
                ['When I was small I felt like a Superhero as my father threw me up in the air.',
                    'Now after reaching this success peak I unmask - Real Superhero made me Superhero!'
                ],
                [
                    'Congratulations to your mom and dad for birth of a sweet child!',
                    '',
                    'Sorry that I couldn\'t wish them when you were born.'
                ],
                [
                    'Oh great!',
                    'I never recognized Sunshine shining me, within me.'
                ],
                [
                    'I will miss you',
                    'not because you taught me,',
                    'not because you helped me on all steps of education;',
                    'but only because',
                    'you made me a leader to lead as an perfect Electrical Engineer.'
                ],
                [
                    'Not always starting from A ends you in Z, sometimes you have to continue with AA and create any word of your own.'
                ]
            ],
            quoteKey: 3,
            navoffset: 0,
        }
    },
    methods: {
        handleSCroll() {
            // fixing the navbar only on home page
            if (this.$router.history.current.name == 'home') {
                let header = document.querySelector(".nav");
                if(this.navoffset < header.offsetTop){
                    this.navoffset = header.offsetTop;
                }
                if (window.pageYOffset > this.navoffset) {
                    header.classList.add('fixed-top');
                } else {
                    header.classList.remove('fixed-top');
                }
            }
            // changing the quote on footer
            let footer = document.querySelector("footer");
            if (window.pageYOffset+window.innerHeight > footer.offsetTop) {
                this.changeQuote = true;
            }
            if(this.changeQuote && window.pageYOffset+window.innerHeight < footer.offsetTop){
                this.quoteKey = Math.floor(Math.random() * this.quotes.length); // Todo: 11+ is getting skipped
                this.changeQuote = false;
            }
        }
    },
    created() {
        window.addEventListener('scroll', this.handleSCroll);
        this.$router.history.current.name == 'home' ? this.isHomePage = true : this.isHomePage = false
    },
    watch: {
        $route(to) {
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
