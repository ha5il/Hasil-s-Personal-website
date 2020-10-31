<template>
  <div id="hire-hasil" class="mt-5">
    <h4>Interested in teaming up with me?</h4>
    <b-row>
      <b-col sm="12" :md="skillData.cols" v-for="(skillData, idx) in skills" :key="idx">
        <b-card class="mb-3" :title="skillData.title">
          <b-card-text>
            <b-list-group flush>
              <b-list-group-item
                v-for="(list, idxList) in skillData.lists"
                :key="idxList"
                class="d-flex justify-content-between align-items-center"
              >
                <b-img
                  v-if="list.icon"
                  class="mx-1"
                  width="32"
                  :src="list.icon"
                  :alt="list.text+' logo'"
                ></b-img>
                {{list.text}}
                <b-badge v-show="list.count" pill>{{list.count}}</b-badge>              
              </b-list-group-item>
            </b-list-group>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss">
#hire-hasil {
  min-height: 90vh;

  @media (max-width: 576px) {
    margin-top: 85px !important;
  }

  .card {
    border: none;
    box-shadow: 0px 0px 10px 0px var(--global-shadow-color);
    background-color: var(--global-card-bg);

    .list-group-item {
      background-color: inherit;
    }
  }

  .card-title {
    color: var(--global-secondary-color);
    font-weight: normal;
  }

  .card-text {
    color: var(--global-primary-color);
  }

  h4 {
    color: var(--global-primary-color);
    font-weight: bold;
  }
}
</style>


<script>
import { projectsMixins } from "../mixins/projectsMixins.js";
import { htmlHeadMixins } from "../mixins/seoMixins.js";

export default {
  mixins: [ projectsMixins, htmlHeadMixins ],
  metaInfo() {
    return this.getOptimizedSeoMetaTags({
      title: "Hire Hasil | Hasil's Personal Site",
      description: "Let's team up and create something amazing. Know more about top listed web developer, electronics and electrical projects leader.",
      image: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20Graduation%20New%20Horizon%20College%20of%20Engineering.jpg?alt=media"
    })
  },
  data() {
    return {
      skills: [
        {
          title: "What can I build / devlop...",
          cols: 7,
          lists: [
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
                "Portabe hardware interfacing RFID, physical sensors, Wifi for IOT and muchmore."
            },
            {
              text: "Dynamic Accelerated mobile page generator for advance SEO."
            },
            {
              text: "Website setup on AWS ec2/dedicated hosting with local database. Also website setup on shared hosting."
            },
            {
              text: "AWS EBS setup with remote database, s3, locadbalancer and cloudwatch"
            },
            {
              text: "Gitlab server, runner setup for managing projects with CI/CD"
            },
            {
              text: "Self hosted PHP Socket in Laravel"
            }
          ]
        },
        {
          title: "Tools I am familiar with",
          cols: 6,
          lists: [
            {
              text: "Adobe XD"
            },
            {
              text: "Android Studio"
            },
            {
              text: "AutoCAD"
            },
            {
              text: "MiPower"
            },
            {
              text: "Photoshop"
            },
            {
              text: "Primavera"
            },
            {
              text: "Visual Studio"
            }
      ]
      }
      ]
    };
  },
  created() {
    let technologies = [];
    this.getProjectTechnologies().forEach(technology => {
    technologies.push({
      text: technology['tech'],
      count: technology['projCount'],
      icon: '/'+technology['tech'].replace(/ /g,'').toLowerCase()+'-logo.png',
    });
    });
    this.skills.splice(1, 0, {
      title: "Hardware/Software Platforms",
      cols: 5,
      lists: _.orderBy(technologies, ['count', 'text'], ['desc', 'asc'])
    })
  }
};
</script>