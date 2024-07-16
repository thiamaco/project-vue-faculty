<template>
    <section :class="{ 'loading': ChangeLoading === true }"  class="rounded container bg-dark text-white  p-5 mt-5 w-100"  >
      <h2>Recuperar Senha</h2>
      <form v-if ="!recoverValid" class="form" @submit.prevent="recover">
        <div class="mb-3 mt-3 ">
          <label for="email" class="form-label">Endereço de Email</label>
        <input class="form-control" v-model="email" placeholder="email"  />
        <small id="Error" class="form-text text-danger"></small>
      </div>
      
        <button type="submit" class="btn btn-primary" >Enviar</button>
      </form>

      <form v-if ="recoverValid" class= "form" @submit.prevent="verify">
        <div class="mb-3 mt-3 ">
          <label for="email" class="form-label">Endereço de Email</label>
        <input class="form-control" v-model="email" placeholder="email"  />
        
      </div>

      <div class="mb-3 mt-3 ">
          <label for="email" class="form-label">Codigo:</label>
        <input class="form-control" v-model="code" placeholder="code"  />
        <small id="Error" class="form-text text-danger"></small>
      </div>
      
        <button type="submit" class="btn btn-primary" >Confirmar</button>
      </form>
      <div v-if="loading" class="loading-spinner"></div>
    </section>
  </template>
  
  <script>
  import axios from 'axios';
  import { mapActions } from 'vuex'
  import $ from 'jquery'
  export default {
    data() {
      return {
        email: '',
        recoverValid: false,
        code: '',
        loading: false
      };
    },
    computed: {
      ChangeLoading() {
      return this.loading;
    },
  },
    methods: {
      ...mapActions(['updateIsAuthenticated']),
      async recover() {
        this.loading = true;
        try {
         const response = await axios.post('http://localhost:3000/forgot-password', {
            email: this.email,
        
          });
          
            this.recoverValid =response.data.IsValid;
            this.loading = false;
        } catch (error) {
          $("#Error").html(error.response.data.error)
          console.log(error.response.data)
          this.loading = false;
          
        }
      },
      async verify() {
        try {
         const response =  await axios.post('http://localhost:3000/verify-code', {
            email: this.email,
            code:this.code
          });

          if(response.data.IsValid){
            this.updateIsAuthenticated(true);
            this.$router.push('/password-change');
            this.$emit('authenticated', 'true');
          }else{
            this.updateIsAuthenticated(false);
            //this.$router.push('/login');
            this.$emit('authenticated', 'false');
          }
          
        } catch (error) {
          $("#Error").html(error.response.data.error)
          console.log(error.response.data)
        }
      }
    }
  };
  </script>
  

  <!-- Adicione isso ao template onde quiser exibir o indicador de carregamento -->


<style scoped>
/* Adicione isso ao bloco <style> do componente para estilizar o indicador de carregamento */
.loading-spinner {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  position: absolute;
    top: 17%;
    left: 46%
}

section.loading:before {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #fffbfb75;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
