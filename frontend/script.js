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
			if(!this.inputNome) this.errors.push("Campo Nome � Obrigat�rio!");			
			if(!this.inputTelefone) {
				this.errors.push("Campo Telefone � Obrigat�rio!");
				} else if(!this.validaTelefone(this.inputTelefone)) {
				this.errors.push("Este Telefone n�o � v�lido!");       
			}
			if(!this.inputEmail) {
				this.errors.push("Campo E-mail � Obrigat�rio!");
				} else if(!this.validaEmail(this.inputEmail)) {
				this.errors.push("Este e-mail n�o � v�lido!");       
			}
			if(!this.inputSenha) this.errors.push("Campo Senha � Obrigat�rio!");
			if(!this.inputSenha2) this.errors.push("Campo Senha2 � Obrigat�rio!");
			if(!this.validaSenha(this.inputSenha, this.inputSenha2)){
					this.errors.push("Senhas n�o conferem");       
			}
			if(!this.errors.length) return true;
			e.preventDefault();
		},
		validaEmail:function(inputEmail) {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(inputEmail);
		},
		validaTelefone:function(inputTelefone){
			var re = /^(\(?\d{2,3}\)?\s?)?(\d{4,5})-?(\d{4})$/;
			return re.test(inputTelefone);

		},
		validaSenha:function(inputSenha, inputSenha2){
			if(inputSenha != inputSenha2) {
				return false;
				} else {
				return true;
			}
		},		
	}
})