<style>
    .composer-wrapper {
        width: 230px;
        height: 633px;
        padding: 12px 24px;
        overflow-y: auto;
        position: relative;
    }
    #go-back{
        border:none;
        background-color: lightgray;
        color:black;
    }
</style>

<template>
    <div class="composer-wrapper">
        <div v-show="showBack">
            <button id="go-back" @click="goBack">back</button>
        </div>
        <slot />
    </div>
</template>

<script>
import { EventBus } from "../EventBus";
export default {
    name: "DynamicComposer",
        props:['selectedItem'],
    computed:{
        showBack(){
            return this.selectedItem && this.selectedItem.parent != null;
        }
    },
    methods:{
        goBack(){
            if(this.selectedItem.parent){
                EventBus.$emit('updateSelectedContainer',this.selectedItem.parent);
            }
        }
    }
}
</script>
