<template>
    <main id="main" class="container-fluid">  
        <h1>Faça seu cadastro</h1>      
		<section class="formularios row">
			<div class="form-box col-sm-6">
                <img src="..\assets\cadIcon.png" />
                <form @submit.prevent="submitForm" method="POST"> 
                    <div class="inputLabel">
                        <label for="nome" class="col-sm-2 col-form-label">Nome:</label>                    
                        <input type="text" name="nome" id="nome" v-model="nome" placeholder="Digite o seu Nome completo"/>                
                    </div>
                    <div class="inputLabel" >
                        <label for="telefone" class="col-sm-2 col-form-label">Telefone:</label>
                        <input type="text" name="telefone" id="telefone" v-model="telefone" placeholder="(DDD)_____-____"/>
                    </div>
                    <div class="inputLabel">
                        <label for ="email" class="col-sm-2 col-form-label">Email:</label>
                        <input type="text" name="email" id="email" v-model="email" placeholder="Digite o seu E-mail"/>
                    </div>
                    <div class="inputLabel">
                        <label for="senha" class="col-sm-2 col-form-label">Senha:</label>
                        <input type="password" name="senha" id="senha" v-model="senha" placeholder="Digite a sua senha">
                    </div>                                        
                    <div>
                        <input type="submit" action="" value="Cadastrar"/>
                    </div>                                
                </form>                
            </div>            
        </section>        
    </main>        
</template>

<script>
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
        submitForm() {

            const dados ={
                nome: this.nome,
                telefone: this.telefone,
                email: this.email,
                senha: this.senha
            }


            this.axios.post('/cadastro', dados)
            .then( response => {                
                console.log(response);
            })
            .catch( error => {
                console.log(error);
            })
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
    float: left;
}
label{
    width: 30%;
    padding-top: 3px;
    text-align: left;
}
input{
    width: 70%;
}

.box-error{
    padding-top: 10px;
}
</style>