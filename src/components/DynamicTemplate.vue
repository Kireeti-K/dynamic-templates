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
        <DynamicContainer :item-object="root" :selected-item="selectedItem" />
    </div>
</template>

<script>
import {EventBus} from "./EventBus";
import DynamicContainer from "./DynamicContainer";



export default {
    name: "DynamicTemplate",
    props: ["root", "selectedItem",'variables'],
    methods: {
        updateSelectedContainer() {
            EventBus.$emit("updateSelectedContainer", this.root);
        },
        saveState(){
            const config = this.root.serialized();
            const configString = JSON.stringify(config);
            console.log(configString);
            localStorage.setItem('config',configString);
        },
        loadState(){
            const configString = localStorage.getItem('config');
            console.log(configString);
            const tconfig = JSON.parse(configString);
            this.root.deserialize(tconfig, this.variables);
        }
    },
    components: {
        DynamicContainer,
    },
    mounted() {
        EventBus.$on('loadState',this.loadState);
        EventBus.$on('saveState',this.saveState);
    }
    ,
    data(){
        return {
            EventBus,

        }
    }
}
</script>
