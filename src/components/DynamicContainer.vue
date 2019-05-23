<style>
    .container {
        background-color: #fff;
    }
    .container.is-focused {
        background-color: #f7f3f3;
    }
</style>

<template>
    <div class="container" 
        :class="{'is-focused': isFocused}" 
        @click.stop="() => EventBus.$emit('updateSelectedContainer', containerObject)" 
    >
        <div v-if="containerObject.children.length > 0">
            Showing children
        </div>
        <div v-else style="padding: 10px; color: #aaa">Empty container</div>
    </div>
</template>

<script>
import { EventBus } from "./EventBus";

export default {
    name: "DynamicContainer",
    props: ["containerObject", "isFocused"],
    data() {
        return {
            EventBus: EventBus,
        }
    },
}
</script>
