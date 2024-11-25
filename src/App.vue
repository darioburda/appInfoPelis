<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid d-flex align-items-center">
      <a class="navbar-brand" href="#">
        <img src="./assets/popcorntime.svg" alt="Logo" width="60" height="60" class="d-inline-block align-text-top">
        InfoPelis
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse justify-content-end navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav d-flex justify-content-end w-50">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" aria-current="page">Pelis populares</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/pelis-favoritas" class="nav-link">Favoritos</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main class="container">
    <RouterView />
  </main>
</template>

<style>
</style>
