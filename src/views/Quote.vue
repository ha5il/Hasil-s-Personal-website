<template>
  <div id="quote" class="mt-5">
    <b-breadcrumb :items="breadcrumbItems"></b-breadcrumb>
    <b-row>
      <b-col cols="12">
        <b-card>
          <b-card-text>
            <p v-for="(line, idxLine) in quote.quoteLines" :key="idxLine">{{line}}</p>
            <h5 class="text-info">- Hasil Paudyal</h5>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <h4 class="p-3">Other quotes</h4>
    <b-row id="other-quotes">
      <b-col v-for="(quote, idx) in otherQuotes" :key="idx" md="3">
        <router-link
          :to="{ name: 'quote', params: { id: quote.id, urlSlug: quote.urlSlug }}"
          tag="div"
        >
          <b-card>
            <b-card-text>
              <p>{{quote.quoteLines[0].substr(0, 20)}}...</p>
            </b-card-text>
          </b-card>
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>

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

<script>
import { quotesMixins } from "../mixins/quotesMixins.js";
import { htmlHeadMixins } from "../mixins/seoMixins.js";

export default {
  mixins: [ quotesMixins, htmlHeadMixins ],
  metaInfo() {
    return this.getOptimizedSeoMetaTags({
      title: this.getQuotePageTitle(
        this.$router.history.current.params.id
      ),
      description: this.getQuotePageDescription(
        this.$router.history.current.params.id
      )
    })
  },
  data() {
    return {
      quote: null,
      otherQuotes: [],
      breadcrumbItems: null,
    };
  },
  watch: {
    $route: {
      handler: "updatePage"
    }
  },

  methods: {
    updatePage() {
      this.quote = this.getQuoteDetails(this.$router.history.current.params.id);
      this.otherQuotes = [];
      while (this.otherQuotes.length != 4) {
        let uniqueQuote = this.getRandomQuote();
        let isUnique = true;
        this.otherQuotes.forEach(quote => {
          if (quote == uniqueQuote) {
            isUnique = false;
          }
        });
        if (isUnique) {
          this.otherQuotes.push(uniqueQuote);
        }
      }
    }
  },
  created() {
    let currentPageActualUrlSlug = this.getQuoteUrlSlug(
      this.$router.history.current.params.id
    );
    if (!currentPageActualUrlSlug) {
      // 404
      this.$router.push({ name: "quotes" });
      return;
    }
    if (
      currentPageActualUrlSlug != this.$router.history.current.params.urlSlug
    ) {
      // slug mismatch
      this.$router.push({
        name: "quote",
        params: {
          id: this.$router.history.current.params.id,
          urlSlug: currentPageActualUrlSlug
        }
      });
    }
    this.updatePage();
    this.breadcrumbItems = [
      {
        text: 'Quotes',
        to: { name: 'quotes' }
      },
      {
        text: this.quote.urlSlug,
        active: true,
      },
    ];
  }
};
</script>