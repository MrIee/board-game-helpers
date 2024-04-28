<template>
  <Topbar title="Wreck Raiders Dice Roller" />
    <div class="tw-flex tw-justify-center tw-mt-20 tw-mb-3">
      <span class="tw-mr-2">Number of players:</span>
      <select @change="setNumberOfGameComponents">
        <option value="5">2</option>
        <option value="4">3</option>
        <option value="5">4</option>
        <option value="6">5</option>
        <option value="6">solo</option>
      </select>
    </div>
    <div class="tw-flex tw-flex-row-reverse sm:tw-flex-col tw-justify-center">
      <div class="tw-flex tw-flex-col sm:tw-flex-row tw-justify-center">
        <div
          v-for="(shell, index) in seashells"
          :key="index"
          class="tw-h-[72px] sm:tw-h-24 tw-w-[72px] sm:tw-w-24 tw-m-1 tw-border-[3px] tw-border-white tw-rounded-lg"
        >
          <img v-if="shell" class="tw-p-2" :src="getSeashellUrl(shell)" :alt="shell" />
        </div>
      </div>
      <div class="tw-flex tw-flex-col sm:tw-flex-row tw-justify-center">
        <Dice v-for="die in dice" :index="die" :number="die" />
      </div>
    </div>
    <div class="tw-flex tw-justify-center tw-mt-3">
      <button @click="rollDicePool">Roll</button>
    </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Topbar from './components/Topbar.vue';
import Footer from './components/Footer.vue';
import Dice from './components/Dice.vue';

export default defineComponent({
  components: {
    Topbar,
    Footer,
    Dice,
  },
  data() {
    return {
      dice: [0, 0, 0, 0, 0],
      seashells: ['', '', '', '', ''],
      seashellTypes: ['conch', 'scallop', 'starfish'],
    };
  },
  methods: {
    getSeashellUrl(shell: string): string {
      return `../src/assets/images/${shell}.png`;
    },
    getRandomNumber(max = 6): number {
      return Math.ceil(Math.random() * max);
    },
    setNumberOfGameComponents(event: Event): void {
      const number: number = parseInt((event.target as HTMLInputElement).value, 10);
      this.dice = new Array<number>;
      this.seashells = new Array<string>;

      for (let i: number = 0; i < number; i++) {
        this.dice.push(0);
        this.seashells.push('');
      }
    },
    async makeDieRoll(callback: (number: number) => void): Promise<void> {
      let rolledNumber: number = 0;
      const delay: number = 150;
      const numberOfSideOnDie: number = 6;
      const wait = (): Promise<void> =>
        new Promise((resolve) => setTimeout(resolve, delay));

      for (let i = 1; i <= numberOfSideOnDie; i++) {
        rolledNumber = this.getRandomNumber();
        callback && callback(rolledNumber);
        await wait();
      }

      return Promise.resolve();
    },
    async rollDice(): Promise<void> {
      return new Promise((resolve) => {
        this.dice.forEach(async (_dice, index: number) => {
          const callback = (number: number) => {
            this.dice[index] = number;
          };

          await this.makeDieRoll(callback);
          resolve();
        });
      });
    },
    setSeashellType(index: number): void {
      const maxProbability: number = 3;
      const type: number = this.getRandomNumber(maxProbability);
      this.seashells[index] = this.seashellTypes[type - 1];
    },
    setSeashell(index: number): void {
      const maxProbability: number = 100;
      const shellProbability: number = 25;
      const chance = this.getRandomNumber(maxProbability);

      if (chance > 0 && chance <= shellProbability) {
        this.setSeashellType(index);
      } else {
        this.seashells[index] = '';
      }
    },
    async rollDicePool(): Promise<void> {
      await this.rollDice();

      this.seashells.forEach((_shell, index: number) => {
        this.setSeashell(index);
      });
    },
  }
});
</script>
