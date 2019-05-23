<style>
    .container.is-focused {
        background-color: #f7f7f7 !important;
    }
</style>

<template>
    <div class="container" 
        :style="containerObject.styling"
        :class="{'is-focused': isFocused}" 
        @click.stop="() => EventBus.$emit('updateSelectedContainer', containerObject)" 
    >
        <div v-if="containerObject.children.length > 0">
            <div style="padding: 10px; color: #333;background-color:pink;">parent container</div>
           <DynamicContainer  v-for="(c,i) in containerObject.children" :key=i :container-object="c" />
        </div>
        <div v-else style="padding: 10px; color: #333;background-color:lightgrey;">Empty container</div>
    </div>
</template>

<script>
import { EventBus } from "./EventBus";

export default {
    name: "DynamicContainer",
    props: ["containerObject"],
    data() {
        return {
            EventBus: EventBus,
        }
    },
    computed:{
        isFocused:function(){
            return false;
        }
    }
}
</script>
