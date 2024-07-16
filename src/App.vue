<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img :src="logo" class="rounded-circle" width="40px"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
         <!--   <li class="nav-item" v-if="!MonitoraAuthenticated"><router-link class="nav-link" to="/register">Registro</router-link></li>-->
            <li class="nav-item" v-if="!MonitoraAuthenticated"><router-link class="nav-link" to="/login">Login</router-link></li>
            <li class="nav-item" v-if="MonitoraAuthenticated"><router-link class="nav-link" to="/home"><span class="material-icons">home</span></router-link></li>
            <li class="nav-item dropdown" v-if="MonitoraAuthenticated">
              <a class="nav-link dropdown-toggle" href="javascript:void(0)" role="button" data-bs-toggle="dropdown">Minhas Informações</a>
              <ul class="dropdown-menu">
                <li class="nav-item"><router-link class="dropdown-item" to="/info">Colaborador</router-link></li>
                <li class="nav-item"><router-link class="dropdown-item" to="/info">Colaborador</router-link></li>
                <li class="nav-item"><router-link class="dropdown-item" to="/info">Colaborador</router-link></li>
              </ul>
            </li>

            <li class="nav-item dropdown" v-if="MonitoraAuthenticated">
              <a class="nav-link dropdown-toggle" href="javascript:void(0)" role="button" data-bs-toggle="dropdown">
                <span class="material-icons">manage_accounts</span></a>
              <ul class="dropdown-menu">
                <li class="nav-item" ><router-link class="dropdown-item" to="/password-change">Alterar Senha</router-link></li>
                <li class="nav-item" v-if="MonitoraAuthenticated"> <LogoutAccount class="dropdown-item text-left "  @authenticated="IsAuthenticated"></LogoutAccount></li>
              </ul>
            </li>

            
            
              
            
          </ul>
        </div>
      </div>
    </nav>
    <router-view @authenticated="IsAuthenticated" />
  </div>
</template>

<script>
import LogoutAccount from '@/components/LogoutAccount.vue'
//import PasswordChange from '@/components/PasswordChange.vue'
export default {
  name: 'App',
  components: {
    LogoutAccount,
    //PasswordChange
  },
  data() {
    return {
      logo: './logo.png',
      Authenticated: false
    };
  },
  methods: {
    IsAuthenticated(Authenticated) {
      this.Authenticated = Authenticated;
    }
  },
  computed: {
    MonitoraAuthenticated() {
      return this.Authenticated;
    }
  }
};
</script>
