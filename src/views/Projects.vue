<template>
  <div id="projects" class="mt-5">
    <div>
      <!-- <b-carousel id="carousel-fade" fade indicators controls img-width="1024" img-height="480">
        <b-carousel-slide
          v-for="(slide, idx) in projects"
          v-if="slide.type=='it'"
          :key="idx"
          :caption="slide.name"
          :text="slide.tagLine"
          :img-src="slide.coverImage"
        ></b-carousel-slide>
      </b-carousel> -->
    </div>
    <h4 class="p-3">IT Projects</h4>
    <b-row>
      <b-col sm="12" md="6" v-for="(project, idx) in projects" v-if="project.type=='it'" :key="idx">
        <router-link
          :to="{ name: 'project', params: { id: project.id, urlSlug: project.urlSlug }}"
          tag="div"
        >
          <b-card :id="'project-'+idx" class="mb-3" :title="project.name">
            <h5 class="text-info">
              <span v-for="(tech,idx) in project.technologies" :key="idx">
                <span v-if="(idx+1)==project.technologies.length">{{tech}}</span>
                <span v-else>{{tech}} | </span>
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
        <b-tooltip :target="'project-'+idx" placement="bottom" :title="getProjectPageDescription(project.id)+'...'"></b-tooltip>
      </b-col>
    </b-row>
    <h4 class="p-3">Electrical &amp; Electronics Projects</h4>
    <b-row>
      <b-col cols="12" v-for="(project, idx) in projects" v-if="project.type=='ee'" :key="idx">
        <router-link
          :to="{ name: 'project', params: { id: project.id, urlSlug: project.urlSlug }}"
          tag="div"
        >
        <b-card class="mb-3" :title="project.name">
          <h5 class="text-info">
            <span v-for="(tech,idx) in project.technologies" :key="idx">
              <span v-if="(idx+1)==project.technologies.length">{{tech}}</span>
              <span v-else>{{tech}} | </span>
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
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss">
#projects {
  min-height: 90vh;

  @media (max-width: 576px) {
    margin-top: 85px !important;
  }

  .card {
    border: none;
    box-shadow: 0px 0px 10px 0px #d0d0d0;
    transition: 0.33s all;

    h5 {
      font-size: 12px;
      font-weight: 500;
    }
  }

  .card:hover {
    transform: scale(1.04);
    cursor: pointer;
  }

  .card-title {
    color: #e6a410;
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
import { projectsMixins } from "../mixins/projectsMixins.js";

export default {
  mixins: [projectsMixins],
  data() {
    return {
      projects: null
    };
  },
  created() {
    document.title = "Projects | Hasil's Personal Site";
    document.querySelector('meta[name="description"]')
    .setAttribute('content', "List of Electrical, Electronics and IT projects by Hasil and his team. Know more to team up and create something amazing...");
    this.projects = this.getAllProjects();
  }
};
</script>