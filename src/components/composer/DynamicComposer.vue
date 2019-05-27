<style>
    .composer-wrapper {
        width: 230px;
        height: 633px;
        padding: 12px 24px;
        overflow-y: auto;
        position: relative;
    }
    #go-back{
        background-color: white;
        border:1px solid gray;
        border-radius: 4px;
        padding: 2px 8px;   
        /*
        color:black;
        */
        margin-right: 8px;
    }
    #back-bar{
        display: flex;
        justify-content: stretch;
        flex-direction: row;
        /*border:1px solid gray;*/
    }
</style>

<template>
    <div class="composer-wrapper">
        <div v-show="showBack" id="back-bar">
            <button id="go-back" @click="goBack">
                <BackIcon w="18px" h="18px" @click="goBack"> </BackIcon>    
            </button>
            <p>back</p>
        </div>
        <slot />
    </div>
</template>

<script>
import { EventBus } from "../EventBus";
import { TableCellContainer } from '../../classes/TableCellContainer';
import BackIcon from "vue-ionicons/dist/md-arrow-back";

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
                let parent = this.selectedItem.parent;
                if((parent instanceof TableCellContainer)){
                    parent = parent.parent?parent.parent:parent;
                }
                EventBus.$emit('updateSelectedContainer',parent);
            }
        }
    },
    components:{
        BackIcon
    }
}
</script>
