<template>
  <div id="poem" class="mt-5">
    <b-row>
      <b-col cols="12">
        <b-card>
          <b-card-text>
            <p v-for="(line, idxLine) in poem.poemLines"
              :key="idxLine"
            >{{line}}</p>
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
    box-shadow: 0px 0px 10px 0px #d0d0d0;

    .card-title {
      color: #e6a410;
      font-weight: normal;
      font-size: 24px;

      a {
        color: #e6a410;
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
      color: #6e161c;

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
}
</style>

<script>
import { poemsMixins } from "../mixins/poemsMixins.js";

export default {
  mixins: [poemsMixins],
  data() {
    return {
      poem: null
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
    document.title = this.getPoemPageTitle(
      this.$router.history.current.params.id
    );
    document.querySelector('meta[name="description"]')
    .setAttribute('content',this.getPoemPageDescription(
      this.$router.history.current.params.id
    ));
    this.poem = this.getPoemDetails(
      this.$router.history.current.params.id
    );
  }
};
</script>