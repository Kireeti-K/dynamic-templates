<style>
    .container {
        display: flex;
        /*
        background-color: white !important;
        */
    }
    .container-children {
        flex: 1;
    }
    .container.is-focused {
        background-color: #f7f7f7 !important;
    }
    .container:hover{outline: 1px solid red;}
</style>

<template>
    <div class="container"
        :style="itemObject.styles.computedStyles"
        :class="{'is-focused': isFocused}"
        @click.stop="() => EventBus.$emit('updateSelectedContainer', itemObject)"
    >
        <div class="container-children" v-if="itemObject.children.length==0" style="padding: 10px; color: #333;">Empty container</div>
        <transition-group appear name="slide">
        <component v-for="(child) in itemObject.children" :key="child.id" :is="child.component" :item-object="child" :selected-item="selectedItem" ></component>
        </transition-group>
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
            return this.selectedItem === this.itemObject;
        }
    }
}
</script>
