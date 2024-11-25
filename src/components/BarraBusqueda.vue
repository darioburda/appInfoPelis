<script>
    export default {
        data(){
            return {
                textoBusqueda: ""
            }
        },
        methods:{
            buscar(){
                console.log("Buscando: ", this.textoBusqueda)
                this.$emit("buscar", this.textoBusqueda)
            }
        }
    }
</script>
<template>
    <div class="container" id="busqueda">
        <form class="d-flex" role="search" @submit.prevent="buscar">
            <input 
            class="form-control me-2 focus-ring"
            style="--bs-focus-ring-width: 0;"
            aria-label="Buscar Nombre de pelicula"
            type="text"
            v-model="textoBusqueda"
            placeholder="Buscar pelicula"
            @keyup.enter="buscar"
            >
            <button class="btn btn-outline-light" type="submit">Buscar</button>
        </form>
    </div>

</template>

<style>
</style>


