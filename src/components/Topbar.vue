<template>
  <nav class="topbar">
    <div class="wrapper tw-flex tw-items-center tw-flex-wrap tw-px-3">
      <a
        for="topbar-menu"
        class="topbar__nav-icon-wrapper"
        @click="isExpanded = !isExpanded"
      >
        <span class="topbar__nav-icon"></span>
      </a>
      <h2 class="tw-text-base sm:tw-text-xl tw-mr-6">
        <a href="">{{ title }}</a>
      </h2>
      <div
        :class="{
          topbar__nav: true,
          'topbar__nav--expanded': isExpanded,
        }"
      >
        <ul class="topbar__nav-menu" @click="isExpanded = false">
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
});
</script>

<style>
.topbar {
  @apply tw-py-3.5 tw-top-0;
}

.topbar__nav {
  @apply tw-w-full
  md:tw-w-auto
  tw-h-0
  md:tw-h-auto
  tw-bg-gray-800
  tw-top-full
  md:tw-top-auto
  tw-left-0
  md:tw-left-auto
  tw-overflow-hidden
  tw-transition-all
  tw-duration-300;
}

@media (max-width: 768px) {
  .topbar__nav--expanded {
    display: block;
    height: 7.5rem;
  }
}

.topbar__nav-menu li {
  @apply tw-block md:tw-inline-block tw-mr-3 last:tw-mr-0 tw-py-2 md:tw-py-0;
}

.topbar__nav-menu li > a {
  @apply tw-no-underline;
}

.topbar__nav-icon-wrapper {
  @apply tw-inline-flex md:tw-hidden tw-h-5 tw-items-center tw-mr-3 tw-cursor-pointer;
}

.topbar__nav-icon,
.topbar__nav-icon-wrapper,
.topbar__nav-icon::before,
.topbar__nav-icon::after {
  @apply tw-w-5;
}

.topbar__nav-icon {
  @apply tw-relative;
}

.topbar__nav-icon,
.topbar__nav-icon::before,
.topbar__nav-icon::after {
  @apply tw-h-0.5 tw-bg-white tw-rounded-full;
}

.topbar__nav-icon::before,
.topbar__nav-icon::after {
  content: '';

  @apply tw-absolute;
}

.topbar__nav-icon::before {
  @apply tw-bottom-1.5;
}

.topbar__nav-icon::after {
  @apply tw-top-1.5;
}
</style>
