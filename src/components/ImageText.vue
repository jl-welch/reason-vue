<script setup lang="ts">
  import { ref } from "vue";

  const title = ref("We are a social change charity, helping people to improve their lives through digital.");
  const text = ref("We tackle the most pressing issues of our time, working with partners in thousands of communities across the UK and futher afield.");
  const about = ref("Learn more about us");
</script>

<template>
  <section class="image-text">
    <img
      class="image-text__image"
      src="https://picsum.photos/600/350"
      alt="Random image from lorem picsum"
    >

    <div class="image-text__details">
      <h2 class="image-text__title title">
        {{ title }}
      </h2>

      <p class="image-text__text">
        {{ text }}
      </p>

      <a class="image-text__cta btn" href="#">
        {{ about }}
      </a>
    </div>
  </section>
</template>
