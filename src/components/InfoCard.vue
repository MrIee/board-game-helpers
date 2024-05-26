<template>
  <div class="infoCard">
    <div class="tw-flex tw-border-b tw-border-b-gray-800 tw-border-solid md:tw-border-none">
      <div v-if="id" class="infoCell tw-min-w-12 tw-max-w-12 tw-border-r tw-border-solid tw-border-gray-800">
        <strong>{{ id }}</strong>
      </div>
      <div class="infoCell tw-min-w-40 tw-max-w-40">
        <strong>{{ name }}</strong>
      </div>
    </div>
    <div class="infoCell tw-w-full md:tw-border-l tw-border-solid tw-border-gray-800">
      <p v-html="description"></p>
      <div
        v-if="notes"
        class="tw-w-full tw-bg-white tw-p-2 tw-rounded-md tw-border tw-border-solid tw-border-gray-800"
        v-html="infoNotes"
      >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    id: {
      type: Number,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
    imageUrl: {
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
  width: 850px;

  @apply max-lg:tw-w-full
  tw-flex
  tw-flex-col
  md:tw-flex-row
  tw-border-b
  tw-border-solid
  last:tw-border-b-0
  tw-border-gray-800;
}

.infoCard .infoCell {
  @apply tw-py-1 tw-px-3;
}
</style>
