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
        padding: 24px;
    }
    #dynamic-editor .editor-area {
        margin-right: 40px;
        width: 16.1cm;
        height: 633px;
        padding: 24px;
    }
    #dynamic-editor .right-panel {
        width: 230px;
        height: 633px;
        padding: 24px;
    }
</style>

<template>
    <div id="dynamic-editor" v-on-clickaway="clickedAway">
        <dynamic-card class="left-panel">
            <div v-show="selectedElement !== 'undefined'">
                <DynamicTextComposer :selectedElement="selectedElement"/>
            </div>
            <div v-show="selectedContainer !== 'undefined'">
                <DynamicContainerComposer :selectedContainer="selectedContainer"/>
            </div>
        </dynamic-card>
        <dynamic-card class="editor-area">
            <div v-for="(container, index) in containers" :key="index">
                <dynamic-container :container-object="container" ></dynamic-container>
            </div>
        </dynamic-card>
        <dynamic-card class="right-panel">
            <h4>Styles</h4>
        </dynamic-card>
    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import Container from "../classes/container";
import DynamicCard from "./DynamicCard";
import DynamicContainer from "./DynamicContainer";
import { EventBus } from "./EventBus";
import DynamicContainerComposer from "./composer/DynamicContainerComposer";
import DynamicTextComposer from "./composer/DynamicTextComposer"
export default {
    name: "DynamicEditor",
    components: {
        DynamicCard,
        DynamicContainer,
        DynamicContainerComposer,
        DynamicTextComposer
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
        if (Object.keys(this.containers).length === 0) {
            this.addNewContainer();
        }
        EventBus.$on("updateSelectedContainer", this.updateSelectedContainer);
        EventBus.$on("addNewContainer",addNewContainer);
        EventBus.$on("deleteItem",deleteItem);
        this.selectedContainer=this.root;
    },
    destroyed() {
        EventBus.$off("updateSelectedContianer");
    },
    methods: {
        addNewContainer() {

            this.selectedContainer.push(new Container());
        },
        updateSelectedContainer(selectedContainer) {
            this.selectedContainer = selectedContainer;
        },
        clickedAway() {
            this.updateSelectedContainer(null);
        }
        ,deleteItem(item){
            ths.selectedContainer.pop(item);
        }
    }
};
</script>