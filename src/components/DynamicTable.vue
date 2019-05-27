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
        :style="itemObject
        .styles.computedStyles"
        :class="{'is-focused': isFocused}"
        @click.stop="() => EventBus.$emit('updateSelectedElement', itemObject)"
    >
        <table class="table" >
            <tr>
                <th v-for="i in itemObject
                .columns" :key="i">
                    subject
                </th>
            </tr>
            <tr v-for="j in itemObject
            .rows" :key="j">
                <td v-for="i in itemObject.columns" :key="i">
                    -
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
    props: ["itemObject","selectedItem"],
    components: {
        DynamicTableCell
    },
    data() {
        return {
            EventBus: EventBus,
        }
    },
    computed:{
        isFocused: function(){
            return this.selectedItem === this.itemObject;
        }
    }
}
</script>
