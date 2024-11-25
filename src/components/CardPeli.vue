<script>
export default {
props: {
    pelicula: {
    type: Object,
    required: true,
    },
},
methods: {
    agregarFavoritos(){
        console.log("Favoritos")
    }
}
};
</script>


<template>
    <div class="col-12 col-md-4 col-xl-2-4 mb-2">
        <div class="card text-center h-100">
            <img :src="`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`" :alt="pelicula.title" class="card-img-top" />
            <div class="card-body">
                <h3 class="card-title">{{ pelicula.title }}</h3>
                <!-- <button @click="agregarFavoritos" class="btn">
                    Agregar a favoritos
                </button> -->
            </div>
        </div>
    </div>
</template>




<style>
</style>