<script>
export default {
  props: {
    pelicula: {
      type: Object,
      default: null,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      esFavorito: false, // Indica si la película está en favoritos
    };
  },
  watch: {
    pelicula: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.comprobarFavorito();
        }
      },
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    comprobarFavorito() {
      const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
      this.esFavorito = favoritos.some((fav) => fav.id === this.pelicula.id);
    },
    toggleFavorito() {
      const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
      if (this.esFavorito) {
        // Eliminar de favoritos
        const nuevosFavoritos = favoritos.filter(
          (fav) => fav.id !== this.pelicula.id
        );
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
      } else {
        // Agregar a favoritos
        favoritos.push(this.pelicula);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
      }
      this.esFavorito = !this.esFavorito;
    },
  },
};
</script>

<template>
  <div v-if="show" class="modal fade show d-block" tabindex="-1">
    <div class="modal-dialog-centered">
      <div class="modal-content container">
        <div class="row">
          <div class="modal-header d-flex align-items-start">
            <div class="col-sm-6 col-md-8 d-flex justify-content-start ps-5">
              <h3 class="modal-title">{{ pelicula.title }}</h3>
            </div>
            <div class="col-sm-6 col-md-4 d-flex justify-content-start ps-sm-1 pe-5">
              <button type="button" class="btn-close" @click="closeModal"></button>
            </div>
          </div>
        </div>
        <div class="modal-body row d-flex align-items-center">
          <div class="col-sm-6 col-lg-4 mb-sm-3">
            <img :src="`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`" alt="Poster"
              class="img-fluid mb-3 mb-md-0" />
          </div>
          <div class="col-sm-6 col-lg-8 text-start">
            <p><strong>Sinopsis:</strong> {{ pelicula.overview }}</p>
            <p><strong>Fecha de lanzamiento:</strong> {{ pelicula.release_date }}</p>
            <p><strong>Idioma original:</strong> {{ pelicula.original_language }}</p>
            <button 
              :class="['btn', 'btn-favorito', esFavorito ? 'btn-eliminar' : 'btn-agregar']" 
              @click="toggleFavorito"
            >
              {{ esFavorito ? 'Eliminar de Favoritos' : 'Agregar a Favoritos' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>