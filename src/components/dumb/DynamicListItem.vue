<style scoped>
    .dynamic-option{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 6px;
    }
    .dynamic-option .item-name {
        flex:1;
        padding: 8px;
        padding-left: 8px;
    }
    .dynamic-option .delete-icon {
        fill: orangered;
    }
    .dynamic-option .delete{
        margin: 0;
        padding: 4px 8px;
        border:none;
        cursor: pointer;
        width: 40px;
        background-color: white;
    }
    .dynamic-option .delete:hover {
        outline: none;
    }
</style>

<template>
    <div class="dynamic-option">
        <div class="item-name" v-on="$listeners"><slot /></div>
        <button class="delete" @click="() => $emit('delete-clicked')">
            <TrashIcon w="18px" h="18px" root-class="delete-icon" />
        </button>
    </div>
</template>

<script>
import TrashIcon from "vue-ionicons/dist/md-trash";
export default {
    name: "DynamicListItem",
    components: {
        TrashIcon,
    }
}
</script>
