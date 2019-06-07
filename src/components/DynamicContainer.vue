<style scoped>
    :root {
        --color: red;
    }
    .container {
        display: flex;
        /*
        background-color: white !important;
        */
    }
    .container .is-editing {
        border: 1px dotted #bbb;
        border-radius: 4px;
        transition: all 0.5s ease;
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
        :class="{'is-focused': isFocused, 'is-editing': isEditing}"
        :style="[editingCssProps, itemObject.styles.computedStyles]"
        @click.stop="() => EventBus.$emit('updateSelectedContainer', itemObject)"
    >
        <div class="container-children" v-if="itemObject.children.length==0" style="padding: 10px; color: #333;">Empty container</div>
        <!--
            <transition-group appear name="slide">
        -->
        <component 
            v-for="(child) in itemObject.children" :key="child.id"
            :class="{'is-editing': isEditing}"
            :style="editingCssProps" 
            :is="child.component" 
            :item-object="child" 
            :selected-item="selectedItem" 
        >
        </component>
        <!--
        </transition-group>
        -->
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
        },
        isEditing(){
            return this.itemObject.editingMode && this.selectedItem != null;
        }
    }
}
</script>
