<style scoped>
    .style-inputs .input {
        margin-top: 24px;
    }
    .style-inputs .input .label {
        margin-bottom: 8px;
    }
</style>

<template>
    <div class="style-inputs">
        <div class="input full-width">
            <div class="label">Width Type</div>
            <dynamic-radio-switch :options="widthType.options" v-model="widthType.value" />
        </div>
        <div class="input">
            <div class="label">Width</div>
            <dynamic-text-input v-model="width.value" />
        </div>
    </div>
</template>

<script>
import DynamicTextInput from "../inputs/DynamicTextInput"
import DynamicRadioSwitch from "../inputs/DynamicRadioSwitch";

export default {
    props: ["inputs"],
    computed: {
        widthType() {
            return this.inputs.filter(input => input.label === 'Width Type')[0];
        },
        width() {
            return this.inputs.filter(input => input.label === 'Width')[0];
        }
    },
    components: {
        DynamicRadioSwitch,
        DynamicTextInput
    }
}
</script>
