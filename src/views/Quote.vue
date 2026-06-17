<template>
  <div
    id="quote"
    class="mt-5"
  >
    <b-breadcrumb :items="breadcrumbItems" />
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
            <h5 class="text-info">
              - Hasil Paudyal
            </h5>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <h4 class="p-3">
      Other quotes
    </h4>
    <b-row id="other-quotes">
      <b-col
        v-for="(q, idx) in otherQuotes"
        :key="idx"
        md="3"
      >
        <div
          style="cursor: pointer"
          @click="$router.push({ name: 'quote', params: { id: q.id, urlSlug: q.urlSlug } })"
        >
          <b-card>
            <b-card-text>
              <p>{{ q.quoteLines[0].substr(0, 20) }}...</p>
            </b-card-text>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { quotesMixins } from "../mixins/quotesMixins.js";
import { seoMixins } from "../mixins/seoMixins.js";

export default {
  mixins: [quotesMixins, seoMixins],
  data() {
    return {
      quote: null,
      otherQuotes: [],
      breadcrumbItems: null,
    };
  },
  watch: {
    $route: { handler: "updatePage" }
  },
  created() {
    const id = this.$route.params.id;
    let currentPageActualUrlSlug = this.getQuoteUrlSlug(id);
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
    this.updatePage();
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
          { name: this.quote.urlSlug, path }
        ])
      ]
    });
    this.breadcrumbItems = [
      { text: 'Quotes', to: { name: 'quotes' } },
      { text: this.quote.urlSlug, active: true },
    ];
  },
  methods: {
    updatePage() {
      this.quote = this.getQuoteDetails(this.$route.params.id);
      this.otherQuotes = [];
      while (this.otherQuotes.length !== 4) {
        let uniqueQuote = this.getRandomQuote();
        if (!this.otherQuotes.includes(uniqueQuote)) {
          this.otherQuotes.push(uniqueQuote);
        }
      }
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
