<template>
    <div class="editor-controls">
        <h4>Image</h4>
        <div  id="controls-list">
           <div  class="item">
               <p>File</p>
               <input type = "file" class=" medium" @change="setImage" autofocus/>

           </div>
           <div  class="item">
               <p>Width</p>
               <input class=" medium" type="number" v-model = "selectedItem.data.width"/>

           </div>
           <div  class="item">
               <p>Height</p>
               <input class=" medium" type="number"  v-model = "selectedItem.data.height"  />

           </div>

        <div  class="image-list">
            <div class="image-row" v-for="i in 6" :key="i">
                <div class="image-column" v-for="i in 3" :key="i">
                    <img src="http://playweb.eckovation.com/bhagyasri2/wp-content/uploads/2018/05/golden-retriever.jpg" 
                    alt="" srcset="" width="64px" height="64px">
                </div>
            </div>
        </div>


        </div>
    </div>
</template>

<script>
import {EventBus} from "../EventBus"
export default {
    name: "DynamicImageComposer",
    props: ["selectedItem"],
    data(){
        return {
            imageWidth:"",imageHeight:""
        }
    },
    methods:{
        setImage(event){
            let image=this.selectedItem;
            // this.selectedItem.data.imageUrl = url;
            const file=event.target.files[0];
            console.log(file)
            const reader=new FileReader()
            reader.onload=function(){
                image.data.imageUrl=reader.result;
            }
            if(file){
                reader.readAsDataURL(file);
            }
        },
        setImageSize(){
            this.selectedItem.data.width = this.imageWidth;
            this.selectedItem.data.height = this.imageHeight;

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
        width: 64px;
        height: 64px;
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
    }
</style>
