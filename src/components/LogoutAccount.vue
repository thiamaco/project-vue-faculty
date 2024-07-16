<template>
    <div>
        <li class="nav-link text-danger " @click="Logout">Sair</li>
    </div>
</template>

<script>

import axios from 'axios';
axios.defaults.withCredentials = true;
  axios.defaults.baseURL = 'http://localhost:3000';

export default{

    name:'LogoutAccount',
    data(){
        return{

        }
    },
    methods:{
        async Logout(){
            try {
                const response = await axios.post('/logout', {
            });
            if(response.data.IsValid){
                    this.$emit('authenticated', false);
                    this.$router.push('/login');
            }else{
                console.warn('falha ao realizar o logout')
            }
            }catch(error){
                console.log(error)
            }
        }
}
}
</script>