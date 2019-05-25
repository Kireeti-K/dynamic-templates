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
        width: 280px;
        height: 633px;
        padding: 12px 0px;
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
        <dynamic-card class="editor-area">
            <dynamic-template :root="root" :selected-item="selectedItem"></dynamic-template>
        </dynamic-card>
        <dynamic-card class="right-panel">
            <div v-if="selectedContainer">
                <h4 style="margin-left: 24px">Styles</h4>
                <dynamic-container-styles 
                    :styles="selectedItem.styles.inputStyles">
                </dynamic-container-styles>
            </div>
        </dynamic-card>
    </div>
</template>

<script>
// dumb components and libraries
import { mixin as clickaway } from 'vue-clickaway';
import { EventBus } from "./EventBus";
import DynamicCard from "./dumb/DynamicCard";
import DynamicTemplate from "./DynamicTemplate";
// classes
import Container from "../classes/Container";
import TextElement from "../classes/TextElement";
import TableContainer from '../classes/TableContainer';
// components
import DynamicContainer from "./DynamicContainer";
import DynamicContainerStyles from "./styles/DynamicContainerStyles";
import DynamicTable from "./DynamicTable"

import DynamicContainerComposer from "./composer/DynamicContainerComposer";
import DynamicTextComposer from "./composer/DynamicTextComposer";


export default {
    name: "DynamicEditor",
    components: {
        DynamicCard,
        DynamicContainerComposer,
        DynamicTextComposer,
        DynamicTemplate,
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
        // Container events
        EventBus.$on("addNewItem",this.addNewItem);
        EventBus.$on("updateSelectedElement",this.updateSelectedElement);
        EventBus.$on("updateSelectedContainer", this.updateSelectedContainer);
        EventBus.$on("deleteItem",this.deleteItem);
        EventBus.$on("setElementText",this.setElementText);

        // Style events
        EventBus.$on("recomputeStyles", () => {
            this.selectedContainer.recomputeStyles();
        });

        // Other usual stuff.
        this.selectedContainer=this.root;
        this.addNewItem("Container");
    },
    destroyed() {
        // Container events
        EventBus.$off("addNewItem");
        EventBus.$off("updateSelectedElement");
        EventBus.$off("updateSelectedContainer");
        EventBus.$off("deleteItem");
        EventBus.$off("setElementText");

        // Style events
        EventBus.$off("recomputeStyles");
    },
    computed:{
        selectedItem(){
            if (this.selectedElement) return this.selectedElement;
            else if (this.selectedContainer) return this.selectedContainer;
            else null;
        }
    },
    methods: {
        addNewItem(itemType) {
            let item = null;
            switch(itemType){
                case "Container":
                    item = new Container();
                    break;
                case "Text":
                    item=new TextElement();break;
                case "Table":
                    item=new TableContainer();break;
                case "Image":
                    item=new TextElement();break;
            }
            this.selectedContainer.addChild(item);
        },
        updateSelectedContainer(selectedContainer) {
            this.selectedContainer = selectedContainer;
            this.selectedElement = null;
        },
        updateSelectedElement(element){
            this.selectedElement=element;
        },
        clickedAway() {
            this.updateSelectedContainer(null);
        },
        deleteItem(item){
            this.selectedContainer.deleteChild(item);
        },
        setElementText(text){
            this.selectedElement.data=text;
        }
    },
};
</script>