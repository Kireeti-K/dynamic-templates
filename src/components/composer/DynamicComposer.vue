<style>
    .composer-wrapper {
        width: 230px;
        height: var(--page-height);
        padding: 12px 24px;
        overflow-y: auto;
        position: relative;
    }
    #go-back{
        background-color: white;
        border:1px solid gray;
        padding: 4px 4px;   
        border-radius: 4px;
        /*
        color:black;
        */
        margin-right: 8px;
    }
    #back-bar{
        display: flex;
        justify-content: stretch;
        flex-direction: row;
        margin: 0;
        align-items: center;
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
import { TableContainer } from '../../classes/TableContainer';
import { Container } from '../../classes/Container';

export default {
    name: "DynamicComposer",
        props:['selectedItem'],
    computed:{
        showBack(){
            const notContainer = !(this.selectedItem  instanceof Container) || (this.selectedItem instanceof TableContainer);
            return this.selectedItem && this.selectedItem.parent != null && notContainer;
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
