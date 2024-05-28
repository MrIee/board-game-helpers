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
          <option value="2">Objectives</option>
          <option value="3">Emperor Tiles</option>
          <option value="4">Ballrooms</option>
          <option value="5">Celebrities</option>
        </select>
      </div>
      <div
        :class="{
          'tw-flex tw-flex-wrap': true,
          'tw-pt-px tw-pl-px': isColumnView,
        }"
      >
        <div
          :class="{
            'tw-w-full tw-border-b tw-border-solid tw-border-gray-800 last:tw-border-b-0': columns === 1,
            'tw-w-1/2': columns === 2,
            'tw-w-1/4': columns === 4,
          }"
          v-for="item in filteredList"
          :key="item.uid"
        >
          <InfoCardWithImage
            v-if="item.imageUrl"
            :display="isColumnView ? 'col' : 'row'"
            :id="item.id"
            :name="item.name"
            :description="item.description"
            :notes="item.notes"
            :imageUrl="item.imageUrl"
          />
          <InfoCard
            v-else
            :id="item.id"
            :name="item.name"
            :description="item.description"
            :notes="item.notes"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, onMounted  } from 'vue';
import InfoCard from '../components/InfoCard.vue';
import InfoCardWithImage from '../components/InfoCardWithImage.vue';
import { InfoItem } from '../util/interfaces';
import staffJSON from '../assets/json/GrandAustriaHotel/staff.json';
import guestsJSON from '../assets/json/GrandAustriaHotel/guests.json';
import objectivesJSON from '../assets/json/GrandAustriaHotel/objectives.json';
import emperorTilesJSON from '../assets/json/GrandAustriaHotel/emperor_tiles.json';
import ballroomsJSON from '../assets/json/GrandAustriaHotel/ballrooms.json';
import celebritiesJSON from '../assets/json/GrandAustriaHotel/celebrities.json';

export default defineComponent({
  components: {
    InfoCard,
    InfoCardWithImage,
  },
  setup() {
    const searchTerm = ref<string>('');
    const staffList = ref<Array<InfoItem>>(staffJSON);
    const guestList = ref<Array<InfoItem>>(guestsJSON);
    const objectivesList = ref<Array<InfoItem>>(objectivesJSON);
    const emperorTilesList = ref<Array<InfoItem>>(emperorTilesJSON);
    const ballroomList = ref<Array<InfoItem>>(ballroomsJSON);
    const celebrityist = ref<Array<InfoItem>>(celebritiesJSON);
    const list = ref<Array<InfoItem>>([]);
    const listType = ref<string>('0');
    const columns = ref<number>(1);
    const isColumnView = ref<boolean>(false);

    onMounted((): void => {
      list.value = staffList.value;
    });

    const filteredList = computed((): Array<InfoItem> => {
      return list.value.filter((item: InfoItem) => {
        if (!searchTerm.value) {
          return true;
        }

        const id = searchTerm.value.replace(/[^0-9]/g, '');

        if (item.tag?.toLowerCase() === searchTerm.value.toLowerCase()) {
          return true;
        }

        if (item.id?.toString() === id) {
          return true;
        }

        if (item.name && item.name.toLowerCase().indexOf(searchTerm.value.toLowerCase()) > -1) {
          return true;
        }
      });
    });

    watch(listType, (type: string): void => {
      searchTerm.value = '';

      switch (type) {
        case '0':
          list.value = staffList.value;
          columns.value = 1;
          isColumnView.value = false;
          break;
        case '1':
          list.value = guestList.value;
          columns.value = 1;
          isColumnView.value = false;
          break;
        case '2':
          list.value = objectivesList.value;
          columns.value = 4;
          isColumnView.value = true;
          break;
        case '3':
          list.value = emperorTilesList.value;
          columns.value = 2;
          isColumnView.value = false;
          break;
        case '4':
          list.value = ballroomList.value;
          columns.value = 1;
          isColumnView.value = false;
          break;
        case '5':
          list.value = celebrityist.value;
          columns.value = 1;
          isColumnView.value = false;
          break;
      }
    });

    return {
      searchTerm,
      listType,
      filteredList,
      isColumnView,
      columns,
    }
  },
});
</script>