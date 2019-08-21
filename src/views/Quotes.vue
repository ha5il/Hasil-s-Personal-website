<template>
  <div id="quotes" class="mt-5">
    <b-row>
      <b-col sm="12" md="4" v-for="(quote, idx) in quotes" :key="idx">
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
    document.title = "Quotes | Hasil's Personal Site";
    this.quotes = _.shuffle(app.data().quotes);
  }
};
</script>
