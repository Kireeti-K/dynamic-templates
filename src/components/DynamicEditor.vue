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
            <div v-show="selectedContainer !== 'undefined'">
                
            </div>
        </dynamic-card>
        <dynamic-card class="editor-area">
            <div v-for="(container, index) in containers" :key="index">
                <dynamic-container :container-object="container" :is-focused="selectedContainer && container.id === selectedContainer.id"></dynamic-container>
            </div>
        </dynamic-card>
        <dynamic-card class="right-panel">
            <h4>Styles</h4>
        </dynamic-card>
    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import Container from "./container";
import DynamicCard from "./DynamicCard";
import DynamicContainer from "./DynamicContainer";
import { EventBus } from "./EventBus";

export default {
    name: "DynamicEditor",
    components: {
        DynamicCard,
        DynamicContainer
    },
    mixins: [clickaway],
    data() {
        return {
            containers: [],
            selectedContainer: null,
            selectedElement: null,
        }
    },
    mounted() {
        if (Object.keys(this.containers).length === 0) {
            this.addNewContainer();
        }
        EventBus.$on("updateSelectedContainer", this.updateSelectedContainer);
    },
    destroyed() {
        EventBus.$off("updateSelectedContianer");
    },
    methods: {
        addNewContainer() {
            this.containers.push(new Container());
        },
        updateSelectedContainer(selectedContainer) {
            this.selectedContainer = selectedContainer;
        },
        clickedAway() {
            this.updateSelectedContainer(null);
        }
    }
};
</script>