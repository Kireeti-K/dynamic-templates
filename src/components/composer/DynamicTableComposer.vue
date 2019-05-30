<template>
    <div class="editor-controls">
        <h4>Table</h4>

        <DynamicCollapse label="rows" >
            <div id="" >
                <transition-group name="slide">
                    <DynamicListItem v-for="(c,i) in selectedItem.data.rows" :key="c.id"
                        @delete-clicked="() => deleteRow(i)" 
                        @move-item="(dir) => moveRow(i,dir)"
                        :class="{aboveall: movingItem == i}"
                    >
                        row
                    </DynamicListItem>
                </transition-group>
            </div>
            <button id='add-item' @click="addNewRow">add row </button>
        </DynamicCollapse>

        <DynamicCollapse label="columns" >
            <div id="container-list" >
                <transition-group name="slide">
                    <DynamicListItem v-for="(c,i) in selectedItem.data.rows[0]" :key="c.id"
                        @delete-clicked="() => deleteColumn(i)" 
                        @move-item="(dir) => moveColumn(i,dir)"
                        :class="{aboveall: movingItem == i}"
                    >
                        column
                    </DynamicListItem>
                </transition-group>
            </div>
            <button id='add-item' @click="addNewColumn">add column </button>
        </DynamicCollapse>

    </div>
</template>

<script>
import {EventBus} from "../EventBus";
import DynamicCollapse from "../dumb/DynamicCollapse";
import TableCellContainer from '../../classes/TableCellContainer';
import DynamicListItem from "../dumb/DynamicListItem";

export default {
    name: "DynamicTableComposer",
    props: ["selectedItem"],
    components:{
        DynamicCollapse,DynamicListItem
    },
    data(){
        return{
            showAddMenu:false,movingItem:0
        }
    },
    methods:{
        handleAddNew(){
            if(this.selectedItem.parent==null){this.addNewItem("Container");this.showAddMenu=false;return;}
            this.showAddMenu=true;
        },
        addNewItem(itemName){
            EventBus.$emit('addNewItem',itemName);
            this.showAddMenu = false;
        },
        addNewRow(){
            this.selectedItem.addNewRow();
        },
        addNewColumn(){
            this.selectedItem.addNewColumn();
        },
        deleteRow(n){
            this.selectedItem.deleteRow(n);
        },
        deleteColumn(n){
            this.selectedItem.deleteColumn(n);
        },
        moveRow(index,dir){
            this.selectedItem.moveRow(index,dir);
            this.movingItem = index+dir;
        },
        moveColumn(index,dir){
            this.selectedItem.moveColumn(index,dir);
            this.movingItem = index+dir;
        }
    }
}
</script>

<style scoped>
    #container-list{
        /*
        padding: 8px;
        
        border-radius: 4px;
        box-shadow: inset 0 0 4px gray;
        background-color: rgb(230, 230, 230);
        */
    }
    #container-list .item{
        margin:4px 0;
        padding: 0px 8px;
       
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border:  1px solid lightgray;
        margin-bottom: 10px;
    }
    #container-list .delete{
        padding: 4px 8px;
        font-weight: bold;
        background-color: orangered;
        color:white;
       
        border:none;
    }
    #container-list .delete:hover{
        background-color: red;
        /*
        box-shadow: 0 0 4px red;
        animation: disco 0.1s infinite alternate;
        */
    }

    
    @keyframes disco{
        from{box-shadow: 0 0 4px red;}
        to{box-shadow: 0 0 16px blue;}
    }
    .dynamic-collapse{
        margin-bottom: 16px;
    }
</style>
