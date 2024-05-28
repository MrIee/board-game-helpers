/* __placeholder__ */
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isExpanded: false,
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
    __VLS_intrinsicElements.nav;
    __VLS_intrinsicElements.nav;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.ul;
    __VLS_intrinsicElements.ul;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    const __VLS_0 = __VLS_intrinsicElements["nav"];
    const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
    const __VLS_2 = __VLS_1({ ...{}, class: ("topbar"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{}, class: ("topbar"), }));
    const __VLS_5 = __VLS_intrinsicElements["div"];
    const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
    const __VLS_7 = __VLS_6({ ...{}, class: ("wrapper tw-flex tw-items-center tw-flex-wrap tw-px-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    ({}({ ...{}, class: ("wrapper tw-flex tw-items-center tw-flex-wrap tw-px-3"), }));
    const __VLS_10 = __VLS_intrinsicElements["a"];
    const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
    const __VLS_12 = __VLS_11({ ...{ 'onClick': {}, }, for: ("topbar-menu"), class: ("topbar__nav-icon-wrapper"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    ({}({ ...{ 'onClick': {}, }, for: ("topbar-menu"), class: ("topbar__nav-icon-wrapper"), }));
    let __VLS_15 = { 'click': __VLS_pickEvent(__VLS_13['click'], {}.onClick) };
    __VLS_15 = { click: $event => {
            __VLS_ctx.isExpanded = !__VLS_ctx.isExpanded;
            // @ts-ignore
            [isExpanded, isExpanded,];
        }
    };
    const __VLS_16 = __VLS_intrinsicElements["span"];
    const __VLS_17 = __VLS_elementAsFunctionalComponent(__VLS_16);
    const __VLS_18 = __VLS_17({ ...{}, class: ("topbar__nav-icon"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    ({}({ ...{}, class: ("topbar__nav-icon"), }));
    const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
    (__VLS_14.slots).default;
    const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
    let __VLS_13;
    const __VLS_21 = __VLS_intrinsicElements["h2"];
    const __VLS_22 = __VLS_elementAsFunctionalComponent(__VLS_21);
    const __VLS_23 = __VLS_22({ ...{}, class: ("tw-text-base sm:tw-text-xl tw-mr-6"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    ({}({ ...{}, class: ("tw-text-base sm:tw-text-xl tw-mr-6"), }));
    const __VLS_26 = {}.RouterLink;
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{ 'onClick': {}, }, to: ("/"), }));
    ({}.RouterLink);
    ({}.RouterLink);
    const __VLS_28 = __VLS_27({ ...{ 'onClick': {}, }, to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ ...{ 'onClick': {}, }, to: ("/"), }));
    let __VLS_31 = { 'click': __VLS_pickEvent(__VLS_29['click'], {}.onClick) };
    __VLS_31 = { click: $event => {
            __VLS_ctx.isExpanded = false;
            // @ts-ignore
            [isExpanded,];
        }
    };
    (__VLS_ctx.title);
    (__VLS_30.slots).default;
    const __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    let __VLS_29;
    (__VLS_25.slots).default;
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23);
    const __VLS_32 = __VLS_intrinsicElements["div"];
    const __VLS_33 = __VLS_elementAsFunctionalComponent(__VLS_32);
    const __VLS_34 = __VLS_33({ ...{}, class: (({
            topbar__nav: true,
            'topbar__nav--expanded': __VLS_ctx.isExpanded,
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ ...{}, class: (({
            topbar__nav: true,
            'topbar__nav--expanded': __VLS_ctx.isExpanded,
        })), }));
    const __VLS_37 = __VLS_intrinsicElements["ul"];
    const __VLS_38 = __VLS_elementAsFunctionalComponent(__VLS_37);
    const __VLS_39 = __VLS_38({ ...{ 'onClick': {}, }, class: ("topbar__nav-menu"), }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    ({}({ ...{ 'onClick': {}, }, class: ("topbar__nav-menu"), }));
    let __VLS_42 = { 'click': __VLS_pickEvent(__VLS_40['click'], {}.onClick) };
    __VLS_42 = { click: $event => {
            __VLS_ctx.isExpanded = false;
            // @ts-ignore
            [isExpanded, isExpanded, title,];
        }
    };
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39);
    let __VLS_40;
    (__VLS_36.slots).default;
    const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    (__VLS_9.slots).default;
    const __VLS_9 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    (__VLS_4.slots).default;
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    // no auto imports;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('./Topbar.vue')).default;
//# sourceMappingURL=Topbar.vue.js.map