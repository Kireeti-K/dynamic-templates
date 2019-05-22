<style>
    .styles-form {
        margin-top: 28px;
    }
    .form-item {
        display: flex;
        margin-bottom: 24px;
        justify-content: space-between;
    }
    .label {
        font-weight: 500;
        max-width: 120px;
    }
</style>

<template>
    <div class="editor-styles">
        <div class="styles-form">
            <div class="form-item">
                <div class="label">Width</div>
                <div class="input"><dynamic-text-input :value="inputStyles.width" @input="value => emitInput('width', value)" /></div>
            </div>
            <div class="form-item">
                <div class="label">BG Color</div>
                <div class="input"><dynamic-text-input :value="inputStyles.backgroundColor" /></div>
            </div>
            <div class="form-item">
                <div class="label">Padding</div>
                <div class="input"><dynamic-text-input :value="inputStyles.padding" /></div>
            </div>
            <div class="form-item">
                <div class="label">Margin</div>
                <div class="input"><dynamic-text-input :value="inputStyles.margin" /></div>
            </div>
        </div>
    </div>
</template>

<script>
import DynamicTextInput from "../inputs/DynamicTextInput"
import { EventBus } from '../EventBus';

export default {
    props: ["inputStyles"],
    data() {
        return {
        }
    },
    components: {
        DynamicTextInput
    },
    methods: {
        emitInput(styleName, value) {
            EventBus.$emit('updateContainerStyles', styleName, value);
        }
    }
}
</script>
