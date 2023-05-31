<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Vite-Boolfolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-for="item in menuItems">
                        <router-link :to="{name: item.routeName}" class="nav-link">{{item.lable}}</router-link>
                    </li>
                    
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
    export default{
        name:"AppHeader",
        data(){
            return{
                menuItems: [

                {
                    lable: 'Home',
                    routeName: 'home'
                },
                {
                    lable: 'Blog',
                    routeName: 'works'
                },
                {
                    lable: 'Contatti',
                    routeName: 'contact'
                }
                
                ]
            }
        }
    }
</script>