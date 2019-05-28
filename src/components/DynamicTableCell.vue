<style scoped>
    .container.is-focused {
        background-color: #f7f7f7 !important;
    }
    .container:hover{outline: 1px solid blue;}
</style>

<template>
    <div class="container" 
        :style="itemObject.styles.computedStyles" 
        :class="{'is-focused': isFocused}" 
        @click.stop="()=> EventBus.$emit('updateSelectedContainer', itemObject)" 
    >
        <DynamicText :item-object="itemObject.children[0]" :selected-item="selectedItem"/>
    </div>
</template>

<script>
import { EventBus } from "./EventBus";
import DynamicText from './DynamicText';

export default {
    name: "DynamicTableCell",
    props: ["itemObject", "selectedItem"],
    components: {
        DynamicText,
    },
    data() {
        return {
            EventBus: EventBus,
        }
    },
    computed:{
        isFocused:function(){
            return this.selectedItem==this.itemObject.children[0];
        }
    },
    methods:{
        selectCell(){
            EventBus.$emit('updateSelectedContainer', this.itemObject);
            EventBus.$emit('updateSelectedElement', this.itemObject.children[0]); 
        }
    }
}
</script>
