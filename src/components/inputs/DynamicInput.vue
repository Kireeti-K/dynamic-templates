<style>
    .dynamic-input {
        height: 18px;
        font-size: 14px;
        padding: 4px 8px;
    }
    .dynamic-input:focus,
    .dynamic-input:hover {
        outline: none;
    }
</style>

<template>
    <input :type="type" 
        class="dynamic-input" 
        :style="{'width': inputWidth}"
        :value="value"
        v-bind="$attrs" 
        v-on="listeners" 
        @input="handleInput"
    >
</template>

<script>
export default {
    name: "DynamicInput",
    props: {
        type: String, 
        value: [String, Number], 
        containerWidth: Boolean,
    },
    computed: {
        listeners() {
            const { input, listeners } = this.$listeners;
            return listeners;
        },
        inputWidth() {
            if (this.containerWidth) return "100%";
            else return "110px";
        }
    },
    methods: {
        handleInput(event) {
            this.$emit('input', event.target.value);
        },
    }
}
</script>
