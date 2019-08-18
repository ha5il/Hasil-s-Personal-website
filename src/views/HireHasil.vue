<template>
  <div id="hire-hasil" class="mt-5">
    <h4>Interested in teaming up with me?</h4>
    <b-row>
      <b-col cols="6" v-for="(skillData, idx) in skills" :key="idx">
        <b-card class="mb-3" :title="skillData.title">
          <b-card-text>
            <b-list-group flush>
              <b-list-group-item
                v-for="(list, idxList) in skillData.lists"
                :key="idxList"
                class="d-flex justify-content-between align-items-center"
              >
                {{list.text}}
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
}
</style>


<script>

export default {
  data() {
    return {
      skills: [
        {
            title: 'OS',
            lists:
                [{
                    text: 'Linux'
                }, {
                    text: 'Windows'
                }, {
                    text: 'macOS'
                }],
        },{
            title: 'Hardware/Software Platforms',
            lists:
                [{
                    text: 'Laravel'
                }, {
                    text: 'Arduino'
                }, {
                    text: 'October CMS'
                }, {
                    text: 'Vuejs'
                }],
        },{
            title: 'Tools I am familiar with',
            lists:
                [{
                    text: 'Photoshop'
                },{
                    text: 'XD'
                }, {
                    text: 'AutoCAD'
                }, {
                    text: 'Android and Visual Studio'
                }, {
                    text: 'Primavera'
                }, {
                    text: 'MiPower'
                }],
        },{
            title: 'What can I build / devlop...',
            lists:
                [{
                    text: 'Script for scrapping, processing and storing data'
                }, {
                    text: 'Highly Dynamic and Scalable web platform'
                }, {
                    text: 'Webapp and Android App'
                }, {
                    text: 'Graphic / UI design'
                }, {
                    text: 'Portabe hardware interfacing RFID, physical sensors, Wifi for IOT and muchmore.'
                }],
        },
      ]
    }
  }
}
</script>