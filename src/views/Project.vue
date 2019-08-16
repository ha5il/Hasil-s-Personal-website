<template>
  <div id="project" class="mt-5">
    <b-row>
      <b-col cols="12">
        <b-card>
          <div class="card-title">
            {{project.name}}
            <b-link v-show="project.website" :href="project.website" target="_blank">
              <i class="material-icons">launch</i>
            </b-link>
          </div>
          <b-progress class="mb-3" v-show="project.contributionLevels" show-value>
            <b-progress-bar
              v-for="(level, idxLevel) in project.contributionLevels"
              :key="idxLevel"
              :value="level"
              :variant="getVariant(idxLevel)"
            >{{idxLevel}}</b-progress-bar>
          </b-progress>
          <b-card-text v-for="(detail, idx) in project.details" :key="idx">
            <h5 class="text-info">
              <i class="material-icons">{{detail.titleIcon}}</i>
              {{detail.title}}
            </h5>
            <p
              v-show="detail.paragraphs"
              v-for="(para, idxPara) in detail.paragraphs"
              :key="idxPara"
            >{{para.text}}</p>
            <b-list-group v-show="detail.lists">
              <b-list-group-item
                v-for="(list, idxList) in detail.lists"
                :key="idxList"
                class="d-flex justify-content-between align-items-center"
              >
                {{list.text}}
                <b-badge :variant="getVariant(list.category)" pill>{{list.category}}</b-badge>
              </b-list-group-item>
            </b-list-group>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss">
#project {
  min-height: 90vh;

  .card {
    border: none;
    box-shadow: 0px 0px 10px 0px #d0d0d0;

    .card-title {
      color: #e6a410;
      font-weight: normal;
      font-size: 24px;

      a {
        color: #e6a410;
      }

      .material-icons {
        vertical-align: middle;
      }
    }

    .card-text {
      color: #6e161c;

      p {
        text-align: justify;
      }

      h5 {
        font-size: 16px;
      }

      .material-icons {
        vertical-align: bottom;
      }
    }
  }
}
</style>

<script>
import { projectsMixins } from "../mixins/projectsMixins.js";

import { serverBus } from "../main";
export default {
  mixins: [projectsMixins],
  data() {
    return {
      project: null
    };
  },
  created() {
    let currentPageActualUrlSlug = this.getProjectUrlSlug(
      this.$router.history.current.params.id
    );
    if (!currentPageActualUrlSlug) {
      // 404
      this.$router.push("/");
    }
    if (
      currentPageActualUrlSlug != this.$router.history.current.params.urlSlug
    ) {
      // slug mismatch
      this.$router.push({
        name: "project",
        params: {
          id: this.$router.history.current.params.id,
          urlSlug: currentPageActualUrlSlug
        }
      });
    }
    this.project = this.getProjectDetails(
      this.$router.history.current.params.id
    );
  }
};
</script>