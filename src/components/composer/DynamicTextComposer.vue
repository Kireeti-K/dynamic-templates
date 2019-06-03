<template>
    <div class="editor-controls">
        <h4>Text</h4>
        <div  id="controls-list">
           
            <h4>Variable</h4>

            <div  class="margin12">
                <label for="is-static">
                    Use Variable
                    <input type = "checkbox" id="is-static" v-model="useVariable">  
                </label>
            </div>

            <div v-show="selectedItem.data.static" class="text-box">
                <h4>Label</h4>
                <textarea  
                    minlength="2560" 
                    v-model="selectedItem.data.text" 
                    ref="elementTextField" 
                    autofocus
                />
            </div>
            <div v-show="!selectedItem.data.static" >
                <h4>Text</h4>
                <select @change="setTextVar()" v-model="selectedVariable">
                    <option v-for="t in variables.texts" :key="t.id" :value="t">
                        {{t.label}}
                    </option>
                </select>
            </div>
            
        </div>
    </div>
</template>

<script>
import {EventBus} from "../EventBus"
export default {
    name: "DynamicTextComposer",
    props: ["selectedItem","variables"],
    data(){
        return {
            inputText:"",selectedVariable:null
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
    methods:{
        setTextVar(){
            const variable = this.selectedVariable;
            this.selectedItem.data.variableID = variable.id;
            this.selectedItem.data.text = variable.data;
        }
    },
    computed:{
        useVariable:{
            get(){return !this.selectedItem.data.static;},
            set(val){this.selectedItem.data.static = !val;}
        }
    }
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

    #controls-list select {
        border:none;
        padding:4px;
        border-radius: 4px;
        border:1px solid gray;
        background-color: white;
    }
    .text-box{
        margin-top:24px;
    }
</style>
