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
        <b-card class="mb-3">
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
            I develop the backend for websites, connect its database to different platforms with API. I also build mini-apps on react native.
            <br />
            <br />
            <span class="text-info">
              <a href="//fixolla.com" target="_blank"
              v-b-tooltip.hover title="Goto Fixolla's website">
              Junior Android Developer at Fixolla | India
              </a>
              <br />(Feb 2018 - Dec 2018)
              <br />
            </span>
            With their android development team, I learnt app development and also developed API.
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
            As an analyst helped the company in scrapping the data from open sources and build their database. I was also offered public speaking and promotional offers publicity across colleges in Bangalore.
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
            I was involved in laundry business setup, marketing and its growth for dozens of laundries in India. I am one of the authorised service Engineer for <a href="//www.danube-international.com" target="_blank">Danube International (France)</a>, <a href="//ponyitaly.com" target="_blank">Pony (Italy)</a> and <a href="//www.seko.com" target="_blank">SEKO (USA)</a>. Besides these, I am involved in other brands like <a href="//www.electroluxgroup.com" target="_blank">Electrolux (Sweden)</a>, <a href="//www.maytag.com" target="_blank">Maytag (USA)</a>, <a href="//speedqueen.com" target="_blank">Speedqueen (USA)</a>, <a href="//hydrosystemsco.com" target="_blank">Hydrosystems (USA)</a>, <a href="//www.seitz24.com" target="_blank">SEITZ (Germany)</a> and <a href="//sunrisegmpl.com" target="_blank">Sunrise (India)</a>.
          </b-card-text>
        </b-card>
        <b-card class="mb-3">
          <b-card-title>
            <i class="material-icons">all_inbox</i>
            Highlighted Projects
            <router-link class="float-right" to="/projects">View all</router-link>
          </b-card-title>
          <b-row>
            <b-col sm="12" md="4" v-for="(project, idx) in highlightedProjects" v-show="project.type=='it'" :key="idx">
              <router-link
                :to="{ name: 'project', params: { id: project.id, urlSlug: project.urlSlug }}"
                tag="div"
              >
                <b-card :id="'project-'+idx" class="mb-3 project-card" :title="project.name">
                <b-img
                  class="mb-3"
                  :src="project.coverImage"
                  :center="true"
                  fluid
                  :alt="project.name+' cover image'"
                ></b-img>
                  <h5 class="text-info">
                    <span v-for="(tech,idx) in project.technologies" :key="idx">
                    <b-img
                      class="mx-1"
                      width="32"
                      :src="'/'+tech.replace(/ /g,'').toLowerCase()+'-logo.png'"
                      :alt="tech+' logo'"
                    ></b-img>
                    </span>
                  </h5>
                  <b-card-text>
                    {{project.tagLine}}
                    <b-progress class="mt-3" v-show="project.contributionLevels" show-value>
                      <b-progress-bar
                        v-for="(level, idxLevel) in project.contributionLevels"
                        :key="idxLevel"
                        :value="level"
                        :variant="getVariant(idxLevel)"
                      >{{idxLevel}}</b-progress-bar>
                    </b-progress>
                  </b-card-text>
                </b-card>
              </router-link>
              <b-tooltip :delay="{show:1000,hide:400}" :target="'project-'+idx" placement="bottom" :title="getProjectPageDescription(project.id)+'...'"></b-tooltip>
            </b-col>
          </b-row>
        </b-card>
        <b-card class="mb-3">
          <b-card-title>
            <i class="material-icons">help</i>
            What Can I do?
          </b-card-title>
            <b-list-group flush>
              <b-list-group-item
                v-for="(list, idxList) in whatCanIDo"
                :key="idxList"
                class="d-flex justify-content-between align-items-center"
              >{{list.text}}
              </b-list-group-item>
            </b-list-group>
        </b-card>
        <b-card class="mb-3">
          <b-card-title>
            <i class="material-icons">star</i>
            Best Quotes
            <router-link class="float-right" to="/quotes">View all</router-link>
          </b-card-title>
          <b-row>
            <b-col sm="12" md="4" v-for="(quote, idx) in bestQuotes" :key="idx">
              <router-link
                :to="{ name: 'quote', params: { id: quote.id, urlSlug: quote.urlSlug }}"
                tag="div"
              >
              <b-card class="quote-card mb-3">
                <b-card-text>
                  <span v-for="quoteLine in quote.quoteLines" :key="quoteLine">
                    {{quoteLine}}
                    <br />
                  </span>
                </b-card-text>
              </b-card>
              </router-link>
            </b-col>
          </b-row>
        </b-card>
        <b-card class="mb-3">
          <b-card-title>
            <i class="material-icons">favorite</i>
            Best Poems
            <router-link class="float-right" to="/poems">View all</router-link>
          </b-card-title>
          <b-row>
            <b-col sm="12" md="6" v-for="(poem, idx) in bestPoems" :key="idx">
              <router-link
                :to="{ name: 'poem', params: { id: poem.id, urlSlug: poem.urlSlug }}"
                tag="div"
              >
                <b-card class="poem-card text-center mb-3">
                  <b-card-title>{{poem.name}}</b-card-title>
                  <b-card-text class="mt-4">
                    <p v-for="(para, idxPara) in poem.poemParas"
                      :key="idxPara"
                    >
                    <span v-for="(paraLine, idxLine) in para.paraLines" :key="idxLine">
                      {{paraLine}}
                      <br/>
                    </span>
                    </p>
                  </b-card-text>
                </b-card>
              </router-link>
            </b-col>
          </b-row>
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

    .list-group-item {
      background-color: inherit;
      color: var(--global-primary-color);
    }

    .project-card, .quote-card, .poem-card {
      background-color: inherit;
      box-shadow: none;

      .card-title {
        color: var(--global-primary-color);
      }

      :hover {
        transform: scale(1.04);
        cursor: url('/cursor-pointer.png'), pointer;
        transition: 0.33s all;
      }
    }
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
import { projectsMixins } from "../mixins/projectsMixins.js";
import { quotesMixins } from "../mixins/quotesMixins.js";
import { poemsMixins } from "../mixins/poemsMixins.js";

export default {
  mixins: [schemaMixins, htmlHeadMixins, projectsMixins, quotesMixins, poemsMixins],
  data() {
    return {
      highlightedProjects: [],
      bestQuotes: [],
      bestPoems: [],
      whatCanIDo: [
        {
          text: "Script for scrapping, processing and storing data"
        },
        {
          text: "Highly Dynamic and Scalable web platform"
        },
        {
          text: "Webapp and Android App"
        },
        {
          text: "Graphic / UI design"
        },
        {
          text:
            "Portable hardware interfacing RFID, physical sensors, Wifi for IoT and much more."
        },
        {
          text: "Dynamic Accelerated mobile page generator for advance SEO."
        },
        {
          text: "Website setup on AWS ec2/dedicated hosting with a local database. Also website setup on shared hosting."
        },
        {
          text: "AWS EBS setup with a remote database, s3, load balancer and cloud watch"
        },
        {
          text: "Gitlab server, runner setup for managing projects with CI/CD"
        },
        {
          text: "Self-hosted PHP Socket in Laravel"
        }
      ]
    }
  },
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
      document.getElementById('seoH1Title').innerText = "Hasil's Personal Site | Hasil Paudyal"
      document.getElementsByTagName('head')[0].insertAdjacentHTML( 'beforeend', `<title>Hasil's Personal Site | Hasil Paudyal</title>
      <meta data-vue-meta="1" property="og:type" content="website">
      <meta data-vue-meta="1" property="og:url" content="https://hasilpaudyal.com.np">
      <meta data-vue-meta="1" property="og:title" content="Hasil's Personal Site | Hasil Paudyal">
      <meta data-vue-meta="1" name="twitter:title" content="Hasil's Personal Site | Hasil Paudyal">
      <meta data-vue-meta="1" name="description" content="Top listed Web Developer, Electrical Engineer and Poet from Nepal with 4+ years of experience. Checkout to know more and contact.">
      <meta data-vue-meta="1" property="og:description" content="Top listed Web Developer, Electrical Engineer and Poet from Nepal with 4+ years of experience. Checkout to know more and contact.">
      <meta data-vue-meta="1" name="twitter:description" content="Top listed Web Developer, Electrical Engineer and Poet from Nepal with 4+ years of experience. Checkout to know more and contact.">
      <meta data-vue-meta="1" property="og:image" content="https://hasilpaudyal.com.np/Hasil.png">
      <meta data-vue-meta="1" name="twitter:image" content="https://hasilpaudyal.com.np/Hasil.png">`)
    }
    this.injectDefaultSchemaJSON('hasil')
    this.highlightedProjects = this.getAllProjects().filter(function(project) {
      return [12,16,19].includes(project.id)
    })
    this.bestQuotes = this.getAllquotes().filter(function(quote) {
      return [2,4,9].includes(quote.id)
    })
    this.bestPoems = this.getAllpoems().filter(function(poem) {
      return [3,8].includes(poem.id)
    })
  },
  beforeRouteLeave(to, from, next) {
    this.clearSchemaJSON()
    next()
  }
}
</script>