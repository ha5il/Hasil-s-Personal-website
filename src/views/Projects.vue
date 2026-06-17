<template>
  <div
    id="projects"
    class="mt-5"
  >
    <h4 class="p-3">
      IT Projects
    </h4>
    <b-row>
      <b-col
        v-for="(project, idx) in projects"
        v-show="project.type=='it'"
        :key="idx"
        sm="12"
        md="4"
      >
        <div
          style="cursor: pointer"
          @click="$router.push({ name: 'project', params: { id: project.id, urlSlug: project.urlSlug } })"
        >
          <b-card
            :id="'it-project-'+project.id"
            class="mb-3"
            :title="project.name"
          >
            <div class="project-banner mb-3">
              <span class="project-initial">{{ project.name.charAt(0) }}</span>
            </div>
            <h5 class="text-info">
              <span
                v-for="(tech,idx) in project.technologies"
                :key="idx"
              >
                <b-img
                  class="mx-1"
                  width="32"
                  :src="'/'+tech.replace(/ /g,'').toLowerCase()+'-logo.png'"
                  :alt="tech+' logo'"
                />
              </span>
            </h5>
            <b-card-text>
              {{ project.tagLine }}
              <b-progress
                v-show="project.contributionLevels"
                class="mt-3"
                show-value
              >
                <b-progress-bar
                  v-for="(level, idxLevel) in project.contributionLevels"
                  :key="idxLevel"
                  :value="level"
                  :variant="getVariant(idxLevel)"
                >
                  {{ idxLevel }}
                </b-progress-bar>
              </b-progress>
            </b-card-text>
          </b-card>
        </div>
        <b-tooltip
          :delay="{show:0,hide:0}"
          :target="'it-project-'+project.id"
          placement="bottom"
          :title="getProjectPageDescription(project.id).slice(0,80)+'...'"
        />
      </b-col>
    </b-row>
    <h4 class="p-3">
      Electrical &amp; Electronics Projects
    </h4>
    <b-row>
      <b-col
        v-for="(project, idx) in projects"
        v-show="project.type=='ee'"
        :key="idx"
        cols="12"
      >
        <div
          style="cursor: pointer"
          @click="$router.push({ name: 'project', params: { id: project.id, urlSlug: project.urlSlug } })"
        >
          <b-card
            :id="'ee-project-'+project.id"
            class="mb-3"
            :title="project.name"
          >
            <h5 class="text-info">
              <span
                v-for="(tech,idx) in project.technologies"
                :key="idx"
              >
                <b-img
                  class="mx-1"
                  width="32"
                  :src="'/'+tech.replace(/ /g,'').toLowerCase()+'-logo.png'"
                  :alt="tech+' logo'"
                />
              </span>
            </h5>
            <b-card-text>
              {{ project.tagLine }}
              <b-progress
                v-show="project.contributionLevels"
                class="mt-3"
                show-value
              >
                <b-progress-bar
                  v-for="(level, idxLevel) in project.contributionLevels"
                  :key="idxLevel"
                  :value="level"
                  :variant="getVariant(idxLevel)"
                >
                  {{ idxLevel }}
                </b-progress-bar>
              </b-progress>
            </b-card-text>
          </b-card>
        </div>
        <b-tooltip
          :delay="{show:0,hide:0}"
          :target="'ee-project-'+project.id"
          placement="bottom"
          :title="getProjectPageDescription(project.id).slice(0,80)+'...'"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { projectsMixins } from "../mixins/projectsMixins.js";
import { seoMixins } from "../mixins/seoMixins.js";
export default {
  mixins: [projectsMixins, seoMixins],
  data() {
    return {
      projects: null
    };
  },
  created() {
    this.applySeo({
      title: "Projects | Hasil Paudyal Portfolio",
      description: "Explore a curated list of Electrical, Electronics, and IT projects led by Hasil Paudyal and his team. Discover innovative solutions in web development, app development, and hardware integration.",
      image: "https://hasilpaudyal.com.np/og-image.jpg",
      keywords: "Hasil Paudyal, Projects, Electrical & Electronics Engineering, IT, Web Development, App Development, Laravel, Vuejs, Arduino, AWS, Portfolio",
      schema: this.seoBreadcrumb([
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" }
      ])
    });
    this.projects = this.getAllProjects();
  }
};
</script>

<style lang="scss">
#projects {
  min-height: 90vh;

  @media (max-width: 576px) {
    margin-top: 85px !important;
  }

  .project-banner {
    height: 140px;
    background: linear-gradient(135deg, var(--global-primary-color), var(--global-secondary-color));
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 160px;
      height: 160px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.08);
      top: -40px;
      right: -20px;
    }

    &::after {
      content: '';
      position: absolute;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.06);
      bottom: -30px;
      left: 10px;
    }

    .project-initial {
      font-size: 80px;
      font-weight: 900;
      color: rgba(255, 255, 255, 0.2);
      letter-spacing: -2px;
      user-select: none;
      position: relative;
      z-index: 1;
    }
  }

  .card {
    border: none;
    box-shadow: 0px 0px 10px 0px var(--global-shadow-color);
    transition: 0.33s all;
    background-color: var(--global-card-bg);

    h5 {
      font-size: 12px;
      font-weight: 500;
    }
  }

  .card:hover {
    transform: scale(1.04);
    cursor: url('/cursor-pointer.png'), pointer;;
  }

  .card-title {
    color: var(--global-secondary-color);
    font-weight: normal;
  }

  .card-text {
    color: var(--global-primary-color);
  }

  .project-description {
    font-size: 12px;
    opacity: 0.7;
    line-height: 1.5;
  }

  h4 {
    color: var(--global-primary-color);
    font-weight: bold;
  }
}
</style>
