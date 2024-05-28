<template>
  <div :class="
    {
      'infoCardWithImage': true,
      [`tw-flex-${display}`]: true,
    }"
  >
    <img
      v-if="imageUrl"
      :class="{
        'tw-max-w-72 tw-self-center md:tw-self-auto tw-p-3': true,
        'tw-w-[30%] tw-mb-auto': display === 'row',
      }"
      :src="imageUrl"
      alt="thumbnail"
    />
    <div :class="{
        'tw-flex': true,
        'tw-flex-col': imageUrl,
      }"
    >
      <div v-if="id || name" class="tw-flex tw-border-b tw-border-b-gray-800 tw-border-solid md:tw-border-none">
        <div v-if="id" class="infoCell tw-min-w-12 tw-max-w-12 tw-border-r tw-border-solid tw-border-gray-800">
          <strong>{{ id }}</strong>
        </div>
        <div v-if="name" class="infoCell tw-min-w-40 tw-max-w-40">
          <strong>{{ name }}</strong>
        </div>
      </div>
      <div
        :class="{
          'infoCell tw-w-full md:tw-border-l tw-border-solid tw-border-gray-800': true,
          'tw-border-none': imageUrl,
        }"
      >
        <div v-html="description" />
        <div
          v-if="notes"
          class="tw-w-full tw-p-2 tw-mt-1.5 tw-bg-white tw-rounded-md tw-border tw-border-solid tw-border-gray-800"
          v-html="infoNotes"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    display: {
      type: String,
      validator(value: string) {
        return ['row', 'col'].includes(value)
      },
      default: 'col',
    },
    id: {
      type: String,
    },
    name: {
      type: String,
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
.infoCardWithImage {
  @apply tw-h-[calc(100%+1px)]
  tw-w-[calc(100%+1px)]
  tw-flex
  -tw-mt-px
  -tw-ml-px
  tw-text-center
  md:tw-text-left
  tw-border
  tw-border-solid
  tw-border-gray-800;
}

.infoCardWithImage .infoCell {
  @apply tw-p-3;
}

.infoCardWithImage .infoCell p {
  @apply tw-mb-1.5 last:tw-mb-0;
}
</style>
