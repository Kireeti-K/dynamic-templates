<style scoped>
    .table{
        color:black;
       border-color: black;
        border-collapse: collapse;
        width: 100%;
       
    }
    td,th {
        border: solid 1px gray;
        padding: 8px;
    }
</style>

<template>
    <div class="cbse-table"
        :style="itemObject.styles.computedStyles"
        :class="{'is-focused': isFocused}"
        @click.stop="() => EventBus.$emit('updateSelectedContainer',itemObject)"
    >
        <table class="table" >
            <tr>
                <th rowspan="2">
                        sl no
                </th>
                <th rowspan="2">
                        subject
                </th>
                <th :colspan="itemObject.data.subjects[0].terms[0].skills.length">
                        term 1
                </th>
                <th :colspan="itemObject.data.subjects[0].terms[0].skills.length">
                        term 2
                </th>
            </tr>
            <tr>
                <th v-for="(skill) in itemObject.data.subjects[0].terms[0].skills" :key="skill.id" >
                    {{skill.id}}
                </th>
                <th v-for="(skill,n) in itemObject.data.subjects[0].terms[1].skills" :key="n" >
                    {{skill.id}}
                </th>
            </tr>
            <tr v-for="(subject,j) in itemObject.data.subjects" :key="j">
                <td>{{(j)}}</td>
                <td>{{subject.id}}</td>

                <td v-for="(skill) in subject.terms[0].skills" :key="skill.id">
                    {{skill.marks}}
                </td>
                <td v-for="(skill) in subject.terms[1].skills" :key="skill.id+1">
                    {{skill.marks}}
                </td>
                
            </tr>
        </table>

    </div>
</template>

<script>
import {EventBus} from "../components/EventBus";
export default {
    name: "CbseTable",
    props: ["itemObject","selectedItem",],
    components: {
        
    },
    data() {
        return {
            nsubjects:6,
            EventBus
        }
    },
    computed:{
        isFocused: function(){
            return this.selectedItem === this.itemObject;
        }
    }
}
</script>
