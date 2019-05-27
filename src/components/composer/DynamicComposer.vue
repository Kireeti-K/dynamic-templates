<style>
    .composer-wrapper {
        width: 230px;
        height: 633px;
        padding: 12px 24px;
        overflow-y: auto;
        position: relative;
    }
</style>

<template>
    <div class="composer-wrapper">
        <slot />
    </div>
</template>

<script>
export default {
    name: "DynamicComposer"
}
</script>
