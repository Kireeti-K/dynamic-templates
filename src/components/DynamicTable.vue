<style scoped>
 
    .table{
        color:black;
       border-color: black;
        border-collapse: collapse;
    }
    td,th {
    border: solid 1px gray;
    }
</style>

<template>
    <div class="container" 
        :style="object.styles.computedStyles"
        :class="{'is-focused': isFocused}" 
        @click.stop="() => EventBus.$emit('updateSelectedElement', object)" 
    >
        <table class="table" >
            <tr>
                <th v-for="i in object.columns" :key="i">
                    subject
                </th>
            </tr>
            <tr v-for="j in object.rows" :key="j">
                <td v-for="i in object.columns" :key="i">
                    
                </td>
            </tr>
        </table>

    </div>
</template>

<script>
import { EventBus } from "./EventBus";
import DynamicTableCell from './DynamicTableCell';

export default {
    name: "DynamicTable",
    props: ["object","selectedItem"],
    components:{
        DynamicTableCell
    },
    data() {
        return {
            EventBus: EventBus,
        }
    },
    computed:{
        isFocused:function(){
            return this.selectedItem==this.object;
        }
    }
}
</script>
