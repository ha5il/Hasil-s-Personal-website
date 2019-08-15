<template>
  <div id="projects" class="mt-5">
    <div>
      <b-carousel id="carousel-fade" fade indicators controls img-width="1024" img-height="480">
        <b-carousel-slide
          v-for="(slide, idx) in projects"
          v-if="slide.type=='it'"
          :key="idx"
          :caption="slide.caption"
          :text="slide.text"
          :img-src="slide.img"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <h4 class="p-3">IT Projects</h4>
    <b-row>
      <b-col cols="6" v-for="(project, idx) in projects" v-if="project.type=='it'" :key="idx">
        <b-card class="mb-3" :title="project.caption">
          <b-card-text>
            {{project.text}}
            <br />
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <h4 class="p-3">Electrical &amp; Electronics Projects</h4>
    <b-row>
      <b-col cols="12" v-for="(project, idx) in projects" v-if="project.type=='ee'" :key="idx">
        <b-card class="mb-3" :title="project.caption">
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
    color: #E6A410;
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
          type: "it",
          urlSlug: "ktmretail-jockey-nepal-vuejs-ecommerce-website",
          urlId: 1,
        },
        {
          caption: "Intranery",
          text:
            "Ecommerce website for dealers to sell products as done by Daraz.",
          img: "/intranery.jpg",
          type: "it",
          urlSlug: "intranery--nepal-vuejs-ecommerce-website",
          urlId: 2,
        },
        {
          caption: "Foreveryng",
          text: "Ecommerce website designed for discounts.",
          img: "/foreveryng.jpg",
          type: "it",
          urlSlug: "foreveryng-online-beauty-store-epal",
          urlId: 3,
        },
        {
          caption: "Kourtier Courier",
          text: "Webapp for kourier tracking management.",
          img: "/kourtier.jpg",
          type: "it",
          urlSlug: "kourtier-courier-services-cargo-freight",
          urlId: 4,
        },
        {
          caption: "Mero Pharmacist",
          text: "Pharmacy enquiries online.",
          img: "/meropharmacist.jpg",
          type: "it",
          urlSlug: "mero-pharmacist-pharma-srs-online-enquire",
          urlId: 5,
        },
        {
          caption: "TIA",
          text: "Tribhuvan International airport.",
          img: "/tia.jpg",
          type: "it",
          urlSlug: "tribhuvan-international-airport-filght-tracking-nepal",
          urlId: 6,
        },
        {
          caption: "RFID Limitor",
          text: "An Arduino UNO based project for limiting the RFID Scans.",
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
    this.projects = _.shuffle(this.projects);
  }
};
</script>
