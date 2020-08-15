<template>
  <div id="gallery" class="mt-5">
    <b-row>
      <b-col sm="12" md="4">
        <b-row v-for="(image, idx) in coverImagesPaginated" :key="idx">
          <b-card v-show="Math.floor(idx/3)==idx/3" class="m-3">
            <b-img-lazy
            :src="image"
              blank-src
              blank-width="200"
              blank-height="200"
              blank-color="#ddd"
              :center="true"
              width="100%">
            </b-img-lazy>
          </b-card>
        </b-row>
      </b-col>
      <b-col sm="12" md="4">
        <b-row v-for="(image, idx) in coverImagesPaginated" :key="idx">
          <b-card v-show="Math.floor((idx+1)/3)==(idx+1)/3" class="m-3">
            <b-img-lazy
            :src="image"
              blank-src
              blank-width="200"
              blank-height="200"
              blank-color="#ddd"
              :center="true"
              width="100%">
            </b-img-lazy>
          </b-card>
        </b-row>
      </b-col>
      <b-col sm="12" md="4">
        <b-row v-for="(image, idx) in coverImagesPaginated" :key="idx">
          <b-card v-show="Math.floor((idx+2)/3)==(idx+2)/3" class="m-3">
            <b-img-lazy
            :src="image"
              blank-src
              blank-width="200"
              blank-height="200"
              blank-color="#ddd"
              :center="true"
              width="100%">
            </b-img-lazy>
          </b-card>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss">
#gallery {
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

  .card:hover {
    transform: scale(1.04);
  }

  img {
    width: 100%;
  }
}
</style>

<script>
import _ from "lodash";
import { htmlHeadMixins } from "../mixins/seoMixins.js";

export default {
  mixins: [ htmlHeadMixins ],
  metaInfo() {
    return this.getOptimizedSeoMetaTags({
      title: "Gallery | Hasil's Personal Site",
      description: "Checkout photoshop skills and know more about Hasil.",
      image: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(22).jpg?alt=media"
    })
  },
  data() {
    return {
      coverImages: [
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(1).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(10).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(11).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(12).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(13).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(14).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(15).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(16).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(17).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(18).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(19).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(2).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(20).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(21).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(22).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(23).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(24).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(25).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(26).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(27).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(28).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(3).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(4).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(5).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(6).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(7).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(8).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(9).jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20Collage.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20Graduation%20New%20Horizon%20College%20of%20Engineering.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20Nepal%20Flag.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil.jpg?alt=media"
      ],
      coverImagesPaginated: null,
      pageNumber: 1,
    };
  },
  created() {
    this.coverImages = _.shuffle(this.coverImages);
    this.loadMore();
    window.addEventListener("scroll", () => {
      if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight) && (this.pageNumber < 7)) {
        this.loadMore();
      }
    });
  },
  methods: {
    loadMore() {
      this.coverImagesPaginated = this.coverImages.slice(0, this.pageNumber * 6);
      this.pageNumber++;
    }
  }
};
</script>