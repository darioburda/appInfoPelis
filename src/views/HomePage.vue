
<script setup>
import { ref, onMounted } from 'vue';
import { fetchPelis } from '../assets/api';
import BarraBusqueda from '../components/BarraBusqueda.vue';
import CardPeli from '../components/CardPeli.vue';
import ModalDetalle from '../components/ModalDetalle.vue';
import FiltroAños from '../components/FiltroAños.vue';

const peliculas = ref([]);
const peliSeleccionada = ref(null);
const mostrarModal = ref(false);
const añosDisponibles = ref([]);
let todasLasPeliculas = [];

const buscarPorTitulo = (titulo) => {
  peliculas.value = !titulo
    ? todasLasPeliculas
    : todasLasPeliculas.filter((pelicula) =>
        pelicula.title.toLowerCase().includes(titulo.toLowerCase())
      );
};

const filtrarPorAño = (año) => {
  peliculas.value = !año
    ? todasLasPeliculas
    : todasLasPeliculas.filter(
        (pelicula) => pelicula.release_date.slice(0, 4) === año
      );
};

onMounted(async () => {
  const data = await fetchPelis('movie/popular?language=en-US&page=10');
  if (data) {
    todasLasPeliculas = data.results;
    peliculas.value = data.results;
    añosDisponibles.value = [
      ...new Set(data.results.map((peli) => peli.release_date.slice(0, 4))),
    ].sort((a, b) => b - a); // Ordenar años de forma descendente
  }
});

const abrirModal = (pelicula) => {
  peliSeleccionada.value = pelicula;
  mostrarModal.value = true;
};

const cerrarModal = () => {
  peliSeleccionada.value = null;
  mostrarModal.value = false;
};
</script>

<template>
  <section>
    <h1>¿Qué peli querés ver hoy?</h1>
    <div class="content">
      <BarraBusqueda @buscar="buscarPorTitulo" />
      <FiltroAños :añosDisponibles="añosDisponibles" @filtrar="filtrarPorAño" />
    </div>
  </section>

  <section id="peliculas" class="row d-flex my-5 p-4">
    <div class="col-12 text-center">
      <h2>Películas Populares</h2>
    </div>
    <div class="col-12" v-if="peliculas.length > 0">
      <div class="card-group row">
        <CardPeli v-for="pelicula in peliculas" :key="pelicula.id" :pelicula="pelicula" @click="abrirModal(pelicula)" />
      </div>
    </div>
    <div v-else>
      <p>Cargando películas...</p>
    </div>
  </section>

  <ModalDetalle :pelicula="peliSeleccionada" :show="mostrarModal" @close="cerrarModal" />
</template>

<style>
</style>
