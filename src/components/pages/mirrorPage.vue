<template>
  <div>
    <div class="bg-dark text-white p-2 fs-4">
      <font-awesome-icon :icon="['far', 'address-card']" /> Espelho de ponto
    </div>
    <div class="d-flex gap-1 align-items-center justify-content-center container mt-4">
      <button class="btn btn-outline-secondary">Histórico</button>
    </div>
    <div class="col-16 text-center p-5" >
      <div class="text p-1">Marcações realizadas hoje:</div>
      <div v-if="!IsValid">
        {{ dataformat }}
      </div>
      <div v-if="IsValid">
        <div v-for="(item) in dataformat" :key="item.id" class="d-flex justify-content-center align-items-center text-center p-1 gap-2">
          <div class="d-flex align-items-center gap-2">
            <span class="material-icons">schedule</span> 
            {{ format(item.horario) }}
          </div>
          <div class="d-flex gap-2">
            <button @click="editPonto(item.id)" class="btn btn-sm btn-outline-primary">Editar</button>
            <button @click="deletePonto(item.id)" class="btn btn-sm btn-outline-danger">Deletar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3000';

export default {
  name: 'PontoDia',
  data() {
    return {
      data: [],
      IsValid: false
    }
  },
  async created() {
    try {
      const response = await axios.get('/profile/ponto-dia');
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
      console.log(this.data);
      return this.data;
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
      return formattedDate;
    },
    editPonto(id) {
      console.log(`Editar entrada com id: ${id}`);
    },
    async deletePonto(id) {
      try {
        const response = await axios.delete('/profile/del-ponto', { data: { id: id } });
        console.log('Resposta:', response.data.IsValid);
        console.log(`Editar entrada com id: ${id}`);
        if (response.data.IsValid) {
          this.data = this.data.filter(item => item.id !== id);
          alert('Registro deletado com sucesso.');
        }else{
          alert('Falha ao deletar o registro.');
        }
      } catch (error) {
        console.error('Erro ao deletar o registro:', error);
        alert('Erro ao deletar o registro.');
      }
    }
  }
};
</script>

<style scoped>
.selected {
  background-color: #6c757d;
  color: white;
}
.d-flex {
  display: flex;
}
</style>
