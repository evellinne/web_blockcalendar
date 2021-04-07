<template>
  <div id="application">
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <div class="row row-cols-1" style="text-align: left;">
                        <h2>{{ vnome}},</h2>
                        <p>Esta área estão todos os horários que você reservou para cuidar de si, com o procedimento escolhido e data e hora do nosso encontro! 
                        Você pode editar se quiser.</p>
                    </div>
                    <div class="row row-cols-1" style="text-align: left;">
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Agendados</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="procedimento in vprocedimentos" :key="procedimento">
                                    <td>
                                        <p>{{ procedimento.procedimento.nome }}</p>
                                        <p><strong>Data: </strong>{{ procedimento.dia }}&#8195;<strong>Hora: </strong>{{ procedimento.hora}}:00</p>
                                    </td>
                                    <td>
                                        <i class="bi bi-pencil-fill"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import cookies from 'vue-cookies'

    const user = cookies.get('id');

    export default {
        name: "MeusAgendamentos",

        data () {return {
            vnome: "Pessoa da Silva (carregando...)",
            vprocedimentos: null
        }},
        methods: {
            async alimentarUsuario(usuario){
                this.vnome = usuario.nome;
                //Buscar procedimentos deste usuário
                let response = await axios.post(
                    'https://localhost:3000/procedimentos-marcados',
                    { id: user}
                );
                if(!response.error) {
                    this.vprocedimentos = response.data;
                }
            },
        },
        mounted() {
            axios.post(
                'https://localhost:3000/usuario', 
                { id: user})
            .then(response => ( 
                this.alimentarUsuario(response.data) 
            ))
    }
    };
</script>
<style scoped>
    #application{
        margin-top: 25px;
    }
    @media only screen and (min-width: 576px) {
        #application{
            margin-top: 5vh;
        }
    }
    @media only screen and (min-width: 768px) {
        #application{
            margin-top: 5vh;
        }
    }
    @media only screen and (min-width: 992px) {
        #application{
            margin-top: 10vh;
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
</style>
