<template>
  <div id="not-found">
    <b-card class="not-found-card text-center">
      <p class="not-found-code">
        404
      </p>
      <h1 class="not-found-title">
        This page wandered off
      </h1>
      <b-card-text class="not-found-text">
        Like a verse that never made it into the poem,
        <br>
        the page you're looking for isn't here.
      </b-card-text>
      <div class="not-found-actions">
        <b-link
          to="/"
          class="btn nf-btn"
        >
          <i
            aria-hidden="true"
            class="material-icons"
          >home</i> Home
        </b-link>
        <b-link
          to="/projects"
          class="btn nf-btn"
        >
          <i
            aria-hidden="true"
            class="material-icons"
          >all_inbox</i> Projects
        </b-link>
        <b-link
          to="/poems"
          class="btn nf-btn"
        >
          <i
            aria-hidden="true"
            class="material-icons"
          >import_contacts</i> Poems
        </b-link>
      </div>
    </b-card>
  </div>
</template>

<script>
import { seoMixins } from "../mixins/seoMixins.js";

export default {
  mixins: [seoMixins],
  created() {
    this.applySeo({
      title: "Page Not Found | Hasil Paudyal",
      description: "The page you are looking for does not exist on Hasil Paudyal's site.",
      robots: "noindex",
    });
  },
};
</script>

<style lang="scss">
#not-found {
  margin-top: 90px;
  display: flex;
  justify-content: center;

  .not-found-card {
    max-width: 560px;
    width: 100%;
    padding: 2.5rem 1.5rem;
    border: none;
    box-shadow: 0px 0px 10px 0px var(--global-shadow-color);
  }

  .not-found-code {
    font-family: "Quantico", sans-serif;
    font-weight: 700;
    font-size: 5.5rem;
    line-height: 1;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, var(--global-primary-color), var(--global-secondary-color));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .not-found-title {
    font-size: 1.4rem;
    color: var(--global-primary-color);
  }

  .not-found-text {
    font-family: "Lora", Georgia, serif;
    font-style: italic;
    color: var(--global-primary-color);
    opacity: 0.85;
    margin: 1rem 0 1.5rem;
  }

  .not-found-actions {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    .nf-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      color: #fff;
      background: linear-gradient(135deg, var(--global-primary-color), var(--global-secondary-color));
      border: none;
      border-radius: 20px;
      padding: 6px 18px;

      &:hover {
        transform: translateY(-2px);
      }
    }
  }
}
</style>
