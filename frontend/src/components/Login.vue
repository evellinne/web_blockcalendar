<template>
    <main id="main" class="container-fluid">  
        <h1>Faça seu login</h1>
            <section class="formularios row">
                <div class="form-box col-sm-6">
                    <img src="..\assets\userIcon.png" />
                    <form @submit.prevent="submitLogin" method="POST">
                        <div class=" mb-3 inputLabel">
                            <label for="email" class="col-sm-2 col-form-label">Email</label>
                            <input type="email" class="form-control" v-model="email" placeholder="Digite o seu E-mail">
                            
                        </div>
                        <div class=" mb3 inputLabel">
                            <label for="senha" class="col-sm-2 col-form-label">Senha</label>
                            <input type="password" class="form-control" v-model="senha" placeholder="Digite a seua Senha">
                            
                        </div> 
                        <button type="submit" class="btn btn-primary">Entrar</button>
                    </form>
                </div>
            </section>        
    </main>       
</template>



<script>
import axios from 'axios'
import router from '../router'
import cookies from 'vue-cookies'

export default {
    name: 'Login',

    data() {
        return{
            email: '',
            senha: ''
        }
    },
    methods: {
       async submitLogin(){
           const response = await axios.post('login', {
               email: this.email,
               senha: this.senha
           });
            console.log(response);

            if(response.status === 200) {
                cookies.set('id', response.data.usuario.id)
                router.push("home");                
            }
            else console.error("Erro: ", response)
        }
    }
}
</script>


<style scoped>
.invLine1{
  height: 100px;
}
.invCol1{
	border: 2px red;
	background-color: #ccffcc;
}
.btn-cadastrar{
	float: right;
	min-width: 200px;	
}
.container-fluid{
	padding: 0px;
}
.form-group row{
	margin: 0px;
}
#divForm{
	max-width: 600px;
}
#tituloPaginaCadastro{	
	text-align: center;
	vertical-align: middle;
}
.col-form-label{
    float: left!important;
}
label{
    width: 30%!important;
    padding-top: 3px!important;
    text-align: left!important;
}
input{
    width: 70%;
    background-color:rgb(235, 239, 243);
    border: 1px solid #ced4da;
    text-align: left!important;
    display:inline-flex;
}

.box-error{
    padding-top: 10px;
}
</style>