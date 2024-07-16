<template>
  <div>
    
    <div v-if="isAuthenticated">
      
     <!-- <TopoInfo :dados="ProfileData" />-->
      
      <div class="bg-dark text-white p-2 fs-4" ><font-awesome-icon :icon="['far', 'address-card']" /> Colaborador</div>
      <div class="d-flex gap-1 align-items-center justify-content-center container mt-4">
        <button class="btn btn-outline-secondary" @click="handleClick('profile')"
          :class="{ 'selected': ChangeStatus === 'profile' }">Pessoais</button>
        <button class="btn btn-outline-secondary" @click="handleClick('contrato')"
          :class="{ 'selected': ChangeStatus === 'contrato' }">Contratuais</button>
        <button class="btn btn-outline-secondary" @click="handleClick('documento')"
          :class="{ 'selected': ChangeStatus === 'documento' }">Documentos</button>
      </div>
      <div v-if="ChangeStatus === 'profile'">
        <div class="container mt-4 mb-4 card card-body col-12 shadow ">
          <ProfilePessoais :Profile="ProfileData" />
          <TitleMessage Title='Residência'></TitleMessage>
          <ResidenciaDados :Residencia="ResidenciaData" />
        </div>
      </div>
      <div v-else-if="ChangeStatus === 'contrato'">
        <div class="container mt-4 mb-4 card card-body col-12 shadow ">
          <ContratoInfo :Contract="ContractData" />
          <TitleMessage Title='Cargo efetivo'></TitleMessage>
          <CargoEfetivo :Cargo="OfficeData" />
          <TitleMessage Title='pagamento'></TitleMessage>
          <PaymentInfo :Payment="PaymentData" />
        </div>
      </div>
      <div v-else-if="ChangeStatus === 'documento'">
        <div class="container mt-4 mb-4 card card-body col-12 shadow ">
          <div><p>CPF {{ Documentos.CPF }}</p></div>
          <TitleMessage Title='IDENTIDADE'></TitleMessage>
          <IndentidadeDoc :Identidade="Documentos.Identidade"></IndentidadeDoc>
          <TitleMessage Title='TÍTULO DE ELEITOR'></TitleMessage>
          <TituloDoc :Titulo="Documentos.TitleEleitor"></TituloDoc>
          <TitleMessage Title='CERTIFICADO MILITAR'></TitleMessage>
          <CertificadoDoc :Certificado="Documentos.CertificadoMilitar" />
          <TitleMessage Title='CARTEIRA DE TRABALHO'></TitleMessage>
          <CarteiraDoc :Carteira="Documentos.Carteira"></CarteiraDoc>
          <TitleMessage Title='PIS PASEP'></TitleMessage>
          <PisDoc :Pis="Documentos.Pis" />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    TitleMessage
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
      Documentos: []
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
        const response = await axios.get('/profile/profile', {
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
        try {
          const response = await axios.get(`/profile/${status}`, {
          });
          this.status = status;

          if (this.status == 'contrato') {
            const { Office, Contract, Payment } = response.data.data;
            this.OfficeData = Office;
            this.ContractData = Contract;
            this.PaymentData = Payment;
          } else if (this.status == 'documento') {
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
