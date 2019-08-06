<template>
  <div id="projects" class="mt-5">
    <div>
      <b-carousel id="carousel-fade" fade indicators controls img-width="1024" img-height="480">
        <b-carousel-slide
          v-for="(slide, idx) in projects"
          :key="idx"
          :caption="slide.caption"
          :text="slide.text"
          :img-src="slide.img"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <h4 class="p-3">IT Projects</h4>
    <b-row>
      <b-col cols="6" v-for="(project, idx) in projects" :key="idx">
        <b-card v-show="project.type=='it'" class="mb-3" :title="project.caption">
          <b-card-text>
            {{project.text}}
            <br />
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <h4 class="p-3">Electrical &amp; Electronics Projects</h4>
    <b-row>
      <b-col cols="12" v-for="(project, idx) in projects" :key="idx">
        <b-card v-show="project.type=='ee'" class="mb-3" :title="project.caption">
          <b-card-text>
            {{project.text}}
            <br />
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss">
#projects {
  min-height: 90vh;

  .card {
    border: none;
    box-shadow: 0px 0px 10px 0px #d0d0d0;
  }

  .card-title {
    color: #6e161c;
    font-weight: normal;
  }

  .card-text {
    color: #6e161c;
  }

  h4 {
    color: #6e161c;
    font-weight: bold;
  }

  .carousel {
    img {
      height: 480px;
    }

    .carousel-caption {
      color: #ac252d;
      font-weight: bolder;
      background-color: #e4e4e46b;
    }
    .carousel-indicators li {
      background-color: #ac252d;
    }
  }
}
</style>

<script>
import _ from "lodash";

export default {
  data() {
    return {
      projects: [
        {
          caption: "KTM Retail",
          text: "Vuejs based ecommerce website.",
          img: "/ktmretail.jpg",
          type: "it"
        },
        {
          caption: "Intranery",
          text:
            "Ecommerce website for dealers to sell products as done by Daraz.",
          img: "/intranery.jpg",
          type: "it"
        },
        {
          caption: "Foreveryng",
          text: "Ecommerce website designed for discounts.",
          img: "/foreveryng.jpg",
          type: "it"
        },
        {
          caption: "Kourtier Courier",
          text: "Webapp for kourier tracking management.",
          img: "/kourtier.jpg",
          type: "it"
        },
        {
          caption: "Mero Pharmacist",
          text: "Pharmacy enquiries online.",
          img: "/meropharmacist.jpg",
          type: "it"
        },
        {
          caption: "TIA",
          text: "Tribhuvan International airport.",
          img: "/tia.jpg",
          type: "it"
        },
        {
          caption: "RFID Limitor",
          text:
            "An Arduino UNO based project for limiting the RFID Scans.",
          type: "ee"
        },
        {
          caption: "RABC Analyser",
          text:
            "Windows console based app for extracting the total washes done in Danube Washer. Also C# based GUI app is partially developed!",
          type: "ee"
        },
        {
          caption: "Electrical Thief Eliminator",
          text:
            "This device detects, locates and terminates the electricity thief from the supply line.",
          type: "ee"
        },
        {
          caption: "Electrical Performance Analyser",
          text:
            "An Arduino UNO based project for realtime data recording and analysis.",
          type: "ee"
        }
      ]
    };
  },
  created() {
    this.carouselItems = _.shuffle(this.carouselItems);
  }
};
</script>
