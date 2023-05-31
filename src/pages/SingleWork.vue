<template>
<!-- <hr class="border border-danger border-2 opacity-75">
    <div class="d-flex justify-content-center mt-5">
        <hr class="border border-primary border-3 opacity-75">
        <div class="card text-center text-bg-info" style="width: 18rem;">
            <div class="card-body">
                <h2 class="card-title pb-2"></h2>
                <h4 class="card-subtitle mb-2 text-body-secondary"></h4>
                <p class="card-text"></p>
                <p class="card-text"></p>
                <p class="card-text"></p>
            </div>
        </div>
    </div> -->
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'SingleWork',
        data(){
            return{
                baseUrl: 'http://localhost:8000'
            }
        },
        mounted(){
            const id = this.$route.params.id;

            axios.get(`${this.baseUrl}/api/works/${id}`)
            .then(response => {
                console.log(response);
            })
        }
    }
</script>