<template>
    <main id="main" class="container-fluid">  
        <h1>Faça seu cadastro</h1>      
		<section class="formularios row">
			<div class="form-box col-sm-6">
                <img src="..\assets\cadIcon.png" />
                <form @submit.prevent="submitCadastro" method="POST"> 
                    <div class=" mb-3 inputLabel">
                        <label for="nome" class="col-sm-2 col-form-label">Nome:</label>                    
                        <input type="text" class="form-control" placeholder="Digite o seu Nome completo"/>                
                    </div>
                    <div class="mb-3 inputLabel" >
                        <label for="telefone" class="col-sm-2 col-form-label">Telefone:</label>
                        <input type="text" class="form-control" v-model="telefone" placeholder="(DDD)_____-____"/>
                    </div>
                    <div class="mb-3 inputLabel">
                        <label for ="email" class="col-sm-2 col-form-label">Email:</label>
                        <input type="text" class="form-control"  v-model="email" placeholder="Digite o seu E-mail"/>
                    </div>
                    <div class="mb-3 inputLabel">
                        <label for="senha" class="col-sm-2 col-form-label">Senha:</label>
                        <input type="password" class="form-control" v-model="senha" placeholder="Digite a sua senha">
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Cadastrar</button>
                                                   
                </form>                
            </div>            
        </section>        
    </main>        
</template>

<script>
import axios from 'axios'

export default {
    name: 'Cadastro',
    data(){
        return {       
            nome:'',
            telefone:'',
            email:'',
            senha:''
            }

        },
    methods:{
        async submitCadastro() {

            await axios.post('cadastro', {
                nome: this.nome,
                telefone: this.telefone,
                email: this.email,
                senha: this.senha,
                tipo: 0
            });            
            this.$router.push('/login');
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