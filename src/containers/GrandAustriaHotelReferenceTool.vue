<template>
  <div class="theme-grand-austria-hotel">
    <div class="wrapper container tw-pt-12 sm:tw-pt-14">
      <div class="wrapper tw-flex tw-flex-col tw-fixed tw-bg-gah-tan tw-pt-6 sm:tw-pt-8">
        <div class="tw-w-full tw-flex tw-flex-col md:tw-flex-row">
          <input
            class="tw-h-9 tw-w-full tw-rounded tw-rounded-r-none tw-py-1 tw-px-2 tw-border tw-border-solid tw-border-gray-800"
            type="text"
            placeholder="Type a name or id to start searching"
            v-model="searchTerm"
          />
          <select
            class="tw-h-9 tw-w-full md:tw-w-1/4 tw-py-1 tw-px-2 tw-rounded tw-rounded-l-none tw-border tw-border-solid tw-border-gray-800 tw-border-l-0 hover:tw-cursor-pointer"
            v-model="listType"
          >
            <option
              v-for="(category, index) in categories"
              :key="index"
              :value="index"
            >
              {{ category }}
            </option>
          </select>
        </div>
        <div class="tw-w-full tw-flex tw-items-center">
          <CheckboxDropdown label="Expansions" :items="expansionsFilter" @select="applyFilter" />
          <CheckboxDropdown label="Modules" :items="modulesFilter" @select="applyFilter" />
          <a class="tw-mx-2" @click="resetFilters">Reset filters</a>
        </div>
      </div>
      <div
        :class="{
          'tw-flex tw-flex-wrap tw-mt-36 sm:tw-mt-[115px]': true,
          'tw-pt-px tw-pl-px': columns > 1,
        }"
      >
        <div
          :class="{
            'tw-w-full': true,
            'tw-border-b tw-border-solid tw-border-gray-800 last:tw-border-b-0': columns === 1,
            'sm:tw-w-1/2': columns === 2,
            'sm:tw-w-1/2 md:tw-w-1/4': columns === 4,
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
import CheckboxDropdown from '../components/CheckboxDropdown.vue';
import InfoCard from '../components/InfoCard.vue';
import InfoCardWithImage from '../components/InfoCardWithImage.vue';
import { InfoItem, ImageModule, FilterItem } from '../util/interfaces';
import staffJSON from '../assets/json/GrandAustriaHotel/staff.json';
import guestsJSON from '../assets/json/GrandAustriaHotel/guests.json';
import objectivesJSON from '../assets/json/GrandAustriaHotel/objectives.json';
import emperorTilesJSON from '../assets/json/GrandAustriaHotel/emperor_tiles.json';
import ballroomsJSON from '../assets/json/GrandAustriaHotel/ballrooms.json';
import celebritiesJSON from '../assets/json/GrandAustriaHotel/celebrities.json';
import hotelEntrancesJSON from '../assets/json/GrandAustriaHotel/hotel_entrances.json';

export default defineComponent({
  components: {
    CheckboxDropdown,
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
    const hotelEntrancesList = ref<Array<InfoItem>>(hotelEntrancesJSON);
    const list = ref<Array<InfoItem>>([]);
    const listType = ref<string>('0');
    const columns = ref<number>(1);
    const isColumnView = ref<boolean>(false);
    const categories = ref<Array<string>>([
      'Staff',
      'Guests',
      'Objectives',
      'Emperor Tiles',
      'Ballrooms',
      'Celebrities',
      'Hotel Entrances',
    ]);

    onMounted((): void => {
      list.value = staffList.value;
    });

    const images = import.meta.glob('../assets/images/**/*[.jpg, .png]');

    const updateImageUrls = async (list: Array<InfoItem>): Promise<void> => {
      list.forEach(async (item: InfoItem) => {
        const fullPath = await images[item.imageUrl as string]();
        item.imageUrl = (fullPath as ImageModule).default;
      });
    };

    updateImageUrls(objectivesList.value);
    updateImageUrls(emperorTilesList.value);

    const filterList = ref<Array<FilterItem>>([]);
    const expansionsFilter = ref<Array<FilterItem>>([
      {
        type: 'expansion',
        value: 'Let\'s Waltz',
        label: 'Let\'s Waltz',
        checked: false,
      },
    ]);

    const modulesFilter = ref<Array<FilterItem>>([
      {
        type: 'module',
        value: '1',
        label: 'Vienna Ballrooms',
        checked: false,
      },
      {
        type: 'module',
        value: '5',
        label: 'Would you like some more?',
        checked: false,
      },
    ]);

    const applyFilter = (filter: FilterItem): void => {
      let index: number = -1;

      filter.checked = !filter.checked;

      filterList.value.forEach((f: FilterItem, i: number) => {
        if (f.value === filter.value) {
          index = i;
        }
      });

      if (index === -1) {
        filterList.value.push(filter);
      } else {
        filterList.value.splice(index, 1);
      }
    };

    const filteredList = computed((): Array<InfoItem> => {
      let listFiltered: Array<InfoItem> = list.value;

      if (filterList.value.length > 0) {
        listFiltered = list.value.filter((item: InfoItem) =>
          filterList.value.every((filter: FilterItem): boolean =>
            item[filter.type as keyof InfoItem] === filter.value
        ));
      }

      return listFiltered.filter((item: InfoItem) => {
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

    const resetFilters = (): void => {
      filterList.value = [];

      expansionsFilter.value.forEach((filter: FilterItem): void => {
        filter.checked = false;
      });

      modulesFilter.value.forEach((filter: FilterItem): void => {
        filter.checked = false;
      });
    }

    watch(listType, (type: string): void => {
      const categoryType = parseInt(type, 10);
      searchTerm.value = '';

      switch (categoryType) {
        case 0:
          list.value = staffList.value;
          columns.value = 1;
          isColumnView.value = false;
          break;
        case 1:
          list.value = guestList.value;
          columns.value = 1;
          isColumnView.value = false;
          break;
        case 2:
          list.value = objectivesList.value;
          columns.value = 4;
          isColumnView.value = true;
          break;
        case 3:
          list.value = emperorTilesList.value;
          columns.value = 2;
          isColumnView.value = false;
          break;
        case 4:
          list.value = ballroomList.value;
          columns.value = 1;
          isColumnView.value = false;
          break;
        case 5:
          list.value = celebrityist.value;
          columns.value = 1;
          isColumnView.value = false;
          break;
        case 6:
          list.value = hotelEntrancesList.value;
          columns.value = 1;
          isColumnView.value = false;
          break;
      }
    });

    return {
      searchTerm,
      expansionsFilter,
      modulesFilter,
      applyFilter,
      resetFilters,
      categories,
      listType,
      filteredList,
      isColumnView,
      columns,
    }
  },
});
</script>