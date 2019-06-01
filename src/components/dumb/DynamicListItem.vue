<style scoped>
    @keyframes moveup {
        from {margin-top:50px;background-color: red;}
        to {margin-top: 0;background-color: white;}
    }
    .dynamic-option{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 6px;
        background-color: white;
        position: relative;
    }
    .dynamic-option .item-name {
        flex:1;
        padding: 8px;
        padding-left: 8px;
        position: relative;
        font-size: 15px;
        cursor: pointer;
    }
    .dynamic-option .delete-icon {
        fill: orangered;
        position: relative;
    }
    .dynamic-option .delete{
        margin: 0;
        padding: 8px 8px;
        border:none;
        cursor: pointer;
        
        transition: transform 0.1s ease;
    }
    .dynamic-option .delete:hover {
        outline: none;transform: scale(1.2);
    }
    .floaty-icon{
        transition: transform 0.1s ease;
        margin:4px;
        margin-left: 8px;   
        width: 24px;
        height: 36px;
        display: flex;
        flex-direction: column;
        justify-content: center;    
    }
    .floaty-icon:hover{
        transform: scale(1.2);
    }
    .dynamic-option button{
        border:none;
        background-color: white;
    }
    /*
    .dynamic-option button:hover{
         background-color: lightgray; 
    }
    */
    .move-button{
        cursor: pointer;
        padding: 0;
        margin: 0;
        line-height: 12px;
    }
    
</style>

<template>

    <div class="dynamic-option" 
        @mouseover="() => this.showMoveControls=true"
        @mouseleave="() => this.showMoveControls=false"
    >
        <div class="floaty-icon" >
                <div @click="() => moveItem(-1)" v-show="showMoveControls" class="move-button">
                    <UpIcon w="16px" h="16px"/>
                </div>
                <div @click="() => moveItem(1)" v-show="showMoveControls" class="move-button">
                    <DownIcon w="16px" h="16px"/>
                </div>
        </div>

 
 
        <div class="item-name" v-on="$listeners" >
            <slot />
        </div>
        <div class="delete" @click="() => $emit('delete-clicked')" v-show="showMoveControls||true">
            <TrashIcon w="18px" h="18px" root-class="delete-icon" />
        </div>
    </div>

</template>

<script>
import TrashIcon from "vue-ionicons/dist/md-trash";
import UpIcon from "vue-ionicons/dist/ios-arrow-up";
import DownIcon from "vue-ionicons/dist/ios-arrow-down";
export default {
    name: "DynamicListItem",
    components: {
        TrashIcon,UpIcon,DownIcon
    },
    data(){
        return{
            showMoveControls:false
        }
    },
    methods:{
        moveItem(dir){
            this.$emit('move-item',dir);
            this.showMoveControls=false;
        }
    }
}
</script>
