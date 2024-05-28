/* __placeholder__ */
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        number: {
            type: Number,
            default: 1,
        },
    },
    computed: {
        one() {
            return this.number === 1;
        },
        two() {
            return this.number === 2;
        },
        three() {
            return this.number === 3;
        },
        four() {
            return this.number === 4;
        },
        five() {
            return this.number === 5;
        },
        six() {
            return this.number === 6;
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    const __VLS_0 = __VLS_intrinsicElements["div"];
    const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
    const __VLS_2 = __VLS_1({ ...{}, class: ("dice"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{}, class: ("dice"), }));
    if (!__VLS_ctx.one && !__VLS_ctx.two) {
        const __VLS_5 = __VLS_intrinsicElements["div"];
        const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
        const __VLS_7 = __VLS_6({ ...{}, class: ("dot-tl"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        ({}({ ...{}, class: ("dot-tl"), }));
        const __VLS_9 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        // @ts-ignore
        [one, two,];
    }
    if (__VLS_ctx.six) {
        const __VLS_10 = __VLS_intrinsicElements["div"];
        const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
        const __VLS_12 = __VLS_11({ ...{}, class: ("dot-ml"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
        ({}({ ...{}, class: ("dot-ml"), }));
        const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        // @ts-ignore
        [six,];
    }
    if (!__VLS_ctx.one && !__VLS_ctx.three) {
        const __VLS_15 = __VLS_intrinsicElements["div"];
        const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
        const __VLS_17 = __VLS_16({ ...{}, class: ("dot-bl"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
        ({}({ ...{}, class: ("dot-bl"), }));
        const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
        // @ts-ignore
        [one, three,];
    }
    if (!__VLS_ctx.two && !__VLS_ctx.four && !__VLS_ctx.six) {
        const __VLS_20 = __VLS_intrinsicElements["div"];
        const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
        const __VLS_22 = __VLS_21({ ...{}, class: ("dot-m"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
        ({}({ ...{}, class: ("dot-m"), }));
        const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
        // @ts-ignore
        [two, six, four,];
    }
    if (!__VLS_ctx.one && !__VLS_ctx.three) {
        const __VLS_25 = __VLS_intrinsicElements["div"];
        const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
        const __VLS_27 = __VLS_26({ ...{}, class: ("dot-tr"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
        ({}({ ...{}, class: ("dot-tr"), }));
        const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
        // @ts-ignore
        [one, three,];
    }
    if (__VLS_ctx.six) {
        const __VLS_30 = __VLS_intrinsicElements["div"];
        const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
        const __VLS_32 = __VLS_31({ ...{}, class: ("dot-mr"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        ({}({ ...{}, class: ("dot-mr"), }));
        const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
        // @ts-ignore
        [six,];
    }
    if (!__VLS_ctx.one && !__VLS_ctx.two) {
        const __VLS_35 = __VLS_intrinsicElements["div"];
        const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
        const __VLS_37 = __VLS_36({ ...{}, class: ("dot-br"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
        ({}({ ...{}, class: ("dot-br"), }));
        const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
        // @ts-ignore
        [one, two,];
    }
    (__VLS_4.slots).default;
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    // no auto imports;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('./Dice.vue')).default;
//# sourceMappingURL=Dice.vue.js.map