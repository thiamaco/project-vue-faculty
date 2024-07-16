<template>
     <div class="container bg-dark text-white  p-5 mt-5 w-50 rounded" >
      <h2 class="text-center">Login</h2>
      <form @submit.prevent="login" class="col-12">
       <div class="mb-3 mt-3 ">
          <label for="email" class="form-label">Endereço de Email</label>
        <input class="form-control" v-model="email" placeholder="email"  />
       
      </div>
      <div class="mb-3 mt-3">
        <label for="password" class="form-label">Senha</label>
        <input class="form-control" v-model="password" type="password" placeholder="Password"  />
      </div>
      <small id="Error" class="form-text text-danger"></small>
      <div class="container d-flex gap-3 align-items-center justify-content-center">
        <button type="submit" class="btn btn-success px-5 " >Entrar</button>
        <button type="submit" class="btn btn-danger px-4" ><a class="nav-link" :href="urlRegister">Registrar</a></button>
      </div>
      <small class="text-center hover">Esqueceu a senha? <a :href="urlRecoverPassword">Clique aqui</a></small>
        </form>
        </div>
  </template>
  
  <script>
  import axios from 'axios';
  //import { mapActions } from 'vuex'
  import $ from 'jquery';
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = 'http://localhost:3000';

  export default {
    data() {
      return {
        email: '',
        password: '',
        urlRegister : '/register',
        urlRecoverPassword:'/recover'
      };
    },

    async created(){
      try {
          const response = await axios.post('/protected', {
          });
          if(response.data){
            this.$emit('authenticated', true);
            this.$router.push('/home');
          }
        } catch (error) {
          this.$router.push('/login');
            this.$emit('authenticated', false);
          console.log(error.data)
        }
    },
    methods: {
      //...mapActions(['updateIsAuthenticated']),
      async login() {
        try {
          const response = await axios.post('/login', {
            email: this.email,
            password: this.password
          });
          //console.log(response.data)
          if(response.data.IsValid){
            //this.updateIsAuthenticated(true);
            this.$router.push('/home');
            this.$emit('authenticated', true);
            
          }else{
           // this.updateIsAuthenticated(false);
            this.$router.push('/login');
            this.$emit('authenticated', false);
           
          }
          
  
        } catch (error) {
          $('#Error').html(error.response.data.Error)
          console.log(error.data)
        }
      }
    }
  };
  </script>
  