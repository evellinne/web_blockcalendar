<template>
    <main id="main" class="container-fluid">  
        <h1>Faça seu login</h1>
            <section class="formularios row">
                <div class="form-box col-sm-6">
                    <img src="..\assets\userIcon.png" />
                    <form @submit.prevent="submitLogin" method="POST">
                        <div class=" mb-3 inputLabel">
                            <label for="email" class="col-sm-2 col-form-label">Email</label>
                            <input type="email" class="form-control" v-model="inputEmail3">
                            
                        </div>
                        <div class=" mb3 inputLabel">
                            <label for="senha" class="col-sm-2 col-form-label">Senha</label>
                            <input type="password" class="form-control" v-model="senha">
                            
                        </div> 
                        <button type="submit" class="btn btn-primary">Entrar</button>
                    </form>
                </div>
            </section>        
    </main>

    <!--
                    <div class="inputLabel">
                        <label for ="email" class="col-sm-2 col-form-label">Email:</label>
                        <input type="text"  v-model="email" placeholder="Digite o seu E-mail"/>
                    </div>
                    <div class="inputLabel">
                        <label for="senha" class="col-sm-2 col-form-label">Senha:</label>
                        <input type="password"  v-model="senha" placeholder="Digite a sua senha">
                    </div>            
        -->
    <!--<div class="container">
            <div class="row" >
                <div class="col-12">
                    <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Epic Popover" data-content="And here's some amazing content. It's very engaging. Right?">Popover Toggle</button>
                </div>
            </div>
    </div>-->
</template>

<script>

 
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