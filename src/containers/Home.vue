<template>
  <div class="wrapper container">
    <h1>Board Game Helpers</h1>
    <p class="tw-mb-5">Handy tools for improving quality of life when boardgaming.</p>
    <ul class="bg-cover-link-list">
      <li>
        <router-link to="/grandaustriahotelreferencetool">
          <img :src="GAHCoverImg" alt="Grand Austria Hotel" />
          Grand Austria Hotel
          <br />
          Reference Tool
        </router-link>
      </li>
      <li>
        <router-link to="/wreckraidersdiceroller">
          <img :src="WWCoverImg" alt="Wreck Raiders" />
          Wreck Raiders Dice Roller
        </router-link>
      </li>
      <li>
        <router-link to="/cartographersscoringcardrandomizer">
          <img :src="CartographersCoverImg" alt="Wreck Raiders" />
          Cartographers Scoring Card Randomizer
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GAHCoverImg from '../assets/images/covers/cover-grand-austria-hotel.jpg';
import WWCoverImg from '../assets/images/covers/cover-wreck-raiders.jpg';
import CartographersCoverImg from '../assets/images/covers/cover-cartographers.jpg';

export default defineComponent({
  setup() {
    return {
      GAHCoverImg,
      WWCoverImg,
      CartographersCoverImg,
    }
  },
});

</script>

<style>
.bg-cover-link-list li {
  @apply tw-w-36 tw-inline-block tw-text-center tw-align-top tw-mx-3 tw-text-sm;
}

.bg-cover-link-list li img {
  @apply tw-mx-auto;
}
</style>

