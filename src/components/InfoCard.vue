<template>
  <div class="infoCard">
    <div class="tw-flex tw-border-b tw-border-b-gray-800 tw-border-solid md:tw-border-none tw-bg-black tw-bg-opacity-10">
      <div v-if="id" class="infoCell tw-min-w-12 tw-max-w-12 tw-border-r tw-border-solid tw-border-gray-800">
        <strong>{{ id }}</strong>
      </div>
      <div v-if="name" class="infoCell tw-min-w-40 tw-max-w-40">
        <strong>{{ name }}</strong>
      </div>
    </div>
    <div class="infoCell tw-w-full md:tw-border-l tw-border-solid tw-border-gray-800">
      <div v-html="description" />
      <div
        v-if="notes"
        class="tw-w-full tw-p-2 tw-mt-1.5 tw-bg-white tw-rounded-md tw-border tw-border-solid tw-border-gray-800"
        v-html="infoNotes"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    notes: {
      type: String,
    },
  },
  setup(props) {
    const infoNotes = computed((): string => {
      return `Note: ${props.notes}`;
    });

    return {
      infoNotes,
    }
  },
});
</script>

<style>
.infoCard {
  @apply tw-w-full
  tw-flex
  tw-flex-col
  md:tw-flex-row;
}

.infoCard table td {
  @apply tw-min-w-7 tw-text-center tw-p-1.5 tw-border tw-border-solid tw-border-gray-800;
}

.infoCard ul {
  @apply tw-list-disc tw-ml-4 tw-mb-1.5;
}

.infoCard .infoCell {
  @apply tw-py-1 tw-px-3;
}

.infoCard .infoCell p {
  @apply tw-mb-1.5 last:tw-mb-0;
}
</style>
