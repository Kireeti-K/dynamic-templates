<style>
    /* typical pdf page width: 612, height: 792 */
    /* scaled down to .7 => width: 489, height: 633 */
    #dynamic-editor {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    #dynamic-editor .left-panel {
        width: 230px;
        margin-right: 40px;
        height: 633px;
        padding: 12px 24px;
    }
    #dynamic-editor .editor-area {
        margin-right: 40px;
        width: 16.1cm;
        height: 633px;
        padding: 12px 24px;
    }
    #dynamic-editor .right-panel {
        width: 230px;
        height: 633px;
        padding: 12px 24px;
    }
</style>

<template>
    <div id="dynamic-editor" v-on-clickaway="clickedAway">
        <dynamic-card class="left-panel">
            <div v-if="selectedElement !=null ">
                <DynamicTextComposer :selected-element="selectedElement"/>
            </div>
            <div v-if="selectedContainer !==  null && selectedElement == null">
                <DynamicContainerComposer :selected-container="selectedContainer"/>
            </div>
        </dynamic-card>
        <dynamic-card class="editor-area" @click="updateSelectedContainer(root)">
            <div v-for="(child, index) in root.children" :key="index">
                <DynamicContainer   :object="child" :selected-item="selectedItem" />
            </div>
        </dynamic-card>
        <dynamic-card class="right-panel">
            <div v-if="selectedContainer">
                <h4>Styles</h4>
                <dynamic-container-styles 
                    :styles="selectedContainer.styles.inputStyles">
                </dynamic-container-styles>
            </div>
        </dynamic-card>
    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import { EventBus } from "./EventBus";
// classes
import Container from "../classes/Container";
import TextElement from "../classes/TextElement";
import TableContainer from '../classes/TableContainer';
// components
import DynamicCard from "./DynamicCard";
import DynamicContainer from "./DynamicContainer";
import DynamicContainerStyles from "./styles/DynamicContainerStyles";
import DynamicTable from "./DynamicTable"

import DynamicContainerComposer from "./composer/DynamicContainerComposer";
import DynamicTextComposer from "./composer/DynamicTextComposer"

export default {
    name: "DynamicEditor",
    components: {
        DynamicCard,
        DynamicContainer,
        DynamicContainerComposer,
        DynamicTextComposer,
        DynamicContainerStyles,
        DynamicTable
    },
    mixins: [clickaway],
    data() {
        return {
            root: new Container(),
            selectedContainer: null,
            selectedElement:null,
        }
    },
    mounted() {
  
        EventBus.$on("addNewItem",this.addNewItem);

        EventBus.$on("updateSelectedElement",this.updateSelectedElement);
        EventBus.$on("updateSelectedContainer", this.updateSelectedContainer);
        EventBus.$on("deleteItem",this.deleteItem);
        
        EventBus.$on("setElementText",this.setElementText);

        EventBus.$on("recomputeStyles", () => {
            this.selectedContainer.recomputeStyles();
            console.log('recomputing styles')
        });
        this.selectedContainer=this.root;
        this.addNewItem("Container");
    },
    destroyed() {
        EventBus.$off("updateSelectedContianer");
    },
    methods: {
        addNewItem(itemType) {
            var item=null;  
            switch(itemType){
                case "Container":
                    item=new Container(this.selectedContainer);break;
                case "Text":
                    item=new TextElement(this.selectedContainer);break;
                 case "Table":
                    item=new TableContainer(this.selectedContainer);break;
                 case "Image":
                    item=new TextElement(this.selectedContainer);break;
            }
            this.selectedContainer.children.push(item);
        },
        updateSelectedContainer(selectedContainer) {
            this.selectedContainer = selectedContainer;
            this.selectedElement = null;
        },
        updateSelectedElement(element){
            this.selectedElement=element;
        }
        ,
        clickedAway() {
            this.updateSelectedContainer(null);
        }
        ,deleteItem(item){
            this.selectedContainer.children.pop(item);
        },
        setElementText(txt){
            this.selectedElement.data=txt;
        }
    },
    computed:{
        selectedItem:function(){
            return this.selectedElement?this.selectedElement:(this.selectedContainer?this.selectedContainer:null);
        }
    }
};
</script>