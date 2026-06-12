<template>
  <div id="quotes" class="mt-5">
    <b-row>
      <b-col sm="12" md="4" v-for="(quote, idx) in quotes" :key="idx">
        <div
          style="cursor: pointer"
          @click="$router.push({ name: 'quote', params: { id: quote.id, urlSlug: quote.urlSlug } })"
        >
          <b-card class="mb-3">
            <b-card-text>
              <span v-for="quoteLine in quote.quoteLines" :key="quoteLine">
                {{quoteLine}}
                <br />
              </span>
            </b-card-text>
          </b-card>
        </div>
      </b-col>
    </b-row>
    <div class="ratio ratio-16x9 mt-3">
      <iframe
        src="https://read.amazon.com/kp/card?asin=B01M99C005&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_1LlwDb4A0SXAB"
        allowfullscreen
        title="Amazon book preview"
      ></iframe>
    </div>
  </div>
</template>

<style lang="scss">
#quotes {
  min-height: 90vh;

  @media (max-width: 576px) {
    margin-top: 85px !important;
  }

  .card {
    border: none;
    box-shadow: 0px 0px 10px 0px var(--global-shadow-color);
    transition: 0.33s all;
    background-color: var(--global-card-bg);
  }

  .card-text {
    color: var(--global-primary-color);
  }

  .card:hover {
    transform: scale(1.04);
    cursor: url('/cursor-pointer.png'), pointer;;
  }
}
</style>

<script>
import { quotesMixins } from "../mixins/quotesMixins.js";
import { htmlHeadMixins } from "../mixins/seoMixins.js";
export default {
  mixins: [quotesMixins, htmlHeadMixins],
  data() {
    return {
      quotes: []
    };
  },
  created() {
    this.getOptimizedSeoMetaTags({
      title: "Quotes | Hasil's Personal Site",
      description: "Collection of quotes by Hasil Paudyal.",
      image: "https://hasilpaudyal.com.np/og-image.jpg",
      keywords: "Hasil Paudyal, Quotes, Inspiration, Portfolio, Nepal"
    });
    this.quotes = this.getAllquotes();
  }
};
</script>
