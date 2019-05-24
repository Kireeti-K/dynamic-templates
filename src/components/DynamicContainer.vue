<style>
    .container {
        display: flex;
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
        :style="containerObject.styles.computedStyles"
        :class="{'is-focused': isFocused}" 
        @click.stop="() => EventBus.$emit('updateSelectedContainer', containerObject)" 
    >
        <div class="container-children" v-if="containerObject.children.length==0" style="padding: 10px; color: #333;">Empty container</div>
        <DynamicContainer class="container-children" v-for="(c,i) in containerObject.children" :key=i :container-object="c" :selectedItem="selectedItem" />
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
    mounted() {
        console.log("Computed styles for container ", this.containerObject.id);
        console.log(JSON.stringify(this.containerObject.styles.computedStyles));
    },
    computed:{
        isFocused:function(){
            return this.selectedItem==this.containerObject;
        }
    }
}
</script>
