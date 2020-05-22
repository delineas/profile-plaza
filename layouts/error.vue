<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Página no encontrada</h1>
    <h1 v-else>Ha ocurrido un error {{error}}</h1>
    <nuxt-link to="/">Inicio</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>