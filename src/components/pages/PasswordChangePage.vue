<template>

<LoaderPage v-if="!isAuthenticated" />
    <div v-else-if="isAuthenticated" class="container bg-dark text-white  p-5 mt-5 w-50">
        <h2 class="text-center">Alterar senha:</h2>
        <form @submit.prevent="passwordChange" class="col-12">
            <div class="mb-3 mt-3 ">
                <label for="email" class="form-label">Digite sua senha:</label>
                <input class="form-control" v-model="password" placeholder="Password" type="password" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                    else.</small>
            </div>
            <div class="mb-3 mt-3">
                <label for="password" class="form-label">Confirme sua senha:</label>
                <input class="form-control" v-model="confirmpassword" type="password" placeholder="Password" />
            </div>
            <div class="container d-flex gap-3 align-items-center justify-content-center">
                <i v-if="loading" class="  fa fa-spinner fa-spin"></i> 
                <button v-else type="submit" class="btn btn-success px-5">
                    
                    
                    Salvar</button>
                
            </div>

        </form>
    </div>
    <div v-else>
        <div class="alert alert-danger" role="alert">
            <h1 class="aw-error-panel__code">
                <i class="fa  fa-lock"></i>
            </h1>
            <h2 class="aw-error-panel__title">Acesso negado</h2>
            <div class="aw-error-panel__description">
                Desculpe, você não está autorizado a acessar a página que solicitou.
                Se você acha que isso é um engano, entre em contato com a gente.
                <br /><br />
                <a href="javascript:history.back()" class="btn     bg-warning-subtle" >Voltar para onde estava</a>
            </div>
        </div>
    </div>
</template>
<script>

import LoaderPage from '../partials/LoaderPage.vue'
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3000';

export default {

    components:{
        LoaderPage
    },
    data() {
        return {
            password: '',
            confirmpassword: '',
            IsValid: false,
            loading:false
        };
    },
    computed: {
       isAuthenticated() {
           return this.IsValid;
       }
    },
    async created() {
      try {
       
        const response = await axios.post('/protected', {
        });
        
        this.IsValid = response.data.IsValid;
        this.$emit('authenticated', true);
      } catch (error) {
        console.error(error);
        this.IsValid = false
        this.$emit('authenticated', false);
      }
  },
    methods: {
        async passwordChange() {

            this.loading=true;

            try {
                const response = await axios.put('/password-change', {
                   
                    password: this.password,
                    confirmpassword: this.confirmpassword
                });
                this.loading=false;
                if (response.data.IsValid) {
                    this.$router.push('/info');
                    this.$emit('authenticated', true);
                } else {
                    this.$emit('authenticated', false);
                }
            } catch (error) {
                console.log(error.data)
                 this.loading=false;
            }
        }
    }
};
</script>


<style>

.hidden{
    display:none
}
</style>