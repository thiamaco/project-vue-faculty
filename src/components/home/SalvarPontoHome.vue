<template>
    <div class="col-6 text-center p-5">
        <h3>{{ changeSaudacao }}</h3>
        <h2>{{ formattedHora }}</h2>
        <div>{{ formattedDate }}</div>
        <button class="btn btn-primary m-2" @click="SalvarPonto">Marcar Ponto</button>
    </div>
</template>
<script>

import axios from 'axios';
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export default {

    
    name: 'SalvarPontoHome',
    data() {
        return {
            date: new Date(),
        }
    },
    computed: {
        formattedDate() {
            var formdate = format(this.date, 'dd/MMMM/yyyy', { locale: ptBR }).replaceAll('/', ' de ') + ' - ' + format(this.date, 'EEEE', { locale: ptBR })
            return formdate
        },
        changeSaudacao() {
            const formdate = format(this.date, 'H', { locale: ptBR })
            var message = '';
            if (formdate >= 6 && formdate < 12) {
                message = 'Bom dia!'
            } else if (formdate >= 12 && formdate <= 19) {
                message = 'Boa tarde!'
            } else if (formdate >= 20 && formdate <= 23 || formdate >= 0 && formdate <= 5) {
                message = 'Boa noite!'
            }
            return message;
        },
        formattedHora() {
            var formdate = format(this.date, 'HH:mm:ss', { locale: ptBR })
            return formdate
        }
    },
    methods: {
        SalvarPonto: async () => {
            const horario = format(new Date(), 'yyyy-MM-dd hh:mm:ss', { locale: ptBR })
            try {
                const response = await axios.post('/profile/SavePointDay', {
                    horario: horario,
                    tipo: 'entrada'
                });
                this.data = response.data.data;
                //this.$emit('att-mark',true)
            } catch (error) {
                console.error(error);
            }
        },
    },
    mounted() {
        this.timer = setInterval(() => {
            this.date = new Date()
        }, 1000)
    },
}
</script>