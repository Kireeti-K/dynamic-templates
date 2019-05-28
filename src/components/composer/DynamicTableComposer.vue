<template>
    <div class="editor-controls">
        <h4>Table</h4>

        <DynamicCollapse label="rows" >
            <div id="" >
                <DynamicListItem v-for="(c,i) in selectedItem.data.rows[0].length" :key="i"
                    @delete-clicked="() => deleteRow(i)" 
                    @move-item="(dir) => moveRow(c,i,dir)"
                >
                    row
                </DynamicListItem>
            </div>
            <button id='addnew' @click="addNewRow">add row </button>
        </DynamicCollapse>

        <DynamicCollapse label="columns" >
            <div id="container-list" >
                <DynamicListItem v-for="(c,i) in selectedItem.data.rows[0].length" :key="i"
                    @delete-clicked="() => deleteColumn(i)" 
                    @move-item="(dir) => moveColumn(c,i,dir)"
                >
                    column
                </DynamicListItem>
            </div>
            <button id='addnew' @click="addNewColumn">add column </button>
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
            showAddMenu:false,
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
        },
        moveColumn(index,dir){
            this.selectedItem.moveRow(index,dir);
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
    #addnew{
        padding: 12px;
        border:none;
        background-color: rgb(24, 162, 248);
        color:white;
        width:  100%;
        margin: 8px 0;
        font-size: 1.2em;
        /* 
        border-radius: 80px;
        box-shadow: 0 0 4px gray;
        box-sizing: border-box;
        outline: none;
         */
    }
    #addnew:hover{
        background-color: lightskyblue;
        /* 
        box-shadow: 0 0 8px gray;
         */
    }
    #addnew:active{
        box-shadow: inset 0 0 8px lightgray;color:gray;
    }
    
    @keyframes disco{
        from{box-shadow: 0 0 4px red;}
        to{box-shadow: 0 0 16px blue;}
    }
    .dynamic-collapse{
        margin-bottom: 16px;
    }
</style>
