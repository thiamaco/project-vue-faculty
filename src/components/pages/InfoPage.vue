<template>
  <div>
    <LoaderPage v-if="!isAuthenticated" ></LoaderPage>

    <div v-if="isAuthenticated">
      
     <!-- <TopoInfo :dados="ProfileData" />-->
      
      <div class="bg-dark text-white p-2 fs-4" ><font-awesome-icon :icon="['far', 'address-card']" /> Colaborador</div>
      <div class="d-flex gap-1 align-items-center justify-content-center container mt-4">
        <button class="btn btn-outline-secondary" @click="handleClick('profile')"
          :class="{ 'selected': ChangeStatus === 'profile' }">Pessoais</button>
        <button class="btn btn-outline-secondary" @click="handleClick('contract')"
          :class="{ 'selected': ChangeStatus === 'contract' }">Contratuais</button>
        <button class="btn btn-outline-secondary" @click="handleClick('document')"
          :class="{ 'selected': ChangeStatus === 'document' }">Documentos</button>
      </div>
      <div v-if="ChangeStatus === 'profile'">
        <LoaderPage v-if="loading" />
        <div v-else class="container mt-4 mb-4 card card-body col-12 shadow ">
          <ProfilePessoais :Profile="ProfileData" />
          <TitleMessage Title='Endereços'></TitleMessage>
          <ResidenciaDados :Residencia="ResidenciaData" />
        </div>
      </div>
      <div v-else-if="ChangeStatus === 'contract'">
        <LoaderPage v-if="loading" />
        <div v-else class="container mt-4 mb-4 card card-body col-12 shadow ">
          <ContratoInfo :Contract="ContractData" />
          
          <TitleMessage Title='Cargo efetivo'></TitleMessage>
          <CargoEfetivo  v-if=OfficeData :Cargo="OfficeData" />
          <TitleMessage Title='pagamento'></TitleMessage>
          <PaymentInfo  v-if=PaymentData :Payment="PaymentData" />
        </div>
      </div>
      <div v-else-if="ChangeStatus === 'document'">
        <LoaderPage v-if="loading" />
        <div v-else class="container mt-4 mb-4 card card-body col-12 shadow ">
          <div><p>CPF {{ Documentos.CPF }}</p></div>
          <TitleMessage Title='IDENTIDADE'></TitleMessage>
          <IndentidadeDoc :Identidade="Documentos.Identidade"></IndentidadeDoc>
          <TitleMessage Title='TÍTULO DE ELEITOR'></TitleMessage>
          <TituloDoc :Titulo="Documentos.TituloEleitor"></TituloDoc>
          <TitleMessage Title='CERTIFICADO MILITAR'></TitleMessage>
          <CertificadoDoc :Certificado="Documentos.CertificadoMilitar" />
          <TitleMessage Title='CARTEIRA DE TRABALHO'></TitleMessage>
          <CarteiraDoc :Carteira="Documentos.ContratoTrabalho"></CarteiraDoc>
          <TitleMessage Title='PIS PASEP'></TitleMessage>
          <PisDoc :Pis="Documentos.PISPASEP" />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoaderPage from '../partials/LoaderPage.vue'
import axios from 'axios';
import ProfilePessoais from '../perfil/PerfilPessoais.vue';
//import TopoInfo from './perfil/TopoInfo.vue';
import ResidenciaDados from '../perfil/ResidenciaDados.vue';
import CargoEfetivo from '../contratual/CargoEfetivo.vue';
import ContratoInfo from '../contratual/ContratoInfo.vue';
import PaymentInfo from '../contratual/PaymentInfo.vue';
import PisDoc from '../documentos/PisDoc.vue'
import CarteiraDoc from '../documentos/CarteiraDoc.vue'
import CertificadoDoc from '../documentos/CertifcadoDoc.vue'
import TituloDoc from '../documentos/TitutoDoc.vue'
import IndentidadeDoc from '../documentos/IdentidadeDoc.vue'
import TitleMessage from '../TitleMessage.vue'
import $ from 'jquery';
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = 'http://localhost:3000';

export default {
  components: {
    ProfilePessoais,
    //TopoInfo,
    ResidenciaDados,
    CargoEfetivo,
    PaymentInfo,
    ContratoInfo,
    PisDoc,
    CarteiraDoc,
    CertificadoDoc,
    TituloDoc,
    IndentidadeDoc,
    TitleMessage,
    LoaderPage
  },
  data() {
    return {
      ProfileData: [],
      IsValid: false,
      ResidenciaData: [],
      token: null,
      status: 'profile',
      OfficeData: [],
      ContractData: [],
      PaymentData: [],
      Documentos: [],
      loading: false
    };
  },
    computed: {
    ChangeStatus() {
      return this.status;
    },
    isAuthenticated() {
           return this.IsValid;
       }
  },
  async created() {
      try {
        const response = await axios.get('/profile/SearchProfile', {
        });
        const { Residency, Profile } = response.data.data;
        this.ResidenciaData = Residency;
        this.ProfileData = Profile;
        this.IsValid = response.data.IsValid;
        this.$emit('authenticated', true);
      } catch (error) {
        console.error(error);
        this.$emit('authenticated', false);
        this.$router.push('/login');
      }
  },
  methods: {
    async handleClick(status) {
      this.loading = true;
      $('.container');
        try {
          const response = await axios.get(`/profile/Search${status}`, {
          });
          this.loading = false;
          this.status = status;

          if (this.status == 'contract') {
            const { Office, contract, Payment } = response.data.data;
            this.OfficeData = Office;
            this.ContractData = contract;
            this.PaymentData = Payment;
          } else if (this.status == 'document') {
            console.log(response.data.data);
            this.Documentos = response.data.data;
          }
        } catch (error) {
          console.error(error);
        }
    },
  },

};
</script>

<style scoped>
.selected {
  background-color: #6c757d;
  color: white
}
</style>
