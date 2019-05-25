<style>
    .editor-styles {
        height: 570px;
        overflow: auto;
        padding: 0px 24px;
    }
    .styles-form {
        margin-top: 4px;
    }
    .single-style {
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
            <div class="single-style" v-for="style in styles" :key="style.label">
                <dynamic-collapse 
                    :label="style.label"
                >
                    <component :is="style.component" :inputs="style.inputs" />
                </dynamic-collapse>
            </div>
        </div>
    </div>
</template>

<script>
import DynamicCollapse from "../dumb/DynamicCollapse";
import DynamicInput from "../inputs/DynamicInput";
import { EventBus } from '../EventBus';

export default {
    props: ["styles"],
    data() {
        return {
        }
    },
    components: {
        DynamicInput,
        DynamicCollapse,
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
