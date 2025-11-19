<template>
  <div id="hire-hasil" class="mt-5">
    <b-card class="connect-hero-card mb-4">
      <div class="d-flex align-items-center">
        <div class="connect-hero-content flex-grow-1">
          <h3 class="mb-2">Let's Connect!</h3>
          <p class="mb-3">
            I'm always open to new opportunities, collaborations, and networking.<br />
            Reach out to me directly on LinkedIn or Facebook, or just say hello!
          </p>
          <div class="d-flex align-items-center">
            <b-link class="px-2" href="//np.linkedin.com/in/hasil" target="_blank">
              <img
                v-b-tooltip.hover.bottom
                title="Let's get connected for work"
                src="/iconledincon.svg"
                width="32"
              />
            </b-link>
            <b-link class="px-2" href="//facebook.com/hasill" target="_blank">
              <img
                v-b-tooltip.hover.bottom
                title="Let's get connected as friend"
                src="/iconfbcon.svg"
                width="32"
              />
            </b-link>
          </div>
        </div>
        <div class="connect-hero-avatar d-none d-md-block ml-4">
          <img
            src="/Hasil-Shobha.png"
            alt="Hasil Paudyal"
            width="100"
            class="rounded-circle shadow"
          />
        </div>
      </div>
    </b-card>
    <h4>My Career Timeline</h4>
    <div class="timeline-container">
      <div v-for="(event, idx) in timeline" :key="idx" class="timeline-item">
        <div class="timeline-dot" :class="event.variant"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <span class="timeline-title">{{ event.title }}</span>
            <span class="timeline-period">{{ event.period }}</span>
          </div>
          <div class="timeline-role">
            <strong>{{ event.role }}</strong>
            <span v-if="event.company"
              > at <a :href="event.companyUrl" target="_blank">{{ event.company }}</a
            ></span>
          </div>
          <div class="timeline-desc">{{ event.description }}</div>
        </div>
      </div>
    </div>
    <h4 class="mt-4">Interested in Collaborating with Me?</h4>
    <b-row>
      <b-col
        sm="12"
        :md="skillData.cols"
        v-for="(skillData, idx) in skills"
        :key="idx"
      >
        <b-card class="mb-3" :title="skillData.title">
          <b-card-text>
            <b-list-group flush v-if="skillData.title !== 'Hardware/Software Platforms'">
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
                  :alt="list.text + ' logo'"
                ></b-img>
                {{ list.text }}
                <b-badge v-show="list.count" pill>{{ list.count }}</b-badge>
              </b-list-group-item>
            </b-list-group>
            <div v-else class="platforms-grid">
              <span
                v-for="(list, idxList) in skillData.lists"
                :key="idxList"
                class="platform-badge"
              >
                <b-img
                  v-if="list.icon"
                  class="mx-1"
                  width="24"
                  :src="list.icon"
                  :alt="list.text + ' logo'"
                ></b-img>
                <span>{{ list.text }}</span>
                <b-badge v-show="list.count" pill>{{ list.count }}</b-badge>
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

  .connect-hero-card {
    background: linear-gradient(
      90deg,
      var(--global-secondary-color) 0%,
      var(--global-card-bg) 100%
    );
    border-radius: 18px;
    box-shadow: 0 4px 16px 0 var(--global-shadow-color);
    padding: 32px 24px;
    margin-bottom: 32px;

    .connect-hero-content {
      h3 {
        color: var(--global-primary-color);
        font-weight: bold;
      }
      p {
        font-size: 1.1rem;
        color: var(--global-primary-color);
      }
      .px-2 img {
        vertical-align: middle;
        margin-right: 2px;
      }
      .material-icons {
        vertical-align: middle;
        margin-right: 4px;
      }
      .btn {
        font-size: 1rem;
        font-weight: 500;
      }
      small {
        font-size: 0.95rem;
      }
    }
    .connect-hero-avatar img {
      border: 4px solid var(--global-secondary-color);
      background: #fff;
    }
  }

  h4 {
    color: var(--global-primary-color);
    font-weight: bold;
  }

  .timeline-container {
    position: relative;
    margin-left: 20px;
    margin-bottom: 40px;
    padding-left: 20px;
    border-left: 3px solid var(--global-secondary-color);
  }
  .timeline-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 32px;
    position: relative;
  }
  .timeline-dot {
    width: 18px;
    height: 18px;
    min-width: 18px;
    min-height: 18px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    margin-right: 18px;
    margin-top: 8px;
    border: 3px solid #fff;
    box-shadow: 0 0 0 3px var(--global-secondary-color);
    &.primary {
      background: #007bff;
    }
    &.info {
      background: #17a2b8;
    }
    &.success {
      background: #28a745;
    }
    &.warning {
      background: #ffc107;
    }
    &.danger {
      background: #dc3545;
    }
  }
  .timeline-content {
    background: var(--global-card-bg);
    border-radius: 8px;
    box-shadow: 0 2px 8px 0 var(--global-shadow-color);
    padding: 16px 20px;
    min-width: 220px;
    max-width: 600px;
    position: relative;
  }
  .timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    color: var(--global-secondary-color);
    font-size: 1.1rem;
    margin-bottom: 4px;
  }
  .timeline-title {
    font-size: 1.1rem;
  }
  .timeline-period {
    font-size: 0.95rem;
    color: var(--global-primary-color);
    font-weight: normal;
  }
  .timeline-role {
    font-size: 1rem;
    margin-bottom: 4px;
    color: var(--global-primary-color);
  }
  .timeline-desc {
    font-size: 0.95rem;
    color: var(--global-primary-color);
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

  .platforms-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 8px 0;
    .platform-badge {
      display: flex;
      align-items: center;
      background: var(--global-card-bg);
      border-radius: 16px;
      padding: 4px 10px;
      font-size: 0.95rem;
      margin-bottom: 4px;
    }
    .mx-1 {
      margin-right: 6px;
    }
    .badge {
      margin-left: 4px;
      font-size: 0.8em;
    }
  }

  .connect-section {
    display: flex;
    align-items: center;
    .connect-text {
      font-size: 1rem;
      color: var(--global-primary-color);
      font-weight: 500;
    }
    .material-icons {
      vertical-align: middle;
      margin-right: 4px;
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
  metaInfo() {
    return this.getOptimizedSeoMetaTags({
      title: "Hire Hasil | Collaborate with Hasil Paudyal",
      description:
        "Explore Hasil Paudyal's career timeline and skills. Collaborate with a top-rated web developer, electrical engineer, and project leader. Discover my expertise in app development, hardware integration, and scalable web platforms.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20Graduation%20New%20Horizon%20College%20of%20Engineering.jpg?alt=media",
      keywords:
        "Hire Hasil Paudyal, Career Timeline, Collaboration, Web Developer, Electrical Engineer, App Development, Portfolio, Laravel, React Native, AWS, IoT",
    });
  },
  data() {
    return {
      timeline: [
        {
          title: "App Development Manager",
          role: "App Development Manager",
          company: "ConvergeStack",
          companyUrl: "//www.convergestack.com/",
          period: "Jan 2022 - Present",
          variant: "primary",
          description:
            "Leading hybrid app development using React Native (Expo), server management, and backend architecture.",
        },
        {
          title: "Web Developer",
          role: "Web Developer",
          company: "View9 | Nepal",
          companyUrl: "//view9.com.np",
          period: "Jan 2019 - Dec 2021",
          variant: "info",
          description:
            "Led backend development, API integrations for banks and payments, AWS & Laravel, and mentoring junior developers.",
        },
        {
          title: "Junior Android Developer",
          role: "Part-time Junior Android Developer",
          company: "Fixolla | India",
          companyUrl: "//fixolla.com",
          period: "Feb 2018 - Dec 2018",
          variant: "success",
          description: "Worked on Android app and API development.",
        },
        {
          title: "Security Analyst",
          role: "Part-time Security Analyst",
          company: "Fixolla | India",
          companyUrl: "//fixolla.com",
          period: "Sep 2017 - Feb 2018",
          variant: "warning",
          description:
            "Data scraping, public speaking, and promotional activities in Bangalore colleges.",
        },
        {
          title: "Service and Sales Engineer",
          role: "Service and Sales Engineer",
          company: "A2Z Laundry Solutions | India",
          companyUrl: "//a2zlaundrysolutions.com",
          period: "Dec 2016 - Dec 2018",
          variant: "danger",
          description:
            "Set up and expanded laundry businesses, authorized service engineer for multiple international brands.",
        },
      ],
      skills: [
        {
          title: "What Can I Build/Develop...",
          cols: 7,
          lists: [
            {
              text: "Scripts for scraping, processing, and storing data",
            },
            {
              text: "Highly dynamic and scalable web platforms",
            },
            {
              text: "Web and mobile apps",
            },
            {
              text: "Graphic/UI design",
            },
            {
              text:
                "Portable hardware interfacing with RFID, physical sensors, and Wi-Fi for IoT and more.",
            },
            {
              text: "Dynamic Accelerated Mobile Page (AMP) generator for advanced SEO.",
            },
            {
              text: "Website setup on AWS EC2 or dedicated hosting with a local database, as well as shared hosting.",
            },
            {
              text: "AWS Elastic Beanstalk (EBS) setup with remote database, S3, load balancer, CloudWatch, and Lambda.",
            },
            {
              text: "GitLab server and runner setup for CI/CD project management",
            },
            {
              text: "Self-hosted PHP WebSocket services in Laravel",
            },
          ],
        },
        {
          title: "Tools I am Familiar With",
          cols: 6,
          lists: [
            {
              text: "Adobe XD",
            },
            {
              text: "Android Studio",
            },
            {
              text: "AutoCAD",
            },
            {
              text: "MiPower",
            },
            {
              text: "Photoshop",
            },
            {
              text: "Primavera",
            },
            {
              text: "Visual Studio",
            },
          ],
        },
      ],
    };
  },
  created() {
    let technologies = [];
    this.getProjectTechnologies().forEach((technology) => {
      technologies.push({
        text: technology["tech"],
        count: technology["projCount"],
        icon:
          "/" +
          technology["tech"]
            .replace(/ /g, "")
            .toLowerCase() +
          "-logo.png",
      });
    });
    this.skills.splice(1, 0, {
      title: "Hardware/Software Platforms",
      cols: 5,
      lists: _.orderBy(technologies, ["count", "text"], ["desc", "asc"]),
    });
  },
};
</script>
