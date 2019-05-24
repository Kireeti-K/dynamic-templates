<style>
    .container.is-focused {
        background-color: #f7f7f7 !important;
    }
    .container:hover{outline: 1px solid red;}
</style>

<template>
    <div class="container" 
        :style="containerObject.styles.computedStyles"
        :class="{'is-focused': isFocused}" 
        @click.stop="() => EventBus.$emit('updateSelectedContainer', containerObject)" 
    >
        
        <div v-if="containerObject.children.length==0" style="padding: 10px; color: #333;">Empty container</div>
        <div v-else style="padding: 10px; color: #333;">
            <p>parent container</p>
        <DynamicContainer  v-for="(c,i) in containerObject.children" :key=i :container-object="c" :selectedItem="selectedItem" />
        </div>
    </div>
</template>

<script>
import { EventBus } from "./EventBus";

export default {
    name: "DynamicContainer",
    props: ["containerObject","selectedItem"],
    data() {
        return {
            EventBus: EventBus,
        }
    },
    computed:{
        isFocused:function(){
            return this.selectedItem==this.containerObject;
        }
    }
}
</script>
