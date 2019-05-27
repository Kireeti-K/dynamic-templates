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
        overflow-y: auto;
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
        <dynamic-card class="left-panel" v-if="selectedItem">
            <component :is="selectedItem.composer"></component>
        </dynamic-card>
        <dynamic-card class="editor-area">
            <dynamic-template :root="root" :selected-item="selectedItem"></dynamic-template>
        </dynamic-card>
        <dynamic-card class="right-panel">
            <div v-if="selectedContainer">
                <h4 style="margin-left: 24px">Styles</h4>
                <dynamic-styles 
                    :styles="selectedItem.styles.inputStyles">
                </dynamic-styles>
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
// import TableContainer from '../classes/TableContainer';

// components
import DynamicContainer from "./DynamicContainer";
import DynamicStyles from "./styles/DynamicStyles";
import DynamicTable from "./DynamicTable"


export default {
    name: "DynamicEditor",
    components: {
        DynamicCard,
        DynamicTemplate,
        DynamicStyles,
        DynamicTable
    },
    mixins: [clickaway],
    data() {
        return {
            root: new Container(),
            selectedContainer: null,
            selectedElement: null,
        }
    },
    mounted() {
        // Container events
        EventBus.$on("addNewItem", this.addNewItem);
        EventBus.$on("updateSelectedElement", this.updateSelectedElement);
        EventBus.$on("updateSelectedContainer", this.updateSelectedContainer);
        EventBus.$on("deleteItem", this.deleteItem);
        EventBus.$on("setElementText", this.setElementText);

        // Style events
        EventBus.$on("recomputeStyles", () => {
            this.selectedContainer.recomputeStyles();
        });

        // Other usual stuff.
        this.selectedContainer = this.root;
        this.addNewItem(Container);
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
        clickedAway() {
            this.updateSelectedContainer(null);
        },
        addNewItem(ItemClass) {
            console.log("Adding new item");
            const child = new ItemClass();
            this.selectedContainer.addChild(child);
        },
        updateSelectedContainer(selectedContainer) {
            this.selectedContainer = selectedContainer;
            this.selectedElement = null;
        },
        updateSelectedElement(element){
            this.selectedElement=element;
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