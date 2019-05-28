<style scoped>
    :root {
        --color: red;
    }
    .container {
        display: flex;
    }
    .container .is-editing {
        border: 1px dotted #bbb;
        border-radius: 4px;
    }
    .container .is-editing:hover {
        padding: 5px;
        padding-top: 15px;
        border: 1px dotted red;
        background-color: var(--color);
    }
</style>

<template>
    <div class="container"
        :class="{'is-focused': isFocused, 'is-editing': itemObject.editingMode}"
        :style="[editingCssProps, itemObject.styles.computedStyles]"
        @click.stop="() => EventBus.$emit('updateSelectedContainer', itemObject)"
    >
        <div class="container-children" v-if="itemObject.children.length==0" style="padding: 10px; color: #333;"></div>
        <component
            v-for="(child,i) in itemObject.children" :key=i
            :class="{'is-editing': itemObject.editingMode}"
            :style="editingCssProps"
            :is="child.component" :item-object="child"
            :selected-item="selectedItem"
        ></component>
    </div>
</template>

<script>
import { EventBus } from "./EventBus";

export default {
    name: "DynamicContainer",
    props: ["itemObject", "selectedItem"],
    data() {
        return {
            EventBus: EventBus,
        }
    },
    computed:{
        isFocused:function(){
            return this.selectedItem === this.itemObject;
        },
        editingCssProps() {
            return {
                "--color": this.itemObject.color,
            }
        }
    }
}
</script>
