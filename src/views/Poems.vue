<template>
  <div id="poems" class="mt-5">
    <b-row>
      <b-col sm="12" md="4" v-for="(poem, idx) in poems" :key="idx">
        <div
          style="cursor: pointer"
          @click="$router.push({ name: 'poem', params: { id: poem.id, urlSlug: poem.urlSlug } })"
        >
          <b-card class="mb-3">
            <b-card-title>{{poem.name}}</b-card-title>
            <b-card-text>
              <span v-for="(paraLine, index) in poem.poemParas[0].paraLines" :key="index">
                <span v-if="index < 3">
                  {{paraLine}}
                  <br/>
                </span>
                <span v-else-if="index == 3">{{paraLine}}<br>...</span>
              </span>
            </b-card-text>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss">
#poems {
  min-height: 90vh;

  @media (max-width: 576px) {
    margin-top: 85px !important;
  }

  .card {
    border: none;
    box-shadow: 0px 0px 10px 0px var(--global-shadow-color);
    transition: 0.33s all;
    text-align: center;
    background-color: var(--global-card-bg);

    .card-title {
      color: var(--global-secondary-color);
      font-weight: normal;
    }

    .card-text {
      color: var(--global-primary-color);
    }
  }

  .card:hover {
    transform: scale(1.04);
    cursor: url('/cursor-pointer.png'), pointer;;
  }
}
</style>

<script>
import { poemsMixins } from "../mixins/poemsMixins.js";
import { htmlHeadMixins } from "../mixins/seoMixins.js";
export default {
  mixins: [poemsMixins, htmlHeadMixins],
  data() {
    return {
      poems: []
    };
  },
  created() {
    this.getOptimizedSeoMetaTags({
      title: "Poems | Hasil's Personal Site",
      description: "Collection of poems by Hasil Paudyal.",
      image: "/gallery/hasil-paudyal-15.jpg",
      keywords: "Hasil Paudyal, Poems, Poetry, Portfolio, Nepal"
    });
    this.poems = this.getAllpoems();
  }
};
</script>
