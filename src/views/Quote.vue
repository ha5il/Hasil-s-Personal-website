<template>
  <div
    id="quote"
    class="mt-5"
  >
    <b-breadcrumb :items="breadcrumbItems" />
    <h1 class="h4 p-3">
      Quote
    </h1>
    <b-row>
      <b-col cols="12">
        <b-card>
          <b-card-text>
            <p
              v-for="(line, idxLine) in quote.quoteLines"
              :key="idxLine"
            >
              {{ line }}
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
      Other quotes
    </h2>
    <b-row id="other-quotes">
      <b-col
        v-for="(q, idx) in otherQuotes"
        :key="idx"
        md="3"
      >
        <router-link
          class="card-link"
          :to="{ name: 'quote', params: { id: q.id, urlSlug: q.urlSlug } }"
        >
          <b-card>
            <b-card-text>
              <p>{{ q.quoteLines[0].substr(0, 20) }}...</p>
            </b-card-text>
          </b-card>
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { quotesMixins } from "../mixins/quotesMixins.js";
import { seoMixins } from "../mixins/seoMixins.js";
import { profile } from "../content/profile.js";

export default {
  mixins: [quotesMixins, seoMixins],
  data() {
    return {
      profile,
      quote: null,
      otherQuotes: [],
      breadcrumbItems: null,
    };
  },
  watch: {
    // The component instance is reused when navigating quote → quote, so
    // created() alone would leave the previous quote (and its head tags) on screen.
    $route: { handler: "load" }
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      if (this.$route.name !== "quote") return;
      const id = this.$route.params.id;
      const currentPageActualUrlSlug = this.getQuoteUrlSlug(id);
      if (!currentPageActualUrlSlug) {
        this.$router.push({ name: "quotes" });
        return;
      }
      if (currentPageActualUrlSlug != this.$route.params.urlSlug) {
        this.$router.push({
          name: "quote",
          params: { id, urlSlug: currentPageActualUrlSlug }
        });
      }
      this.quote = this.getQuoteDetails(id);
      this.otherQuotes = [];
      while (this.otherQuotes.length !== 4) {
        const uniqueQuote = this.getRandomQuote();
        if (!this.otherQuotes.includes(uniqueQuote)) {
          this.otherQuotes.push(uniqueQuote);
        }
      }
      const path = `/quote/${id}/${currentPageActualUrlSlug}`;
      this.applySeo({
        title: this.getQuotePageTitle(id),
        description: this.getQuotePageDescription(id),
        keywords: "Hasil Paudyal, Quotes, Inspiration, Portfolio, Nepal",
        type: "article",
        schema: [
          this.seoCreativeWork({
            name: this.getQuotePageTitle(id),
            description: this.getQuotePageDescription(id),
            path,
            type: "Quotation",
            extra: { text: this.quote.quoteLines.join(" ") }
          }),
          this.seoBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Quotes", path: "/quotes" },
            { name: this.quote.quoteLines[0], path }
          ])
        ]
      });
      this.breadcrumbItems = [
        { text: 'Quotes', to: { name: 'quotes' } },
        { text: this.quote.urlSlug, active: true },
      ];
    }
  }
};
</script>

<style lang="scss">
#quote {
  min-height: 90vh;

  @media (max-width: 576px) {
    margin-top: 85px !important;

    #other-quotes .card {
      margin-block-end: 15px;
    }
  }

  #other-quotes .card:hover {
    transform: scale(1.04);
  }

  .card {
    border: none;
    box-shadow: 0px 0px 10px 0px var(--global-shadow-color);
    transition: 0.33s all;
    background-color: var(--global-card-bg);

    .card-text {
      color: var(--global-primary-color);

      p {
        text-align: justify;
      }

      h5 {
        font-size: 16px;
        padding: 8px 0px;
      }
    }
  }

  h4 {
    color: var(--global-primary-color);
    font-weight: bold;
  }

  .breadcrumb a {
    color: #17a2b8;
  }
}
</style>
