<template>
  <div id="homepage" class="section">
    <b-row class="pt-3">
      <b-col sm="12" md="8">
        <b-card class="mb-3">
          <b-card-title>
            <i class="material-icons">sentiment_satisfied_alt</i>
            Who am I?
          </b-card-title>
          <b-card-text
            class="justified"
          >Not always starting from A ends you in Z, sometimes you have to continue with AA and create any word of your own. Though having Graduation of Electrical Engineering I do have skills in Design, Web Development, Electrical repair and Electronics simulation. Out of the box, I write poems, speak quotes and try altering cloud saved data.</b-card-text>
        </b-card>
        <b-card>
          <b-card-title>
            <i class="material-icons">work</i>
            What I do?
          </b-card-title>
          <b-card-text>
            <span class="text-info">
              Web Developer at View9 | Nepal
              <br />(Jan 2019 - Present)
              <br />
            </span>
            I develop the backend of website and connect its database to different platforms with api.
            <br />
            <br />
            <span class="text-info">
              Juniour Android Developer at Fixolla | India
              <br />(Feb 2018 - Dec 2018)
              <br />
            </span>
            I was not only the part of android development team but also developed api services for the website.
            <br />
            <br />
            <span class="text-info">
              Security Analyst at Fixolla | India
              <br />(Sep 2017 - Feb 2018)
              <br />
            </span>
            I helped the company in building their database and securing it from different threats.
            <br />
            <br />
            <span class="text-info">
              Service and Sales Engineer at A2Z Laundry Solutions | India
              <br />(Dec 2016 - Dec 2018)
              <br />
            </span>
            I was involved in laundry business setup, marketing and it growth for dorzens of laundries in India. I am one of the authorised service Engineer for Danube International (France), Pony(Italy) and SEKO (USA). Beside these, I am involved in other brands like Electrolux (Sweden), Maytag (USA), Speedqueen (USA), Hydrosystems (USA), SEITZ (Germany) and Sunrise (India).
          </b-card-text>
        </b-card>
      </b-col>
      <b-col sm="12" md="4">
        <b-card class="timeline" no-body>
          <b-img src="/timeline.png" fluid-grow alt="Hasil Timeline"></b-img>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss">
#homepage {
  min-height: 90vh;

  .card {
    border: none;
    box-shadow: 0px 0px 10px 0px #d0d0d0;
  }

  .card-title {
    color: #e6a410;

    .material-icons {
      vertical-align: top;
    }
  }

  .card-text {
    color: #6e161c;

    span {
      font-size: 12px;
      font-weight: 500;
    }
  }

  .justified {
    text-align: justify;
  }

  @media (max-width: 576px) {
    .timeline {
      margin-top: 20px;
    }
  }
}
</style>

<script>
import { schemaMixins } from "../mixins/schemaMixins.js";

export default {
  mixins: [schemaMixins],
  created() {
    document.title = "Hasil's Personal Site | Hasil Paudyal";
    document.querySelector('meta[name="description"]')
    .setAttribute('content', 'Top listed Web Developer, Electrical Engineer and Poet from Nepal with 4+ years of experience. Checkout to know more and contact.');
    this.injectDefaultSchemaJSON('hasil');
  },
  beforeRouteLeave(to, from, next) {
    this.clearSchemaJSON();
    next();
  }
};
</script>