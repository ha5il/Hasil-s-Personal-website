<template>
  <div
    id="poem"
    class="mt-5"
  >
    <b-breadcrumb :items="breadcrumbItems" />
    <b-row>
      <b-col
        col
        sm="12"
      >
        <b-card>
          <b-card-title tag="h1">
            {{ poem.name }}
          </b-card-title>
          <b-card-text class="mt-4">
            <p
              v-for="(para, idxPara) in poem.poemParas"
              :key="idxPara"
            >
              <span
                v-for="(paraLine, idxLine) in para.paraLines"
                :key="idxLine"
              >
                {{ paraLine }}
                <br>
              </span>
            </p>
            <p class="h5 text-info">
              - Hasil Paudyal
            </p>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <h2 class="h4 p-3">
      About the author
    </h2>
    <b-card class="mb-4 author-card">
      <b-card-text>
        {{ profile.aboutThirdPerson }}
        <router-link :to="{ name: 'hire-hasil' }">
          More about Hasil
        </router-link>
      </b-card-text>
    </b-card>
    <h2 class="h4 p-3">
      Other poems
    </h2>
    <b-row id="other-poems">
      <b-col
        v-for="p in otherPoems"
        :key="p.id"
        sm="6"
        md="4"
        lg="3"
      >
        <router-link
          class="card-link"
          :to="{ name: 'poem', params: { id: p.id, urlSlug: p.urlSlug } }"
        >
          <b-card class="mb-3">
            <b-card-text>
              {{ p.name }}
            </b-card-text>
          </b-card>
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { poemsMixins } from "../mixins/poemsMixins.js";
import { seoMixins } from "../mixins/seoMixins.js";
import { profile } from "../content/profile.js";

export default {
  mixins: [poemsMixins, seoMixins],
  data() {
    return {
      profile,
      poem: null,
      otherPoems: [],
      breadcrumbItems: null,
    };
  },
  watch: {
    // The component instance is reused when navigating poem → poem, so
    // created() alone would leave the previous poem (and its head tags) on screen.
    $route: { handler: "load" }
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      if (this.$route.name !== "poem") return;
      const id = this.$route.params.id;
      const currentPageActualUrlSlug = this.getPoemUrlSlug(id);
      if (!currentPageActualUrlSlug) {
        this.$router.push({ name: "poems" });
        return;
      }
      if (currentPageActualUrlSlug != this.$route.params.urlSlug) {
        this.$router.push({
          name: "poem",
          params: { id, urlSlug: currentPageActualUrlSlug }
        });
      }
      this.poem = this.getPoemDetails(id);
      this.otherPoems = this.getAllpoems()
        .filter(p => p.id != id)
        .sort((a, b) => a.id - b.id);
      const path = `/poem/${id}/${currentPageActualUrlSlug}`;
      this.applySeo({
        title: this.getPoemPageTitle(id),
        description: this.getPoemPageDescription(id),
        keywords: `${this.poem.name}, poem, Hasil Paudyal, Poems, Poetry, Nepal`,
        type: "article",
        schema: [
          this.seoCreativeWork({
            name: this.poem.name,
            description: this.getPoemPageDescription(id),
            path,
            type: "CreativeWork",
            extra: {
              genre: "Poetry",
              text: this.poem.poemParas.map(para => para.paraLines.join("\n")).join("\n\n")
            }
          }),
          this.seoBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Poems", path: "/poems" },
            { name: this.poem.name, path }
          ])
        ]
      });
      this.breadcrumbItems = [
        { text: 'Poems', to: { name: 'poems' } },
        { text: this.poem.name, active: true },
      ];
    }
  }
};
</script>

<style lang="scss">
#poem {
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
      text-align: center;
    }

    .card-text {
      color: var(--global-primary-color);

      p {
        text-align: center;
      }

      h5 {
        font-size: 16px;
        padding: 8px 0px;
        text-align: right;
      }
    }
  }

  .breadcrumb a {
    color: #17a2b8;
  }
}
</style>
