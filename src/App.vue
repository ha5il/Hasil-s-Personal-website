<template>
  <div id="app">
    <div v-show="showBgAnim" class="bg"></div>
    <div v-show="showBgAnim" class="bg bg2"></div>
    <div v-show="showBgAnim" class="bg bg3"></div>
    <!-- <b-container fluid v-on:mousemove="resetTheme"> -->
    <b-container fluid>
      <b-row class="pt-2">
        <b-col
          v-bind:class="{'d-none':!isHomePage&&(windowInnerWidth<576)}"
          sm="12"
          md="3"
          class="ml-2"
        >
          <b-card class="card-poem-intro p-3" img-src="/Hasil.png" img-alt="Hasil Paudyal" img-top>
            <p class="my-name">Hasil Paudyal</p>
            <b-card-text class="card-text-poem">
              <span><strong>H</strong>ere I am</span>
              <br />
              <span><strong>A</strong> cut above you all</span>
              <br />
              <span><strong>S</strong>ilent as a grave</span>
              <br />
              <span><strong>I</strong>n favour of your death</span>
              <br />
              <br />
              <span><strong>L</strong>ethal is my pen</span>
              <br />
              <span><strong>P</strong>erfect would be again</span>
              <br />
              <span><strong>A</strong> fortune is with me</span>
              <br />
              <span><strong>U</strong>nbeatable this shall be</span>
              <br />
              <br />
              <span><strong>D</strong>are you come near</span>
              <br />
              <span><strong>Y</strong>ell you out there</span>
              <br />
              <span><strong>A</strong>nd who is this me</span>
              <br />
              <span><strong>L</strong>inks the first letters to me</span>
            </b-card-text>
            <div class="text-center">
              <b-link class="px-3" to="//np.linkedin.com/in/hasil" target="_blank">
                <img
                  v-b-tooltip.hover.bottom
                  title="Let's get connected for work"
                  src="/iconledincon.svg"
                  width="20%"
                />
              </b-link>
              <b-link class="px-3" to="//facebook.com/hasill" target="_blank">
                <img
                  v-b-tooltip.hover.bottom
                  title="Let's get connected as friend"
                  src="/iconfbcon.svg"
                  width="20%"
                />
              </b-link>
            </div>
          </b-card>
        </b-col>
        <b-col>
          <transition name="fade">
            <b-img-lazy
              v-show="isHomePage"
              class="cover-image pb-3"
              src="https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20Collage.jpg?alt=media"
              rounded
              fluid
              alt="Hasil Cover"
            ></b-img-lazy>
          </transition>
          <b-nav
            v-bind:class="{'fixed-top':!isHomePage}"
            align="right"
            small
            @scroll="handleScroll"
          >
            <b-nav-item
              to="/"
              exact-active-class="active"
            >
              <i class="material-icons">home</i>Home
            </b-nav-item>
            <b-nav-item
              to="/projects"
              exact-active-class="active"
            >
              <i class="material-icons">all_inbox</i>Projects
            </b-nav-item>
            <b-nav-item
              to="/quotes"
              exact-active-class="active"
            >
              <i class="material-icons">record_voice_over</i>Quotes
            </b-nav-item>
            <b-nav-item
              to="/poems"
              exact-active-class="active"
            >
            <i class="material-icons">import_contacts</i>Poems
            </b-nav-item>
            <b-nav-item
              to="/gallery"
              exact-active-class="active"
            >
              <i class="material-icons">perm_media</i>Gallery
            </b-nav-item>
            <b-nav-item
              to="/hire-Hasil"
              exact-active-class="active"
            >
              <i class="material-icons">work</i>Hire Me
            </b-nav-item>
            <b-nav-item class="back" v-show="navBackShow" :to="navBackTo">
              <i class="material-icons">arrow_back</i>
            </b-nav-item>
          </b-nav>
          <transition name="fade">
            <div v-if="$root.routeLoading" class="text-center my-5 py-5">
              <b-spinner class="mx-1" variant="primary" label="Spinning"></b-spinner>
              <b-spinner class="mx-1" variant="warning" type="grow" label="Spinning"></b-spinner>
              <b-spinner class="mx-1" variant="success" label="Spinning"></b-spinner>
              <b-spinner class="mx-1" variant="danger" type="grow" label="Spinning"></b-spinner>
              <b-spinner class="mx-1" variant="info" label="Spinning"></b-spinner>
            </div>
            <router-view v-else :key="$route.params.id" />
          </transition>
          <footer class="mt-3" v-show="!$root.routeLoading">
            <router-link
              :to="{ name: 'quote', params: { id: footerQuote.id, urlSlug: footerQuote.urlSlug }}"
              tag="div"
            >
              <span v-for="quoteLine in footerQuote.quoteLines" :key="quoteLine">
                {{quoteLine}}
                <br />
              </span>
            </router-link>
          </footer>
        </b-col>
      </b-row>
      <b-button-group id="theme-buttons" size="sm">
      <b-button v-show="isThemeBtnsVisible" @click="switchTheme(false,'#6e161c', '#e6a410')" v-bind:style="{color:'#6e161c',backgroundColor:'#e6a410'}" class="btn-sm theme-button">
        <i class="material-icons">invert_colors</i>
      </b-button>
      <b-button v-show="isThemeBtnsVisible" @click="switchTheme(false,'#7B3204', '#8A803B')" v-bind:style="{color:'#7B3204',backgroundColor:'#8A803B'}" class="btn-sm theme-button">
        <i class="material-icons">invert_colors</i>
      </b-button>
      <b-button v-show="isThemeBtnsVisible" @click="switchTheme(false,'#011a2d', '#800080')" v-bind:style="{color:'#011a2d',backgroundColor:'#800080'}" class="btn-sm theme-button">
        <i class="material-icons">invert_colors</i>
      </b-button>
      <b-button v-show="isThemeBtnsVisible" @click="switchTheme(false,'#ff0101', '#FFC107')" v-bind:style="{color:'#ff0101',backgroundColor:'#FFC107'}" class="btn-sm theme-button">
        <i class="material-icons">invert_colors</i>
      </b-button>
      <b-button v-show="isThemeBtnsVisible" @click="switchTheme(false,'#808000', '#1e9822')" v-bind:style="{color:'#808000',backgroundColor:'#1e9822'}" class="btn-sm theme-button">
        <i class="material-icons">invert_colors</i>
      </b-button>
      <b-button v-show="isThemeBtnsVisible" @click="switchTheme(true,'#ff9800', '#f92b38')" v-bind:style="{color:'#ff9800',backgroundColor:'#000000'}" class="btn-sm theme-button">
        <i class="material-icons">invert_colors</i>
      </b-button>
      <b-button v-show="isThemeBtnsVisible" @click="switchTheme(true,'#00ff00', '#228b22')" v-bind:style="{color:'#00ff00',backgroundColor:'#000000'}" class="btn-sm theme-button">
        <i class="material-icons">invert_colors</i>
      </b-button>
      <b-button v-show="isThemeBtnsVisible" @click="switchTheme(true,'#2196f3', '#1e9822')" v-bind:style="{color:'#2196f3',backgroundColor:'#000000'}" class="btn-sm theme-button">
        <i class="material-icons">invert_colors</i>
      </b-button>
      <b-button class="btn-sm theme-button" v-bind:style="{color:'var(--global-primary-color)',backgroundColor:'var(--global-secondary-color)'}" :pressed.sync="isThemeBtnsVisible">
        <i v-if="isThemeBtnsVisible" class="material-icons">arrow_downward</i>
        <i v-else class="material-icons">invert_colors</i>
      </b-button>
    </b-button-group>
    </b-container>
  </div>
</template>

<style lang="scss">
:root {
  --global-bg: #fdf7ff;
  --global-card-bg: #ffffffe0;
  --global-primary-color: #6e161c;
  --global-secondary-color: #e6a410;
  --global-shadow-color: #d0d0d0;
  cursor: url('/cursor-normal.png'), auto;
}

a {
  cursor: url('/cursor-pointer.png'), pointer;
}

.fade-enter-active {
  transition: 1.5s;
}

.fade-leave-active {
  transition: 0.5s;
  transform: skewX(-45deg);
  opacity: 0;
}

.fade-enter {
  transform: skewX(45deg);
  opacity: 0;
}

.bg {
	animation: slide 3s ease-in-out infinite alternate;
	background-image: linear-gradient(-60deg, var(--global-primary-color) 50%, var(--global-secondary-color) 50%);
  opacity: 0.4;
	bottom: 0;
	left: -50%;
	opacity: .5;
	position: fixed;
	right: -50%;
	top: 0;
	z-index: -1
}

.bg2 {
	animation-direction: alternate-reverse;
	animation-duration: 4s
}

.bg3 {
	animation-duration: 5s
}

@keyframes slide {
	0% {
		transform: translateX(-25%)
	}
	100% {
		transform: translateX(25%)
	}
}

.nav {
  background: linear-gradient(to right, var(--global-primary-color) 0%, var(--global-secondary-color) 100%);
  height: 42px;
  border-radius: 8px;

  @media (max-width: 576px) {
    position: fixed;
    top: 0;
    left: 0 !important;
    height: auto;
    z-index: 1;
    border-radius: 0px !important;
    width: 100% !important;

    .back {
      position: fixed;
      left: 0;
      top: 40px;
    }
  }

  .material-icons {
    vertical-align: bottom;
    padding-right: 4px;
  }

  .nav-item {
    transition: 0.33s all;

    a {
      color: #ffffff;
    }
  }

  .nav-item:hover {
    transform: scale(1.1);
  }

  .active {
    background: radial-gradient(var(--global-primary-color) -30%, var(--global-secondary-color) 130%);
    border-radius: 15px;
    height: 100%;
  }
}
body {
  font-family: "Comfortaa", cursive;
  background-color: var(--global-bg);
  overflow-x: hidden;
}

.fixed-top {
  left: 26%;
  border-radius: 0px 0px 10px 10px;
  width: 73%;
}

.card-poem-intro {
  :hover strong {
    color: var(--global-secondary-color);
  }

  :hover .my-name {
    color: var(--global-primary-color);
  }

  border: none;
  border-radius: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 0px 0px 10px 0px var(--global-shadow-color);
  margin-top: 85px;
  background-color: var(--global-card-bg);

  @media (min-width: 576px) {
    position: fixed;
    width: 23%;
    margin-top: 0px;
  }

  img {
    margin: auto;
  }

  img:hover {
    transform: scale(1.1);
    transition: 0.33s all;
  }

  .card-body {
    padding: 1.25rem 0rem;
  }

  .my-name {
    color: var(--global-secondary-color);
    text-align: center;
    font-weight: bold;
    text-decoration: underline;
  }
  
  .card-text-poem {
    text-align: center;
    letter-spacing: 1px;
    font-size: 16px;
    line-height: 18px;
    margin: 20px auto;
    color: var(--global-primary-color);
  }
}

footer {
  color: #ffffff;
  padding: 7px 0px;
  background: linear-gradient(to right, var(--global-primary-color) 0%, var(--global-secondary-color) 100%);
  text-align: center;
  font-size: 10px;
  border-radius: 10px 10px 0px 0px;
  bottom: 0px;

  span {  
    cursor: url('/cursor-pointer.png'), pointer;;
  }
}

@media (max-width: 576px) {
  .cover-image {
    margin-top: 20px;
  }
}

#theme-buttons {
  position: fixed;
  right: 5px;
  bottom: 5px;
  display: grid;
}

.theme-button {
    border-radius: 20px !important;
    font-size: 0px !important;
    padding: 6px !important;
    border: none !important;
    margin-top: 5px !important;
}

.theme-button:focus {
    box-shadow: none;
}

.breadcrumb {
  background-color: var(--global-card-bg);
}
</style>

<script>
import { quotesMixins } from "./mixins/quotesMixins.js";

export default {
  mixins: [quotesMixins],
  data() {
    return {
      isHomePage: true,
      changeQuote: false,
      footerQuote: null,
      navoffset: 0,
      autoToasterId: null,
      windowInnerWidth: window.innerWidth,
      navBackShow: false,
      navBackTo: null,
      inactiveCount: 0,
      randomThemeColourInterval: null,
      isThemeBtnsVisible: false,
      showBgAnim: true,
    };
  },
  methods: {
    handleScroll() {
      // fixing the navbar only on home page
      if (window.innerWidth > 576) {
        if (this.$router.history.current.name == "home") {
          let header = document.querySelector(".nav");
          if (this.navoffset < header.offsetTop) {
            this.navoffset = header.offsetTop;
          }
          if (window.pageYOffset > this.navoffset) {
            header.classList.add("fixed-top");
          } else {
            header.classList.remove("fixed-top");
          }
        }
      }
      // changing the quote on footer
      let footer = document.querySelector("footer");
      if (window.pageYOffset + window.innerHeight > footer.offsetTop) {
        this.changeQuote = true;
      }
      if (
        this.changeQuote &&
        window.pageYOffset + window.innerHeight < footer.offsetTop
      ) {
        this.footerQuote = this.getRandomQuote();
        this.changeQuote = false;
      }
      // reset the theme if scrolled
      // this.resetTheme()
      // minimize theme buttons if scrolled
      if(this.isThemeBtnsVisible) {
        this.isThemeBtnsVisible = false
      }
    },
      switchTheme (darkMode, primary, secondary) {
        this.showBgAnim = !darkMode
        let root = document.documentElement
        root.style.setProperty('--global-bg', darkMode?'#101010':'#fdf7ff')
        root.style.setProperty('--global-card-bg', darkMode?'#000000':'#ffffffe0')
        root.style.setProperty('--global-primary-color', primary)
        root.style.setProperty('--global-secondary-color', secondary)
        root.style.setProperty('--global-shadow-color', darkMode?'#313131':'#d0d0d0')
      }
    },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.$router.history.current.name == "home"
      ? (this.isHomePage = true)
      : (this.isHomePage = false);
    this.footerQuote = this.getRandomQuote();
  },
  watch: {
    $route(to) {
      to.name == "home" ? (this.isHomePage = true) : (this.isHomePage = false);
      if (window.innerWidth < 576) {
        if (to.name == "project") {
          this.navBackShow = true;
          this.navBackTo = "/projects";
        } else if (to.name == "quote") {
          this.navBackShow = true;
          this.navBackTo = "/quotes";
        } else if (to.name == "poem") {
          this.navBackShow = true;
          this.navBackTo = "/poems";
        } else {
          this.navBackShow = false;
          this.navBackTo = null;
        }
      }
      // minimize theme buttons if scrolled
      if(this.isThemeBtnsVisible) {
        this.isThemeBtnsVisible = false
      }
    }
  }
};
</script>