<template>
  <div id="app">
    <div v-show="!isCleanTheme" class="bg"></div><div v-show="!isCleanTheme" class="bg bg2"></div><div v-show="!isCleanTheme" class="bg bg3"></div>
    <b-container fluid v-on:mousemove="resetTheme">
      <b-row class="pt-2">
        <b-col
          v-bind:class="{'d-none':!isHomePage&&(windowInnerWidth<576)}"
          sm="12"
          md="3"
          class="ml-2"
        >
          <b-card class="card-poem p-5" img-src="/Hasil.png" img-alt="Hasil Paudyal" img-top>
            <b-card-text class="card-text-poem">
              <strong>H</strong>ere I am
              <br />
              <strong>A</strong> cut above you all
              <br />
              <strong>S</strong>ilent as a grave
              <br />
              <strong>I</strong>n favour of your death
              <br />
              <br />
              <strong>L</strong>ethal is my pen
              <br />
              <strong>P</strong>erfect would be again
              <br />
              <strong>A</strong> fortune is with me
              <br />
              <strong>U</strong>nbeatable this shall be
              <br />
              <br />
              <strong>D</strong>are you come near
              <br />
              <strong>Y</strong>ell you out there
              <br />
              <strong>A</strong>nd who is this me
              <br />
              <strong>L</strong>inks the first letters to me
            </b-card-text>
            <div>
              <b-link to="//np.linkedin.com/in/hasil" target="_blank">
                <img
                  v-b-tooltip.hover.bottom
                  title="Let's get connected for work"
                  class="social-icon"
                  src="/linkedin.svg"
                  alt="linkedin"
                  width="20%"
                />
              </b-link>
              <b-link to="//facebook.com/hasill" target="_blank">
                <img
                  v-b-tooltip.hover.bottom
                  title="Let's get connected as friend"
                  src="/facebook.svg"
                  alt="facebook"
                  width="20%"
                />
              </b-link>
            </div>
          </b-card>
        </b-col>
        <b-col>
          <transition name="fade">
            <b-img
              v-show="isHomePage"
              class="cover-image pb-3"
              src="/cover.jpg"
              rounded
              fluid
              alt="Hasil Cover"
            ></b-img>
          </transition>
          <b-nav
            v-bind:class="{'fixed-top':!isHomePage}"
            align="right"
            small
            @scroll="handleScroll"
          >
            <b-nav-item
              to="/"
              v-b-tooltip.hover.bottom
              title="About me"
              exact-active-class="active"
            >
              <i class="material-icons">home</i>Home
            </b-nav-item>
            <b-nav-item
              to="/projects"
              v-b-tooltip.hover.bottom
              title="My Creations"
              exact-active-class="active"
            >
              <i class="material-icons">all_inbox</i>Projects
            </b-nav-item>
            <b-nav-item
              to="/quotes"
              v-b-tooltip.hover.bottom
              title="My Sayings"
              exact-active-class="active"
            >
              <i class="material-icons">record_voice_over</i>Quotes
            </b-nav-item>
            <b-nav-item
              to="/poems"
              v-b-tooltip.hover.bottom
              title="As Author"
              exact-active-class="active"
            >
            <i class="material-icons">import_contacts</i>Poems
            </b-nav-item>
            <b-nav-item
              to="/gallery"
              v-b-tooltip.hover.bottom
              title="Images"
              exact-active-class="active"
            >
              <i class="material-icons">perm_media</i>Gallery
            </b-nav-item>
            <b-nav-item
              to="/hire-Hasil"
              v-b-tooltip.hover.bottom
              title="My Skills"
              exact-active-class="active"
            >
              <i class="material-icons">work</i>Hire Me
            </b-nav-item>
            <b-nav-item class="back" v-show="navBackShow" :to="navBackTo">
              <i class="material-icons">arrow_back</i>
            </b-nav-item>
          </b-nav>
          <transition name="fade">
            <router-view :key="$route.params.id"/>
          </transition>
          <footer class="mt-3">
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
      <b-button :pressed.sync="isCleanTheme" class="btn-sm" id="theme-button">
        <i class="material-icons">invert_colors</i>
        </b-button>
    </b-container>
  </div>
</template>

<style lang="scss">
:root {
  --global-bg: #fdf7ff;
  --global-card-bg: #fff;
  --global-primary-color: #6e161c;
  --global-secondary-color: #e6a410;
  --global-shadow-color: #d0d0d0;
}

.fade-enter-active {
  transition: 1.5s;
}

.fade-leave-active {
  transition: 0.5s;
  transform: scale(1.4);
}

.fade-enter {
  transform: scale(0.8);
  opacity: 0;
}
.fade-leave-active {
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
}

.fixed-top {
  left: 26%;
  border-radius: 0px 0px 10px 10px;
  width: 73%;
}

.card-poem {
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

  strong {
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      text-shadow: 0 0 0 var(--global-secondary-color);
    }
    70% {
      text-shadow: 0 0 100px var(--global-secondary-color);
    }
    100% {
      text-shadow: 0 0 100px var(--global-secondary-color);
    }
  }

  .social-icon {
    margin-left: 25%;
    margin-right: 5%;
  }

  .card-body {
    padding: 1.25rem 0rem;
  }
}

.card-text-poem {
  text-align: center;
  letter-spacing: 1px;
  font-size: 16px;
  line-height: 18px;
  margin: 20px auto;
  color: var(--global-primary-color);
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
    cursor: pointer;
  }
}

@media (max-width: 576px) {
  .cover-image {
    margin-top: 20px;
  }
}

#theme-button {
  position: fixed;
  right: 5px;
  bottom: 5px;
  border-radius: 25px;
  font-size: 12px;
  color: var(--global-primary-color);
  border-color: var(--global-secondary-color);
  background-color: var(--global-secondary-color);
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
      isDefaultTheme: true, // colourful theme
      inactiveCount: 0,
      isCleanTheme: true,
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
      this.resetTheme()
    },
    autoToaster() {
      this.autoToasterId = setInterval(() => {
        this.$bvToast.toast("Hello there", {
          title: "Hello",
          autoHideDelay: 5000,
          toaster: "b-toaster-bottom-right",
          variant: "info",
          appendToast: true
        });
      }, 4000);
    },
    toggelTheme(h1,s1,l1,h2,s2,l2) {
      let root = document.documentElement
      root.style.setProperty('--global-bg', this.hslToRgb(h1,s1,l1))
      root.style.setProperty('--global-card-bg', this.hslToRgb(h1,s1,1-l1))
      root.style.setProperty('--global-primary-color', this.hslToRgb(h2,s2,1-l2))
      root.style.setProperty('--global-secondary-color', this.hslToRgb(h2,s2,l2))
      root.style.setProperty('--global-shadow-color', this.hslToRgb(h2,s2,l2))
      this.isDefaultTheme = false
    },
    resetTheme() {
      if(this.isDefaultTheme) return
      let root = document.documentElement
      root.style.setProperty('--global-bg', '#fdf7ff')
      root.style.setProperty('--global-card-bg', '#fff')
      root.style.setProperty('--global-primary-color', '#6e161c')
      root.style.setProperty('--global-secondary-color', '#e6a410')
      root.style.setProperty('--global-shadow-color', '#d0d0d0')
      this.isDefaultTheme = true
      this.inactiveCount = 0
    },
    hslToRgb(h, s, l){
    var r, g, b;
    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
        }
        return 'rgb('+ r * 255 + ',' + g * 255 + ',' + b * 255 + ')';
      }
    },
  mounted: function() {
    // disable tooltip for small screen
    if (window.innerWidth < 576) {
      this.$root.$emit("bv::disable::tooltip");
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.$router.history.current.name == "home"
      ? (this.isHomePage = true)
      : (this.isHomePage = false);
    this.footerQuote = this.getRandomQuote();
    // this.autoToaster();
    let h1 = Math.random()
    let s1 = Math.random()
    let l1 = Math.random() * 0.3 // Math.random() * (max - min) + min
    let h2 = Math.random()
    let s2 = Math.random()
    let l2 = Math.random() * (1 - 0.7) + 0.7
    setInterval(() => {
      if(this.inactiveCount > 40 && !this.isCleanTheme) {
        h1 = h1 > 1 ? 0: h1 + 0.01;
        s1 = s1 > 1 ? 0: s1 + 0.01;
        l1 = l1 > 1 ? 0: l1 + 0.01;
        h2 = h2 > 1 ? 0: h2 + 0.01;
        s2 = s2 > 1 ? 0: s2 + 0.01;
        l2 = l2 > 1 ? 0: l2 + 0.01;
        this.toggelTheme(h1,s1,l1,h2,s2,l2)
      } else {
        this.inactiveCount++
      }
      }, 300);
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
    }
  }
};
</script>