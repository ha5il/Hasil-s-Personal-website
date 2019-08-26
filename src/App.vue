<template>
  <div id="app">
    <b-container fluid>
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
          <b-img
            v-show="isHomePage"
            class="cover-image pb-3"
            src="/cover.jpg"
            rounded
            fluid
            alt="Hasil Cover"
          ></b-img>
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
            <router-view />
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
    </b-container>
  </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.nav {
  background: linear-gradient(to right, #ac252d 0%, #e6a410 90%, #e6a410 100%);
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
    background: radial-gradient(#ac252d -30%, #e6a410 130%);
    border-radius: 15px;
    height: 100%;
  }
}
body {
  font-family: "Comfortaa", cursive;
  background-color: #fdf7ff;
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
  box-shadow: 0px 0px 10px 0px #d0d0d0;
  margin-top: 85px;

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
      text-shadow: 0 0 0 #e6a42f;
    }
    70% {
      text-shadow: 0 0 100px #e6a42f;
    }
    100% {
      text-shadow: 0 0 100px #e6a42f;
    }
  }

  .social-icon {
    margin-left: 25%;
    margin-right: 5%;
  }
}

.card-text-poem {
  text-align: center;
  letter-spacing: 1px;
  font-size: 16px;
  line-height: 20px;
  margin: 20px auto;
  color: #6e161c;
}

footer {
  color: #ffffff;
  padding: 7px 0px;
  background: linear-gradient(to right, #ac252d 0%, #e6a410 90%, #e6a410 100%);
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
      navBackTo: null
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
        } else {
          this.navBackShow = false;
          this.navBackTo = null;
        }
      }
    }
  }
};
</script>