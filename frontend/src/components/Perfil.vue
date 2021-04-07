<template>
    <div class="container" id="application">
        <div class="row align-items-center">
            <div class="col-12 col-sm-12 col-md-9 formulario">
                <h3>Informações Pessoais</h3>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <i class="bi bi-person-lines-fill"></i>
            </div>
            <div class="col-12 col-sm-12 col-md-9 formulario">
                <form>
                    <div class="mb-3">
                        <label for="nome" class="form-label">Nome:</label>
                        <input type="text" class="form-control" id="nome" aria-describedby="nome" v-model="vnome" v-bind:disabled="vdisabled">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">E-mail:</label>
                        <input type="email" class="form-control" id="email" aria-describedby="email" v-model="vemail" v-bind:disabled="vdisabled">
                    </div>
                    <div class="mb-3">
                        <label for="telefone" class="form-label">Telefone:</label>
                        <input type="text" class="form-control" id="telefone" aria-describedby="telefone" v-model="vtelefone" v-bind:disabled="vdisabled">
                    </div>
                    <div class="mb-3 end">
                    <button type="button" class="btn btn-outline-dark" v-on:click="editar">
                        {{ veditar }} 
                        <i v-bind:class="vicon"></i>
                    </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import cookies from 'vue-cookies'

    const user = cookies.get('id');

    export default {
        name: 'Perfil',

        data () {
            return {
            vnome: "Pessoa da Silva (carregando...)",
            vemail: "pessoa@mail.com (carregando...)",
            vtelefone: "(00) 0000-0000",
            vsenha: null,
            vdisabled: true,
            veditar: "Editar ",
            vicon: "bi bi-pencil-fill"
            }
        },

        methods: {
            alimentarUsuario: function(usuario){
                this.vnome = usuario.nome;
                this.vemail = usuario.email;
                this.vtelefone = usuario.telefone;
            },
            editar: function(){
                if(this.veditar == "Editar "){
                    this.veditar = "Salvar ";
                    this.vicon = "bi bi-save2-fill";
                    this.vdisabled = false;
                } else {
                    this.veditar = "Editar ";
                    this.vicon = "bi bi-pencil-fill";
                    this.vdisabled = true;

                    axios.put(
                        'https://localhost:3000/usuario', 
                        { id: user, nome: this.vnome, email: this.vemail, telefone: this.vtelefone})
                    .then(response => ( 
                        this.alimentarUsuario(response.data) 
                    ))

                }
            }

        },
        mounted() {
            axios.post(
                'https://localhost:3000/usuario', 
                { id: user})
            .then(response => ( 
                this.alimentarUsuario(response.data) 
            ))
        }
    }
</script>

<style scoped>
    #application{
        margin-top: 25px;
    }
    .bi-person-lines-fill{
        font-size: 100px;
    }
    @media only screen and (min-width: 576px) {
    #application{
        margin-top: 5vh;
    }
    .bi-person-lines-fill{
        font-size: 150px;
    }
    }
    @media only screen and (min-width: 768px) {
    #application{
        margin-top: 5vh;
    }
    .bi-person-lines-fill{
        font-size: 200px;
    }
    .formulario {
        margin: auto;
    }
    }
    @media only screen and (min-width: 992px) {
    #application{
        margin-top: 10vh;
    }
    h3 {
        margin-bottom: 35px;
    }
    }
    @media only screen and (min-width: 1200px) {
        #application{
            margin-top: 10vh;
        }
    }
    @media only screen and (min-width: 1400px) {
        #application{
            margin-top: 10vh;
        }
    }
    form, input{
        text-align: left;
    }
    input{
        margin-left: 0;
        background-color: #fff;
        border: 1px solid #ced4da;
    }
    .end{
        text-align: end;
    }
</style>