<template>
    <div class="row col-12">
        <div>
            <img :src="bannerImage" height="228" alt="Banner" class="img-banner">
        </div>
        <div class="card col-12 card-body card m-4 ">
            <div class="col-12"> Registro do Ponto</div>
            <div class="col-12 d-flex">
                <SalvarPontoHome/>
                <PontoDia />
            </div>
        </div>
        <GridItems></GridItems>
    </div>

</template>

<script>
import axios from 'axios';
import $ from 'jquery';
import PontoDia from '@/components/home/PontoDia.vue'
import SalvarPontoHome from '@/components/home/SalvarPontoHome.vue'
import GridItems from '@/components/home/GridItems.vue'
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3000';

export default {
    components: {
        PontoDia,
        SalvarPontoHome,
        GridItems
    },
    data() {
        return {
            bannerImage: require('@/assets/bannerhome.png'),
            Authenticated: false,
            date: new Date(),
        
        };
    },
    async created() {
        console.log($('a'))
        try {
            const response = await axios.post('/protected', {
            });
            this.Authenticated = response.data.IsValid;
            this.$emit('authenticated', true);
        } catch (error) {
            console.error(error);
            this.$emit('authenticated', false);
            this.$router.push('/login');
        }
    },
   
};
</script>

<style>
.img-banner {
    width: 100dvw;
    object-fit: cover;
}

.card-body .card-body:hover {
    border: 1px solid black;
    cursor: pointer;
}
</style>