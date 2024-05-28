/* __placeholder__ */
import { defineComponent, computed } from 'vue';
export default defineComponent({
    props: {
        display: {
            type: String,
            validator(value) {
                return ['row', 'col'].includes(value);
            },
            default: 'col',
        },
        id: {
            type: String,
        },
        name: {
            type: String,
        },
        description: {
            type: String,
            required: true,
        },
        notes: {
            type: String,
        },
        imageUrl: {
            type: String,
        },
    },
    setup(props) {
        const infoNotes = computed(() => {
            return `Note: ${props.notes}`;
        });
        return {
            infoNotes,
        };
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.strong;
    __VLS_intrinsicElements.strong;
    __VLS_intrinsicElements.strong;
    __VLS_intrinsicElements.strong;
    const __VLS_0 = __VLS_intrinsicElements["div"];
    const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
    const __VLS_2 = __VLS_1({ ...{}, class: (({
            'infoCardWithImage': true,
            [`tw-flex-${__VLS_ctx.display}`]: true,
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{}, class: (({
            'infoCardWithImage': true,
            [`tw-flex-${__VLS_ctx.display}`]: true,
        })), }));
    if (__VLS_ctx.imageUrl) {
        const __VLS_5 = __VLS_intrinsicElements["img"];
        const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
        const __VLS_7 = __VLS_6({ ...{}, class: (({
                'tw-max-w-72 tw-self-center md:tw-self-auto tw-p-3': true,
                'tw-w-[30%] tw-mb-auto': __VLS_ctx.display === 'row',
            })), src: ((__VLS_ctx.imageUrl)), alt: ("thumbnail"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        ({}({ ...{}, class: (({
                'tw-max-w-72 tw-self-center md:tw-self-auto tw-p-3': true,
                'tw-w-[30%] tw-mb-auto': __VLS_ctx.display === 'row',
            })), src: ((__VLS_ctx.imageUrl)), alt: ("thumbnail"), }));
        const __VLS_9 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        // @ts-ignore
        [display, display, imageUrl, imageUrl,];
    }
    const __VLS_10 = __VLS_intrinsicElements["div"];
    const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
    const __VLS_12 = __VLS_11({ ...{}, class: (({
            'tw-flex': true,
            'tw-flex-col': __VLS_ctx.imageUrl,
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    ({}({ ...{}, class: (({
            'tw-flex': true,
            'tw-flex-col': __VLS_ctx.imageUrl,
        })), }));
    if (__VLS_ctx.id || __VLS_ctx.name) {
        const __VLS_15 = __VLS_intrinsicElements["div"];
        const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
        const __VLS_17 = __VLS_16({ ...{}, class: ("tw-flex tw-border-b tw-border-b-gray-800 tw-border-solid md:tw-border-none"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
        ({}({ ...{}, class: ("tw-flex tw-border-b tw-border-b-gray-800 tw-border-solid md:tw-border-none"), }));
        if (__VLS_ctx.id) {
            const __VLS_20 = __VLS_intrinsicElements["div"];
            const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
            const __VLS_22 = __VLS_21({ ...{}, class: ("infoCell tw-min-w-12 tw-max-w-12 tw-border-r tw-border-solid tw-border-gray-800"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
            ({}({ ...{}, class: ("infoCell tw-min-w-12 tw-max-w-12 tw-border-r tw-border-solid tw-border-gray-800"), }));
            const __VLS_25 = __VLS_intrinsicElements["strong"];
            const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
            const __VLS_27 = __VLS_26({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
            ({}({ ...{}, }));
            (__VLS_ctx.id);
            (__VLS_29.slots).default;
            const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
            (__VLS_24.slots).default;
            const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
            // @ts-ignore
            [imageUrl, id, id, id, name,];
        }
        if (__VLS_ctx.name) {
            const __VLS_30 = __VLS_intrinsicElements["div"];
            const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
            const __VLS_32 = __VLS_31({ ...{}, class: ("infoCell tw-min-w-40 tw-max-w-40"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
            ({}({ ...{}, class: ("infoCell tw-min-w-40 tw-max-w-40"), }));
            const __VLS_35 = __VLS_intrinsicElements["strong"];
            const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
            const __VLS_37 = __VLS_36({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
            ({}({ ...{}, }));
            (__VLS_ctx.name);
            (__VLS_39.slots).default;
            const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
            (__VLS_34.slots).default;
            const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
            // @ts-ignore
            [name, name,];
        }
        (__VLS_19.slots).default;
        const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
        // no auto imports;
    }
    const __VLS_40 = __VLS_intrinsicElements["div"];
    const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
    const __VLS_42 = __VLS_41({ ...{}, class: (({
            'infoCell tw-w-full md:tw-border-l tw-border-solid tw-border-gray-800': true,
            'tw-border-none': __VLS_ctx.imageUrl,
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    ({}({ ...{}, class: (({
            'infoCell tw-w-full md:tw-border-l tw-border-solid tw-border-gray-800': true,
            'tw-border-none': __VLS_ctx.imageUrl,
        })), }));
    const __VLS_45 = __VLS_intrinsicElements["div"];
    const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
    const __VLS_47 = __VLS_46({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_46));
    ({}({ ...{}, }));
    __VLS_directiveFunction(__VLS_ctx.vHtml)((__VLS_ctx.description));
    const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
    if (__VLS_ctx.notes) {
        const __VLS_50 = __VLS_intrinsicElements["div"];
        const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
        const __VLS_52 = __VLS_51({ ...{}, class: ("tw-w-full tw-p-2 tw-mt-1.5 tw-bg-white tw-rounded-md tw-border tw-border-solid tw-border-gray-800"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
        ({}({ ...{}, class: ("tw-w-full tw-p-2 tw-mt-1.5 tw-bg-white tw-rounded-md tw-border tw-border-solid tw-border-gray-800"), }));
        __VLS_directiveFunction(__VLS_ctx.vHtml)((__VLS_ctx.infoNotes));
        const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
        // @ts-ignore
        [imageUrl, vHtml, vHtml, description, notes, infoNotes,];
    }
    (__VLS_44.slots).default;
    const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
    (__VLS_14.slots).default;
    const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
    (__VLS_4.slots).default;
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    // no auto imports;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('./InfoCardWithImage.vue')).default;
//# sourceMappingURL=InfoCardWithImage.vue.js.map