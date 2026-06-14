<template>
  <div id="app">
    <div v-show="showBgAnim" class="bg"></div>
    <div v-show="showBgAnim" class="bg bg2"></div>
    <div v-show="showBgAnim" class="bg bg3"></div>
    <b-container fluid>
      <b-row class="pt-2">
        <b-col
          sm="12"
          md="3"
          class="ms-md-2"
          :class="{ 'd-none d-md-block': $route.name !== 'home' }"
        >
          <b-card class="card-poem-intro p-3">
            <transition name="fade-avatar" mode="out-in">
              <img
                :key="avatarImage"
                :src="avatarImage"
                alt="Hasil Paudyal"
                class="card-img-top"
                style="width:100%;border-radius:20px;"
              />
            </transition>
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
              <b-link class="px-3" href="https://www.linkedin.com/in/hasil/" target="_blank">
                <img
                  v-b-tooltip.hover.bottom
                  title="Let's get connected for work"
                  src="/iconledincon.svg"
                  width="20%"
                />
              </b-link>
              <b-link class="px-3" href="https://facebook.com/hasill" target="_blank">
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
          <b-nav
            class="fixed-top"
            align="right"
            small
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
              to="/hire-Hasil"
              exact-active-class="active"
            >
              <i class="material-icons">work</i>Hire Me
            </b-nav-item>
            <b-nav-item class="back" v-if="navBackShow && navBackTo" :to="navBackTo">
              <i class="material-icons">arrow_back</i>
            </b-nav-item>
          </b-nav>
          <div v-if="routeLoading" class="text-center my-5 py-5">
            <b-spinner class="mx-1" variant="primary" label="Spinning"></b-spinner>
            <b-spinner class="mx-1" variant="warning" type="grow" label="Spinning"></b-spinner>
            <b-spinner class="mx-1" variant="success" label="Spinning"></b-spinner>
            <b-spinner class="mx-1" variant="danger" type="grow" label="Spinning"></b-spinner>
            <b-spinner class="mx-1" variant="info" label="Spinning"></b-spinner>
          </div>
          <router-view v-else :key="$route.params.id" />
          <footer class="mt-3" v-show="!routeLoading">
            <div
              style="cursor: pointer"
              @click="$router.push({ name: 'quote', params: { id: footerQuote.id, urlSlug: footerQuote.urlSlug } })"
            >
              <span v-for="quoteLine in footerQuote.quoteLines" :key="quoteLine">
                {{quoteLine}}
                <br />
              </span>
            </div>
          </footer>
        </b-col>
      </b-row>

      <div id="theme-panel">
        <transition name="theme-panel-fade">
          <div v-show="isThemeBtnsVisible" class="theme-picker-panel">
            <div class="theme-panel-header">
              <i class="material-icons">palette</i> Themes
            </div>

            <div class="theme-group-section">
              <div class="theme-group-label">
                <i class="material-icons">wb_sunny</i> Light
              </div>
              <div class="theme-swatches">
                <button
                  v-for="t in lightThemes"
                  :key="t.label"
                  @click="switchTheme(t.darkMode, t.primary, t.secondary)"
                  class="theme-swatch-btn"
                  :style="{ background: `linear-gradient(135deg, ${t.primary} 50%, ${t.secondary} 50%)` }"
                  :title="t.label"
                ></button>
              </div>
            </div>

            <div class="theme-group-section">
              <div class="theme-group-label">
                <i class="material-icons">dark_mode</i> Dark
              </div>
              <div class="theme-swatches">
                <button
                  v-for="t in darkThemes"
                  :key="t.label"
                  @click="switchTheme(t.darkMode, t.primary, t.secondary)"
                  class="theme-swatch-btn"
                  :style="{ background: `linear-gradient(135deg, ${t.primary} 50%, ${t.secondary} 50%)` }"
                  :title="t.label"
                ></button>
              </div>
            </div>
          </div>
        </transition>

        <button
          class="theme-toggle-main"
          @click="isThemeBtnsVisible = !isThemeBtnsVisible"
        >
          <i class="material-icons">{{ isThemeBtnsVisible ? 'close' : 'palette' }}</i>
        </button>
      </div>
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
  --bs-body-font-family: "DM Sans", sans-serif;
  cursor: url('/cursor-normal.png'), auto;
}

::-webkit-scrollbar {
	width: 10px;
	background-color: #b4b4b4;

  &:hover {
    width: 15px;
  }
}

::-webkit-scrollbar-track {
	box-shadow: inset 0 0 6px rgba(0,0,0,0.9);
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.9);
	border-radius: 10px;
	background-color: #CCCCCC;
}

::-webkit-scrollbar-thumb {
	border-radius: 10px;
	background-color: var(--global-primary-color);
	background-image: -webkit-linear-gradient(90deg, transparent, var(--global-secondary-color) 50%, transparent);
  box-shadow: inset 0px 0px 4px 0px #000000;
}

a {
  cursor: url('/cursor-pointer.png'), pointer;
}

.fade-enter-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  transform: skewX(20deg);
  opacity: 0;
}

.fade-leave-to {
  transform: skewX(-20deg);
  opacity: 0;
}

.fade-avatar-enter-active, .fade-avatar-leave-active {
  transition: opacity 0.6s;
}
.fade-avatar-enter-from, .fade-avatar-leave-to {
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
  z-index: 1031;

  @media (max-width: 576px) {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    height: auto;
    border-radius: 0px !important;
    width: 100% !important;
    // Force GPU compositing — prevents sub-pixel jitter during momentum scroll on iOS
    transform: translateZ(0);
    -webkit-transform: translateZ(0);

    .back {
      position: fixed;
      left: 0;
      top: 40px;
    }
  }

  // Use flex on the link so icon + text center together perfectly
  .nav-link {
    display: flex !important;
    align-items: center;
    gap: 3px;
    height: 100%;
    color: #ffffff !important;
  }

  .material-icons {
    font-size: 1rem;
    line-height: 1;
    flex-shrink: 0;
  }

  .nav-item {
    transition: 0.33s all;
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
  font-family: "DM Sans", sans-serif !important;
  background-color: var(--global-bg);
  overflow-x: hidden;
  // Prevents iOS rubber-band bounce that makes position:fixed nav appear to scroll
  overscroll-behavior: none;
}

h1, h2, h3, h4, h5, h6,
.card-title,
.nav-item a,
.my-name,
.hero-name,
.section-label,
.dim-title,
.timeline-title {
  font-family: "Quantico", sans-serif;
  font-weight: 700;
}

// Global icon alignment — match surrounding text baseline
.material-icons {
  vertical-align: middle;
  font-size: 1.2em;
  line-height: 1;
  display: inline-block;
}

// Lora — all literary / creative content
.card-text-poem,
.card-text-poem span,
footer span,
#quotes .card-text,
#quotes .card-text span,
#quote .card-text p,
#poem .card-text p,
#poem .card-text span,
#homepage .quote-card .card-text span,
#homepage .poem-card .card-text p,
#homepage .poem-card .card-text span {
  font-family: "Lora", Georgia, serif;
  letter-spacing: 0.2px;
  line-height: 1.75;
}

// italic treatment only for actual poem/quote lines
#poem .card-text p,
#poem .card-text span,
.card-text-poem,
.card-text-poem span {
  font-style: italic;
}

@media (min-width: 577px) {
  .nav.fixed-top {
    left: calc(25% + 0.5rem) !important;
    right: 0 !important;
    width: auto !important;
    border-radius: 0px 0px 10px 10px;
    z-index: 1031 !important;
  }
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
    position: fixed !important;
    width: calc(25% - 1.5rem);
    margin-top: 0px;
  }

  img {
    margin: auto;
  }

  img:hover {
    animation: nan-na-na 0.8s both;
  }

  @keyframes nan-na-na {
    0%,
    100% {
      transform: translateX(0%);
      transform-origin: 50% 50%;
    }
    15% {
      transform: translateX(-30px) rotate(-6deg);
    }
    30% {
      transform: translateX(15px) rotate(6deg);
    }
    45% {
      transform: translateX(-15px) rotate(-3.6deg);
    }
    60% {
      transform: translateX(9px) rotate(2.4deg);
    }
    75% {
      transform: translateX(-6px) rotate(-1.2deg);
    }
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

#theme-panel {
  position: fixed;
  right: 12px;
  bottom: 12px;
  z-index: 1050;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.theme-picker-panel {
  background: var(--global-card-bg);
  border-radius: 16px;
  padding: 14px 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.22);
  border: 1px solid var(--global-shadow-color);
  min-width: 210px;
}

.theme-panel-fade-enter-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.theme-panel-fade-leave-active {
  transition: opacity 0.14s ease, transform 0.14s ease;
}
.theme-panel-fade-enter-from,
.theme-panel-fade-leave-to {
  opacity: 0;
  transform: translateY(8px) scale(0.97);
}

.theme-panel-header {
  font-family: "Quantico", sans-serif;
  font-weight: 700;
  font-size: 0.82rem;
  color: var(--global-primary-color);
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--global-shadow-color);

  .material-icons { font-size: 1rem; }
}

.theme-group-section {
  margin-bottom: 10px;

  &:last-child { margin-bottom: 0; }
}

.theme-group-label {
  font-family: "DM Sans", sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: var(--global-primary-color);
  opacity: 0.65;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 7px;

  .material-icons { font-size: 0.85rem; }
}

.theme-swatches {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.theme-swatch-btn {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  cursor: url('/cursor-pointer.png'), pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.18);

  &:hover {
    transform: scale(1.18);
    border-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
    border-color: #fff;
  }
}

.theme-toggle-main {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, var(--global-primary-color), var(--global-secondary-color));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: url('/cursor-pointer.png'), pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  }

  &:focus { outline: none; }

  .material-icons { font-size: 1.25rem; }
}

.breadcrumb {
  background-color: var(--global-card-bg);
}

.card {
  border-radius: 16px !important;
  overflow: hidden;
  background-color: var(--global-card-bg) !important;
  color: var(--global-primary-color);
}

.list-group-item {
  background-color: inherit !important;
  color: var(--global-primary-color);
}

.badge {
  font-weight: 500;
  letter-spacing: 0.3px;
  padding: 5px 10px;
  border-radius: 20px !important;
}

.list-group-item {
  border-color: var(--global-shadow-color) !important;
  padding: 10px 16px;
  font-size: 0.95rem;
  transition: background 0.2s;
}

h4, h5 {
  letter-spacing: 0.2px;
}

// Tooltips — use theme primary as bg, global-bg as text (auto-adapts light/dark)
// !important needed: Bootstrap's .tooltip rule loads later and resets these vars
.tooltip {
  --bs-tooltip-bg: var(--global-primary-color) !important;
  --bs-tooltip-color: var(--global-bg) !important;
  --bs-tooltip-opacity: 0.95 !important;
  --bs-tooltip-border-radius: 8px !important;
  font-family: "DM Sans", sans-serif;
  font-size: 0.8rem;
  z-index: 1090 !important;
}

// Belt-and-suspenders: override the rendered elements directly too
.tooltip-inner {
  background-color: var(--global-primary-color) !important;
  color: var(--global-bg) !important;
  border-radius: 8px !important;
  font-family: "DM Sans", sans-serif;
  font-size: 0.8rem;
  padding: 8px 12px;
  max-width: 320px !important;
  overflow: visible !important;
  white-space: normal !important;
  text-align: left;
}

.tooltip .tooltip-arrow::before,
.bs-tooltip-auto .tooltip-arrow::before {
  border-color: transparent !important;
}
.bs-tooltip-top .tooltip-arrow::before    { border-top-color: var(--global-primary-color) !important; }
.bs-tooltip-bottom .tooltip-arrow::before { border-bottom-color: var(--global-primary-color) !important; }
.bs-tooltip-start .tooltip-arrow::before  { border-left-color: var(--global-primary-color) !important; }
.bs-tooltip-end .tooltip-arrow::before    { border-right-color: var(--global-primary-color) !important; }

// Popovers — theme-aware surface
.popover {
  --bs-popover-bg: var(--global-card-bg);
  --bs-popover-header-bg: var(--global-primary-color);
  --bs-popover-header-color: var(--global-bg);
  --bs-popover-body-color: var(--global-primary-color);
  --bs-popover-border-color: var(--global-shadow-color);
  --bs-popover-border-radius: 12px;
  font-family: "DM Sans", sans-serif;
  box-shadow: 0 4px 16px var(--global-shadow-color);
}
</style>

<script>
import { quotesMixins } from "./mixins/quotesMixins.js";
import { appState } from "./state.js";

export default {
  mixins: [quotesMixins],
  data() {
    return {
      changeQuote: false,
      footerQuote: null,
      navBackShow: false,
      navBackTo: null,
      isThemeBtnsVisible: false,
      showBgAnim: true,
      avatarImage: '/Hasil-Shobha.png',
      allThemes: [
        // Light themes — primary is dark (text), secondary is accent (titles, nav)
        { darkMode: false, primary: "#7A1C22", secondary: "#B8860B", label: "Claret & Gold" },
        { darkMode: false, primary: "#1B2E4A", secondary: "#2E7DA8", label: "Navy & Steel" },
        { darkMode: false, primary: "#3D1F0A", secondary: "#2E8B8B", label: "Espresso & Teal" },
        { darkMode: false, primary: "#1E4D2B", secondary: "#A0690A", label: "Forest & Amber" },
        { darkMode: false, primary: "#4A1A5E", secondary: "#A0527A", label: "Plum & Rose" },
        // Dark themes — primary is bright (text on dark bg), secondary is accent
        { darkMode: true, primary: "#F5A623", secondary: "#E07B5D", label: "Amber & Coral" },
        { darkMode: true, primary: "#44C8BE", secondary: "#5BB89A", label: "Aqua & Seafoam" },
        { darkMode: true, primary: "#8B9FE8", secondary: "#B87FCC", label: "Periwinkle & Orchid" },
      ],
    };
  },
  computed: {
    routeLoading() {
      return appState.routeLoading;
    },
    lightThemes() {
      return this.allThemes.filter(t => !t.darkMode);
    },
    darkThemes() {
      return this.allThemes.filter(t => t.darkMode);
    },
  },
  methods: {
    handleScroll() {
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
      if (this.isThemeBtnsVisible) {
        this.isThemeBtnsVisible = false;
      }
    },
    switchTheme(darkMode, primary, secondary) {
      this.showBgAnim = !darkMode;
      const bg = darkMode ? "#121212" : "#fdf7ff";
      const cardBg = darkMode ? "#1F1F1F" : "#ffffffe0";
      const root = document.documentElement;
      root.style.setProperty("--global-bg", bg);
      root.style.setProperty("--global-card-bg", cardBg);
      root.style.setProperty("--global-primary-color", primary);
      root.style.setProperty("--global-secondary-color", secondary);
      root.style.setProperty("--global-shadow-color", darkMode ? "#2A2A2A" : "#d0d0d0");
      // Keep Bootstrap variables in sync so BS components also respect the theme
      root.style.setProperty("--bs-body-bg", bg);
      root.style.setProperty("--bs-body-color", darkMode ? "#e0e0e0" : "#212529");
      root.style.setProperty("--bs-card-bg", cardBg);
      root.style.setProperty("--bs-border-color-translucent", darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.175)");
      // Route link + info colours through the theme
      root.style.setProperty("--bs-link-color", secondary);
      root.style.setProperty("--bs-link-hover-color", primary);
      root.style.setProperty("--bs-info", secondary);
      root.style.setProperty("--bs-info-rgb", this.hexToRgb(secondary));

      localStorage.setItem("theme", JSON.stringify({ darkMode, primary, secondary, setAt: Date.now() }));
    },
    pickRandomTheme() {
      const prefersDark = window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      const candidates = this.allThemes.filter(t => t.darkMode === prefersDark);
      const pool = candidates.length ? candidates : this.allThemes;
      const { darkMode, primary, secondary } = pool[Math.floor(Math.random() * pool.length)];
      this.switchTheme(darkMode, primary, secondary);
    },
    initTheme() {
      let stored = null;
      try {
        stored = JSON.parse(localStorage.getItem("theme"));
      } catch (e) {
        stored = null;
      }

      const ONE_DAY = 86400000;
      const isExpired = stored && stored.setAt && (Date.now() - stored.setAt > ONE_DAY);

      if (stored && typeof stored.darkMode === "boolean" && !isExpired) {
        this.switchTheme(stored.darkMode, stored.primary, stored.secondary);
      } else {
        this.pickRandomTheme();
      }
    },
    hexToRgb(hex) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `${r}, ${g}, ${b}`;
    },
    updateAvatarImage() {
      const images = [
        '/Hasil-Shobha.png',
        '/Hasil-Shobha-2.png',
        '/Hasil.png',
        '/Hasil-Shobha-3.png'
      ];
      this.avatarImage = images[Math.floor(Math.random() * images.length)];
    }
  },
  created() {
    this.initTheme();
    this.footerQuote = this.getRandomQuote();
    this.updateAvatarImage();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  watch: {
    $route(to) {
      if (window.innerWidth < 576) {
        if (to.name === 'project') {
          this.navBackShow = true;
          this.navBackTo = "/projects";
        } else if (to.name === 'quote') {
          this.navBackShow = true;
          this.navBackTo = "/quotes";
        } else if (to.name === 'poem') {
          this.navBackShow = true;
          this.navBackTo = "/poems";
        } else {
          this.navBackShow = false;
          this.navBackTo = null;
        }
      }
      this.updateAvatarImage();
      if (this.isThemeBtnsVisible) {
        this.isThemeBtnsVisible = false;
      }
    }
  }
};
</script>
