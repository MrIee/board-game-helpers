<template>
  <div class="wrapper container tw-pt-12 sm:tw-pt-14">
    <div class="tw-mt-5 tw-text-center">
      <button class="tw-mb-3" @click="getScoringEdicts">Generate Random Scoring Cards</button>
    </div>
    <div class="tw-flex tw-flex-wrap">
      <div
        class="tw-w-1/2 md:tw-w-1/4 tw-flex tw-flex-col tw-items-center tw-mb-3"
        v-for="key in Object.keys(edictRules)"
        :key="key"
      >
        <img class="tw-w-24 tw-mb-2 tw-rounded-3xl" :src="edictImgUrls[key as keyof object]" :alt="key" />
        <strong v-if="edictRules[key as keyof typeof edictRules].name" class="tw-mb-2">
          {{ edictRules[key as keyof typeof edictRules].name }}
        </strong>
        <img
          v-if="edictRules[key as keyof typeof edictRules].module"
          :src="getScoreCardTypeThumbnailUrl(edictRules[key as keyof typeof edictRules].module as string)"
          :alt="edictRules[key as keyof typeof edictRules].module"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import edictAImgUrl from '../assets/images/cartographers/a.jpg';
import edictBImgUrl from '../assets/images/cartographers/b.jpg';
import edictCImgUrl from '../assets/images/cartographers/c.jpg';
import edictDImgUrl from '../assets/images/cartographers/d.jpg';
import forestTypeImgUrl from '../assets/images/cartographers/forest.png';
import villageTypeImgUrl from '../assets/images/cartographers/village.png';
import farmWaterTypeImgUrl from '../assets/images/cartographers/farm-water-type.png';
import gridTypeImgUrl from '../assets/images/cartographers/grid.png';
import { RandomItemResult, InfoItem } from '../util/interfaces';
import { pickXRandomItems, shuffle } from '../util/util';
import scoringCards from '../assets/json/Cartographers/scoring_cards.json';

export default defineComponent({
  setup() {
    interface ScoringCardCategories {
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

    const scoringCardsSortedByCategory: ScoringCardCategories = {
      forest: [],
      water: [],
      village: [],
      grid: [],
    };

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

    scoringCards.forEach((item: InfoItem): void => {
      Object.keys(scoringCardsSortedByCategory).forEach((category: string): void => {
        if (item.module?.toLowerCase() === category.toLowerCase()) {
          scoringCardsSortedByCategory[category as keyof ScoringCardCategories].push(item);
        }
      })
    });

    const getRandomScoringCards = (): Array<any> => {
      const pickedCards: Array<InfoItem> = [];

      Object.keys(scoringCardsSortedByCategory).forEach((category: string): void => {
        const res: RandomItemResult =
          pickXRandomItems(scoringCardsSortedByCategory[category as keyof ScoringCardCategories], 1);

        pickedCards.push(res.pickedItems[0]);
      });

      return pickedCards;
    };

    const getScoringEdicts = (): void => {
      const pickedCards: Array<InfoItem> = getRandomScoringCards();
      shuffle(pickedCards);

      Object.keys(edictRules.value).forEach((key: string, index: number) => {
        edictRules.value[key as keyof EdictRules] = pickedCards[index];
      });
    }

    const getScoreCardTypeThumbnailUrl = (type: string): string => {
      console.log('type:', type);
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

    return {
      getScoreCardTypeThumbnailUrl,
      edictImgUrls,
      edictRules,
      getScoringEdicts,
    };
  },
});
</script>