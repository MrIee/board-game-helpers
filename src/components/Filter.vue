<template>
  <div class="tw-relative tw-h-9 tw-bg-white tw-rounded" v-click-outside="() => isVisible = false">
  <div
    :class="{
      'filter__label': true,
      'tw-rounded-b-none': isVisible,
      }"
      @click="isVisible = !isVisible"
    >
      <span>{{ label }}</span>
      <Chevron class="tw-ml-2 tw-rotate-180" />
    </div>
    <ul
      :class="{
        'tw-w-full last:tw-rounded-b tw-bg-white tw-transition-all tw-delay-150 tw-ease-in-out tw-absolute': true,
        'tw-block': isVisible,
        'tw-hidden': !isVisible,
      }"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        class="filter__item"
      >
        <label class="tw-inline-block tw-h-full tw-w-full tw-py-1 tw-px-2 hover:tw-cursor-pointer" :for="item.value">
          <input
            type="checkbox"
            :id="item.value"
            @change="onClickFilter(item)"
          />
          {{ item.value }}
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
  },
  setup(_props, ctx) {
    const isVisible = ref<boolean>(false);

    const onClickFilter = (filter: Object): void => {
      ctx.emit('filter', filter);
    };

    return {
      isVisible,
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
  tw-w-full
  tw-border-x
  tw-border-solid
  tw-border-gray-800
  last:tw-rounded-b
  last:tw-border-b
  last:tw-border-solid
  last:tw-border-b-gray-800;
}
</style>
