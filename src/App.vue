<template>
  <Topbar title="Board Game Helpers" />
  <RouterView v-slot="{ Component }">
    <Component :is="Component" />
  </RouterView>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Topbar from './components/Topbar.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  components: {
    Topbar,
    Footer,
  },
});
</script>
