<template>
    <div class="container bg-dark text-white  p-5 mt-5 w-100 rounded" >
      <h2>Criar Conta</h2>
      <form class="form" @submit.prevent="register">
        <div class="mb-3 mt-3 ">
          <label for="email" class="form-label">Endereço de Email</label>
        <input class="form-control" v-model="email" placeholder="email"  />
        
      </div>
      <div class="mb-3 mt-3">
        <label for="password" class="form-label">Senha</label>
        <input class="form-control" v-model="password" type="password" placeholder="Password"  />
        <small id="Error" class="form-text text-danger"></small>
      </div>
        <button type="submit" class="btn btn-primary" >Registrar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import $ from 'jquery';
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async register() {
        try {
          await axios.post('http://localhost:3000/register', {
            email: this.email,
            password: this.password
          });
          
        } catch (error) {
          $('#Error').html(error.response.data.Error)
          console.log(error.response.data)
        }
      }
    }
  };
  </script>
  