<style scoped>
    .style-inputs {
        width: 190px;
    }
    .style-inputs .input-set {
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
    }
    .style-inputs .input {
        width: 75px;
    }
    .style-inputs .input input{
        width: 100% !important;
    }
    .style-inputs .input .label {
        margin-bottom: 8px;
    }
</style>

<template>
    <div class="style-inputs">
        <div class="input-set">
            <div class="input">
                <div class="label">Top</div>
                <dynamic-input type="number" v-model="TopMargin.value"></dynamic-input>
            </div>
            <div class="input">
                <div class="label">Bottom</div>
                <dynamic-input type="number" v-model="BottomMargin.value"></dynamic-input>
            </div>
        </div>
        <div class="input-set">
            <div class="input">
                <div class="label">Left</div>
                <dynamic-input type="number" v-model="LeftMargin.value"></dynamic-input>
            </div>
            <div class="input">
                <div class="label">Right</div>
                <dynamic-input type="number" v-model="RightMargin.value"></dynamic-input>
            </div>
        </div>
    </div>
</template>

<script>
import DynamicInput from "../inputs/DynamicInput";
import DynamicRadioSwitch from "../inputs/DynamicRadioSwitch";

export default {
    props: ["inputs"],
    computed: {
        TopMargin() {
            return this.inputs.find(input => input.meta === 'margin-top');
        },
        RightMargin() {
            return this.inputs.find(input => input.meta === 'margin-right');
        },
        BottomMargin() {
            return this.inputs.find(input => input.meta === 'margin-bottom');
        },
        LeftMargin() {
            return this.inputs.find(input => input.meta === 'margin-left');
        }
    },
    components: {
        DynamicInput,
    }
}
</script>
