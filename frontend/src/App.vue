<template>
  <div id="app">
    <Nav/>
    <div class="auth-wrapper">
      <div  class="auth-inner">
           <router-view/>
      </div>
    </div>
   
  </div>
</template>

<script>

import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Nav
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
}
</style>
