<style>
    .dynamic-input {
        height: 18px;
        font-size: 14px;
        padding: 4px 8px;
        width: 110px;
    }
    .dynamic-input:focus,
    .dynamic-input:hover {
        outline: none;
    }
</style>

<template>
    <input type="number" 
        class="dynamic-input" 
        :value="value"
        v-bind="$attrs" 
        v-on="listeners" 
        @input="handleInput"
    >
</template>

<script>
export default {
    name: "DynamicTextInput",
    props: ["value"],
    computed: {
        listeners() {
            const { input, listeners } = this.$listeners;
            return listeners;
        }
    },
    methods: {
        handleInput(event) {
            this.$emit('input', event.target.value);
        }
    }
}
</script>
