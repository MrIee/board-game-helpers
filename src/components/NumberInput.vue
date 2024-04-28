<template>
  <div class="tw-inline-flex tw-relative">
    <input
      :ref="inputRef"
      class="tw-w-14 tw-rounded-none tw-text-center"
      type="number"
      :value="modelValue || value"
      inputmode="numeric"
      @mousewheel="onMouseWheel"
      @keydown.up="incrementValue"
      @keydown.down="decrementValue"
      @input="validateInput"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: Number,
      default: 0,
    },
    modelValue: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 99,
    },
    min: {
      type: Number,
      default: 0,
    },
    disableControls: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputRef: 'js-number-input',
      currentValue: this.value,
      oldValue: this.value,
    };
  },
  watch: {
    value(value: number): void {
      this.currentValue = value;
    },
    max(newValue: number, oldValue: number): void {
      if (newValue < oldValue) {
        this.$nextTick(() => {
          if (this.currentValue > this.max) {
            this.setInputElementValue(this.max);
          }
        });
      }
    },
  },
  methods: {
    getInputElementValue(): string {
      const inputElement = this.$refs[this.inputRef] as HTMLInputElement;
      return inputElement.value;
    },
    setInputElementValue(value: number): void {
      const inputElement = this.$refs[this.inputRef] as HTMLInputElement;
      inputElement.value = value.toString();
      this.currentValue = value;
    },
    decrementValue(): void {
      if (this.disableControls) {
        return;
      }

      this.setInputElementValue(parseInt(this.getInputElementValue()) - 1);
      this.validateInput();
      this.$emit('decrement');
    },
    incrementValue(): void {
      if (this.disableControls) {
        return;
      }

      this.setInputElementValue(parseInt(this.getInputElementValue()) + 1);
      this.validateInput();
      this.$emit('increment');
    },
    onMouseWheel(event: WheelEvent): void {
      const inputElement = this.$refs[this.inputRef] as HTMLInputElement;

      if (inputElement === document.activeElement) {
        event.preventDefault();
        const deltaY = (event as WheelEvent).deltaY;

        if (deltaY > 0) {
          this.setInputElementValue(this.currentValue - 1);
        } else {
          this.setInputElementValue(this.currentValue + 1);
        }

        this.validateInput();
      }
    },
    emitUpdateEvent(): void {
      if (this.modelValue) {
        this.$emit('update:modelValue', this.currentValue);
      }

      this.$emit('update', this.currentValue);
    },
    validateInput(): void {
      const value = this.getInputElementValue();
      const inputFilter = /^\d*$/.test(value);
      this.currentValue = parseInt(value);

      if (
        inputFilter &&
        this.currentValue >= this.min &&
        this.currentValue <= this.max
      ) {
        this.oldValue = this.currentValue;
      } else {
        this.setInputElementValue(this.oldValue);
      }

      if (value === '') {
        this.setInputElementValue(0);
      }

      this.$emit('update:modelValue', this.currentValue);
      this.$emit('update', this.currentValue);
    },
  },
});
</script>
