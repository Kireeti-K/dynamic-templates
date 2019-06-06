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
        height: 30px;
        border: 1px solid #ddd;
        border-radius: 4px;

        background-color: #ddd;
        outline: none;
        margin: 0px;
        justify-content: center;
        align-items: center;
        padding: 0px;
        /* font-size: 18px; */
    }
    .dynamic-input-row button div{
        width: 24px;
        line-height: .8em;
    }
    .dynamic-input-row .left-btn {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }
    .dynamic-input-row .right-btn {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }
    .smol{
        width: 20 px;
    }
</style>

<template>
    <div class="dynamic-input-row">
        <button v-if="type == 'number'" class="left-btn" @click="changeValue(1)">
            <PlusIcon w="16px" h="16px" />
        </button>
        <input  
            class="dynamic-input" 
            :style="{'width': inputWidth}"
            :value="value"
            v-bind="$attrs" 
            v-on="listeners" 
            @input="handleInput"
            :class = "{smol:type == 'number'}"
        >
        <button v-if="type == 'number'" class="right-btn" @click="changeValue(-1)">
            <MinusIcon w="16px" h="16px" > </MinusIcon>
        </button>
    </div>
</template>

<script>
import PlusIcon from "vue-ionicons/dist/md-arrow-dropup.vue";
import MinusIcon from "vue-ionicons/dist/md-arrow-dropdown.vue";
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
            else return this.type == 'number' ? '24px' : this.width;
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
    },
    components:{
        PlusIcon,MinusIcon
    }
}
</script>
