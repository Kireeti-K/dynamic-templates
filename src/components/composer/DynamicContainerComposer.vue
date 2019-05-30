<style>
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
    .fade-enter-active, .fade-leave-active{
        transition: opacity .2s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0.5;
    }
    .slide-move{
        transition: transform 0.8s;
    }
    .aboveall{
        z-index: 5;
    }
    .container-list{
        background-color: white;
    }
</style>

<template>
    <div class="editor-controls" >
        <h4>Container</h4>

        <!-- childen list -->
        <div class="container-list" v-if="selectedItem && selectedItem.children.length > 0" >
            <transition-group name="slide">
                <dynamic-list-item v-for="(c, i) in selectedItem.children" :key="c.id"
                    :class="{aboveall: movingItem == i}"
                    @delete-clicked="() => deleteItem(c)" 
                    @move-item="(dir) => moveItem(c,i,dir)"
                    @click="()=> updateSelectedItem(c)"
                >
                    {{c.displayName}}
                </dynamic-list-item>
            </transition-group>
        </div>
        <div style="margin-bottom: 10px" v-else>No items in the container</div>

    <div v-on-clickaway="clickedAway">
        <button id='add-item' @click="handleAddItem">Add Item</button>
        <transition name="fade">
            <div id="select-menu" v-show="showAddMenu"  >
                <!-- <h4>Select Item</h4> -->
                <div 
                    v-for="(item, i) in addables" :key="i"
                    class="item"
                    @click="() => addNewItem(item.class)"
                >
                    {{item.label}}
                </div>
            </div>

        </transition>
    </div>

    </div>
</template>

<script>
import {EventBus} from "../EventBus";
import { Container, TableContainer, TextElement, ImageElement} from "../../internal";
import DynamicListItem from "../dumb/DynamicListItem";
import { Element } from '../../classes/Element';
import { mixin as clickaway } from 'vue-clickaway';
export default {
    name: "DynamicContainerComposer",
    props: ["selectedItem"],
    mixins:[clickaway],
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
            ,
            movingItem: 0
        }
    },
    methods:{
        deleteItem(item){
            EventBus.$emit('deleteItem',item)
        },
        handleAddItem(){
            this.showAddMenu = !this.showAddMenu;
        },
        addNewItem(item){
            EventBus.$emit('addNewItem', item);
            this.showAddMenu = false;
        },
        updateSelectedItem(item){
            if(this.selectedItem instanceof Container){
                EventBus.$emit('updateSelectedContainer',item)
            }
            else if(this.selectedItem instanceof Element){
                EventBus.$emit('updateSelectedElement',item)
            }
        },
        moveItem(item,index,dir){
            let newIndex = index + dir;
            const children=this.selectedItem.children;
            //alert('moving '+index+'  by '+dir)
            if((dir<0 && index <1 )||(dir>0 && index > children.length-2)){ return; }
            // if(dir>0 && index>0){}else if(dir < 0 && index < children.length-1 ){}
            this.selectedItem.children.splice(index,1);
            this.selectedItem.children.splice(newIndex,0,item);
            this.movingItem = index+dir;
        },
        clickedAway(){
            this.showAddMenu=false;
        }
    },
    components: {
        DynamicListItem
    }
}
</script>
