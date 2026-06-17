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
          <b-card-title>
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
            <h5 class="text-info">
              - Hasil Paudyal
            </h5>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { poemsMixins } from "../mixins/poemsMixins.js";
import { seoMixins } from "../mixins/seoMixins.js";

export default {
  mixins: [poemsMixins, seoMixins],
  data() {
    return {
      poem: null,
      breadcrumbItems: null,
    };
  },
  created() {
    const id = this.$route.params.id;
    let currentPageActualUrlSlug = this.getPoemUrlSlug(id);
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
    const path = `/poem/${id}/${currentPageActualUrlSlug}`;
    this.applySeo({
      title: this.getPoemPageTitle(id),
      description: this.getPoemPageDescription(id),
      keywords: "Hasil Paudyal, Poems, Poetry, Portfolio, Nepal",
      type: "article",
      schema: [
        this.seoCreativeWork({
          name: this.poem.name,
          description: this.getPoemPageDescription(id),
          path,
          type: "CreativeWork",
          extra: { genre: "Poetry" }
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
      { text: this.poem.urlSlug, active: true },
    ];
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
