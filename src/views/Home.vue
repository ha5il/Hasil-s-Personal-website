<template>
  <div id="homepage" class="section">
    <b-row class="pt-3">
      <b-col sm="12" md="12">
        <b-card class="mb-3">
          <b-card-title>
            <i class="material-icons">sentiment_satisfied_alt</i>
            Who am I?
          </b-card-title>
          <b-card-text class="justified">
            Not always starting from A ends you in Z, sometimes you have to continue with AA and create any word of your own. With a background in Electrical Engineering, I have expertise in design, web development, management, electrical repair, and electronics simulation. Beyond technology, I write poems, share quotes, and experiment with cloud-based data.
          </b-card-text>
        </b-card>
        <b-card class="mb-3">
          <b-card-title>
            <i class="material-icons">work</i>
            What do I do?
          </b-card-title>
          <b-card-text>
            <span class="text-info">
              <a class="job-position" href="//www.convergestack.com/" target="_blank" v-b-tooltip.hover.right title="Visit ConvergeStack's website">
                App Development Manager at ConvergeStack
              </a>
              <br />(Jan 2022 - Present)
            </span>
            As project lead, I specialize in hybrid app development using React Native (Expo), from prototyping to publishing production-ready Android and iOS apps. I also manage servers and assist the backend team with architectural decisions and algorithm implementation.
            <br /><br />
            <span class="text-info">
              <a class="job-position" href="//view9.com.np" target="_blank" v-b-tooltip.hover.right title="Visit View9's website">
                Web Developer at View9 | Nepal
              </a>
              <br />Jan 2019 - Dec 2021 • 2 years 11 months
            </span>
            I led backend development for websites, integrating server-to-server APIs for banks, license verification, online payments, and other services using SOAP and JSON. I developed logging, scheduling, and recurring job systems for notifications, utilizing AWS and Laravel features. I also mentored junior team members in server setup and production issue handling.
            <br /><br />
            <span class="text-info">
              <a class="job-position" href="//fixolla.com" target="_blank" v-b-tooltip.hover.right title="Visit Fixolla's website">
                Part-time Junior Android Developer at Fixolla | India
              </a>
              <br />Feb 2018 - Dec 2018 • 11 months
            </span>
            I worked with the Android development team, gaining experience in app and API development.
            <br /><br />
            <span class="text-info">
              <a class="job-position" href="//fixolla.com" target="_blank" v-b-tooltip.hover.right title="Visit Fixolla's website">
                Part-time Security Analyst at Fixolla | India
              </a>
              <br />Sep 2017 - Feb 2018 • 6 months
            </span>
            As a security analyst, I assisted in data scraping from open sources to build company databases and participated in public speaking and promotional activities at colleges in Bangalore.
            <br /><br />
            <span class="text-info">
              <a class="job-position" href="//a2zlaundrysolutions.com" target="_blank" v-b-tooltip.hover.right title="Visit A2Z Laundry Solutions' website">
                Service and Sales Engineer at A2Z Laundry Solutions | India
              </a>
              <br />Dec 2016 - Dec 2018 • 2 years 1 month
            </span>
            I set up and expanded laundry businesses across India, serving as an authorized service engineer for brands such as <a href="//www.danube-international.com" target="_blank">Danube International (France)</a>, <a href="//ponyitaly.com" target="_blank">Pony (Italy)</a>, and <a href="//www.seko.com" target="_blank">SEKO (USA)</a>. I also worked with <a href="//www.electroluxgroup.com" target="_blank">Electrolux (Sweden)</a>, <a href="//www.maytag.com" target="_blank">Maytag (USA)</a>, <a href="//speedqueen.com" target="_blank">Speedqueen (USA)</a>, <a href="//hydrosystemsco.com" target="_blank">Hydrosystems (USA)</a>, <a href="//www.seitz24.com" target="_blank">SEITZ (Germany)</a>, and <a href="//sunrisegmpl.com" target="_blank">Sunrise (India)</a>.
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
            What can I do?
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

  .job-position {
    font-size: 1.2rem;
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
          text: "Scripts for scraping, processing, and storing data"
        },
        {
          text: "Highly dynamic and scalable web platforms"
        },
        {
          text: "Web apps and Android & iOS apps with React Native (Expo)"
        },
        {
          text: "Graphic / UI design"
        },
        {
          text:
            "Portable hardware interfacing with RFID, physical sensors, and Wi-Fi for IoT and much more."
        },
        {
          text: "Dynamic Accelerated Mobile Pages (AMP) generator for advanced SEO."
        },
        {
          text: "Website setup on AWS EC2 / dedicated hosting with a local database, as well as setup on shared hosting."
        },
        {
          text: "AWS Elastic Beanstalk (EBS) setup with a remote database, S3, load balancer, and CloudWatch."
        },
        {
          text: "GitLab server and runner setup for managing projects with CI/CD"
        },
        {
          text: "Self-hosted PHP WebSocket services in Laravel"
        }
      ]
    }
  },
  metaInfo() {
    return this.getOptimizedSeoMetaTags({
      title: "Hasil Paudyal | React Native & Web Developer, Electrical Engineer & Poet",
      description: "Portfolio of Hasil Paudyal: React Native (Expo) & web developer, electrical engineer, and poet from Nepal. Explore my work in app development, web platforms, electronics, and poetry. Contact me for collaboration.",
      image: "https://hasilpaudyal.com.np/Hasil-Shobha.png",
      keywords: "Hasil Paudyal, React Native, Web Developer, Electrical Engineer, Nepal, Portfolio, App Development, Poetry, Electronics, Expo, Laravel, AWS, Android, iOS",
      url: "https://hasilpaudyal.com.np"
    });
  },
  created() {
    /**
     * Injecting meta tags with vue-meta works on all pages except this
     * Vue meta works here if user comes from other routes
     * Debugging shows that computed variables of vue-meta are not set
     * Calling this.$meta.inject({getOptimizedSeoMetaTags}) throws a warning
     * that this app/component has no vue-meta configuration
     * 
     * Manually injecting the tags that vue-meta would inject
     */
    if(!document.getElementsByTagName('title').length) {
      document.getElementById('seoH1Title').innerText = "Hasil Paudyal | React Native & Web Developer, Electrical Engineer & Poet"
      document.getElementsByTagName('head')[0].insertAdjacentHTML( 'beforeend', `<title>Hasil Paudyal | React Native & Web Developer, Electrical Engineer & Poet</title>
      <meta data-vue-meta="1" property="og:type" content="website">
      <meta data-vue-meta="1" property="og:url" content="https://hasilpaudyal.com.np">
      <meta data-vue-meta="1" property="og:title" content="Hasil Paudyal | React Native & Web Developer, Electrical Engineer & Poet">
      <meta data-vue-meta="1" name="twitter:title" content="Hasil Paudyal | React Native & Web Developer, Electrical Engineer & Poet">
      <meta data-vue-meta="1" name="description" content="React Native (Expo) & web developer, electrical engineer, and poet from Nepal with 7+ years of experience. I build and publish Android & iOS apps, create scalable web platforms, and write technology-inspired poetry. Explore my work and get in touch.">
      <meta data-vue-meta="1" property="og:description" content="React Native (Expo) & web developer, electrical engineer, and poet from Nepal with 7+ years of experience. I build and publish Android & iOS apps, create scalable web platforms, and write technology-inspired poetry. Explore my work and get in touch.">
      <meta data-vue-meta="1" name="twitter:description" content="React Native (Expo) & web developer, electrical engineer, and poet from Nepal with 7+ years of experience. I build and publish Android & iOS apps, create scalable web platforms, and write technology-inspired poetry. Explore my work and get in touch.">
      <meta data-vue-meta="1" property="og:image" content="https://hasilpaudyal.com.np/Hasil-Shobha.png">
      <meta data-vue-meta="1" name="twitter:image" content="https://hasilpaudyal.com.np/Hasil-Shobha.png">`)
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