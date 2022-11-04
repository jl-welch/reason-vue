<script setup lang="ts">
  import { ref } from "vue";

  const title = ref("How can we help you?");
  const text = ref("Let us know who you are and what you're looking for, and we'll help get you to the right place.");
</script>

<template>
  <section class="help">
    <div class="container">
      <h3 class="help__title title">
        {{ title }}
      </h3>

      <p class="help__introduction">
        {{ text }}
      </p>

      <div class="help__box">
        I am 
        <a class="help__link" href="#">
          an individual
        </a>
        and I 
        <a class="help__link" href="#">
          want to learn
        </a>

        <a href="#" class="help__link btn">
          Start now
        </a>
      </div>
    </div>
  </section>
</template>
