<template>
  <div
    id="hire-hasil"
    class="mt-5"
  >
    <div class="resume-sheet">
      <!-- Header -->
      <header class="resume-header">
        <img
          src="/Hasil-Shobha.webp"
          alt="Hasil Paudyal"
          class="resume-avatar d-none d-sm-block"
          width="110"
          height="110"
        >
        <div class="resume-header-main">
          <h1 class="hero-name">
            {{ profile.name }}
          </h1>
          <p class="resume-title">
            {{ profile.jobTitle }} &bull; Engineer &bull; Creator &bull; Leader
          </p>
          <div class="resume-contact-strip">
            <span class="contact-chip">
              <i
                aria-hidden="true"
                class="material-icons"
              >place</i> {{ profile.location }}
            </span>
            <a
              class="contact-chip"
              :href="profile.links.linkedin"
              target="_blank"
              rel="noopener"
            >
              <img
                src="/iconledincon.svg"
                width="16"
                height="16"
                alt=""
              > LinkedIn
            </a>
            <a
              class="contact-chip"
              :href="profile.links.github"
              target="_blank"
              rel="noopener"
            >
              <i
                aria-hidden="true"
                class="material-icons"
              >code</i> GitHub
            </a>
            <a
              class="contact-chip"
              :href="profile.links.facebook"
              target="_blank"
              rel="noopener"
            >
              <img
                src="/iconfbcon.svg"
                width="16"
                height="16"
                alt=""
              > Facebook
            </a>
            <a
              class="contact-chip contact-chip-cta d-print-none"
              href="#contact"
              @click.prevent="scrollToContact"
            >
              <i
                aria-hidden="true"
                class="material-icons"
              >mail</i> Contact me
            </a>
          </div>
        </div>
      </header>

      <!-- Summary -->
      <section class="resume-section">
        <h4 class="section-label">
          <i
            aria-hidden="true"
            class="material-icons"
          >person</i>
          Summary
        </h4>
        <p class="resume-summary">
          {{ profile.hireSummary }}
        </p>
      </section>

      <!-- Core strengths -->
      <section class="resume-section">
        <h4 class="section-label">
          <i
            aria-hidden="true"
            class="material-icons"
          >auto_awesome</i>
          Core Strengths
        </h4>
        <b-row>
          <b-col
            v-for="(dim, idx) in dimensions"
            :key="idx"
            sm="12"
            md="6"
            class="mb-3"
          >
            <div class="strength-item">
              <div class="dim-icon">
                <i
                  aria-hidden="true"
                  class="material-icons"
                >{{ dim.icon }}</i>
              </div>
              <div>
                <h5 class="dim-title">
                  {{ dim.title }}
                </h5>
                <p class="dim-desc">
                  {{ dim.desc }}
                </p>
              </div>
            </div>
          </b-col>
        </b-row>
      </section>

      <!-- Experience -->
      <section class="resume-section">
        <h4 class="section-label">
          <i
            aria-hidden="true"
            class="material-icons"
          >timeline</i>
          Experience
        </h4>
        <div class="timeline-container">
          <div
            v-for="(event, idx) in timeline"
            :key="idx"
            class="timeline-item"
          >
            <div
              class="timeline-dot"
              :class="event.variant"
            />
            <div class="timeline-content">
              <div class="timeline-header">
                <span class="timeline-title">{{ event.title }}</span>
                <span class="timeline-period">{{ event.period }}</span>
              </div>
              <div class="timeline-role">
                <strong>{{ event.role }}</strong>
                <span v-if="event.company"> at
                  <a
                    :href="event.companyUrl"
                    target="_blank"
                    rel="noopener"
                  >{{ event.company }}</a>
                </span>
              </div>
              <div class="timeline-desc">
                {{ event.description }}
              </div>
              <div
                v-if="event.tags"
                class="timeline-tags mt-2"
              >
                <b-badge
                  v-for="tag in event.tags"
                  :key="tag"
                  pill
                  class="me-1 mb-1"
                >
                  {{ tag }}
                </b-badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Education -->
      <section class="resume-section">
        <h4 class="section-label">
          <i
            aria-hidden="true"
            class="material-icons"
          >school</i>
          Education
        </h4>
        <div class="education-item">
          <div class="timeline-header">
            <span class="timeline-title">{{ profile.education.degree }}</span>
            <span class="timeline-period">{{ profile.education.period }}</span>
          </div>
          <div class="timeline-role">
            {{ profile.education.school }} — {{ profile.education.place }}
          </div>
        </div>
      </section>

      <!-- Capabilities -->
      <section class="resume-section">
        <h4 class="section-label">
          <i
            aria-hidden="true"
            class="material-icons"
          >construction</i>
          What I Can Do For You
        </h4>
        <b-row>
          <b-col
            v-for="(skillData, idx) in skills"
            :key="idx"
            sm="12"
            :md="skillData.cols"
            class="mb-3"
          >
            <b-card class="h-100">
              <div class="skill-card-header">
                <i class="material-icons skill-icon">{{ skillData.icon }}</i>
                <b-card-title>{{ skillData.title }}</b-card-title>
              </div>
              <b-card-text>
                <b-list-group
                  v-if="skillData.layout !== 'grid'"
                  flush
                >
                  <b-list-group-item
                    v-for="(list, idxList) in skillData.lists"
                    :key="idxList"
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <b-img
                        v-if="list.icon"
                        lazy
                        class="me-2"
                        width="28"
                        :src="list.icon"
                        :alt="list.text + ' logo'"
                      />
                      <span>{{ list.text }}</span>
                    </div>
                    <b-badge
                      v-if="list.count"
                      pill
                      variant="secondary"
                    >
                      {{ list.count }}
                    </b-badge>
                  </b-list-group-item>
                </b-list-group>
                <div
                  v-else
                  class="platforms-grid"
                >
                  <span
                    v-for="(list, idxList) in skillData.lists"
                    :key="idxList"
                    class="platform-chip"
                  >
                    <b-img
                      v-if="list.icon"
                      lazy
                      width="20"
                      :src="list.icon"
                      :alt="list.text + ' logo'"
                    />
                    {{ list.text }}
                    <b-badge
                      v-if="list.count"
                      pill
                      variant="secondary"
                      class="ms-1"
                    >{{ list.count }}</b-badge>
                  </span>
                </div>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </section>

      <!-- Contact (screen only — hidden in print) -->
      <section
        id="contact"
        class="resume-section d-print-none"
      >
        <h4 class="section-label">
          <i
            aria-hidden="true"
            class="material-icons"
          >mail</i>
          Get In Touch
        </h4>
        <b-card class="contact-card">
          <form
            v-if="contactStatus !== 'sent'"
            class="contact-form"
            @submit.prevent="submitContact"
          >
            <div class="contact-row">
              <label>
                Your name
                <input
                  v-model.trim="contactForm.name"
                  type="text"
                  name="name"
                  required
                  maxlength="100"
                  autocomplete="name"
                >
              </label>
              <label>
                Your email
                <input
                  v-model.trim="contactForm.email"
                  type="email"
                  name="email"
                  required
                  maxlength="200"
                  autocomplete="email"
                >
              </label>
            </div>
            <label>
              Message
              <textarea
                v-model.trim="contactForm.message"
                name="message"
                rows="5"
                required
                minlength="10"
                maxlength="5000"
              />
            </label>
            <!-- Honeypot: invisible to humans; bots that fill it are dropped -->
            <label
              class="hp-field"
              aria-hidden="true"
            >
              Website
              <input
                v-model="contactForm.website"
                type="text"
                name="website"
                tabindex="-1"
                autocomplete="off"
              >
            </label>
            <button
              type="submit"
              class="contact-submit"
              :disabled="contactStatus === 'sending'"
            >
              <i
                aria-hidden="true"
                class="material-icons"
              >send</i>
              {{ contactStatus === 'sending' ? 'Sending…' : 'Send message' }}
            </button>
            <p
              v-if="contactStatus === 'error'"
              class="contact-error"
              role="alert"
            >
              Sorry, the message could not be sent right now. Please try again in a
              minute, or reach me on
              <a
                href="https://www.linkedin.com/in/hasil/"
                target="_blank"
                rel="noopener"
              >LinkedIn</a>.
            </p>
          </form>
          <div
            v-else
            class="contact-success"
            role="status"
          >
            <i
              aria-hidden="true"
              class="material-icons"
            >check_circle</i>
            <p>
              Thank you, {{ contactForm.name || 'friend' }} — your message is on its way.
              I usually reply within a day or two.
            </p>
          </div>
        </b-card>
      </section>
    </div>
  </div>
</template>

<script>
import { projectsMixins } from "../mixins/projectsMixins.js";
import { seoMixins } from "../mixins/seoMixins.js";
import { profile } from "../content/profile.js";

// Same-zone Worker route (see worker/README.md). The Worker relays the message
// by email without the address ever appearing in client code.
const CONTACT_ENDPOINT = "/api/contact";

export default {
  mixins: [projectsMixins, seoMixins],
  data() {
    return {
      profile,
      contactForm: { name: "", email: "", message: "", website: "" },
      contactStatus: "idle", // idle | sending | sent | error
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
      // Facts come from src/content/profile.js — the single source of truth.
      timeline: profile.career.map((c) => ({
        title: c.title,
        role: c.role,
        company: c.company,
        companyUrl: c.companyUrl,
        period: c.period,
        variant: c.variant,
        description: c.summary,
        tags: c.tags,
      })),
      skills: profile.capabilityGroups.map((g) => ({
        title: g.title,
        icon: g.icon,
        cols: g.cols,
        lists: g.items.map((text) => ({ text })),
      })),
    };
  },
  created() {
    this.applySeo({
      title: "Hire Hasil | Engineer, Creator & Leader",
      description:
        "Hasil Paudyal — App Development Manager, Electrical Engineer, IoT builder, and poet from Nepal. Experienced across mobile apps, cloud backends, hardware, and creative writing.",
      image: "https://hasilpaudyal.com.np/og-image.jpg",
      keywords:
        "Hire Hasil Paudyal, App Development Manager, React Native, Expo, Electrical Engineer, IoT, Poetry, Laravel, AWS, Nepal",
      url: "https://hasilpaudyal.com.np/hire-Hasil",
      type: "profile",
      schema: [
        this.seoPerson(),
        this.seoBreadcrumb([
          { name: "Home", path: "/" },
          { name: "Hire Hasil", path: "/hire-Hasil" }
        ])
      ]
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
      lists: [...technologies].sort(
        (a, b) => b.count - a.count || a.text.localeCompare(b.text)
      ),
    });
  },
  methods: {
    scrollToContact() {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    async submitContact() {
      // Honeypot filled → almost certainly a bot; pretend success, send nothing.
      if (this.contactForm.website) {
        this.contactStatus = "sent";
        return;
      }
      this.contactStatus = "sending";
      try {
        const res = await fetch(CONTACT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: this.contactForm.name,
            email: this.contactForm.email,
            message: this.contactForm.message,
          }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        this.contactStatus = "sent";
      } catch {
        this.contactStatus = "error";
      }
    },
  },
};
</script>

<style lang="scss">
#hire-hasil {
  min-height: 90vh;

  @media (max-width: 576px) {
    margin-top: 85px !important;
  }

  // ── Resume sheet (paper-like container) ──────────────────────────────────
  .resume-sheet {
    max-width: 940px;
    margin: 0 auto;
    background: var(--global-card-bg);
    border-radius: 20px;
    box-shadow: 0 6px 24px 0 var(--global-shadow-color);
    padding: 36px 40px;

    @media (max-width: 576px) {
      padding: 22px 16px;
    }
  }

  .resume-section {
    margin-top: 28px;
  }

  // ── Header ────────────────────────────────────────────────────────────────
  .resume-header {
    display: flex;
    align-items: center;
    gap: 28px;
    padding-bottom: 24px;
    border-bottom: 3px solid var(--global-secondary-color);

    .resume-avatar {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid var(--global-secondary-color);
      background: #fff;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      flex-shrink: 0;
    }

    .hero-name {
      color: var(--global-primary-color);
      font-weight: 700;
      margin-bottom: 4px;
      font-size: 2rem;
    }

    .resume-title {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--global-primary-color);
      opacity: 0.8;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
  }

  .resume-contact-strip {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .contact-chip {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--global-primary-color);
      text-decoration: none;
      border: 1px solid var(--global-shadow-color);
      border-radius: 20px;
      padding: 4px 14px;
      transition: opacity 0.2s, transform 0.2s;

      .material-icons { font-size: 1rem; color: var(--global-secondary-color); }

      &:hover { opacity: 0.75; transform: translateY(-1px); }
    }

    .contact-chip-cta {
      color: #fff;
      border: none;
      background: linear-gradient(135deg, var(--global-primary-color), var(--global-secondary-color));

      .material-icons { color: #fff; }
    }
  }

  .resume-summary {
    color: var(--global-primary-color);
    font-size: 0.97rem;
    line-height: 1.65;
    margin: 0;
    text-align: justify;
  }

  // ── Section labels ──────────────────────────────────────────────────────
  .section-label {
    color: var(--global-primary-color);
    font-weight: 700;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.15rem;

    .material-icons {
      font-size: 1.3rem;
      vertical-align: middle;
      color: var(--global-secondary-color);
    }
  }

  // ── Core strengths ──────────────────────────────────────────────────────
  .strength-item {
    display: flex;
    gap: 14px;
    align-items: flex-start;

    .dim-icon {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--global-primary-color) 0%, var(--global-secondary-color) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      .material-icons {
        color: #fff;
        font-size: 1.4rem;
      }
    }

    .dim-title {
      color: var(--global-secondary-color);
      font-weight: 700;
      font-size: 1rem;
      margin-bottom: 4px;
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
    margin-left: 8px;
    padding-left: 24px;
    border-left: 3px solid var(--global-secondary-color);
  }

  .timeline-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 24px;
    position: relative;

    &:last-child { margin-bottom: 0; }
  }

  .timeline-dot {
    width: 16px;
    height: 16px;
    min-width: 16px;
    border-radius: 50%;
    margin-right: 18px;
    margin-top: 6px;
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

  // ── Education ────────────────────────────────────────────────────────────
  .education-item {
    padding-left: 8px;
  }

  // ── Skill cards ──────────────────────────────────────────────────────────
  .card {
    border: 1px solid var(--global-shadow-color);
    box-shadow: none;
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
      background: rgba(128, 128, 128, 0.08);
      border: 1px solid var(--global-shadow-color);
      border-radius: 20px;
      padding: 4px 12px;
      font-size: 0.88rem;
      color: var(--global-primary-color);
      transition: background 0.2s;

      &:hover { background: rgba(128, 128, 128, 0.16); }
    }
  }

  // ── Contact form ─────────────────────────────────────────────────────────
  .contact-card {
    border: 1px solid var(--global-shadow-color);
  }

  .contact-form {
    label {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
      margin-bottom: 14px;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--global-primary-color);
    }

    input,
    textarea {
      border: 1px solid var(--global-shadow-color);
      border-radius: 10px;
      padding: 9px 12px;
      font-size: 0.95rem;
      font-family: inherit;
      background: var(--global-bg);
      color: var(--global-primary-color);

      &:focus {
        outline: 2px solid var(--global-secondary-color);
        outline-offset: 1px;
        border-color: transparent;
      }
    }

    .contact-row {
      display: flex;
      gap: 14px;

      @media (max-width: 576px) {
        flex-direction: column;
        gap: 0;
      }
    }

    // Honeypot: moved off-screen (display:none would let smarter bots skip it)
    .hp-field {
      position: absolute;
      left: -9999px;
      top: -9999px;
      height: 1px;
      width: 1px;
      overflow: hidden;
    }

    .contact-submit {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #fff;
      background: linear-gradient(135deg, var(--global-primary-color), var(--global-secondary-color));
      border: none;
      border-radius: 20px;
      padding: 9px 26px;
      font-weight: 600;

      &:disabled { opacity: 0.6; }
      &:hover:not(:disabled) { transform: translateY(-1px); }

      .material-icons { font-size: 1.1rem; }
    }

    .contact-error {
      margin: 12px 0 0;
      font-size: 0.9rem;
      color: #dc3545;
    }
  }

  .contact-success {
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--global-primary-color);

    .material-icons {
      color: #28a745;
      font-size: 2rem;
    }

    p { margin: 0; }
  }
}

// ── Print: the page IS the resume ──────────────────────────────────────────
@media print {
  #hire-hasil {
    margin-top: 0 !important;

    // Everything inherits the CSS variables, so force a paper palette once.
    --global-primary-color: #111;
    --global-secondary-color: #444;
    --global-card-bg: #fff;
    --global-bg: #fff;
    --global-shadow-color: #bbb;

    .resume-sheet {
      box-shadow: none;
      border-radius: 0;
      max-width: 100%;
      padding: 0;
    }

    .resume-section { margin-top: 18px; }

    .timeline-item,
    .strength-item,
    .card { page-break-inside: avoid; }

    .card { box-shadow: none; }

    // Chips/dots rely on backgrounds that printers drop — keep outlines only
    .contact-chip { border: 1px solid #bbb; }
    .dim-icon { background: #eee !important; .material-icons { color: #111; } }
    .timeline-dot { box-shadow: 0 0 0 3px #444; background: #fff !important; }
    .timeline-tags .badge {
      background: #fff !important;
      color: #111 !important;
      border: 1px solid #999;
    }
  }
}
</style>
