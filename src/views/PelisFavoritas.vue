
<template>
  <div>
    <h2>Películas Favoritas</h2>
    <div v-if="favoritos.length > 0" class="row d-flex my-5 p-4">
      <div class="card-group row">
        <!-- Reutilizando CardPeli -->
        <CardPeli
          v-for="peli in favoritos"
          :key="peli.id"
          :pelicula="peli"
          @click="abrirModal(peli)"
        />
      </div>
    </div>
    <div class="no-peliculas" v-else>
      <p>No tienes películas favoritas aún.</p>
    </div>

    <!-- ModalDetalle reutilizado -->
    <ModalDetalle :pelicula="peliSeleccionada" :show="mostrarModal" @close="cerrarModal" />
  </div>
</template>

<script>
import CardPeli from '../components/CardPeli.vue';
import ModalDetalle from '../components/ModalDetalle.vue';

export default {
  name: 'PelisFavoritas',
  components: {
    CardPeli,
    ModalDetalle,
  },
  data() {
    return {
      favoritos: [],
      peliSeleccionada: null,
      mostrarModal: false,
    };
  },
  mounted() {
    this.cargarFavoritos();
  },
  methods: {
    cargarFavoritos() {
      // Carga los favoritos desde localStorage
      this.favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    },
    abrirModal(pelicula) {
      this.peliSeleccionada = pelicula;
      this.mostrarModal = true;
    },
    cerrarModal() {
      this.peliSeleccionada = null;
      this.mostrarModal = false;

      // Actualizar favoritos al cerrar el modal
      this.cargarFavoritos();
    },
  },
};
</script>


