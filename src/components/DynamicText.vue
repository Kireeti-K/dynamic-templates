<style>
    .tcontainer.is-focused {
        background-color: #f7f7f7 !important;
    }
    .tcontainer:hover{outline: 15px solid yellow;}
</style>

<template>
    <div class="container"
        :style="itemObject.styles.computedStyles"
        :class="{'is-focused': isFocused}"
        @click.stop="() => EventBus.$emit('updateSelectedElement', itemObject)"
    >
        <p>{{itemObject.data}}</p>
    </div>
</template>

<script>
import { EventBus } from "./EventBus";

export default {
    name: "DynamicText",
    props: ["itemObject", "selectedItem"],
    data() {
        return {
            EventBus,
        }
    },
    computed:{
        isFocused:function(){
            return this.selectedItem==this.itemObject;
        }
    }
}
</script>
