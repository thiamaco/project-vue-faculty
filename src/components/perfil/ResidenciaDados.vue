<template>
    
      <div class="container  p-2 " v-for="(item) in Residencia" :key="item.id">
        <p >Logradouro {{ item.logradouro }}</p>
        <p >Tipo de logradouro: {{ item.tipo_logradouro }}</p>
        <p>Número {{ item.numero }}</p>
        <p>Bairro: {{ item.bairro }}</p>
        <p>Município: {{ item.municipio }}</p>
        <p>CEP: {{ item.cep }}</p>
        <p>DDD: {{ item.ddd_telefone }}</p>
        <p>Telefone Residencial: {{ item.telefone }}</p>
        <p>DDD - Telefone Celular: {{ item.celular_ddd }}- {{item.celular_numero}}</p>    
      </div>
    </template>
    
    <script>
    export default {
      
      name: 'ResidenciaDados',
      props: {
        Residencia: {
          type: Object,
          required: true
        }
      },
      methods: {
       
      }
    }
    </script>
    
    
    