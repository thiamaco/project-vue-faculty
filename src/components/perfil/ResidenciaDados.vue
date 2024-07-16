<template>
    
      <div class="container  p-2 ">
        <p >Logradouro {{ Residencia.residencia_logradouro }}</p>
        <p >Tipo de logradouro: {{ Residencia.residencia_tipo_logradouro }}</p>
        <p>Número {{ Residencia.residencia_numero }}</p>
        <p>Bairro: {{ Residencia.residencia_bairro }}</p>
        <p>Município: {{ Residencia.residencia_municipio }}</p>
        <p>CEP: {{ Residencia.residencia_cep }}</p>
        <p>DDD: {{ Residencia.residencia_ddd_telefone }}</p>
        <p>Telefone Residencial: {{ Residencia.residencia_telefone }}</p>
        <p>DDD - Telefone Celular: {{ Residencia.celular_ddd }}- {{Residencia.celular_numero}}</p>    
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
    
    
    