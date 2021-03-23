<template>
    <main id="main" class="container-fluid">  
        <h1>Faça seu login</h1>
        <section class="formularios row">
			<div class="form-box col-sm-6">
                <img src="..\assets\userIcon.png" />
                <form @submit.prevent="submitLogin" method="POST">
                    <div class="inputLabel">
                        <label for ="email" class="col-sm-2 col-form-label">Email:</label>
                        <input type="text" name="email" id="email" v-model="email" placeholder="Digite o seu E-mail"/>
                    </div>
                    <div class="inputLabel">
                        <label for="senha" class="col-sm-2 col-form-label">Senha:</label>
                        <input type="password" name="senha" id="senha" v-model="senha" placeholder="Digite a sua senha">
                    </div>  
                    <div>
                        <input type="submit" action="" value="Entrar"/>
                    </div>                  
                                                   
                </form>                
            </div>            
        </section>
    </main>        
</template>



<script>
export default {
    state: {},
    getters: {},
    mutations: {},
    actions:{}
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