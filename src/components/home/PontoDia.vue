<template>
    <div class="col-6 text-center p-5">
        <div class="text p-1">Marcações realizadas hoje: </div>
        <div v-if="!IsValid">
            {{ dataformat }}
        </div>
        <div v-if="IsValid">
            <div v-for="(item) in dataformat" :key="item.id">
                <div class="d-flex justify-content-center align-items-center text-center p-1"> <span
                        class="material-icons">schedule</span> {{ format(item.horario) }}</div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3000/';
import $ from 'jquery';
export default {
    name: 'PontoDia',
    data() {
        return {
            data: [],
            IsValid: false,
        }
    },
    async created() {
        try {
            const response = await axios.get('/profile/ponto-dia', {
            });
            if (response.data.IsValid) {
                this.data = response.data.data;
                
            } else {
                this.data = response.data.error;
            }
            this.IsValid = response.data.IsValid;
            $().html('o')
        } catch (error) {
            console.error(error);

        }
    },
    computed: {
        dataformat() {
            return this.data
        }
    },
    methods: {
        format(valor) {
            const date = new Date(valor);
            const options = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
                timeZone: 'America/Sao_Paulo'
            };
            const formattedDate = date.toLocaleString('pt-BR', options);
            return formattedDate
        }
    }
}
</script>