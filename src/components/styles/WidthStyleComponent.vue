<style scoped>
    .style-inputs .input {
        margin-top: 24px;
        width: 100%;
    }
    .style-inputs .input .label {
        margin-bottom: 8px;
    }
    .style-inputs .width-input {
        margin-top: 6px;
    }
    .style-inputs .checkbox-input .label {
        margin-left: 5px;
    }
    .style-inputs .checkbox-input .label,
    .style-inputs .checkbox-input input {
        display: inline-block;
    }
</style>

<template>
    <div class="style-inputs">
        <div class="input">
            <div class="checkbox-input">
                <label for="is-fixedwidth">
                    <input type = "checkbox" id="is-fixedwidth" v-model="setFixedWidth.value">  
                    Set Fixed Width
                </label>
            </div>
            <dynamic-input type="number" v-model="width.value" class="width-input" v-show="setFixedWidth.value" />
        </div>
    </div>
</template>

<script>
import DynamicInput from "../inputs/DynamicInput";
import DynamicRadioSwitch from "../inputs/DynamicRadioSwitch";

export default {
    props: ["inputs"],
    computed: {
        setFixedWidth() {
            return this.inputs.find(input => input.meta === 'set-fixed-width');
        },
        width() {
            return this.inputs.find(input => input.meta === 'width');
        }
    },
    components: {
        DynamicRadioSwitch,
        DynamicInput,
    }
}
</script>
