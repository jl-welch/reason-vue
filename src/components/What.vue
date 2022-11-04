<script setup lang="ts">
  import { reactive, ref } from "vue";
  import { useStore } from "vuex";

  const store = useStore();
  const items = reactive(store.state.what.items);
  const title = ref("What do we do?");
  const text = ref("Let us know who you are and what you're looking for, and we'll help get you to the right place.");
</script>

<template>
  <section class="what">
    <div class="container">
      <h3 class="what__title title">
        {{ title }}
      </h3>

      <p class="what__introduction">
        {{ text }}
      </p>

      <div class="what__grid">
        <div class="what__item" v-for="item in items">
          <h4 class="what__subtitle">
            {{ item.title }}
          </h4>

          <div class="what__text">
            {{ item.text }}
          </div>

          <a class="what__link btn" :href="item.cta">
            Read more
          </a>
        </div>
      </div>

      <a class="what__link btn" href="#">
        More about what we do
      </a>
    </div>
  </section>
</template>
