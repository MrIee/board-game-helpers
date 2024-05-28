/* __placeholder__ */
import { defineComponent, ref, computed, watch, onMounted } from 'vue';
import InfoCard from '../components/InfoCard.vue';
import InfoCardWithImage from '../components/InfoCardWithImage.vue';
import staffJSON from '../assets/json/GrandAustriaHotel/staff.json';
import guestsJSON from '../assets/json/GrandAustriaHotel/guests.json';
import objectivesJSON from '../assets/json/GrandAustriaHotel/objectives.json';
import emperorTilesJSON from '../assets/json/GrandAustriaHotel/emperor_tiles.json';
import ballroomsJSON from '../assets/json/GrandAustriaHotel/ballrooms.json';
import celebritiesJSON from '../assets/json/GrandAustriaHotel/celebrities.json';
import hotelEntrancesJSON from '../assets/json/GrandAustriaHotel/hotel_entrances.json';
export default defineComponent({
    components: {
        InfoCard,
        InfoCardWithImage,
    },
    setup() {
        const searchTerm = ref('');
        const staffList = ref(staffJSON);
        const guestList = ref(guestsJSON);
        const objectivesList = ref(objectivesJSON);
        const emperorTilesList = ref(emperorTilesJSON);
        const ballroomList = ref(ballroomsJSON);
        const celebrityist = ref(celebritiesJSON);
        const hotelEntrancesList = ref(hotelEntrancesJSON);
        const list = ref([]);
        const listType = ref('0');
        const columns = ref(1);
        const isColumnView = ref(false);
        const categories = ref([]);
        categories.value = [
            {
                value: '0',
                label: "Staff",
            },
            {
                value: '1',
                label: "Guests",
            },
            {
                value: '2',
                label: "Objectives",
            },
            {
                value: '3',
                label: "Emperor Tiles",
            },
            {
                value: '4',
                label: "Ballrooms",
            },
            {
                value: '5',
                label: "Celebrities",
            },
            {
                value: '6',
                label: "Hotel Entrances",
            },
        ];
        onMounted(() => {
            list.value = staffList.value;
        });
        const filteredList = computed(() => {
            return list.value.filter((item) => {
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
        watch(listType, (type) => {
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
                    updateImageUrls(list.value);
                    columns.value = 4;
                    isColumnView.value = true;
                    break;
                case '3':
                    list.value = emperorTilesList.value;
                    updateImageUrls(list.value);
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
                case '6':
                    list.value = hotelEntrancesList.value;
                    columns.value = 1;
                    isColumnView.value = false;
                    break;
            }
        });
        const images = import.meta.glob('../assets/images/**/*[.jpg, .png]');
        const updateImageUrls = async (list) => {
            list.forEach(async (item) => {
                if (item.imageUrl) {
                    for (const path in images) {
                        const mod = await images[path]();
                        if (path.indexOf(item.imageUrl || '') > -1) {
                            item.imageUrl = mod.default;
                        }
                    }
                }
            });
        };
        return {
            searchTerm,
            categories,
            listType,
            filteredList,
            isColumnView,
            columns,
        };
    },
});
const __VLS_componentsOption = {
    InfoCard,
    InfoCardWithImage,
};
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
    __VLS_intrinsicElements.input;
    __VLS_intrinsicElements.select;
    __VLS_intrinsicElements.select;
    __VLS_intrinsicElements.option;
    __VLS_intrinsicElements.option;
    __VLS_components.InfoCardWithImage;
    // @ts-ignore
    [InfoCardWithImage,];
    __VLS_components.InfoCard;
    // @ts-ignore
    [InfoCard,];
    const __VLS_0 = __VLS_intrinsicElements["div"];
    const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
    const __VLS_2 = __VLS_1({ ...{}, class: ("theme-grand-austria-hotel"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{}, class: ("theme-grand-austria-hotel"), }));
    const __VLS_5 = __VLS_intrinsicElements["div"];
    const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
    const __VLS_7 = __VLS_6({ ...{}, class: ("wrapper container tw-pt-12 sm:tw-pt-14"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    ({}({ ...{}, class: ("wrapper container tw-pt-12 sm:tw-pt-14"), }));
    const __VLS_10 = __VLS_intrinsicElements["div"];
    const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
    const __VLS_12 = __VLS_11({ ...{}, class: ("wrapper tw-flex tw-flex-col md:tw-flex-row tw-fixed tw-bg-gah-tan tw-py-6 sm:tw-py-8"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    ({}({ ...{}, class: ("wrapper tw-flex tw-flex-col md:tw-flex-row tw-fixed tw-bg-gah-tan tw-py-6 sm:tw-py-8"), }));
    const __VLS_15 = __VLS_intrinsicElements["input"];
    const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
    const __VLS_17 = __VLS_16({ ...{}, class: ("tw-w-full tw-rounded tw-rounded-r-none tw-py-1 tw-px-2 tw-border tw-border-solid tw-border-gray-800"), type: ("text"), placeholder: ("Type a name or id to start searching"), value: ((__VLS_ctx.searchTerm)), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    ({}({ ...{}, class: ("tw-w-full tw-rounded tw-rounded-r-none tw-py-1 tw-px-2 tw-border tw-border-solid tw-border-gray-800"), type: ("text"), placeholder: ("Type a name or id to start searching"), value: ((__VLS_ctx.searchTerm)), }));
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
    const __VLS_20 = __VLS_intrinsicElements["select"];
    const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
    const __VLS_22 = __VLS_21({ ...{}, class: ("tw-w-full md:tw-w-1/4 tw-py-1 tw-px-2 tw-rounded tw-rounded-l-none tw-border tw-border-solid tw-border-gray-800 tw-border-l-0"), value: ((__VLS_ctx.listType)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ ...{}, class: ("tw-w-full md:tw-w-1/4 tw-py-1 tw-px-2 tw-rounded tw-rounded-l-none tw-border tw-border-solid tw-border-gray-800 tw-border-l-0"), value: ((__VLS_ctx.listType)), }));
    for (const [category, index] of __VLS_getVForSourceType((__VLS_ctx.categories))) {
        const __VLS_25 = __VLS_intrinsicElements["option"];
        const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
        const __VLS_27 = __VLS_26({ ...{}, key: ((index)), value: ((category.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
        ({}({ ...{}, key: ((index)), value: ((category.value)), }));
        (category.label);
        (__VLS_29.slots).default;
        const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
        // @ts-ignore
        [searchTerm, listType, categories,];
    }
    (__VLS_24.slots).default;
    const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    (__VLS_14.slots).default;
    const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
    const __VLS_30 = __VLS_intrinsicElements["div"];
    const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
    const __VLS_32 = __VLS_31({ ...{}, class: (({
            'tw-flex tw-flex-wrap tw-mt-[114px] sm:tw-mt-[100px]': true,
            'tw-pt-px tw-pl-px': __VLS_ctx.isColumnView,
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ ...{}, class: (({
            'tw-flex tw-flex-wrap tw-mt-[114px] sm:tw-mt-[100px]': true,
            'tw-pt-px tw-pl-px': __VLS_ctx.isColumnView,
        })), }));
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.filteredList))) {
        const __VLS_35 = __VLS_intrinsicElements["div"];
        const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
        const __VLS_37 = __VLS_36({ ...{}, class: (({
                'tw-w-full': true,
                'tw-border-b tw-border-solid tw-border-gray-800 last:tw-border-b-0': __VLS_ctx.columns === 1,
                'sm:tw-w-1/2': __VLS_ctx.columns === 2,
                'sm:tw-w-1/2 md:tw-w-1/4': __VLS_ctx.columns === 4,
            })), key: ((item.uid)), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
        ({}({ ...{}, class: (({
                'tw-w-full': true,
                'tw-border-b tw-border-solid tw-border-gray-800 last:tw-border-b-0': __VLS_ctx.columns === 1,
                'sm:tw-w-1/2': __VLS_ctx.columns === 2,
                'sm:tw-w-1/2 md:tw-w-1/4': __VLS_ctx.columns === 4,
            })), key: ((item.uid)), }));
        if (item.imageUrl) {
            const __VLS_40 = {}.InfoCardWithImage;
            const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, display: ((__VLS_ctx.isColumnView ? 'col' : 'row')), id: ((item.id)), name: ((item.name)), description: ((item.description)), notes: ((item.notes)), imageUrl: ((item.imageUrl)), }));
            ({}.InfoCardWithImage);
            const __VLS_42 = __VLS_41({ ...{}, display: ((__VLS_ctx.isColumnView ? 'col' : 'row')), id: ((item.id)), name: ((item.name)), description: ((item.description)), notes: ((item.notes)), imageUrl: ((item.imageUrl)), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
            ({}({ ...{}, display: ((__VLS_ctx.isColumnView ? 'col' : 'row')), id: ((item.id)), name: ((item.name)), description: ((item.description)), notes: ((item.notes)), imageUrl: ((item.imageUrl)), }));
            const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
            // @ts-ignore
            [isColumnView, isColumnView, filteredList, columns, columns, columns,];
        }
        else {
            const __VLS_45 = {}.InfoCard;
            const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{}, id: ((item.id)), name: ((item.name)), description: ((item.description)), notes: ((item.notes)), }));
            ({}.InfoCard);
            const __VLS_47 = __VLS_46({ ...{}, id: ((item.id)), name: ((item.name)), description: ((item.description)), notes: ((item.notes)), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
            ({}({ ...{}, id: ((item.id)), name: ((item.name)), description: ((item.description)), notes: ((item.notes)), }));
            const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
            // no auto imports;
        }
        (__VLS_39.slots).default;
        const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
        // no auto imports;
    }
    (__VLS_34.slots).default;
    const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
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
const __VLS_internalComponent = (await import('./GrandAustriaHotelReferenceTool.vue')).default;
//# sourceMappingURL=GrandAustriaHotelReferenceTool.vue.js.map