<template>
    <div class="editor-controls">
        <h4>Image</h4>
        <div  id="controls-list">

            <div  class="margin12">
                <label for="is-static">
                    <input type = "checkbox" id="is-static" v-model="useVariable">  
                    Use Variable
                </label>
            </div>

           <div v-if="selectedItem.data.static" class="item">
               <p>File</p>
               <input type = "file" class=" medium" @change="setImage" autofocus/>
           </div>
            <div v-else class="image-list">
                <div class="image-column" v-for="(i,n) in variables.images" :key="i.id+n" @click="setImageVar(i)">
                        <img :src="i.data" 
                        alt="" srcset="" width="94px" height="94px">
                </div>
            </div>

           <div  class="item">
               <p>Width</p>
                <dynamic-input :increment="10" :type="'number'" :width="'40px'" v-model="dynamicWidth"/>
           </div>
           <div  class="item">
                <p>Height</p>
                <dynamic-input :increment="10" :type="'number'" :width="'40px'" v-model="dynamicHeight" />
           </div>

        </div>
    </div>
</template>

<script>
import {EventBus} from "../EventBus"
import DynamicInput from "../inputs/DynamicInput"
export default {
    name: "DynamicImageComposer",
    props: ["selectedItem","variables"],
    components:{DynamicInput},
    data(){
        return {
            imageWidth:"",imageHeight:"",coupledDimensions:true
        }
    },
    methods:{
        setImage(event){
            let imageElement=this.selectedItem;
            // this.selectedItem.data.imageUrl = url;
            const file=event.target.files[0];
            console.log(file)
            const reader=new FileReader()
            imageElement.data.width = imageElement.data.height = 0;
            reader.onload=function(){
                imageElement.data.imageUrl=reader.result;
                /*  
                var image = new Image();
                image.src = reader.result;
                image.onload = function(){
                    const scalefactor = 256 / Math.max(this.naturalWidth,this.naturalHeight);
                    imageElement.data.width = this.naturalWidth * scalefactor;
                    imageElement.data.height = this.naturalHeight * scalefactor;
                }
                */
            }
            if(file){
                reader.readAsDataURL(file);
            }

        },
        setImageSize(){
            this.selectedItem.data.width = this.imageWidth;
            this.selectedItem.data.height = this.imageHeight;

        },
        setImageVar(variable){
            this.selectedItem.data.imageUrl = variable.data;
            this.selectedItem.data.variableID = variable.id;
        }
    },
    computed:{
        useVariable:{
            get(){return !this.selectedItem.data.static;},
            set(val){this.selectedItem.data.static = !val;}
        },
        dynamicWidth:{
            get(){
                return this.selectedItem.data.width;
            },
            set(val){
                const aspectRatio = this.selectedItem.data.height / this.selectedItem.data.width;
                this.selectedItem.data.width = val;
                this. selectedItem.data.height = val * aspectRatio;
            }
        },
        dynamicHeight:{
            get(){
                return this.selectedItem.data.height;
            },
            set(val){
                const aspectRatio = this.selectedItem.data.width / this.selectedItem.data.height;
                this.selectedItem.data.height = val;
                this. selectedItem.data.width = val * aspectRatio;
            }
        }

    },
    
}
</script>

<style>
    #controls-list{
        margin: 4px;
        padding: 4px;
        background-color: white;
        /*
        border-radius: 8px;
        box-shadow:  0 0 8px lightgray;
        */
    }
    #controls-list input{
        padding: 12px;
        border:1px solid lightgray;
        width:80px;
        font-size: 110%;
        background-color: white;
        /* 
        border-radius: 8px;
        box-shadow: inset 0 2px 4px gray;
        
         */
    }
    #controls-list .item{
       margin:8px 0;
        display:flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
    }
    #controls-list .medium{width:120px}

    #controls-list p{
        font-size: 120%;
    }
    .image-column{
        margin: 2px; 
        cursor: pointer;
        transition: transform 0.2s ease;
    }
    .image-column:hover{
        transform: scale(1.1);
    }
    .image-row{
        display: flex;
       
        justify-content: space-evenly;
    }
    .image-list{
        width:100%;
        max-height: 200px;
        background-color: bisque;
        padding: 4px 2px;
        border-radius: 8px;
        overflow-y: auto;
        overflow-x: hidden; 
        display: flex;
        flex-wrap: wrap;
    }
    .margin12{
      margin:12px 0;
    }
</style>
