<template>
  <div id="hire-hasil" class="mt-5">

    <!-- Hero -->
    <b-card class="hero-card mb-4">
      <div class="hero-inner">
        <div class="hero-avatar d-none d-md-flex">
          <img src="/Hasil-Shobha.png" alt="Hasil Paudyal" />
        </div>
        <div class="hero-content">
          <h2 class="hero-name">Hasil Paudyal</h2>
          <p class="hero-tagline">Engineer &bull; Creator &bull; Leader</p>
          <p class="hero-bio">
            From designing electrical systems and repairing international hardware in India,
            to building backend systems and APIs and leading app development across mobile
            and cloud platforms — and writing poetry in between. I bring a rare combination
            of technical depth, creative thinking, and real-world problem-solving.
          </p>
          <div class="hero-links">
            <b-link href="//np.linkedin.com/in/hasil" target="_blank" class="hero-link">
              <img v-b-tooltip.hover.bottom title="Connect on LinkedIn" src="/iconledincon.svg" width="28" />
              LinkedIn
            </b-link>
            <b-link href="//facebook.com/hasill" target="_blank" class="hero-link">
              <img v-b-tooltip.hover.bottom title="Connect on Facebook" src="/iconfbcon.svg" width="28" />
              Facebook
            </b-link>
          </div>
        </div>
      </div>
    </b-card>

    <!-- Dimensions -->
    <h4 class="section-label">
      <i class="material-icons">auto_awesome</i>
      What Makes Me, Me
    </h4>
    <b-row class="mb-4">
      <b-col sm="12" md="6" lg="3" v-for="(dim, idx) in dimensions" :key="idx" class="mb-3">
        <b-card class="dimension-card h-100">
          <div class="dim-icon">
            <i class="material-icons">{{ dim.icon }}</i>
          </div>
          <h5 class="dim-title">{{ dim.title }}</h5>
          <p class="dim-desc">{{ dim.desc }}</p>
        </b-card>
      </b-col>
    </b-row>

    <!-- Career Timeline -->
    <h4 class="section-label">
      <i class="material-icons">timeline</i>
      Career Journey
    </h4>
    <div class="timeline-container mb-4">
      <div v-for="(event, idx) in timeline" :key="idx" class="timeline-item">
        <div class="timeline-dot" :class="event.variant"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <span class="timeline-title">{{ event.title }}</span>
            <span class="timeline-period">{{ event.period }}</span>
          </div>
          <div class="timeline-role">
            <strong>{{ event.role }}</strong>
            <span v-if="event.company"> at
              <a :href="event.companyUrl" target="_blank">{{ event.company }}</a>
            </span>
          </div>
          <div class="timeline-desc">{{ event.description }}</div>
          <div v-if="event.tags" class="timeline-tags mt-2">
            <b-badge v-for="tag in event.tags" :key="tag" pill class="me-1 mb-1">{{ tag }}</b-badge>
          </div>
        </div>
      </div>
    </div>

    <!-- Capabilities -->
    <h4 class="section-label">
      <i class="material-icons">construction</i>
      What I Can Do For You
    </h4>
    <b-row>
      <b-col
        sm="12"
        :md="skillData.cols"
        v-for="(skillData, idx) in skills"
        :key="idx"
        class="mb-3"
      >
        <b-card class="h-100">
          <div class="skill-card-header">
            <i class="material-icons skill-icon">{{ skillData.icon }}</i>
            <b-card-title>{{ skillData.title }}</b-card-title>
          </div>
          <b-card-text>
            <b-list-group flush v-if="skillData.layout !== 'grid'">
              <b-list-group-item
                v-for="(list, idxList) in skillData.lists"
                :key="idxList"
                class="d-flex justify-content-between align-items-center"
              >
                <div class="d-flex align-items-center">
                  <b-img
                    v-if="list.icon"
                    class="me-2"
                    width="28"
                    :src="list.icon"
                    :alt="list.text + ' logo'"
                  ></b-img>
                  <span>{{ list.text }}</span>
                </div>
                <b-badge v-if="list.count" pill variant="secondary">{{ list.count }}</b-badge>
              </b-list-group-item>
            </b-list-group>
            <div v-else class="platforms-grid">
              <span v-for="(list, idxList) in skillData.lists" :key="idxList" class="platform-chip">
                <b-img v-if="list.icon" width="20" :src="list.icon" :alt="list.text + ' logo'"></b-img>
                {{ list.text }}
                <b-badge v-if="list.count" pill variant="secondary" class="ms-1">{{ list.count }}</b-badge>
              </span>
            </div>
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

  // ── Hero ──────────────────────────────────────────────────────────────────
  .hero-card {
    background: linear-gradient(135deg, var(--global-secondary-color) 0%, var(--global-card-bg) 60%);
    border-radius: 20px !important;
    box-shadow: 0 6px 24px 0 var(--global-shadow-color);

    .hero-inner {
      display: flex;
      align-items: center;
      gap: 28px;
    }

    .hero-avatar {
      flex-shrink: 0;
      align-items: center;
      justify-content: center;

      img {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid var(--global-secondary-color);
        background: #fff;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      }
    }

    .hero-name {
      color: var(--global-primary-color);
      font-weight: 700;
      margin-bottom: 4px;
    }

    .hero-tagline {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--global-primary-color);
      opacity: 0.8;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .hero-bio {
      color: var(--global-primary-color);
      font-size: 0.97rem;
      line-height: 1.6;
      margin-bottom: 16px;
    }

    .hero-links {
      display: flex;
      gap: 20px;

      .hero-link {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--global-primary-color);
        text-decoration: none;
        transition: opacity 0.2s;

        &:hover { opacity: 0.7; }

        img { vertical-align: middle; }
      }
    }
  }

  // ── Section labels ──────────────────────────────────────────────────────
  .section-label {
    color: var(--global-primary-color);
    font-weight: 700;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;

    .material-icons {
      font-size: 1.4rem;
      vertical-align: middle;
      color: var(--global-secondary-color);
    }
  }

  // ── Dimension cards ─────────────────────────────────────────────────────
  .dimension-card {
    text-align: center;
    padding: 8px;
    border: none;
    box-shadow: 0 2px 12px 0 var(--global-shadow-color);
    background-color: var(--global-card-bg);
    transition: transform 0.25s;

    &:hover { transform: translateY(-4px); }

    .dim-icon {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--global-primary-color) 0%, var(--global-secondary-color) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 12px;

      .material-icons {
        color: #fff;
        font-size: 1.8rem;
      }
    }

    .dim-title {
      color: var(--global-secondary-color);
      font-weight: 700;
      font-size: 1rem;
      margin-bottom: 8px;
    }

    .dim-desc {
      color: var(--global-primary-color);
      font-size: 0.88rem;
      line-height: 1.55;
      margin: 0;
    }
  }

  // ── Timeline ─────────────────────────────────────────────────────────────
  .timeline-container {
    position: relative;
    margin-left: 20px;
    padding-left: 24px;
    border-left: 3px solid var(--global-secondary-color);
  }

  .timeline-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 28px;
    position: relative;
  }

  .timeline-dot {
    width: 16px;
    height: 16px;
    min-width: 16px;
    border-radius: 50%;
    margin-right: 18px;
    margin-top: 10px;
    border: 3px solid var(--global-card-bg);
    box-shadow: 0 0 0 3px var(--global-secondary-color);
    flex-shrink: 0;

    &.primary  { background: #007bff; }
    &.info     { background: #17a2b8; }
    &.success  { background: #28a745; }
    &.warning  { background: #ffc107; }
    &.danger   { background: #dc3545; }
  }

  .timeline-content {
    background: var(--global-card-bg);
    border-radius: 12px;
    box-shadow: 0 2px 10px 0 var(--global-shadow-color);
    padding: 14px 18px;
    flex: 1;
  }

  .timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 4px;
    margin-bottom: 4px;
  }

  .timeline-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--global-secondary-color);
  }

  .timeline-period {
    font-size: 0.85rem;
    color: var(--global-primary-color);
    opacity: 0.75;
    font-weight: normal;
  }

  .timeline-role {
    font-size: 0.95rem;
    margin-bottom: 4px;
    color: var(--global-primary-color);

    a {
      color: var(--global-secondary-color);
      text-decoration: none;
      &:hover { text-decoration: underline; }
    }
  }

  .timeline-desc {
    font-size: 0.9rem;
    color: var(--global-primary-color);
    opacity: 0.85;
    line-height: 1.5;
  }

  .timeline-tags .badge {
    font-size: 0.75rem;
    background: var(--global-primary-color) !important;
    color: #fff;
  }

  // ── Skill cards ──────────────────────────────────────────────────────────
  .card {
    border: none;
    box-shadow: 0 2px 12px 0 var(--global-shadow-color);
    background-color: var(--global-card-bg);

    .list-group-item {
      background-color: inherit;
      color: var(--global-primary-color);
    }
  }

  .skill-card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;

    .skill-icon {
      color: var(--global-secondary-color);
      font-size: 1.6rem;
    }

    .card-title {
      color: var(--global-secondary-color);
      font-weight: 700;
      margin: 0;
      font-size: 1rem;
    }
  }

  .card-text {
    color: var(--global-primary-color);
  }

  // ── Platform chip grid ────────────────────────────────────────────────────
  .platforms-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 4px 0;

    .platform-chip {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: rgba(128,128,128,0.08);
      border: 1px solid var(--global-shadow-color);
      border-radius: 20px;
      padding: 4px 12px;
      font-size: 0.88rem;
      color: var(--global-primary-color);
      transition: background 0.2s;

      &:hover { background: rgba(128,128,128,0.16); }
    }
  }
}
</style>

<script>
import _ from "lodash";
import { projectsMixins } from "../mixins/projectsMixins.js";
import { htmlHeadMixins } from "../mixins/seoMixins.js";
export default {
  mixins: [projectsMixins, htmlHeadMixins],
  created() {
    this.getOptimizedSeoMetaTags({
      title: "Hire Hasil | Engineer, Creator & Leader",
      description:
        "Hasil Paudyal — App Development Manager, Electrical Engineer, IoT builder, and poet from Nepal. Experienced across mobile apps, cloud backends, hardware, and creative writing.",
      image: "https://hasilpaudyal.com.np/og-image.jpg",
      keywords:
        "Hire Hasil Paudyal, App Development Manager, React Native, Expo, Electrical Engineer, IoT, Poetry, Laravel, AWS, Nepal",
    });

    let technologies = [];
    this.getProjectTechnologies().forEach((technology) => {
      technologies.push({
        text: technology["tech"],
        count: technology["projCount"],
        icon:
          "/" +
          technology["tech"].replace(/ /g, "").toLowerCase() +
          "-logo.png",
      });
    });
    this.skills.push({
      title: "Tech Stacks & Platforms",
      icon: "dns",
      cols: 12,
      layout: "grid",
      lists: _.orderBy(technologies, ["count", "text"], ["desc", "asc"]),
    });
  },
  data() {
    return {
      dimensions: [
        {
          icon: "phone_iphone",
          title: "Software Engineer",
          desc: "Backend & APIs (Laravel, Node.js, Deno), React Native + Expo with native modules in Swift/Kotlin, Cloudflare Workers and AWS — full-stack in JavaScript/TypeScript, from APIs to mobile to cloud.",
        },
        {
          icon: "electrical_services",
          title: "Electrical Engineer",
          desc: "B.E. in Electrical & Electronics Engineering. Hardware prototyping, IoT with RFID & sensors, electronics simulation, and field service engineering.",
        },
        {
          icon: "edit",
          title: "Creative Writer",
          desc: "Author of original poems and quotes. Writing is how I think — precise, layered, and built to leave an impression.",
        },
        {
          icon: "handshake",
          title: "Leader & Collaborator",
          desc: "Led cross-functional teams, mentored developers, handled client relationships, and delivered across cultures and time zones.",
        },
      ],
      timeline: [
        {
          title: "App Development Manager",
          role: "App Development Manager",
          company: "ConvergeStack",
          companyUrl: "//www.convergestack.com/",
          period: "Jan 2022 – Present",
          variant: "primary",
          description:
            "Backend architecture and APIs, cloud and server management, and CI/CD with reproducible QA/staging environments. Leads cross-platform app development with React Native (Expo) and custom native modules in Swift and Kotlin (including SIP/WebRTC voice calling).",
          tags: ["Backend & APIs", "React Native", "Expo", "Swift", "Kotlin", "AWS", "Cloudflare", "CI/CD"],
        },
        {
          title: "Web Developer",
          role: "Web Developer",
          company: "View9 | Nepal",
          companyUrl: "//view9.com.np",
          period: "Jan 2019 – Dec 2021",
          variant: "info",
          description:
            "Led backend development and bank/payment-gateway API integrations over SOAP and JSON with automated transaction tracking. Built fraud-detection and reporting dashboards and CMS sites; managed AWS/Laravel infrastructure and mentored junior developers.",
          tags: ["Laravel", "AWS", "PHP", "API Integration", "SOAP/JSON"],
        },
        {
          title: "Junior Android Developer",
          role: "Part-time Junior Android Developer",
          company: "Fixolla | India",
          companyUrl: "//fixolla.com",
          period: "Feb 2018 – Dec 2018",
          variant: "success",
          description:
            "Worked on Android app and API development as part of an early-stage startup team.",
          tags: ["Android", "Java", "REST APIs"],
        },
        {
          title: "Security Analyst",
          role: "Part-time Security Analyst",
          company: "Fixolla | India",
          companyUrl: "//fixolla.com",
          period: "Sep 2017 – Feb 2018",
          variant: "warning",
          description:
            "Data scraping from open sources, building company databases, and public speaking & promotional activities at colleges across Bangalore.",
          tags: ["Data Scraping", "Public Speaking", "Research"],
        },
        {
          title: "Service & Sales Engineer",
          role: "Service and Sales Engineer",
          company: "A2Z Laundry Solutions | India",
          companyUrl: "//a2zlaundrysolutions.com",
          period: "Dec 2016 – Dec 2018",
          variant: "danger",
          description:
            "Set up and expanded laundry businesses across India. Authorized service engineer for Danube (France), Pony (Italy), SEKO (USA), Electrolux, Maytag, and Speedqueen.",
          tags: ["Hardware", "Field Engineering", "Sales", "International Brands"],
        },
      ],
      skills: [
        {
          title: "Software & Apps",
          icon: "code",
          cols: 7,
          lists: [
            { text: "Backend & APIs in Laravel (PHP), Node.js, and Deno" },
            { text: "Bank & payment-gateway integrations over SOAP and JSON, with automated transaction tracking" },
            { text: "Fraud-detection admin panels (e.g. flagging multiple signups from one IP)" },
            { text: "Reporting & analytics dashboards (sales + operational reports) for courier/logistics clients" },
            { text: "Content-managed (CMS) sites for non-technical clients" },
            { text: "Full-stack web platforms — Vue.js front end, Laravel + AWS back end" },
            { text: "Hybrid mobile apps in JavaScript/TypeScript — React Native (Expo) for Android & iOS" },
            { text: "Custom Expo native modules in Swift (iOS) and Kotlin (Android)" },
            { text: "SIP/WebRTC voice calling via custom native modules" },
            { text: "Apple TV apps with HomeKit integration" },
            { text: "Serverless edge APIs with Cloudflare Workers" },
            { text: "Self-hosted WebSocket services in PHP/Laravel" },
            { text: "CI/CD pipelines with reproducible QA/staging environments" },
            { text: "Container deployments — Podman, Nexus, Docker" },
            { text: "Server automation — remote DB backups/restore, CRON jobs, queues" },
            { text: "Self-hosted local LLMs + workflow automation (Activepieces)" },
            { text: "Data scraping, processing, and ETL pipelines" },
          ],
        },
        {
          title: "Engineering & Hardware",
          icon: "memory",
          cols: 5,
          lists: [
            { text: "Electrical system design & simulation (AutoCAD, MiPower)" },
            { text: "Portable IoT devices — RFID, physical sensors, Wi-Fi" },
            { text: "Arduino-based hardware prototyping" },
            { text: "Field service & commissioning of industrial machines" },
            { text: "Project planning & scheduling (Primavera P6)" },
          ],
        },
        {
          title: "Creative & Writing",
          icon: "create",
          cols: 5,
          lists: [
            { text: "Original poetry — published on this site" },
            { text: "Original quotes & reflections" },
            { text: "Technical writing & documentation" },
            { text: "UI/UX design with Figma and Photoshop" },
          ],
        },
        {
          title: "Tools I Work With",
          icon: "build",
          cols: 7,
          lists: [
            { text: "Android Studio" },
            { text: "AutoCAD" },
            { text: "Figma" },
            { text: "IntelliJ IDEA / VS Code" },
            { text: "MiPower" },
            { text: "Photoshop" },
            { text: "Primavera P6" },
            { text: "Deno / Bun" },
          ],
        },
      ],
    };
  },
};
</script>
