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
              >{{list.text}}
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

export default {
  mixins: [projectsMixins],
  data() {
    return {
      skills: [
        {
          title: "What can I build / devlop...",
          cols: 8,
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
            }
          ]
        },
        {
          title: "OS",
          cols: 4,
          lists: [
            {
              text: "Linux"
            },
            {
              text: "Windows"
            },
            {
              text: "macOS"
            }
          ]
        },
        {
          title: "Tools I am familiar with",
          cols: 6,
          lists: [
            {
              text: "Photoshop"
            },
            {
              text: "XD"
            },
            {
              text: "AutoCAD"
            },
            {
              text: "Android and Visual Studio"
            },
            {
              text: "Primavera"
            },
            {
              text: "MiPower"
            }
      ]
      }
      ]
    };
  },
  created() {
    document.title = "Hire Hasil | Hasil's Personal Site";
    document.querySelector('meta[name="description"]')
    .setAttribute('content', "Let's team up and create something amazing. Know more about top listed web developer, electronics and electrical projects leader.");
    
    let technologies = [];
    this.getProjectTechnologies().forEach(technology => {
    technologies.push({
      text: technology['tech'],
      count: technology['projCount'],
    });
    });
    this.skills.push(
        {
          title: "Hardware/Software Platforms",
          cols: 6,
          lists: technologies
        });
  }
};
</script>