<style>
    .container.is-focused {
        background-color: #f7f7f7 !important;
    }
</style>

<template>
    <div class="container" 
        :style="styles"
        :class="{'is-focused': isFocused}" 
        @click="() => EventBus.$emit('updateSelectedContainer', containerObject)" 
    >
        <div v-if="containerObject.children.length > 0">
            Showing children
        </div>
        <div v-else style="padding: 10px; color: #333">Empty container</div>
    </div>
</template>

<script>
import { EventBus } from "./EventBus";

export default {
    name: "DynamicContainer",
    props: ["containerObject", "styles", "isFocused"],
    data() {
        return {
            EventBus: EventBus,
        }
    },
}
</script>
