<template>
    <div class="container">
        <div class="row">
            <MyCard :works="works"></MyCard>
        </div>
    </div>
</template>

<script>
import MyCard from '../components/MyCard.vue';
import axios from 'axios';

export default{
        name:"WorkList",
        components:{
            MyCard
        },

        data(){
            return{
                works:[],
                baseUrl: 'http://localhost:8000'

            }
        },
        methods:{
            getWorks(){

                axios.get(`${this.baseUrl}/api/works`)
                .then(response =>{
                    this.works = response.data.results;
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