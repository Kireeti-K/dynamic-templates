<style scoped>
    /* add new item */
    #add-item{
        padding: 8px;
        border:none;
        background-color: #4f6fd0;
        color:white;
        width:  100%;
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: 500;
        border-radius: 6px;
        outline: none;
        cursor: pointer;
    }
    #add-item:hover{
        background-color: #395BC7;
    }
    #add-item:active{
        box-shadow: inset 0 0 8px #395BC7;
        color:gray;
    }

    /* select item menu */
    #select-menu {
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: 0px;
        height: 260px;
        background-color: #f6f8ff;
    }
    #select-menu h4 {
        margin-left: 36px;
        margin-bottom: 10px;
    }
    #select-menu .item {
        padding: 16px 36px;
        border-bottom: 1px solid #ccc;
    }

    /* this is a master piece, never delete */
    @keyframes disco{
        from{box-shadow: 0 0 4px red;}
        to{box-shadow: 0 0 16px blue;}
    }
</style>

<template>
    <div class="editor-controls">
        <h4>Container</h4>

        <!-- childen list -->
        <div id="container-list" v-if="selectedItem && selectedItem.children.length > 0" >
            <div class="item" v-for="(c, i) in selectedItem.children" :key="i" >
                <dynamic-list-item @delete-clicked="() => deleteItem(c)">{{c.displayName}}</dynamic-list-item>
            </div>
        </div>
        <div style="margin-bottom: 10px" v-else>No items in the container</div>
        <button id='add-item' @click="handleAddItem">Add Item</button>

        <div id="select-menu" v-show="showAddMenu">
            <!-- <h4>Select Item</h4> -->
            <div
                v-for="(item, i) in addables" :key="i"
                class="item"
                @click="() => addNewItem(item.class)"
            >
                {{item.label}}
            </div>
        </div>

    </div>
</template>

<script>
import {EventBus} from "../EventBus";
import { Container, TableContainer, TextElement, ImageElement} from "../../internal";
import DynamicListItem from "../dumb/DynamicListItem";

export default {
    name: "DynamicContainerComposer",
    props: ["selectedItem"],
    data(){
        return{
            showAddMenu: false,
            addables: [
                {
                    label: 'Container',
                    class: Container,
                },
                {
                    label: 'Text',
                    class: TextElement,
                },
                {
                    label: 'Table',
                    class: TableContainer,
                },
                {
                    label: 'Image',
                    class: ImageElement
                }
            ]
        }
    },
    methods:{
        deleteItem(item){
            EventBus.$emit('deleteItem',item)
        },
        handleAddItem(){
            if( this.selectedItem.parent === null) {
                this.addNewItem(Container);
                this.showAddMenu=false;
                return;
            }
            this.showAddMenu = true;
        },
        addNewItem(item){
            EventBus.$emit('addNewItem', item);
            this.showAddMenu = false;
        },
    },
    components: {
        DynamicListItem
    }
}
</script>
