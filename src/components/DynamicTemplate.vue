<style scoped>

.dynamic-container{
   min-height: 16.2cm;
   min-width: 16.1cm;
}
.dynamic-container:hover{
   outline-color: orange;
}
</style>

<template>
    <div class="dynamic-template">
        
        <DynamicContainer :item-object="root" :selected-item="selectedItem" class="dynamic-container"/>

        <!-- <div @click="updateSelectedContainer" :style="config.styles.computedStyles">
            <div v-for="(child, index) in config.children" :key="index">
                <DynamicContainer :item-object="child" :selectedItem="selectedItem" />
            </div>
        </div> -->
    </div>
</template>

<script>
import {EventBus} from "./EventBus";
import DynamicContainer from "./DynamicContainer";

export default {
    name: "DynamicTemplate",
    props: ["root", "selectedItem"],
    methods: {
        updateSelectedContainer() {
            EventBus.$emit("updateSelectedContainer", this.root);
        }
    },
    components: {
        DynamicContainer,
    }
}
</script>
