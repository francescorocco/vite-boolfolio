<script>

export default {
    name: "MyCard",
    props:{
        works:Array
    },
}
</script>

<template>
    <div class="col-4" v-for="work in works">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ work.title }}</h5>
                <h5>{{ work.type?.name }}</h5>
                <p class="card-text">{{work.description}}</p>

                <router-link :to="{name: 'singol-work', params: {id: work.id}}" class="btn btn-primary">
                    Vedi lavoro completo
                </router-link>



            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>