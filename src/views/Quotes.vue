<template>
  <div id="quotes" class="mt-5">
    <b-row>
      <b-col cols="4" v-for="(quote, idx) in quotes" :key="idx">
        <b-card class="mb-3">
          <b-card-text>
            <span v-for="quoteLine in quote" :key="quoteLine">
              {{quoteLine}}
              <br />
            </span>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss">
#quotes {
  min-height: 90vh;

  .card {
    border: none;
    box-shadow: 0px 0px 10px 0px #d0d0d0;
    transition: 0.33s all;
  }

  .card-text {
    color: #6e161c;
  }

  .card:hover {
    transform: scale(1.04);
  }
}
</style>

<script>
import _ from "lodash";
import app from "../App";
export default {
  created() {
    this.quotes = _.shuffle(app.data().quotes);
  }
};
</script>
