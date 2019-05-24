<template>
    <div class="editor-controls">
        <h4>Container</h4>
    
        <!-- childen list -->
        <div id="container-list" v-if="selectedContainer && selectedContainer.children.length > 0" >
            <div class="item" v-for="(c,i) in selectedContainer.children" :key="i" >
                <p> container </p>
                <button class="delete" @click="deleteItem(c)">-</button>
            </div>
        </div>
        <div v-else>No items in the container</div>
        <button id='addnew' @click="addNew">add new </button>
    
    </div>
</template>

<script>
import {EventBus} from "../EventBus"
export default {

    name: "DynamicContainerComposer",
    props: ["selectedContainer"],
    methods:{
        deleteItem(item){
            EventBus.$emit('deleteItem',item)
        },
        addNew(){
            EventBus.$emit('addNewContainer');
        }
    }
}
</script>

<style>
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
</style>
