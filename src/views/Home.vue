<template>
  <div
    id="homepage"
    class="section"
  >
    <!-- Floating geometric shapes (decorative) -->
    <div
      class="shapes-bg"
      aria-hidden="true"
    >
      <div class="shape shape-circle s1" />
      <div class="shape shape-sq    s2" />
      <div class="shape shape-circle s3" />
      <div class="shape shape-sq    s4" />
      <div class="shape shape-circle s5" />
      <div class="shape shape-sq    s6" />
      <div class="shape shape-circle s7" />
      <div class="shape shape-circle s8" />
    </div>

    <b-row class="pt-4">
      <b-col
        sm="12"
        md="12"
      >
        <!-- Who am I? -->
        <b-card class="mb-4 section-card">
          <b-card-title>
            <i
              aria-hidden="true"
              class="material-icons"
            >sentiment_satisfied_alt</i>
            Who am I?
          </b-card-title>
          <b-card-text class="justified bio-text">
            {{ profile.bioFirstPerson }}
          </b-card-text>
        </b-card>

        <!-- Skills Rings -->
        <b-card class="mb-4 section-card skills-section">
          <b-card-title>
            <i
              aria-hidden="true"
              class="material-icons"
            >equalizer</i>
            Skills Overview
          </b-card-title>
          <b-row class="g-4 justify-content-center">
            <b-col
              v-for="skill in skills"
              :key="skill.label"
              cols="6"
              sm="4"
              md="2"
              class="text-center"
            >
              <div class="ring-wrap">
                <svg
                  viewBox="0 0 100 100"
                  class="ring-svg"
                >
                  <circle
                    class="ring-track"
                    cx="50"
                    cy="50"
                    r="40"
                  />
                  <circle
                    class="ring-fill"
                    cx="50"
                    cy="50"
                    r="40"
                    :style="{ strokeDashoffset: ringsAnimated ? skill.offset : 251.33 }"
                  />
                </svg>
                <div class="ring-inner">
                  <i
                    aria-hidden="true"
                    class="material-icons"
                  >{{ skill.icon }}</i>
                  <strong>{{ skill.percent }}%</strong>
                </div>
              </div>
              <p class="ring-label">
                {{ skill.label }}
              </p>
            </b-col>
          </b-row>
        </b-card>

        <!-- What do I do? -->
        <b-card class="mb-4 section-card">
          <b-card-title>
            <i
              aria-hidden="true"
              class="material-icons"
            >work</i>
            What do I do?
          </b-card-title>
          <div class="career-list">
            <div
              v-for="job in jobHistory"
              :key="job.title"
              class="career-item"
            >
              <div class="career-header">
                <a
                  v-b-tooltip.hover.right
                  :href="job.url"
                  target="_blank"
                  class="job-position"
                  :title="'Visit ' + job.company + '\'s website'"
                >{{ job.title }}</a>
                <span class="career-period">{{ job.period }}</span>
              </div>
              <div
                class="career-desc"
                v-html="job.desc"
              />
            </div>
          </div>
        </b-card>

        <!-- Highlighted Projects -->
        <b-card class="mb-4 section-card">
          <b-card-title>
            <i
              aria-hidden="true"
              class="material-icons"
            >all_inbox</i>
            Highlighted Projects
            <router-link
              class="float-end view-all-btn"
              to="/projects"
            >
              <i
                aria-hidden="true"
                class="material-icons"
              >arrow_forward</i>
            </router-link>
          </b-card-title>
          <b-row class="g-3">
            <b-col
              v-for="(project, idx) in highlightedProjects"
              v-show="project.type=='it'"
              :key="idx"
              sm="12"
              md="4"
            >
              <router-link
                class="card-link"
                :to="{name:'project',params:{id:project.id,urlSlug:project.urlSlug}}"
              >
                <b-card
                  :id="'project-'+idx"
                  class="mb-3 project-card"
                  :title="project.name"
                >
                  <div class="project-banner mb-3">
                    <span class="project-initial">{{ project.name.charAt(0) }}</span>
                  </div>
                  <h5 class="text-info">
                    <span
                      v-for="(tech,i) in project.technologies"
                      :key="i"
                    >
                      <b-img
                        lazy
                        class="mx-1"
                        width="32"
                        :src="'/'+tech.replace(/ /g,'').toLowerCase()+'-logo.png'"
                        :alt="tech+' logo'"
                      />
                    </span>
                  </h5>
                  <b-card-text>
                    {{ project.tagLine }}
                    <div
                      v-if="project.contributionLevels"
                      class="contribution mt-3"
                    >
                      <div
                        v-for="(level, area) in project.contributionLevels"
                        :key="area"
                        class="mb-1"
                      >
                        <div class="d-flex justify-content-between small">
                          <span>{{ area }}</span>
                          <span>{{ level }}%</span>
                        </div>
                        <b-progress
                          height="6px"
                          :max="100"
                        >
                          <b-progress-bar
                            :value="level"
                            :variant="getVariant(area)"
                          />
                        </b-progress>
                      </div>
                    </div>
                  </b-card-text>
                </b-card>
              </router-link>
              <b-tooltip
                :delay="{show:0,hide:0}"
                :target="'project-'+idx"
                placement="bottom"
                :title="getProjectPageDescription(project.id).slice(0,80)+'...'"
              />
            </b-col>
          </b-row>
        </b-card>

        <!-- What can I do? -->
        <b-card class="mb-4 section-card">
          <b-card-title>
            <i
              aria-hidden="true"
              class="material-icons"
            >help</i>
            What can I do?
          </b-card-title>
          <div class="capabilities-grid">
            <div
              v-for="item in whatCanIDo"
              :key="item.text"
              class="cap-item"
            >
              <i class="material-icons cap-icon">{{ item.icon }}</i>
              <span>{{ item.text }}</span>
            </div>
          </div>
        </b-card>

        <!-- Best Quotes -->
        <b-card class="mb-4 section-card">
          <b-card-title>
            <i
              aria-hidden="true"
              class="material-icons"
            >star</i>
            Best Quotes
            <router-link
              class="float-end view-all-btn"
              to="/quotes"
            >
              <i
                aria-hidden="true"
                class="material-icons"
              >arrow_forward</i>
            </router-link>
          </b-card-title>
          <b-row class="g-3">
            <b-col
              v-for="(quote, idx) in bestQuotes"
              :key="idx"
              sm="12"
              md="4"
            >
              <router-link
                class="card-link"
                :to="{name:'quote',params:{id:quote.id,urlSlug:quote.urlSlug}}"
              >
                <b-card class="quote-card mb-3">
                  <div class="quote-banner mb-3">
                    <i class="material-icons quote-banner-icon">format_quote</i>
                  </div>
                  <b-card-text>
                    <span
                      v-for="quoteLine in quote.quoteLines"
                      :key="quoteLine"
                    >{{ quoteLine }}<br></span>
                  </b-card-text>
                </b-card>
              </router-link>
            </b-col>
          </b-row>
        </b-card>

        <!-- Best Poems -->
        <b-card class="mb-4 section-card">
          <b-card-title>
            <i
              aria-hidden="true"
              class="material-icons"
            >favorite</i>
            Best Poems
            <router-link
              class="float-end view-all-btn"
              to="/poems"
            >
              <i
                aria-hidden="true"
                class="material-icons"
              >arrow_forward</i>
            </router-link>
          </b-card-title>
          <b-row class="g-3">
            <b-col
              v-for="(poem, idx) in bestPoems"
              :key="idx"
              sm="12"
              md="6"
            >
              <router-link
                class="card-link"
                :to="{name:'poem',params:{id:poem.id,urlSlug:poem.urlSlug}}"
              >
                <b-card class="poem-card text-center mb-3">
                  <div class="poem-banner mb-3">
                    <i class="material-icons poem-banner-icon">auto_stories</i>
                  </div>
                  <b-card-title>
                    <i class="material-icons poem-title-icon">auto_stories</i>
                    {{ poem.name }}
                  </b-card-title>
                  <b-card-text>
                    <p
                      v-for="(para, idxPara) in poem.poemParas"
                      :key="idxPara"
                    >
                      <span
                        v-for="(paraLine, idxLine) in para.paraLines"
                        :key="idxLine"
                      >
                        {{ paraLine }}<br>
                      </span>
                    </p>
                  </b-card-text>
                </b-card>
              </router-link>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { seoMixins } from "../mixins/seoMixins.js"
import { projectsMixins } from "../mixins/projectsMixins.js";
import { quotesMixins } from "../mixins/quotesMixins.js";
import { poemsMixins } from "../mixins/poemsMixins.js";
import { profile } from "../content/profile.js";

export default {
  mixins: [seoMixins, projectsMixins, quotesMixins, poemsMixins],
  data() {
    return {
      profile,
      ringsAnimated: false,
      highlightedProjects: [],
      bestQuotes: [],
      bestPoems: [],

      skills: [
        { label: 'Mobile Dev',       percent: 90, icon: 'smartphone', offset: 25.1 },
        { label: 'Web Dev',          percent: 85, icon: 'web',        offset: 37.7 },
        { label: 'EE & IoT',         percent: 75, icon: 'memory',     offset: 62.8 },
        { label: 'Cloud & DevOps',   percent: 80, icon: 'cloud',      offset: 50.3 },
        { label: 'Creative Writing', percent: 70, icon: 'create',     offset: 75.4 },
      ],

      // Career facts come from src/content/profile.js (single source of truth);
      // `story` is the first-person telling used only on this page.
      jobHistory: profile.career.map((c) => ({
        title: `${c.role} at ${c.company}`,
        company: c.companyLabel,
        url: c.companyUrl,
        period: c.periodLong,
        desc: c.story,
      })),

      whatCanIDo: [
        { text: "Bank & payment-gateway integrations over SOAP and JSON, with automated transaction tracking", icon: "account_balance" },
        { text: "Fraud-detection admin panels (e.g. flagging multiple signups from one IP)",       icon: "gpp_maybe"      },
        { text: "Reporting & analytics dashboards (sales + operational reports) for courier/logistics clients", icon: "analytics" },
        { text: "Content-managed (CMS) sites for non-technical clients — banners, copy, page sections", icon: "edit_note" },
        { text: "Highly dynamic and scalable web platforms",                                       icon: "web"            },
        { text: "Web and mobile apps (React Native / Expo) for Android and iOS",                   icon: "smartphone"     },
        { text: "Custom Expo native modules in Swift (iOS) and Kotlin (Android)",                  icon: "code"           },
        { text: "SIP/WebRTC voice calling via custom Expo native modules",                         icon: "call"           },
        { text: "Apple TV apps interacting with HomeKit devices",                                  icon: "tv"             },
        { text: "Serverless edge functions and APIs with Cloudflare Workers",                      icon: "cloud"          },
        { text: "Website setup on AWS EC2, dedicated hosting, or shared hosting",                  icon: "dns"            },
        { text: "AWS Elastic Beanstalk with S3, load balancer, CloudWatch, and Lambda",            icon: "hub"            },
        { text: "CI/CD pipelines with reproducible QA/staging environments",                       icon: "merge"          },
        { text: "Server automation — remote DB backups/restore, CRON jobs, and queues",            icon: "backup"         },
        { text: "Self-hosted local LLMs + workflow automation (e.g. Activepieces) for internal tasks", icon: "smart_toy"  },
        { text: "Self-hosted PHP WebSocket services in Laravel",                                   icon: "sync_alt"       },
        { text: "Container-based deployments with Podman and Nexus artifact registry",             icon: "layers"         },
        { text: "Portable hardware interfacing with RFID, sensors, and Wi-Fi for IoT",             icon: "memory"         },
        { text: "Scripts for scraping, processing, and storing data",                              icon: "storage"        },
        { text: "Graphic / UI design",                                                             icon: "palette"        },
      ]
    }
  },
  mounted() {
    // Trigger ring animation after a short delay so the transition is visible
    setTimeout(() => { this.ringsAnimated = true; }, 350);
  },
  created() {
    this.applySeo({
      title: "Hasil Paudyal | React Native & Web Developer, Electrical Engineer & Poet",
      description: "Portfolio of Hasil Paudyal: React Native (Expo) & web developer, app development manager, electrical engineer, and poet from Nepal. Explore my work in app development, web platforms, electronics, and poetry.",
      image: "https://hasilpaudyal.com.np/og-image.jpg",
      keywords: "Hasil Paudyal, React Native, Web Developer, App Development Manager, Electrical Engineer, Nepal, Portfolio, Expo, Laravel, AWS, Android, iOS, Cloudflare Workers",
      url: "https://hasilpaudyal.com.np",
      type: "profile",
      schema: this.seoPerson()
    });
    this.highlightedProjects = this.getAllProjects().filter(p => [12, 16, 23].includes(p.id));
    this.bestQuotes = this.getAllquotes().filter(q => [2, 4, 9].includes(q.id));
    this.bestPoems = this.getAllpoems().filter(p => [3, 8].includes(p.id));
  }
}
</script>

<style lang="scss">
#homepage {
  min-height: 90vh;
  position: relative;

  // --- Floating shapes ---
  .shapes-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;

    .shape {
      position: absolute;
      background-color: var(--global-primary-color);
      will-change: transform;
    }
    .shape-circle { border-radius: 50%; }
    .shape-sq     { border-radius: 8px; }

    .s1 { width: 72px;  height: 72px;  top:  3%; right:  2%; opacity: 0.07; animation: flt1 9s  ease-in-out infinite; }
    .s2 { width: 40px;  height: 40px;  top:  9%; left:   1%; opacity: 0.05; animation: flt2 7s  ease-in-out infinite; }
    .s3 { width: 110px; height: 110px; top: 20%; right: -1%; opacity: 0.05; animation: flt3 12s ease-in-out infinite; }
    .s4 { width: 36px;  height: 36px;  top: 36%; left:   2%; opacity: 0.07; animation: flt1 6s  ease-in-out infinite reverse; }
    .s5 { width: 64px;  height: 64px;  top: 50%; right:  1%; opacity: 0.05; animation: flt2 10s ease-in-out infinite reverse; }
    .s6 { width: 80px;  height: 80px;  top: 64%; left:  -1%; opacity: 0.06; animation: flt3 8s  ease-in-out infinite; }
    .s7 { width: 44px;  height: 44px;  top: 78%; right:  3%; opacity: 0.07; animation: flt1 11s ease-in-out infinite; }
    .s8 { width: 56px;  height: 56px;  top: 90%; left:   5%; opacity: 0.05; animation: flt2 9s  ease-in-out infinite reverse; }

    @media (max-width: 575px) { display: none; }
  }

  @keyframes flt1 {
    0%, 100% { transform: translateY(0)    rotate(0deg);  }
    50%       { transform: translateY(-18px) rotate(12deg); }
  }
  @keyframes flt2 {
    0%, 100% { transform: translateY(0)   rotate(20deg); }
    50%       { transform: translateY(14px) rotate(33deg); }
  }
  @keyframes flt3 {
    0%, 100% { transform: translateX(0)   rotate(0deg);  }
    50%       { transform: translateX(13px) rotate(-9deg); }
  }

  // Content sits above shapes
  > .row { position: relative; z-index: 1; }

  // --- Section cards ---
  .section-card > .card-body {
    padding: 1.75rem 2rem;
    @media (max-width: 575px) { padding: 1.25rem 1rem; }
  }

  .card {
    border: none;
    box-shadow: 0 0 12px 0 var(--global-shadow-color);
    background-color: var(--global-card-bg);

    .list-group-item {
      background-color: inherit;
      color: var(--global-primary-color);
    }

    .project-card, .quote-card, .poem-card {
      background-color: inherit;
      box-shadow: none;
      .card-title { color: var(--global-primary-color); }
      :hover {
        transform: scale(1.04);
        cursor: url('/cursor-pointer.png'), pointer;
        transition: 0.33s all;
      }
    }
  }

  // --- Project cover placeholder (gradient banner with project initial) ---
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

  .quote-banner, .poem-banner {
    height: 90px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 120px; height: 120px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.07);
      top: -30px; right: -15px;
    }
    &::after {
      content: '';
      position: absolute;
      width: 80px; height: 80px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      bottom: -20px; left: 10px;
    }
  }

  .quote-banner {
    background: linear-gradient(135deg, var(--global-secondary-color), var(--global-primary-color));
    .quote-banner-icon {
      font-size: 64px;
      color: rgba(255, 255, 255, 0.25);
      position: relative; z-index: 1;
    }
  }

  .poem-banner {
    background: linear-gradient(315deg, var(--global-secondary-color), var(--global-primary-color));
    .poem-banner-icon {
      font-size: 64px;
      color: rgba(255, 255, 255, 0.25);
      position: relative; z-index: 1;
    }
  }

  .poem-title-icon {
    font-size: 1rem;
    vertical-align: text-bottom;
    margin-right: 3px;
  }

  .card-title {
    color: var(--global-secondary-color);
    margin-bottom: 1.25rem;
    .material-icons { vertical-align: top; }
  }

  .card-text {
    color: var(--global-primary-color);
    span { font-size: 12px; font-weight: 500; }
  }

  .justified { text-align: justify; }
  .bio-text  { font-size: 1.05rem; line-height: 1.85; }

  // Arrow button replacing "View all" text
  .view-all-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: var(--global-primary-color);
    color: var(--global-bg) !important;
    text-decoration: none !important;
    transition: transform 0.2s, background-color 0.2s;
    margin-top: 1px;

    .material-icons { font-size: 1rem; padding: 0; }

    &:hover {
      transform: translateX(3px);
      background-color: var(--global-secondary-color);
    }
  }

  // --- Skill rings ---
  .skills-section {
    .ring-wrap {
      position: relative;
      width: 88px;
      height: 88px;
      margin: 0 auto;
    }

    .ring-svg {
      width: 88px;
      height: 88px;
      transform: rotate(-90deg);

      .ring-track {
        fill: none;
        stroke: var(--global-primary-color);
        stroke-width: 6;
        opacity: 0.13;
      }
      .ring-fill {
        fill: none;
        stroke: var(--global-primary-color);
        stroke-width: 6;
        stroke-linecap: round;
        stroke-dasharray: 251.33;
        stroke-dashoffset: 251.33;
        transition: stroke-dashoffset 1.6s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: stroke-dashoffset;
      }
    }

    .ring-inner {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;

      .material-icons { font-size: 1.1rem; color: var(--global-primary-color); }
      strong          { font-size: 0.7rem; font-weight: 700; color: var(--global-primary-color); }
    }

    .ring-label {
      font-size: 0.72rem;
      font-weight: 600;
      color: var(--global-secondary-color);
      margin: 0.45rem 0 0;
      line-height: 1.3;
    }
  }

  // --- Career list ---
  .career-list {
    .career-item {
      padding: 1.25rem 0;
      border-bottom: 1px solid var(--bs-border-color-translucent);
      &:first-child { padding-top: 0; }
      &:last-child  { border-bottom: none; padding-bottom: 0; }
    }

    .career-header {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 0.5rem 1rem;
      margin-bottom: 0.5rem;
    }

    .career-period {
      font-size: 0.8rem;
      color: var(--global-secondary-color);
      opacity: 0.8;
      white-space: nowrap;
    }

    .career-desc {
      color: var(--global-primary-color);
      font-size: 0.95rem;
      line-height: 1.75;
      a { color: var(--global-secondary-color); }
    }
  }

  .job-position {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--global-secondary-color) !important;
    text-decoration: none;
    &:hover { text-decoration: underline; color: var(--global-primary-color) !important; }
  }

  // --- Capabilities grid ---
  .capabilities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 0.75rem;

    @media (max-width: 575px) { grid-template-columns: 1fr; }

    .cap-item {
      display: flex;
      align-items: flex-start;
      gap: 0.65rem;
      padding: 0.8rem 1rem;
      border-radius: 10px;
      border: 1px solid var(--bs-border-color-translucent);
      transition: box-shadow 0.22s, transform 0.22s, border-color 0.22s;

      &:hover {
        border-color: var(--global-primary-color);
        box-shadow: 0 4px 14px var(--global-shadow-color);
        transform: translateY(-2px);
      }

      .cap-icon {
        font-size: 1.1rem;
        color: var(--global-primary-color);
        flex-shrink: 0;
        margin-top: 1px;
      }
      span {
        font-size: 0.87rem;
        color: var(--global-primary-color);
        line-height: 1.45;
      }
    }
  }
}
</style>
