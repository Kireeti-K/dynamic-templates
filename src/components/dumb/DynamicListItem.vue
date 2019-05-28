<style scoped>
    .dynamic-option{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        margin-left: 4px;
        border: 1px solid #ddd;
        border-radius: 6px;
    }
    .dynamic-option .item-name {
        flex:1;
        padding: 8px;
        padding-left: 8px;
        position: relative;
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
    .floaty-icon{
        left: 2px;
        position: absolute;
        display: flex;
        flex-direction: column;
    }
    .dynamic-option button{
        border:none;
        background-color: white;
    }
    .dynamic-option button:hover{
        background-color: lightgray;
    }
</style>

<template>
    <div class="dynamic-option">
        <div class="item-name" v-on="$listeners"><slot /></div>
        <button class="delete" @click="() => $emit('delete-clicked')">
            <TrashIcon w="18px" h="18px" root-class="delete-icon" />
        </button>
        <div class="floaty-icon">
            <button @click="() => $emit('move-item',-1)">
                <UpIcon w="12px" h="12px" />
            </button>
            <button @click="() => $emit('move-item',1)">
                <DownIcon w="12px" h="12px" />
            </button>
        </div>
    </div>
</template>

<script>
import TrashIcon from "vue-ionicons/dist/md-trash";
import UpIcon from "vue-ionicons/dist/md-thumbs-up";
import DownIcon from "vue-ionicons/dist/md-thumbs-down";
export default {
    name: "DynamicListItem",
    components: {
        TrashIcon,UpIcon,DownIcon
    }
}
</script>
