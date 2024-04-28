<template>
  <div class="dice">
    <div v-if="!one && !two" class="dot-tl" />
    <div v-if="six" class="dot-ml" />
    <div v-if="!one && !three" class="dot-bl" />
    <div v-if="!two && !four && !six" class="dot-m" />
    <div v-if="!one && !three" class="dot-tr" />
    <div v-if="six" class="dot-mr" />
    <div v-if="!one && !two" class="dot-br" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    number: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    one(): boolean {
      return this.number === 1;
    },
    two(): boolean {
      return this.number === 2;
    },
    three(): boolean {
      return this.number === 3;
    },
    four(): boolean {
      return this.number === 4;
    },
    five(): boolean {
      return this.number === 5;
    },
    six(): boolean {
      return this.number === 6;
    },
  },
});
</script>

<style>
.dice {
  box-shadow: inset 0 0 4px 0 rgb(0 0 0 / 0.4);

  @apply tw-h-24
  tw-w-24
  tw-m-1
  tw-relative
  tw-rounded-lg
  tw-border-2
  tw-border-solid
  tw-border-orange-400
  tw-bg-[rgb(255,232,0)];
}

.dot-tl,
.dot-ml,
.dot-bl,
.dot-m,
.dot-tr,
.dot-mr,
.dot-br {
  @apply tw-h-5
  tw-w-5
  tw-absolute
  tw-top-1/2
  -tw-translate-y-1/2
  tw-left-0
  tw-right-0
  tw-mx-auto
  tw-bg-gray-800
  tw-rounded-full;
}

.dot-tl,
.dot-ml,
.dot-bl,
.dot-tr,
.dot-mr,
.dot-br {
  @apply tw-mx-0;
}

.dot-tl,
.dot-tr,
.dot-bl,
.dot-br {
  @apply tw-translate-y-0;
}

.dot-tl,
.dot-ml,
.dot-bl {
  @apply tw-left-2 tw-right-auto;
}

.dot-tl,
.dot-tr {
  @apply tw-top-2 tw-bottom-auto;
}

.dot-tr,
.dot-mr,
.dot-br {
  @apply tw-left-auto tw-right-2;
}

.dot-bl,
.dot-br {
  @apply tw-top-auto tw-bottom-2;
}
</style>
