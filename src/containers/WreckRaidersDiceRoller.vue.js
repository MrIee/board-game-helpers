/* __placeholder__ */
import { defineComponent } from 'vue';
import conchImgUrl from '../assets/images/wreckraiders/conch.png';
import scallopImgUrl from '../assets/images/wreckraiders/scallop.png';
import starfishImgUrl from '../assets/images/wreckraiders/starfish.png';
import Topbar from '../components/Topbar.vue';
import Footer from '../components/Footer.vue';
import Dice from '../components/Dice.vue';
import NumberInput from '../components/NumberInput.vue';
export default defineComponent({
    components: {
        Topbar,
        Footer,
        Dice,
        NumberInput,
    },
    data() {
        return {
            dice: [0, 0, 0, 0, 0],
            seashells: ['', '', '', '', ''],
            seashellTypes: ['conch', 'scallop', 'starfish'],
            seashellProbability: 25,
        };
    },
    methods: {
        getSeashellUrl(shell) {
            let shellImgUrl = '';
            switch (shell) {
                case this.seashellTypes[0]:
                    shellImgUrl = conchImgUrl;
                    break;
                case this.seashellTypes[1]:
                    shellImgUrl = scallopImgUrl;
                    break;
                case this.seashellTypes[2]:
                    shellImgUrl = starfishImgUrl;
                    break;
            }
            return shellImgUrl;
        },
        getRandomNumber(max = 6) {
            return Math.ceil(Math.random() * max);
        },
        setNumberOfGameComponents(event) {
            const number = parseInt(event.target.value, 10);
            this.dice = new Array;
            this.seashells = new Array;
            for (let i = 0; i < number; i++) {
                this.dice.push(0);
                this.seashells.push('');
            }
        },
        async makeDieRoll(callback) {
            let rolledNumber = 0;
            const delay = 150;
            const numberOfSideOnDie = 6;
            const wait = () => new Promise((resolve) => setTimeout(resolve, delay));
            for (let i = 1; i <= numberOfSideOnDie; i++) {
                rolledNumber = this.getRandomNumber();
                callback && callback(rolledNumber);
                await wait();
            }
            return Promise.resolve();
        },
        async rollDice() {
            return new Promise((resolve) => {
                this.dice.forEach(async (_dice, index) => {
                    const callback = (number) => {
                        this.dice[index] = number;
                    };
                    await this.makeDieRoll(callback);
                    resolve();
                });
            });
        },
        setSeashellType(index) {
            const maxProbability = 3;
            const type = this.getRandomNumber(maxProbability);
            this.seashells[index] = this.seashellTypes[type - 1];
        },
        setSeashell(index) {
            const maxProbability = 100;
            const chance = this.getRandomNumber(maxProbability);
            if (chance > 0 && chance <= this.seashellProbability) {
                this.setSeashellType(index);
            }
            else {
                this.seashells[index] = '';
            }
        },
        async rollDicePool() {
            await this.rollDice();
            this.seashells.forEach((_shell, index) => {
                this.setSeashell(index);
            });
        },
    }
});
const __VLS_componentsOption = {
    Topbar,
    Footer,
    Dice,
    NumberInput,
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.select;
    __VLS_intrinsicElements.select;
    __VLS_intrinsicElements.option;
    __VLS_intrinsicElements.option;
    __VLS_intrinsicElements.option;
    __VLS_intrinsicElements.option;
    __VLS_intrinsicElements.option;
    __VLS_intrinsicElements.option;
    __VLS_intrinsicElements.option;
    __VLS_intrinsicElements.option;
    __VLS_intrinsicElements.option;
    __VLS_intrinsicElements.option;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_components.NumberInput;
    // @ts-ignore
    [NumberInput,];
    __VLS_components.Dice;
    // @ts-ignore
    [Dice,];
    const __VLS_0 = __VLS_intrinsicElements["div"];
    const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
    const __VLS_2 = __VLS_1({ ...{}, class: ("theme-wreck-raiders"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{}, class: ("theme-wreck-raiders"), }));
    const __VLS_5 = __VLS_intrinsicElements["div"];
    const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
    const __VLS_7 = __VLS_6({ ...{}, class: ("wrapper container"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    ({}({ ...{}, class: ("wrapper container"), }));
    const __VLS_10 = __VLS_intrinsicElements["div"];
    const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
    const __VLS_12 = __VLS_11({ ...{}, class: ("tw-flex tw-justify-center tw-mb-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    ({}({ ...{}, class: ("tw-flex tw-justify-center tw-mb-3"), }));
    const __VLS_15 = __VLS_intrinsicElements["span"];
    const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
    const __VLS_17 = __VLS_16({ ...{}, class: ("tw-mr-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    ({}({ ...{}, class: ("tw-mr-2"), }));
    (__VLS_19.slots).default;
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
    const __VLS_20 = __VLS_intrinsicElements["select"];
    const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
    const __VLS_22 = __VLS_21({ ...{ 'onChange': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ ...{ 'onChange': {}, }, }));
    let __VLS_25 = { 'change': __VLS_pickEvent(__VLS_23['change'], {}.onChange) };
    __VLS_25 = { change: (__VLS_ctx.setNumberOfGameComponents) };
    const __VLS_26 = __VLS_intrinsicElements["option"];
    const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
    const __VLS_28 = __VLS_27({ ...{}, value: ("5"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ ...{}, value: ("5"), }));
    (__VLS_30.slots).default;
    const __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    const __VLS_31 = __VLS_intrinsicElements["option"];
    const __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31);
    const __VLS_33 = __VLS_32({ ...{}, value: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    ({}({ ...{}, value: ("4"), }));
    (__VLS_35.slots).default;
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33);
    const __VLS_36 = __VLS_intrinsicElements["option"];
    const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
    const __VLS_38 = __VLS_37({ ...{}, value: ("5"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({ ...{}, value: ("5"), }));
    (__VLS_40.slots).default;
    const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    const __VLS_41 = __VLS_intrinsicElements["option"];
    const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
    const __VLS_43 = __VLS_42({ ...{}, value: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
    ({}({ ...{}, value: ("6"), }));
    (__VLS_45.slots).default;
    const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
    const __VLS_46 = __VLS_intrinsicElements["option"];
    const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
    const __VLS_48 = __VLS_47({ ...{}, value: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
    ({}({ ...{}, value: ("6"), }));
    (__VLS_50.slots).default;
    const __VLS_50 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
    (__VLS_24.slots).default;
    const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    let __VLS_23;
    (__VLS_14.slots).default;
    const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
    const __VLS_51 = __VLS_intrinsicElements["div"];
    const __VLS_52 = __VLS_elementAsFunctionalComponent(__VLS_51);
    const __VLS_53 = __VLS_52({ ...{}, class: ("tw-flex tw-justify-center tw-mb-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
    ({}({ ...{}, class: ("tw-flex tw-justify-center tw-mb-3"), }));
    const __VLS_56 = __VLS_intrinsicElements["span"];
    const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
    const __VLS_58 = __VLS_57({ ...{}, class: ("tw-mr-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    ({}({ ...{}, class: ("tw-mr-2"), }));
    (__VLS_60.slots).default;
    const __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
    const __VLS_61 = {}.NumberInput;
    const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{}, modelValue: ((__VLS_ctx.seashellProbability)), max: ((100)), }));
    ({}.NumberInput);
    const __VLS_63 = __VLS_62({ ...{}, modelValue: ((__VLS_ctx.seashellProbability)), max: ((100)), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
    ({}({ ...{}, modelValue: ((__VLS_ctx.seashellProbability)), max: ((100)), }));
    const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
    (__VLS_55.slots).default;
    const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
    const __VLS_66 = __VLS_intrinsicElements["div"];
    const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
    const __VLS_68 = __VLS_67({ ...{}, class: ("tw-flex tw-flex-row-reverse sm:tw-flex-col tw-justify-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    ({}({ ...{}, class: ("tw-flex tw-flex-row-reverse sm:tw-flex-col tw-justify-center"), }));
    const __VLS_71 = __VLS_intrinsicElements["div"];
    const __VLS_72 = __VLS_elementAsFunctionalComponent(__VLS_71);
    const __VLS_73 = __VLS_72({ ...{}, class: ("tw-flex tw-flex-col sm:tw-flex-row tw-justify-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
    ({}({ ...{}, class: ("tw-flex tw-flex-col sm:tw-flex-row tw-justify-center"), }));
    for (const [shell, index] of __VLS_getVForSourceType((__VLS_ctx.seashells))) {
        const __VLS_76 = __VLS_intrinsicElements["div"];
        const __VLS_77 = __VLS_elementAsFunctionalComponent(__VLS_76);
        const __VLS_78 = __VLS_77({ ...{}, key: ((index)), class: ("tw-h-[72px] sm:tw-h-24 tw-w-[72px] sm:tw-w-24 tw-m-1 tw-border-[3px] tw-border-white tw-rounded-lg"), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
        ({}({ ...{}, key: ((index)), class: ("tw-h-[72px] sm:tw-h-24 tw-w-[72px] sm:tw-w-24 tw-m-1 tw-border-[3px] tw-border-white tw-rounded-lg"), }));
        if (shell) {
            const __VLS_81 = __VLS_intrinsicElements["img"];
            const __VLS_82 = __VLS_elementAsFunctionalComponent(__VLS_81);
            const __VLS_83 = __VLS_82({ ...{}, class: ("tw-p-2"), src: ((__VLS_ctx.getSeashellUrl(shell))), alt: ((shell)), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
            ({}({ ...{}, class: ("tw-p-2"), src: ((__VLS_ctx.getSeashellUrl(shell))), alt: ((shell)), }));
            const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83);
            // @ts-ignore
            [setNumberOfGameComponents, seashellProbability, seashells, getSeashellUrl,];
        }
        (__VLS_80.slots).default;
        const __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78);
        // no auto imports;
    }
    (__VLS_75.slots).default;
    const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73);
    const __VLS_86 = __VLS_intrinsicElements["div"];
    const __VLS_87 = __VLS_elementAsFunctionalComponent(__VLS_86);
    const __VLS_88 = __VLS_87({ ...{}, class: ("tw-flex tw-flex-col sm:tw-flex-row tw-justify-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
    ({}({ ...{}, class: ("tw-flex tw-flex-col sm:tw-flex-row tw-justify-center"), }));
    for (const [die] of __VLS_getVForSourceType((__VLS_ctx.dice))) {
        const __VLS_91 = {}.Dice;
        const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({ ...{}, index: ((die)), number: ((die)), }));
        ({}.Dice);
        const __VLS_93 = __VLS_92({ ...{}, index: ((die)), number: ((die)), }, ...__VLS_functionalComponentArgsRest(__VLS_92));
        ({}({ ...{}, index: ((die)), number: ((die)), }));
        const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93);
        // @ts-ignore
        [dice,];
    }
    (__VLS_90.slots).default;
    const __VLS_90 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
    (__VLS_70.slots).default;
    const __VLS_70 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
    const __VLS_96 = __VLS_intrinsicElements["div"];
    const __VLS_97 = __VLS_elementAsFunctionalComponent(__VLS_96);
    const __VLS_98 = __VLS_97({ ...{}, class: ("tw-flex tw-justify-center tw-mt-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_97));
    ({}({ ...{}, class: ("tw-flex tw-justify-center tw-mt-3"), }));
    const __VLS_101 = __VLS_intrinsicElements["button"];
    const __VLS_102 = __VLS_elementAsFunctionalComponent(__VLS_101);
    const __VLS_103 = __VLS_102({ ...{ 'onClick': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_102));
    ({}({ ...{ 'onClick': {}, }, }));
    let __VLS_106 = { 'click': __VLS_pickEvent(__VLS_104['click'], {}.onClick) };
    __VLS_106 = { click: (__VLS_ctx.rollDicePool) };
    (__VLS_105.slots).default;
    const __VLS_105 = __VLS_pickFunctionalComponentCtx(__VLS_101, __VLS_103);
    let __VLS_104;
    (__VLS_100.slots).default;
    const __VLS_100 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98);
    (__VLS_9.slots).default;
    const __VLS_9 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    (__VLS_4.slots).default;
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    // @ts-ignore
    [rollDicePool,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('./WreckRaidersDiceRoller.vue')).default;
//# sourceMappingURL=WreckRaidersDiceRoller.vue.js.map