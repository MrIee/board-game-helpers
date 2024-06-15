<template>
  <div class="wrapper container tw-pt-12 sm:tw-pt-14">
    <div class="tw-flex tw-flex-col sm:tw-flex-row tw-justify-center sm:tw-mt-5 tw-mb-3">
      <button
        class="tw-hidden sm:tw-block tw-h-9 tw-py-1 tw-px-2 tw-rounded tw-rounded-r-none"
        @click="getScoringEdicts"
      >
        Generate Random Scoring Cards
      </button>
      <CheckboxDropdown
        class="sm:tw-rounded-l-none"
        label="Choose your expansions"
        :items="scoreCardGroups"
        @select="onClickScoreCardGroup"
      />
    </div>
    <div v-if="isScoringCardsEmpty" class="tw-text-center">
      Can't randomize with no score cards added. Please at least one expansion/group of score cards.
    </div>
    <div v-else class="tw-flex tw-flex-wrap">
      <div
        v-for="key in Object.keys(edictRules)"
        :key="key"
        class="tw-w-1/2 md:tw-w-1/4 tw-flex tw-flex-col tw-items-center tw-mb-3"
      >
        <div class="tw-flex sm:tw-flex-col tw-items-end sm:tw-items-center tw-mb-2 sm:tw-mb-1">
          <img class="tw-w-24 tw-rounded-3xl sm:tw-mb-2 tw-mr-3 sm:tw-mr-0" :src="edictImgUrls[key as keyof object]" :alt="key" />
          <img
            v-if="edictRules[key as keyof typeof edictRules].module"
            :src="getScoreCardTypeThumbnailUrl(edictRules[key as keyof typeof edictRules].module as string)"
            :alt="edictRules[key as keyof typeof edictRules].module"
          />
        </div>
        <div>
          <strong v-if="edictRules[key as keyof typeof edictRules].name" class="tw-mb-2 tw-text-center">
            {{ edictRules[key as keyof typeof edictRules].name }}
          </strong>
        </div>
      </div>
      <div v-if="beacon.hasOwnProperty('name')" class="tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center">
        <img :src="beaconTypeImgUrl" alt="beacon" />
        <strong>{{ beacon.name }}</strong>
      </div>
    </div>
    <button
      class="sm:tw-hidden tw-h-9 tw-py-1 tw-px-2 tw-mt-3 tw-rounded tw-rounded-r-none"
      @click="getScoringEdicts"
    >
      Generate Random Scoring Cards
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import CheckboxDropdown from '../components/CheckboxDropdown.vue';
import edictAImgUrl from '../assets/images/cartographers/a.jpg';
import edictBImgUrl from '../assets/images/cartographers/b.jpg';
import edictCImgUrl from '../assets/images/cartographers/c.jpg';
import edictDImgUrl from '../assets/images/cartographers/d.jpg';
import forestTypeImgUrl from '../assets/images/cartographers/forest.png';
import villageTypeImgUrl from '../assets/images/cartographers/village.png';
import farmWaterTypeImgUrl from '../assets/images/cartographers/farm-water-type.png';
import gridTypeImgUrl from '../assets/images/cartographers/grid.png';
import beaconTypeImgUrl from '../assets/images/cartographers/beacon.png';
import { RandomItemResult, InfoItem, CheckboxItem } from '../util/interfaces';
import { pickXRandomItems, shuffle } from '../util/util';
import baseCards from '../assets/json/Cartographers/scoring_cards.json';
import heroesCards from '../assets/json/Cartographers/scoring_cards_heroes.json';
import affrilCards from '../assets/json/Cartographers/scoring_cards_affril.json';
import undercityCards from '../assets/json/Cartographers/scoring_cards_undercity.json';
import kethraCards from '../assets/json/Cartographers/scoring_cards_kethra.json';

interface ScoringCards {
  forest: Array<InfoItem>;
  water: Array<InfoItem>;
  village: Array<InfoItem>;
  grid: Array<InfoItem>;
}

interface EdictRules {
  a: InfoItem;
  b: InfoItem;
  c: InfoItem;
  d: InfoItem;
}

export default defineComponent({
  components: {
    CheckboxDropdown,
  },
  setup() {
    const scoringCards = ref<ScoringCards>({
      forest: [],
      water: [],
      village: [],
      grid: [],
    });

    const beacon = ref<InfoItem>({} as InfoItem);

    const edictRules = ref<EdictRules>({
      a: {} as InfoItem,
      b: {} as InfoItem,
      c: {} as InfoItem,
      d: {} as InfoItem
    });

    const edictImgUrls = ref<object>({
      a: edictAImgUrl,
      b: edictBImgUrl,
      c: edictCImgUrl,
      d: edictDImgUrl,
    });

    const scoreCardGroups = ref<Array<CheckboxItem>>([
      {
        label: 'Choose Any',
      },
      {
        value: baseCards,
        label: 'Base',
        checked: true,
        exclusive: false,
      },
      {
        value: heroesCards,
        label: 'Heroes',
        checked: false,
        exclusive: false,
      },
      {
        value: kethraCards,
        label: 'Kethra\'s Steppe',
        checked: false,
        exclusive: false,
      },
      {
        label: 'Choose One',
      },
      {
        value: affrilCards,
        label: 'Affril',
        checked: false,
        exclusive: true,
      },
      {
        value: undercityCards,
        label: 'Undercity',
        checked: false,
        exclusive: true,
      },
    ]);

    onMounted((): void => {
      addCardsIntoCategories(baseCards);
    });

    const addCardsIntoCategories = (cards: Array<InfoItem>): void => {
      cards.forEach((item: InfoItem): void => {
        const key = item.module?.toLowerCase() as keyof ScoringCards;
        const scoringCardsKeys = Object.keys(scoringCards.value);

        if (scoringCardsKeys.indexOf(key) > -1) {
          scoringCards.value[key].push(item);
        }
      });
    };

    const removeCardsByCategory = (category: string): void => {
      Object.keys(scoringCards.value).forEach((k: string): void => {
        const key = k as keyof ScoringCards;

        scoringCards.value[key] =
          scoringCards.value[key].filter((item: InfoItem) =>
            item.module?.toLowerCase() !== category.toLowerCase());
      });
    };

    const getRandomScoringCards = (): Array<any> => {
      const pickedCards: Array<InfoItem> = [];

      Object.keys(scoringCards.value).forEach((category: string): void => {
        const key = category as keyof ScoringCards;
        const res: RandomItemResult =
          pickXRandomItems(scoringCards.value[key], 1);

        pickedCards.push(res.pickedItems[0]);
      });

      return pickedCards;
    };

    const assignRandomBeacon = (cardGroup: CheckboxItem): void => {
      if (cardGroup.value && cardGroup.value[0].module?.toLowerCase() === 'beacon') {
        if (cardGroup.checked) {
            const res = pickXRandomItems(cardGroup.value, 1);
            beacon.value = res.pickedItems[0];
        } else {
          beacon.value = {} as InfoItem;
        }
      }
    };

    const getScoringEdicts = (): void => {
      if (isScoringCardsEmpty.value) {
        return;
      }

      const pickedCards: Array<InfoItem> = getRandomScoringCards();
      shuffle(pickedCards);

      Object.keys(edictRules.value).forEach((key: string, index: number) => {
        edictRules.value[key as keyof EdictRules] = pickedCards[index];
      });

      scoreCardGroups.value.forEach((group: CheckboxItem): void => {
        assignRandomBeacon(group);
      });
    }

    const getScoreCardTypeThumbnailUrl = (type: string): string => {
      let imgUrl: string = '';
      switch (type.toLowerCase()) {
        case 'forest':
          imgUrl = forestTypeImgUrl;
          break;
        case 'village':
          imgUrl = villageTypeImgUrl;
          break;
        case 'water':
          imgUrl = farmWaterTypeImgUrl;
          break;
        case 'grid':
          imgUrl = gridTypeImgUrl;
          break;
      }

      return imgUrl;
    };

    const addExclusiveExpansion = (cardGroup: CheckboxItem): void => {
      const exlusiveExpansions = ['Affril', 'Undercity'];

      if (exlusiveExpansions.indexOf(cardGroup.label) > -1) {
        removeCardsByCategory('grid');
        addCardsIntoCategories(cardGroup.value);
      }
    };

    const onClickScoreCardGroup = (cardGroup: CheckboxItem): void => {
      cardGroup.checked = !cardGroup.checked;

      Object.keys(scoringCards.value).forEach((key: string) => {
        scoringCards.value[key as keyof ScoringCards] = [];
      });

      scoreCardGroups.value.forEach((group: CheckboxItem): void => {
        if (group.checked) {
          if (!group.exclusive) {
            addCardsIntoCategories(group.value);
          }

          if (cardGroup.exclusive) {
            if (group.exclusive && group.label !== cardGroup.label) {
              group.checked = false;
            } else {
              addExclusiveExpansion(cardGroup);
            }
          }
        }
      });
    };

    const isScoringCardsEmpty = computed((): boolean => {
      return Object.keys(scoringCards.value).every((category: string): boolean => {
        return scoringCards.value[category as keyof ScoringCards].length === 0;
      });
    });

    return {
      getScoreCardTypeThumbnailUrl,
      edictImgUrls,
      edictRules,
      beacon,
      getScoringEdicts,
      scoreCardGroups,
      onClickScoreCardGroup,
      isScoringCardsEmpty,
      beaconTypeImgUrl,
    };
  },
});
</script>