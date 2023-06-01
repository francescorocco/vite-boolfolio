<template>
<hr class="border border-danger border-2 opacity-75">
    <div class="d-flex justify-content-center mt-5">
        <hr class="border border-primary border-3 opacity-75">
        <div class="card text-center text-bg-info" style="width: 18rem;">
            <div class="card-body">
                <h2 class="card-title pb-2">{{ work.title }}</h2>
                <h4 class="card-subtitle mb-2 text-body-secondary" v-if="work.description">{{ work.description }}</h4>
                <p class="card-text" v-if="work.languages">{{ work.languages }}</p>
                <p class="card-text" v-if="work.type">{{ work.type.name }}</p>
                <p class="card-text" v-if="work.technologies">
                <span v-for="tec in this.work.technologies">{{ tec.name }}</span>
            </p>
            </div>
        </div>
        <hr class="border border-primary border-3 opacity-75">
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'SingleWork',
        data(){
            return{
                baseUrl: 'http://localhost:8000',
                work: []
            }
        },
        mounted(){
            const id = this.$route.params.id;

            axios.get(`${this.baseUrl}/api/work/${id}`)
            .then(response => {
                console.log(response);
                this.work = response.data.work;
            })
        }
    }
</script>