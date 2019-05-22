<template>
    <div class="editor-controls">
        <h4>Controls</h4>
        <div v-if="selectedContainer && selectedContainer.children.length > 0">
            <!-- childen list -->
            <ul>
                <li></li>
            </ul>
        </div>
        <div v-else>No items in the container</div>
    </div>
</template>

<script>
export default {
    name: "DynamicControls",
    props: ["selectedItem"],
}
</script>

<style>

</style>
