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
          :for="item.value"
        >
          <input
            type="checkbox"
            :id="item.value"
            :checked="isFilterChecked(item.value)"
            @change="onClickFilter(item)"
          />
          {{ item.label }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Chevron from '../components/icons/Chevron.vue';
import { FilterItem } from '../util/interfaces';

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
      type: Array<FilterItem>,
      required: true,
    },
    filterList: {
      type: Array<FilterItem>,
      default: () => [],
    },
  },
  setup(props, ctx) {
    const isVisible = ref<boolean>(false);

    const onClickFilter = (filter: Object): void => {
      ctx.emit('filter', filter);
    };

    const isFilterChecked = (value: string): boolean =>
      props.filterList.some((filter: FilterItem): boolean => filter.value == value);

    return {
      isVisible,
      isFilterChecked,
      onClickFilter,
    };
  },
});
</script>

<style>
.filter__label {
  @apply tw-h-full
  tw-flex
  tw-justify-between
  tw-items-center
  tw-py-1
  tw-px-2
  tw-rounded
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
