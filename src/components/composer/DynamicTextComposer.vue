<template>
    <div class="editor-controls">
        <h4>Text</h4>
        <div  id="controls-list">
           <textarea class="" minlength="2560" v-model="selectedItem.data.text" ref="elementTextField" autofocus> </textarea>
        </div>
    </div>
</template>

<script>
import {EventBus} from "../EventBus"
export default {
    name: "DynamicTextComposer",
    props: ["selectedItem"],
    data(){
        return {
            inputText:""
        }
    },
    mounted(){
        if(this.selectedItem){
            this.inputText=this.selectedItem.data.text;
        }
    }
    ,watch:{
        inputText:function(newv){
            EventBus.$emit("setElementText",this.inputText);
        },
        selectedItem:function(newv){
            this.inputText=this.selectedItem.data.text;
            this.$refs.elementTextField.focus();
        }
    },
}
</script>

<style>
    #controls-list{
        margin: 0;
        padding:0 ;
        background-color: white;
        /*
        border-radius: 8px;
        box-shadow:  0 0 8px lightgray;
        */
    }
    #controls-list textarea{
        padding: 12px;
        border:1px solid lightgray;
        font-size: 14px;
        background-color: white;
        height: 120px;
        margin: 0;
        resize: none;
        /* 
        border-radius: 8px;
        box-shadow: inset 0 2px 4px gray;
        
         */
    }
    #controls-list .item{
       margin:8px 0;
        display:flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
    }
    #controls-list .medium{width:120px}

</style>
