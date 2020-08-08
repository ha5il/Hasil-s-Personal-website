<template>
  <div id="quotes" class="mt-5">
    <b-row>
      <b-col sm="12" md="4" v-for="(quote, idx) in quotes" :key="idx">
        <router-link
          :to="{ name: 'quote', params: { id: quote.id, urlSlug: quote.urlSlug }}"
          tag="div"
        >
        <b-card class="mb-3">
          <b-card-text>
            <span v-for="quoteLine in quote.quoteLines" :key="quoteLine">
              {{quoteLine}}
              <br />
            </span>
          </b-card-text>
        </b-card>
        </router-link>
      </b-col>
    </b-row>
    <div>
    <b-embed
      type="iframe"
      aspect="16by9"
      src="https://read.amazon.com/kp/card?asin=B01M99C005&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_1LlwDb4A0SXAB"
      allowfullscreen
    ></b-embed>
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
    cursor: pointer;
  }
}
</style>

<script>
import { quotesMixins } from "../mixins/quotesMixins.js";

export default {
  mixins: [quotesMixins],
  created() {
    document.title = "Quotes | Hasil's Personal Site";
    document.querySelector('meta[name="description"]')
    .setAttribute('content', "Collection of quotes by Hasil Paudyal.");
    this.quotes = this.getAllquotes();
  }
};
</script>
