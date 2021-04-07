<template>
  <div id="app">
    <div class="container">
      <div class="row align-items-center vh-93">
        <div class="col-sm">
          <div class="row row-cols-1 p-5">
            <h2>O que você gostaria de fazer?</h2>
          </div>
          <!--
          <button type="button" class="btn btn-outline-dark" style="min-width: 248px;">
            Marcar um agendamento
          </button>
          <br /><br />
          <button type="button" class="btn btn-outline-dark" style="min-width: 248px;">
            Consultar meus agendamentos
          </button>
          <br /><br />
          <button type="button" class="btn btn-outline-dark" style="min-width: 248px;">
            Ver seu perfil
          </button>-->
          <div class="row row-cols-1 row-cols-md-3 g-4" id="cards">
            <div class="col">
              <div class="card" v-on:click="page('agendar')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-calendar-plus card-img-top" viewBox="0 0 16 16">
                  <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>
                <div class="card-body">
                  <h5 class="card-title">Marcar um agendamento</h5>
                  <p class="card-text">Reservar um horário livre, que seja cômodo para você.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" v-on:click="page('meusAgendamentos')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-calendar-week card-img-top" viewBox="0 0 16 16">
                  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>
                <div class="card-body">
                  <h5 class="card-title">Consultar meus agendamentos</h5>
                  <p class="card-text">Consultar todos os seus agendamentos, editar, cancelar.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" v-on:click="page('perfil')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-lines-fill card-img-top" viewBox="0 0 16 16">
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                </svg>
                <div class="card-body">
                  <h5 class="card-title">Ver seu perfil</h5>
                  <p class="card-text">Visualizar suas informações pessoais, realizar alterações no perfil. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router';

export default {
  name: "PainelUsuario",
  methods: {
    page: function (message) {
      switch(message){
        case "agendar":
          break;
        case "meusAgendamentos":
            router.push("meus-agendamentos");
          break;
        case "perfil":
            router.push("perfil");
          break;
      }

    }
  }
};
</script>

<style scoped>
  .card {
    cursor:pointer;
    transition: transform .3s;
  }
  .card:hover {
    transform: scale(1.1);
  }
  .card-img-top{
    padding: 20px 120px;
  }
  .vh-93{
    height: 93vh !important;
  }
</style>