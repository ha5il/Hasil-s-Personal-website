<template>
  <div id="project" class="mt-5">
    <b-breadcrumb :items="breadcrumbItems"></b-breadcrumb>
    <b-row>
      <b-col cols="12">
        <b-card>
          <div class="card-title">
            {{project.name}}
            <b-link
              v-show="project.website"
              :href="project.website"
              target="_blank"
              v-b-tooltip.hover.right
              title="Visit Website"
            >
              <i class="material-icons">launch</i>
            </b-link>
            <b-badge
              v-show="project.sourceCode"
              pill
              :href="project.sourceCode"
              variant="info"
              target="_blank"
            >
              Source Code
              <i class="material-icons">launch</i>
            </b-badge>
          </div>
          <b-progress class="mb-3" height="40px" v-show="project.contributionLevels" show-value>
            <b-progress-bar
              v-for="(level, idxLevel) in project.contributionLevels"
              :key="idxLevel"
              :value="level"
              :variant="getVariant(idxLevel)"
            >
              {{idxLevel}}
              <strong>{{level}}%</strong>
            </b-progress-bar>
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
            <b-list-group v-show="detail.lists" flush>
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

  @media (max-width: 576px) {
    margin-top: 85px !important;
  }

  .card {
    border: none;
    box-shadow: 0px 0px 10px 0px var(--global-shadow-color);
    background-color: var(--global-card-bg);
  
    .card-title {
      color: var(--global-secondary-color);
      font-weight: normal;
      font-size: 24px;

      a {
        color: var(--global-secondary-color);
      }

      .material-icons {
        vertical-align: middle;
      }

      .badge {
        float: right;
        font-size: 50%;
        color: #ffffff;
        margin-top: 10px;

        .material-icons {
          font-size: 100%;
          margin-left: 2px;
          vertical-align: bottom;
        }
      }
    }

    .card-text {
      color: var(--global-primary-color);

      p {
        text-align: justify;
      }

      h5 {
        font-size: 16px;
        padding: 8px 0px;
      }

      .material-icons {
        vertical-align: bottom;
      }
    }
  }

  .breadcrumb a {
    color: #17a2b8;
  }
}
</style>

<script>
import { projectsMixins } from "../mixins/projectsMixins.js";
import { schemaMixins } from "../mixins/schemaMixins.js";

export default {
  mixins: [projectsMixins, schemaMixins],
  data() {
    return {
      project: null,
      breadcrumbItems: null,
    };
  },
  created() {
    let currentPageActualUrlSlug = this.getProjectUrlSlug(
      this.$router.history.current.params.id
    );
    if (!currentPageActualUrlSlug) {
      // 404
      this.$router.push({ name: "projects" });
      return;
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
    document.title = this.getProjectPageTitle(
      this.$router.history.current.params.id
    );
    document.querySelector('meta[name="description"]')
    .setAttribute('content',this.getProjectPageDescription(
      this.$router.history.current.params.id
    ));
    this.project = this.getProjectDetails(
      this.$router.history.current.params.id
    );
    this.injectSchemaJSON(`
    {
      "@context": "http://schema.org",
      "@type": "CreativeWork",
      "name": "`+ this.project.name +`"
    }
    `);
    this.breadcrumbItems = [
      {
        text: 'Projects',
        to: { name: 'projects' }
      },
      {
        text: this.project.name,
        active: true,
      },
    ];
  },
  beforeRouteLeave(to, from, next) {
    this.clearSchemaJSON();
    next();
  }
};
</script>