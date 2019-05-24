<style scoped>
    .style-inputs .input {
        margin-top: 24px;
        width: 100%;
    }
    .style-inputs .input .label {
        margin-bottom: 8px;
    }
    .style-inputs .input input {
        width: 180px !important;
    }
</style>

<template>
    <div class="style-inputs">
        <div class="input" v-for="(input, index) in inputs" :key="index">
            <div class="label">{{input.label}}</div>
            <dynamic-input :type="input.inputType" v-model="input.value" />
        </div>
    </div>
</template>

<script>
import DynamicInput from "../inputs/DynamicInput";

export default {
    props: ["inputs"],
    components: {
        DynamicInput,
    }
}
</script>
