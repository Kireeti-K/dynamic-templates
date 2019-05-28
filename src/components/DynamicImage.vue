<style>
    .tcontainer.is-focused {
        background-color: #f7f7f7 !important;
    }
    .tcontainer:hover{outline: 15px solid yellow;}
    .dummy-image{
       border: 2px dotted gray;
       border-radius: 8px;
       margin: 4px;
       text-align: center;
       display: flex;
       justify-content: center;
       align-items: center;
    }
</style>

<template>
    <img v-if="itemObject.data.imageUrl!=''" 
        :src="itemObject.data.imageUrl" 
        :width="itemObject.data.width" 
        :height="itemObject.data.height"


        :style="itemObject.styles.computedStyles"
        :class="{'is-focused': isFocused}"
        @click.stop="() => EventBus.$emit('updateSelectedElement', itemObject)"
    />
    <div v-else @click.stop="() => EventBus.$emit('updateSelectedElement', itemObject)">
        <div  class="dummy-image" :style="{width:itemObject.data.width+'px',height:itemObject.data.height+'px'}">
                no image
        </div>
    </div>
</template>

<script>
import { EventBus } from "./EventBus";

export default {
    name: "DynamicImage",
    props: ["itemObject", "selectedItem"],
    data() {
        return {
            EventBus,
        }
    },
    computed:{
        isFocused:function(){
            return this.selectedItem==this.itemObject;
        }
    }
}
</script>
