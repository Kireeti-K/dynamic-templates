<style scoped>
    .dynamic-collapse .collapse-label {
        background-color: rgb(247, 247, 247);
        padding: 8px 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-weight: 500;
        cursor: pointer;
    }
    
    .dynamic-collapse .icon {
        line-height: 0px;
    }
    .dynamic-collapse .content {
        padding : 8px 20px;
        /*
        margin: 6px 18px 6px 12px;
        */
    }
</style>

<template>
    <div class="dynamic-collapse">
        <div class="collapse-label" @click="toggleIsOpen">
            <span>{{label}}</span>
            <ArrowUp w="22px" h="22px" class="icon" v-show="isOpen"></ArrowUp>
            <ArrowDown w="22px" h="22px" class="icon" v-show="!isOpen"></ArrowDown>
        </div>
        <div v-show="isOpen" class="content">
            <slot  />
        </div>
    </div>
</template>

<script>
import ArrowUp from "vue-ionicons/dist/md-arrow-dropup";
import ArrowDown from "vue-ionicons/dist/md-arrow-dropdown";

export default {
    name: "DynamicCollapse",
    props: ["label"],
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        toggleIsOpen() {
            this.isOpen = !this.isOpen;
        }
    },
    components: {
        ArrowUp,
        ArrowDown,
    }
}
</script>
