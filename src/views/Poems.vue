<template>
  <div
    id="poems"
    class="mt-5"
  >
    <b-row>
      <b-col
        v-for="(poem, idx) in poems"
        :key="idx"
        sm="12"
        md="4"
      >
        <div
          style="cursor: pointer"
          @click="$router.push({ name: 'poem', params: { id: poem.id, urlSlug: poem.urlSlug } })"
        >
          <b-card class="mb-3">
            <div class="poem-banner mb-3">
              <i class="material-icons poem-banner-icon">auto_stories</i>
            </div>
            <b-card-title>
              <i class="material-icons poem-title-icon">auto_stories</i>
              {{ poem.name }}
            </b-card-title>
            <b-card-text>
              <span
                v-for="(paraLine, index) in poem.poemParas[0].paraLines"
                :key="index"
              >
                <span v-if="index < 3">
                  {{ paraLine }}
                  <br>
                </span>
                <span v-else-if="index == 3">{{ paraLine }}<br>...</span>
              </span>
            </b-card-text>
          </b-card>
        </div>
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
      poems: []
    };
  },
  created() {
    this.applySeo({
      title: "Poems | Hasil's Personal Site",
      description: "Collection of poems by Hasil Paudyal.",
      image: "https://hasilpaudyal.com.np/og-image.jpg",
      keywords: "Hasil Paudyal, Poems, Poetry, Portfolio, Nepal",
      schema: this.seoBreadcrumb([
        { name: "Home", path: "/" },
        { name: "Poems", path: "/poems" }
      ])
    });
    this.poems = this.getAllpoems();
  }
};
</script>

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
      font-size: 1rem;
    }

    .card-text {
      color: var(--global-primary-color);
      font-size: 0.88rem;
      line-height: 1.7;
      font-style: italic;
    }
  }

  .card:hover {
    transform: scale(1.04);
    cursor: url('/cursor-pointer.png'), pointer;;
  }

  .poem-banner {
    height: 90px;
    background: linear-gradient(315deg, var(--global-secondary-color), var(--global-primary-color));
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 120px; height: 120px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.07);
      top: -30px; left: -15px;
    }
    &::after {
      content: '';
      position: absolute;
      width: 80px; height: 80px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      bottom: -20px; right: 10px;
    }

    .poem-banner-icon {
      font-size: 64px;
      color: rgba(255, 255, 255, 0.25);
      position: relative;
      z-index: 1;
    }
  }

  .poem-title-icon {
    font-size: 1rem;
    vertical-align: text-bottom;
    margin-right: 3px;
  }
}
</style>
