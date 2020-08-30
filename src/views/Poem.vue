<template>
  <div id="poem" class="mt-5">
    <b-breadcrumb :items="breadcrumbItems"></b-breadcrumb>
    <b-row>
      <b-col col sm="12">
        <b-card>
          <b-card-title>
            {{poem.name}}
          </b-card-title>
          <b-card-text class="mt-4">
            <p v-for="(para, idxPara) in poem.poemParas"
              :key="idxPara"
            >
            <span v-for="(paraLine, idxLine) in para.paraLines" :key="idxLine">
              {{paraLine}}
              <br/>
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
        text-align: center;
      }

      h5 {
        font-size: 16px;
        padding: 8px 0px;
        text-align: right;
      }

      .material-icons {
        vertical-align: bottom;
      }
    }
  }

  .breadcrumb a {
    color: #17a2b8;
  }
}
</style>

<script>
import { poemsMixins } from "../mixins/poemsMixins.js";
import { htmlHeadMixins } from "../mixins/seoMixins.js";

export default {
  mixins: [ poemsMixins, htmlHeadMixins ],
  metaInfo() {
    return this.getOptimizedSeoMetaTags({
      title: this.getPoemPageTitle(
        this.$router.history.current.params.id
      ),
      description: this.getPoemPageDescription(
        this.$router.history.current.params.id
      )
    })
  },
  data() {
    return {
      poem: null,
      breadcrumbItems: null,
    };
  },
  created() {
    let currentPageActualUrlSlug = this.getPoemUrlSlug(
      this.$router.history.current.params.id
    );
    if (!currentPageActualUrlSlug) {
      // 404
      this.$router.push({ name: "poems" });
      return;
    }
    if (
      currentPageActualUrlSlug != this.$router.history.current.params.urlSlug
    ) {
      // slug mismatch
      this.$router.push({
        name: "poem",
        params: {
          id: this.$router.history.current.params.id,
          urlSlug: currentPageActualUrlSlug
        }
      });
    }
    this.poem = this.getPoemDetails(
      this.$router.history.current.params.id
    );
    this.breadcrumbItems = [
      {
        text: 'Poems',
        to: { name: 'poems' }
      },
      {
        text: this.poem.urlSlug,
        active: true,
      },
    ];
  }
};
</script>