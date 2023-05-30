<template>
    <div class="container">

    </div>
</template>

<script>
import axios from 'axios';

export default{
        name:"AppMain",
        data(){
            return{

            }
        },
        methods:{
            getWorks(){
                console.log('ciao');

                axios.get("http://localhost:8000/api/works")
                .then(response =>{
                    console.log(response);
                })
            }
        },
        mounted(){
            this.getWorks();
        }
    }


</script>


<style>

</style>