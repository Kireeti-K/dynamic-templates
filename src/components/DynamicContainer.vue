<style scoped>
    :root {
        --color: red;
    }
    .container {
        display: flex;
    }
    .container-children {
        flex: 1;
    }
    .container.is-focused {
        /* background-color: #f7f7f7; */
    }
    .container .is-editing {
    }
    .container .is-editing:hover {
        background-color: var(--color);
        outline: 1px solid red;
        padding-bottom: 10px;
    }
</style>

<template>
    <div class="container"
        :class="{'is-focused': isFocused, 'is-editing': itemObject.editingMode}"
        :style="[editingCssProps, itemObject.styles.computedStyles]"
        @click.stop="() => EventBus.$emit('updateSelectedContainer', itemObject)"
    >
        <div class="container-children" v-if="itemObject.children.length==0" style="padding: 10px; color: #333;">Empty container</div>
        <component
            v-for="(child,i) in itemObject.children" :key=i
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
