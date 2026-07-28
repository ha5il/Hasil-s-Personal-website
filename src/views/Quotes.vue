<template>
  <div
    id="quotes"
    class="mt-5"
  >
    <b-row class="g-4">
      <b-col
        v-for="(quote, idx) in quotes"
        :key="idx"
        sm="12"
        md="6"
        lg="4"
      >
        <router-link
          class="quote-card-wrap card-link"
          :to="{ name: 'quote', params: { id: quote.id, urlSlug: quote.urlSlug } }"
        >
          <div class="quote-card">
            <div class="quote-banner">
              <i class="material-icons quote-banner-icon">format_quote</i>
            </div>
            <div class="quote-body">
              <span class="open-mark">&ldquo;</span>
              <p class="quote-lines">
                <span
                  v-for="(line, i) in quote.quoteLines"
                  :key="i"
                >{{ line }}<br v-if="i < quote.quoteLines.length - 1"></span>
              </p>
              <span class="close-mark">&rdquo;</span>
            </div>
          </div>
        </router-link>
      </b-col>
    </b-row>
    <div class="ratio ratio-16x9 mt-5">
      <iframe
        src="https://read.amazon.com/kp/card?asin=B01M99C005&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_1LlwDb4A0SXAB"
        allowfullscreen
        title="Amazon book preview"
      />
    </div>
  </div>
</template>

<script>
import { quotesMixins } from "../mixins/quotesMixins.js";
import { seoMixins } from "../mixins/seoMixins.js";
export default {
  mixins: [quotesMixins, seoMixins],
  data() {
    return {
      quotes: []
    };
  },
  created() {
    this.applySeo({
      title: "Quotes | Hasil's Personal Site",
      description: "Collection of quotes by Hasil Paudyal.",
      image: "https://hasilpaudyal.com.np/og-image.jpg",
      keywords: "Hasil Paudyal, Quotes, Inspiration, Portfolio, Nepal",
      schema: this.seoBreadcrumb([
        { name: "Home", path: "/" },
        { name: "Quotes", path: "/quotes" }
      ])
    });
    this.quotes = this.getAllquotes();
  }
};
</script>

<style lang="scss">
#quotes {
  min-height: 90vh;

  @media (max-width: 576px) {
    margin-top: 85px !important;
  }

  .quote-card-wrap {
    cursor: url('/cursor-pointer.png'), pointer;
    height: 100%;
  }

  .quote-card {
    height: 100%;
    border: none;
    border-radius: 12px;
    box-shadow: 0px 0px 10px 0px var(--global-shadow-color);
    background-color: var(--global-card-bg);
    overflow: hidden;
    transition: transform 0.33s, box-shadow 0.33s;
    display: flex;
    flex-direction: column;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 6px 24px var(--global-shadow-color);
    }
  }

  .quote-banner {
    height: 90px;
    background: linear-gradient(135deg, var(--global-secondary-color), var(--global-primary-color));
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;

    &::before {
      content: '';
      position: absolute;
      width: 130px; height: 130px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.07);
      top: -35px; right: -20px;
    }
    &::after {
      content: '';
      position: absolute;
      width: 80px; height: 80px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      bottom: -25px; left: 10px;
    }

    .quote-banner-icon {
      font-size: 64px;
      color: rgba(255, 255, 255, 0.25);
      position: relative;
      z-index: 1;
    }
  }

  .quote-body {
    padding: 1.1rem 1.25rem 1.25rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .open-mark, .close-mark {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 2.8rem;
    line-height: 1;
    color: var(--global-primary-color);
    opacity: 0.18;
    display: block;
  }

  .open-mark { margin-bottom: -0.6rem; }
  .close-mark { text-align: right; margin-top: -0.4rem; }

  .quote-lines {
    font-size: 0.93rem;
    line-height: 1.75;
    font-style: italic;
    color: var(--global-primary-color);
    margin: 0;
    flex: 1;
  }
}
</style>
