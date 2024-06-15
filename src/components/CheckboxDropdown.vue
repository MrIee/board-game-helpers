<template>
  <div class="tw-relative tw-h-9 tw-bg-white tw-rounded" v-click-outside="() => isVisible = false">
    <div
      :class="{
        'filter__label': true,
        'tw-rounded-b-none tw-border-b-0': isVisible,
        }"
      @click="isVisible = !isVisible"
    >
      <span>{{ label }}</span>
      <Chevron class="tw-ml-2 tw-rotate-180" />
    </div>
    <ul
      :class="{
        'tw-min-w-full tw-rounded-b tw-border tw-border-solid tw-border-gray-800 tw-bg-white tw-transition-all tw-delay-150 tw-ease-in-out tw-absolute': true,
        'tw-block': isVisible,
        'tw-hidden': !isVisible,
      }"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        class="filter__item"
      >
        <label
          class="tw-inline-block tw-h-full tw-w-full tw-py-1 tw-px-2 hover:tw-cursor-pointer tw-whitespace-nowrap"
          :for="item.label.toLowerCase().replace(/\s/g,'')"
        >
          <input
            type="checkbox"
            :id="item.label.toLowerCase().replace(/\s/g,'')"
            :checked="item.checked"
            @change="onClickCheckbox(item)"
          />
          {{ item.label }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Chevron from './icons/Chevron.vue';
import { CheckboxItem } from '../util/interfaces';

export default defineComponent({
  components: {
    Chevron,
  },
  props: {
    label: {
      type: String,
      default: 'Filter by:',
    },
    items: {
      type: Array<CheckboxItem>,
      required: true,
    },
  },
  setup(_props, ctx) {
    const isVisible = ref<boolean>(false);

    const onClickCheckbox = (item: CheckboxItem): void => {
      ctx.emit('select', item);
    };

    return {
      isVisible,
      onClickCheckbox,
    };
  },
});
</script>

<style>
.filter__label {
  border-radius: inherit;

  @apply tw-h-full
  tw-flex
  tw-justify-between
  tw-items-center
  tw-py-1
  tw-px-2
  tw-border
  tw-border-solid
  tw-border-gray-800
  hover:tw-cursor-pointer;
}

.filter__item {
  @apply tw-h-9
  tw-w-full;
}
</style>
