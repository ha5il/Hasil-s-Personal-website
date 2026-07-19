<template>
  <div
    id="project"
    class="mt-5"
  >
    <b-breadcrumb :items="breadcrumbItems" />
    <b-row>
      <b-col cols="12">
        <b-card>
          <div class="card-title">
            {{ project.name }}
            <b-link
              v-show="project.website"
              v-b-tooltip.hover.right
              :href="project.website"
              target="_blank"
              title="Visit Website"
            >
              <i
                aria-hidden="true"
                class="material-icons"
              >launch</i>
            </b-link>
            <b-badge
              v-show="project.sourceCode"
              pill
              :href="project.sourceCode"
              variant="info"
              target="_blank"
              aria-label="View Source Code"
            >
              Source Code
              <i
                aria-hidden="true"
                class="material-icons"
              >launch</i>
            </b-badge>
          </div>
          <div class="project-detail-banner mb-3">
            <span class="project-initial">{{ project.name.charAt(0) }}</span>
          </div>
          <div
            v-if="project.contributionLevels"
            class="contribution mb-3"
          >
            <h6 class="mb-1">
              My contribution
              <small class="opacity-75">— share of each area's work done by me</small>
            </h6>
            <div
              v-for="(level, area) in project.contributionLevels"
              :key="area"
              class="mb-2"
            >
              <div class="d-flex justify-content-between small">
                <span>{{ area }}</span>
                <span>{{ level }}%</span>
              </div>
              <b-progress
                height="8px"
                :max="100"
              >
                <b-progress-bar
                  :value="level"
                  :variant="getVariant(area)"
                />
              </b-progress>
            </div>
          </div>
          <b-card-text
            v-for="(detail, idx) in project.details"
            :key="idx"
          >
            <h5 class="text-info">
              <i
                aria-hidden="true"
                class="material-icons"
              >{{ detail.titleIcon }}</i>
              {{ detail.title }}
            </h5>
            <p
              v-for="(para, idxPara) in detail.paragraphs"
              v-show="detail.paragraphs"
              :key="idxPara"
            >
              {{ para.text }}
            </p>
            <b-list-group
              v-show="detail.lists"
              flush
            >
              <b-list-group-item
                v-for="(list, idxList) in detail.lists"
                :key="idxList"
                class="d-flex justify-content-between align-items-center"
              >
                {{ list.text }}
                <b-badge
                  :variant="getVariant(list.badge)"
                  pill
                >
                  {{ list.badge }}
                </b-badge>
              </b-list-group-item>
            </b-list-group>
          </b-card-text>
        </b-card>
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
      project: null,
      breadcrumbItems: null,
    };
  },
  created() {
    const id = this.$route.params.id;
    let currentPageActualUrlSlug = this.getProjectUrlSlug(id);
    if (!currentPageActualUrlSlug) {
      this.$router.push({ name: "projects" });
      return;
    }
    if (currentPageActualUrlSlug != this.$route.params.urlSlug) {
      this.$router.push({
        name: "project",
        params: { id, urlSlug: currentPageActualUrlSlug }
      });
    }
    this.project = this.getProjectDetails(id);
    const path = `/project/${id}/${currentPageActualUrlSlug}`;
    this.applySeo({
      title: this.getProjectPageTitle(id),
      description: this.getProjectPageDescription(id),
      // Per-project OG card, generated into dist/og/ by scripts/generate-og-images.mjs
      image: `/og/project-${id}.jpg`,
      type: "article",
      schema: [
        this.seoCreativeWork({
          name: this.project.name,
          description: this.getProjectPageDescription(id),
          path,
          type: this.project.type === "it" ? "SoftwareApplication" : "CreativeWork",
          extra: {
            keywords: this.project.technologies.join(", "),
            ...(this.project.type === "it" ? { applicationCategory: "WebApplication" } : {}),
            ...(this.project.website ? { sameAs: "https:" + this.project.website } : {})
          }
        }),
        this.seoBreadcrumb([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: this.project.name, path }
        ])
      ]
    });
    this.breadcrumbItems = [
      { text: 'Projects', to: { name: 'projects' } },
      { text: this.project.name, active: true },
    ];
  }
};
</script>

<style lang="scss">
#project {
  min-height: 90vh;

  @media (max-width: 576px) {
    margin-top: 85px !important;
  }

  .project-detail-banner {
    height: 200px;
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
      width: 260px;
      height: 260px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.07);
      top: -80px;
      right: -40px;
    }

    &::after {
      content: '';
      position: absolute;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      bottom: -60px;
      left: 20px;
    }

    .project-initial {
      font-size: 130px;
      font-weight: 900;
      color: rgba(255, 255, 255, 0.18);
      letter-spacing: -4px;
      user-select: none;
      position: relative;
      z-index: 1;
    }
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

    .list-group-item {
      background-color: inherit;
    }
  }

  .breadcrumb a {
    color: #17a2b8;
  }

  .progress {
    border-radius: 10px;
    overflow: hidden;
  }

  .progress-bar {
    font-size: 0.8rem;
    font-weight: 600;
    color: #fff;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.45);
    display: flex !important;
    flex-direction: row !important;
    align-items: center;
    justify-content: center;
    gap: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2;

    .progress-percentage {
      font-weight: 700;
      opacity: 0.9;
      flex-shrink: 0;
    }
  }
}
</style>
