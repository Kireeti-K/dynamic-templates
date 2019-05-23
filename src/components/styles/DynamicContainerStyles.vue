<style>
    .styles-form {
        margin-top: 28px;
    }
    .form-item {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
    }
    .style-label {
        font-weight: 600;
        max-width: 120px;
    }
</style>

<template>
    <div class="editor-styles">
        <div class="styles-form">
            <div class="form-item" v-for="style in styles" :key="style.label">
                <div class="style-label">{{style.label}}</div>
                <div v-if="style.component"> <component :is="style.component" :inputs="style.inputs"></component> </div>
                <div class="input-styles" v-else>Style inputs here</div>
            </div>
        </div>
    </div>
</template>

<script>
import DynamicTextInput from "../inputs/DynamicTextInput"
import { EventBus } from '../EventBus';

export default {
    props: ["styles"],
    data() {
        return {
        }
    },
    components: {
        DynamicTextInput
    },
    watch: {
        styles: {
            deep: true,
            handler: function(newValue, oldValue) {
                EventBus.$emit('recomputeStyles');
            }
        }
    }
}
</script>
