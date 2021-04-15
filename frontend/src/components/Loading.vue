<template>
  <div id="app">
    <div class="container foreground">
      <div class="row align-items-center justify-content-center vh-100">
        <div class="col-lg-10 text-center text-shadow">
         
          <h3>Carregando...</h3> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
import cookies from 'vue-cookies'

export default {
  name: 'Loading',
  
  mounted() {
    
    axios.get('https://localhost:3000/authentication/' + this.$route.params.token)
    .then(response => { 
        if(response.status === 200) {
          cookies.set('id', response.data.usuario.id)
          router.push("../home");  
        }
        else console.error("loading.vue")
    })
  }
}

</script>