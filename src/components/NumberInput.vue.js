/* __placeholder__ */
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
        value(value) {
            this.currentValue = value;
        },
        max(newValue, oldValue) {
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
        getInputElementValue() {
            const inputElement = this.$refs[this.inputRef];
            return inputElement.value;
        },
        setInputElementValue(value) {
            const inputElement = this.$refs[this.inputRef];
            inputElement.value = value.toString();
            this.currentValue = value;
        },
        decrementValue() {
            if (this.disableControls) {
                return;
            }
            this.setInputElementValue(parseInt(this.getInputElementValue()) - 1);
            this.validateInput();
            this.$emit('decrement');
        },
        incrementValue() {
            if (this.disableControls) {
                return;
            }
            this.setInputElementValue(parseInt(this.getInputElementValue()) + 1);
            this.validateInput();
            this.$emit('increment');
        },
        onMouseWheel(event) {
            const inputElement = this.$refs[this.inputRef];
            if (inputElement === document.activeElement) {
                event.preventDefault();
                const deltaY = event.deltaY;
                if (deltaY > 0) {
                    this.setInputElementValue(this.currentValue - 1);
                }
                else {
                    this.setInputElementValue(this.currentValue + 1);
                }
                this.validateInput();
            }
        },
        emitUpdateEvent() {
            if (this.modelValue) {
                this.$emit('update:modelValue', this.currentValue);
            }
            this.$emit('update', this.currentValue);
        },
        validateInput() {
            const value = this.getInputElementValue();
            const inputFilter = /^\d*$/.test(value);
            this.currentValue = parseInt(value);
            if (inputFilter &&
                this.currentValue >= this.min &&
                this.currentValue <= this.max) {
                this.oldValue = this.currentValue;
            }
            else {
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
const __VLS_componentsOption = {};
const __VLS_name = undefined;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    /* CSS variable injection */
    /* CSS variable injection end */
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.input;
    const __VLS_0 = __VLS_intrinsicElements["div"];
    const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
    const __VLS_2 = __VLS_1({ ...{}, class: ("tw-inline-flex tw-relative"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{}, class: ("tw-inline-flex tw-relative"), }));
    const __VLS_5 = __VLS_intrinsicElements["input"];
    const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
    const __VLS_7 = __VLS_6({ ...{ 'onMousewheel': {}, 'onKeydown': {}, 'onKeydown': {}, 'onInput': {}, }, ref: ((__VLS_ctx.inputRef)), class: ("tw-w-14 tw-rounded-none tw-text-center"), type: ("number"), value: ((__VLS_ctx.modelValue || __VLS_ctx.value)), inputmode: ("numeric"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    ({}({ ...{ 'onMousewheel': {}, 'onKeydown': {}, 'onKeydown': {}, 'onInput': {}, }, ref: ((__VLS_ctx.inputRef)), class: ("tw-w-14 tw-rounded-none tw-text-center"), type: ("number"), value: ((__VLS_ctx.modelValue || __VLS_ctx.value)), inputmode: ("numeric"), }));
    let __VLS_10 = { 'mousewheel': __VLS_pickEvent(__VLS_8['mousewheel'], {}.onMousewheel) };
    __VLS_10 = { mousewheel: (__VLS_ctx.onMouseWheel) };
    let __VLS_11 = { 'keydown': __VLS_pickEvent(__VLS_8['keydown'], {}.onKeydown) };
    __VLS_11 = { keydown: (__VLS_ctx.incrementValue) };
    let __VLS_12 = { 'keydown': __VLS_pickEvent(__VLS_8['keydown'], {}.onKeydown) };
    __VLS_12 = { keydown: (__VLS_ctx.decrementValue) };
    let __VLS_13 = { 'input': __VLS_pickEvent(__VLS_8['input'], {}.onInput) };
    __VLS_13 = { input: (__VLS_ctx.validateInput) };
    const __VLS_9 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    let __VLS_8;
    (__VLS_4.slots).default;
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    // @ts-ignore
    [inputRef, modelValue, value, onMouseWheel, incrementValue, decrementValue, validateInput,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('./NumberInput.vue')).default;
//# sourceMappingURL=NumberInput.vue.js.map