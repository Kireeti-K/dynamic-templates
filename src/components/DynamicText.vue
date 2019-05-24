<style>
    .container.is-focused {
        background-color: #f7f7f7 !important;
    }
    .container:hover{outline: 1px solid red;}
</style>

<template>
    <div class="container" 
        :style="object.styles.computedStyles"
        :class="{'is-focused': isFocused}" 
        @click.stop="() => EventBus.$emit('updateSelectedElement', object)" 
    >
        <p>{{itemObject.data}}</p>
    </div>
</template>

<script>
import { EventBus } from "./EventBus";

export default {
    name: "DynamicContainer",
    props: ["itemObject","selectedItem"],
    data() {
        return {
            EventBus: EventBus,
        }
    },
    computed:{
        isFocused:function(){
            return this.selectedItem==this.object;
        }
    }
}
</script>
