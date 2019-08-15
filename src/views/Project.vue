<template>
  <div id="project" class="mt-5">
    <b-row>
      <b-col cols="12">
        <b-card class="mb-3" :title="project.name">
          <b-card-text>{{project.discription}}</b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss">
#project {
  min-height: 90vh;

  .card {
    border: none;
    box-shadow: 0px 0px 10px 0px #d0d0d0;
  }

  .card-title {
    color: #e6a410;
    font-weight: normal;
  }

  .card-text {
    color: #6e161c;
  }
}
</style>

<script>
import { projectsMixins } from "../mixins/projectsMixins.js";

import { serverBus } from "../main";
export default {
  mixins: [projectsMixins],
  data() {
    return {
      projects: null
    };
  },
  created() {
    let currentPageActualUrlSlug = this.getProjectUrlSlug(
      this.$router.history.current.params.id
    );
    if (!currentPageActualUrlSlug) {
      // 404
      this.$router.push("/");
    }
    if (
      currentPageActualUrlSlug != this.$router.history.current.params.urlSlug
    ) {
      // slug mismatch
      this.$router.push({
        name: "project",
        params: {
          id: this.$router.history.current.params.id,
          urlSlug: currentPageActualUrlSlug
        }
      });
    }
    this.project = this.getProjectDetails(
      this.$router.history.current.params.id
    );
  }
};
</script>