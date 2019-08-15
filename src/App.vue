<template>
  <div id="app">
    <b-container fluid>
      <b-row class="pt-2">
        <b-col cols="3" class="ml-2">
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
          </b-card>
        </b-col>
        <b-col>
          <b-img v-show="isHomePage" class="pb-3" src="/cover.jpg" rounded fluid alt="Hasil Cover"></b-img>
          <b-nav
            v-bind:class="{'fixed-top':!isHomePage}"
            align="right"
            small
            @scroll="handleSCroll"
          >
            <b-nav-item>
              <b-link to="/">
                <i class="material-icons">home</i>Home
              </b-link>
            </b-nav-item>
            <b-nav-item>
              <b-link to="/projects">
                <i class="material-icons">all_inbox</i>Projects
              </b-link>
            </b-nav-item>
            <b-nav-item>
              <b-link to="/quotes">
                <i class="material-icons">record_voice_over</i>Quotes
              </b-link>
            </b-nav-item>
            <b-nav-item>
              <b-link to="/gallery">
                <i class="material-icons">perm_media</i>Gallery
              </b-link>
            </b-nav-item>
            <b-nav-item>
              <b-link to="/hire-Hasil">
                <i class="material-icons">work</i>Hire Me
              </b-link>
            </b-nav-item>
          </b-nav>
          <transition name="fade">
            <router-view />
          </transition>
          <footer class="mt-3">
            <span v-for="quoteLine in quotes[quoteKey]" :key="quoteLine">
              {{quoteLine}}
              <br />
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
  color: #ffffff;
  height: 42px;
  border-radius: 8px;

  .material-icons {
    vertical-align: bottom;
    padding-right: 4px;
  }

  .nav-item a {
    color: #ffffff;
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
          "May be its mine bad-luck",
          "Or yours not to get me",
          "But I still have hope",
          "Of being yours"
        ],
        [
          "If you know that I am genius",
          "Then know that you made me genius",
          "Everyone don't accept me as genius",
          "Because they aren't genius to belief me as genius"
        ],
        [
          "Life for me is just a result of experiments being performed by far more developed creatures."
        ],
        [
          "Dream big!",
          "But not so big that it becomes a mess, and you may never reach reality."
        ],
        [
          "Dreaming of getting you",
          "I loosed everything",
          "Cheerfulness of smile",
          "And all the dreams of life"
        ],
        [
          "Give me another Chance",
          "Then,",
          "You will Get",
          "Less than I Gain..."
        ],
        [
          "When I was small I felt like a Superhero as my father threw me up in the air.",
          "Now after reaching this success peak I unmask - Real Superhero made me Superhero!"
        ],
        [
          "Congratulations to your mom and dad for birth of a sweet child!",
          "",
          "Sorry that I couldn't wish them when you were born."
        ],
        ["Oh great!", "I never recognized Sunshine shining me, within me."],
        [
          "I will miss you",
          "not because you taught me,",
          "not because you helped me on all steps of education;",
          "but only because",
          "you made me a leader to lead as an perfect Electrical Engineer."
        ],
        [
          "Not always starting from A ends you in Z, sometimes you have to continue with AA and create any word of your own."
        ]
      ],
      quoteKey: 3,
      navoffset: 0
    };
  },
  methods: {
    handleSCroll() {
      // fixing the navbar only on home page
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
      // changing the quote on footer
      let footer = document.querySelector("footer");
      if (window.pageYOffset + window.innerHeight > footer.offsetTop) {
        this.changeQuote = true;
      }
      if (
        this.changeQuote &&
        window.pageYOffset + window.innerHeight < footer.offsetTop
      ) {
        this.quoteKey = Math.floor(Math.random() * this.quotes.length); // Todo: 11+ is getting skipped
        this.changeQuote = false;
      }
    },
    isMobile: function() {
      var check = false;
      (function(a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    }
  },
  created() {
    if (this.isMobile()) {
      window.location = "//amp.hasilpaudyal.com.np";
    }
    window.addEventListener("scroll", this.handleSCroll);
    this.$router.history.current.name == "home"
      ? (this.isHomePage = true)
      : (this.isHomePage = false);
  },
  watch: {
    $route(to) {
      to.name == "home" ? (this.isHomePage = true) : (this.isHomePage = false);
    }
  }
};
</script>