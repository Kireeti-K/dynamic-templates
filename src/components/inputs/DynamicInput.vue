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
    .dynamic-input-row{
        display: flex;
    }
    .dynamic-input-row button{
        padding: 0 12px;
        border: none;
        border-radius: 4px;
        background-color: lightgray;
        outline: none;
    }
    .smol{
        width: 20 px;
    }
</style>

<template>
    <div class="dynamic-input-row">
        <button v-if="type == 'number'" @click="changeValue(1)">+</button>
        <input  
            class="dynamic-input" 
            :style="{'width': inputWidth}"
            :value="value"
            v-bind="$attrs" 
            v-on="listeners" 
            @input="handleInput"
            :class = "{smol:type == 'number'}"
        >
        <button v-if="type == 'number'" @click="changeValue(-1)">-</button>
    </div>
</template>

<script>
export default {
    name: "DynamicInput",
    props: {
        type: String, 
        value: [String, Number], 
        containerWidth: Boolean,
        increment: {
            type :Number,
            default: 1,
        },
        width:{
            type: String,
            default: "110px"
        }
    },
    computed: {
        listeners() {
            const { input, listeners } = this.$listeners;
            return listeners;
        },
        inputWidth() {
            if (this.containerWidth) return "100%";
            else return this.width;
        }
    },
    methods: {
        handleInput(event) {
            this.$emit('input', event.target.value);
        },
        changeValue(sign) {
            let tvalue = parseInt(this.value);
            tvalue += sign * this.increment;
            this.$emit('input',tvalue);
        }
    }
}
</script>
