<template>
  <div id="homepage" class="section">
    <b-row class="pt-3">
      <b-col sm="12" md="12">
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
              <a href="//view9.com.np" target="_blank"
              v-b-tooltip.hover title="Goto View9's website">
              Web Developer at View9 | Nepal
              </a>
              <br />(Jan 2019 - Present)
              <br />
            </span>
            I develop the backend for website, connect its database to different platforms with api. I also build mini apps on react native.
            <br />
            <br />
            <span class="text-info">
              <a href="//fixolla.com" target="_blank"
              v-b-tooltip.hover title="Goto Fixolla's website">
              Juniour Android Developer at Fixolla | India
              </a>
              <br />(Feb 2018 - Dec 2018)
              <br />
            </span>
            With their android development team I learnt app development and also developed api.
            <br />
            <br />
            <span class="text-info">
              <a href="//fixolla.com" target="_blank"
              v-b-tooltip.hover title="Goto Fixolla's website">
              Security Analyst at Fixolla | India
              </a>
              <br />(Sep 2017 - Feb 2018)
              <br />
            </span>
            As analyst helped the company in scrapping the data from open sources and build their database. I was also offered for public speaking and promotional offers publicity across colleges in Bangalore.
            <br />
            <br />
            <span class="text-info">
              <a href="//a2zlaundrysolutions.com" target="_blank"
              v-b-tooltip.hover title="Goto A2Z's website">
              Service and Sales Engineer at A2Z Laundry Solutions | India
              </a>
              <br />(Dec 2016 - Dec 2018)
              <br />
            </span>
            I was involved in laundry business setup, marketing and it growth for dorzens of laundries in India. I am one of the authorised service Engineer for Danube International (France), Pony(Italy) and SEKO (USA). Beside these, I am involved in other brands like Electrolux (Sweden), Maytag (USA), Speedqueen (USA), Hydrosystems (USA), SEITZ (Germany) and Sunrise (India).
          </b-card-text>
        </b-card>
      </b-col>
      <!-- <b-col sm="12" md="4">
        <b-card class="timeline" no-body>
          <b-img src="/timeline.png" fluid-grow alt="Hasil Timeline"></b-img>
        </b-card>
      </b-col> -->
    </b-row>
  </div>
</template>

<style lang="scss">
#homepage {
  min-height: 90vh;

  .card {
    border: none;
    box-shadow: 0px 0px 10px 0px var(--global-shadow-color);
    background-color: var(--global-card-bg);
  }

  .card-title {
    color: var(--global-secondary-color);

    .material-icons {
      vertical-align: top;
    }
  }

  .card-text {
    color: var(--global-primary-color);

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
import { schemaMixins, htmlHeadMixins } from "../mixins/seoMixins.js"

export default {
  mixins: [schemaMixins, htmlHeadMixins],
  metaInfo() {
    return this.getOptimizedSeoMetaTags({
      title: "Hasil's Personal Site | Hasil Paudyal",
      description: 'Top listed Web Developer, Electrical Engineer and Poet from Nepal with 4+ years of experience. Checkout to know more and contact.',
      image: 'https://hasilpaudyal.com.np/Hasil.png'
    })
  },
  created() {
    /**
     * Injecting meta tags with vue-meta works on all pages except this
     * Vue meta works here is user comes from other routes
     * Debugging shows that computed variables of vue-meta are not set
     * Calling this.$meta.inject({getOptimizedSeoMetaTags}) throws warning
     * that this app/component has no vue-meta configutaion
     * 
     * Manually injecting the tags that vue-meta would inject
     */
    if(!document.getElementsByTagName('title').length) {
      console.log('appending')
      document.getElementsByTagName('head')[0].insertAdjacentHTML( 'beforeend', `<title>Hasil's Personal Site | Hasil Paudyal</title>
      <meta data-vue-meta="1" property="og:title" content="Hasil's Personal Site | Hasil Paudyal">
      <meta data-vue-meta="1" name="twitter:title" content="Hasil's Personal Site | Hasil Paudyal">
      <meta data-vue-meta="1" name="description" content="Top listed Web Developer, Electrical Engineer and Poet from Nepal with 4+ years of experience. Checkout to know more and contact.">
      <meta data-vue-meta="1" property="og:description" content="Top listed Web Developer, Electrical Engineer and Poet from Nepal with 4+ years of experience. Checkout to know more and contact.">
      <meta data-vue-meta="1" property="og:image" content="https://hasilpaudyal.com.np/Hasil.png">
      <meta data-vue-meta="1" name="twitter:image" content="https://hasilpaudyal.com.np/Hasil.png">`)
    }
    this.injectDefaultSchemaJSON('hasil')
  },
  beforeRouteLeave(to, from, next) {
    this.clearSchemaJSON()
    next()
  }
}
</script>