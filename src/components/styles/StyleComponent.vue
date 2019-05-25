<style scoped>
    .style-inputs .input {
        margin-top: 24px;
        width: 100%;
    }
    .style-inputs .input .label {
        margin-bottom: 8px;
    }
    .style-inputs .checkbox-input .label,
    .style-inputs .checkbox-input input {
        display: inline-block;
    }
</style>

<template>
    <div class="style-inputs">
        <div class="input" v-for="(input, index) in inputs" :key="index">
            <div class="checkbox-input" v-if="input.inputType === 'checkbox'">
                <input type="checkbox" v-model="input.value">
                <div class="label">{{input.label}}</div>
            </div>
            <div v-else>
                <div class="label">{{input.label}}</div>
                <dynamic-input :type="input.inputType" v-model="input.value" v-if="input.inputType === 'text' || input.inputType === 'number'" />
                <dynamic-radio-switch :options="input.options" v-model="input.value" v-if="input.inputType === 'radio-switch'" />
            </div>
        </div>
    </div>
</template>

<script>
import DynamicInput from "../inputs/DynamicInput";
import DynamicRadioSwitch from "../inputs/DynamicRadioSwitch";

export default {
    props: ["inputs"],
    components: {
        DynamicInput,
        DynamicRadioSwitch
    }
}
</script>
