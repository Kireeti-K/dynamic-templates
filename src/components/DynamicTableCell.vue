<style>
    .container.is-focused {
        background-color: #f7f7f7 !important;
    }
    .container:hover{outline: 1px solid red;}
</style>

<template>
    <div class="container" 
        :style="itemObject.styles.computedStyles"
        :class="{'is-focused': isFocused}" 
        @click.stop="() => EventBus.$emit('updateSelectedElement', itemObject)" 
    >
        <p>{{itemObject.data}}</p>
        <DynamicText />
    </div>
</template>

<script>
import { EventBus } from "./EventBus";
import DynamicText from './DynamicText';

export default {
    name: "DynamicTableCell",
    props: ["itemObject","selectedItem"],
    components:{
        DynamicText,
    },
    data() {
        return {
            EventBus: EventBus,
        }
    },
    computed:{
        isFocused:function(){
            return this.selectedItem==this.itemObject;
        }
    }
}
</script>
