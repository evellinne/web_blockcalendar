<template>
  <div id="app">
    <h1>Faça seu cadastro</h1>
    <FormUsuario />
  </div>
</template>

<script>

import FormUsuario from './components/FormUsuario'

export default {
  name: 'App',
  components: {
    FormUsuario
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
