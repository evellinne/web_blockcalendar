const app = new Vue({
	el:'#app',
	data:{
		errors:[],
		inputNome:null,
		inputTelefone:null,
		inputEmail:null,
		inputSenha:null,
		inputSenha2:null,
	},
	methods:{
		checkForm:function(e) {
			this.errors = [];
			if(!this.inputNome) this.errors.push("Campo Nome é Obrigatório!");
			if(!this.inputTelefone) this.errors.push("Campo Telefone é Obrigatório!");
			if(!this.inputEmail) {
				this.errors.push("Campo E-mail é Obrigatório!");
				} else if(!this.validaEmail(this.inputEmail)) {
				this.errors.push("Este e-mail não é válido!");       
			}
			if(!this.inputSenha) this.errors.push("Campo Senha é Obrigatório!");
			if(!this.inputSenha2) this.errors.push("Campo Senha2 é Obrigatório!");

			if(!this.errors.length) return true;
			e.preventDefault();
		},
		validaEmail:function(inputEmail) {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(inputEmail);
		},
		validaTelefone:function(inputTelefone){

		},
		validaSenha:function(inputSenha, inputSenha2){
			if(inputSenha != inputSenha2) {
				confirm_password.setCustomValidity("Senhas diferentes!");
				} else {
				confirm_password.setCustomValidity('');
			}
		},		
	}
})