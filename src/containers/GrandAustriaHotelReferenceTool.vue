<template>
  <div class="theme-grand-austria-hotel">
    <div class="wrapper container">
      <div class="tw-w-full tw-flex tw-mb-5">
        <input
          class="tw-w-full tw-rounded tw-rounded-r-none tw-py-1 tw-px-2 tw-border tw-border-solid tw-border-gray-800"
          type="text"
          placeholder="Type a name or id to start searching"
          v-model="searchTerm"
        />
        <select
          class="tw-w-1/4 tw-rounded tw-rounded-l-none tw-border tw-border-solid tw-border-gray-800 tw-border-l-0"
          v-model="listType"
        >
          <option value="0">Staff</option>
          <option value="1">Guests</option>
        </select>
      </div>
      <InfoCard
        v-for="item in filteredList"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :description="item.description"
        :notes="item.notes"
        :imageUrl="item.imageUrl"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, onMounted  } from 'vue';
import InfoCard from '../components/InfoCard.vue';
import { InfoItem } from '../util/interfaces';
import staffJSON from '../assets/json/GrandAustriaHotel/staff.json';
import guestsJSON from '../assets/json/GrandAustriaHotel/guests.json';

export default defineComponent({
  components: {
    InfoCard,
  },
  setup() {
    const searchTerm = ref<string>('');
    const staffList = ref<Array<InfoItem>>(staffJSON);
    const guestList = ref<Array<InfoItem>>(guestsJSON);
    const list = ref<Array<InfoItem>>([]);
    const listType = ref<string>('0');

    onMounted((): void => {
      list.value = staffList.value;
    });

    const filteredList = computed((): Array<InfoItem> => {
      return list.value.filter((item: InfoItem) => {
        if (!searchTerm.value) {
          return true;
        }

        const id = searchTerm.value.replace(/[^0-9]/g, '');

        if (item.id.toString() === id) {
          return true;
        }

        if (item.name.toLowerCase().indexOf(searchTerm.value.toLowerCase()) > -1) {
          return true;
        }
      });
    });

    watch(listType, (type: string): void => {
      searchTerm.value = '';

      switch (type) {
        case '0':
          list.value = staffList.value;
          break;
        case '1':
          list.value = guestList.value;
          break;
      }
    });

    return {
      searchTerm,
      listType,
      filteredList,
    }
  },
});
</script>