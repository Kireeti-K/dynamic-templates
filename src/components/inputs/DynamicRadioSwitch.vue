<style scoped>
    .dynamic-radio-switch {
        border-top: 1px solid #aaa;
        border-bottom: 1px solid #aaa;
        display: flex;
        justify-content: space-between;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
    }
    .dynamic-radio-switch .radio-item {
        flex: 1;
        position: relative;
        padding: 6px 6px 6px 12px;
        border-right: 1px solid #aaa;
    }
    .dynamic-radio-switch .radio-item.selected {
        color: #fff;
        background-color: #aaa;
    }
    .dynamic-radio-switch .radio-item:first-child {
        border-left: 1px solid #aaa;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    .dynamic-radio-switch .radio-item:last-child {
        border-right: 1px solid #aaa;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
    .dynamic-radio-switch input[type='radio'] {
        width: 0px;
        height: 0px;
        position: absolute;
        top: 0px;
        left: 0px;
        visibility: hidden;
    }
</style>

<template>
    <div class="dynamic-radio-switch">
        <div class="radio-item" 
            :class="{'selected': option.id === value}"
            v-for="option in options" 
            :key="option.id" 
            @click="() => handleChange(option)"
        >
            <input type="radio" :id="option.id" :name="groupName" :value="value">
            <label class="text" :id="option.id">{{option.text}}</label>
        </div>
    </div>
</template>

<script>
import { randomString } from "../../utils/string";

export default {
    props: ["options", "value"],
    data() {
        return {
            groupName: `${randomString(4)}-${randomString(4)}`,
        }
    },
    methods: {
        handleChange(option) {
            this.$emit('input', option.id);
        }
    }
}
</script>
