<template>
  <div class="select-años">
    <label for="años">Filtrar por año:</label>
    <select id="años" @change="filtrarPorAño">
      <option value="">Todos los años</option>
      <option v-for="año in añosDisponibles" :key="año" :value="año">
        {{ año }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'FiltroAños',  // Nombre de componente de múltiples palabras
  props: {
    añosDisponibles: {
      type: Array,
      required: true,
    },
  },
  methods: {
    filtrarPorAño(event) {
      const añoSeleccionado = event.target.value;
      this.$emit('filtrar', añoSeleccionado);
    },
  },
};
</script>
  