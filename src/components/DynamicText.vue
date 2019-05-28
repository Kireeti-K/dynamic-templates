<style>

</style>

<template>
    <p class="text-element"
        :style="itemObject.styles.computedStyles"
        :class="{'is-focused': isFocused}"
        @click.stop="() => EventBus.$emit('updateSelectedElement', itemObject)"
    >
        {{itemObject.data}}
    </p>
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
