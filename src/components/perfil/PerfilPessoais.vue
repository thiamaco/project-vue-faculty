<template>
 
    <div class="container  p-2">
      <p >Nome {{ Profile.nome }}</p>
      <p >Email: {{ Profile.email }}</p>
      <p>País de Nascimento: {{ Profile.pais_nascimento }}</p>
      <p>País de Nacionalidade: {{ Profile.pais_nacionalidade }}</p>
      <p>Naturalidade: {{ Profile.naturalidade }}</p>
      <p>Data de Nascimento: {{ formatDate(Profile.data_nascimento) }}</p>
      <p>Grau de Instrução: {{ Profile.grau_instrucao }}</p>
      <p>Estado Civil: {{ Profile.estado_civil }}</p>
      <p>União Estável: {{ Profile.uniao_estavel }}</p>
      <p>Nome da Mãe: {{ Profile.nome_mae }}</p>
      <p>Nome do Pai: {{ Profile.nome_pai }}</p>
      <p> Sexo: {{ Profile.sexo }}</p>
      
    </div>
  </template>
  
  <script>
  export default {
    
    name: 'ProfilePessoais',
    props: {
      Profile: {
        type: Object,
        required: true
      }
    },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
      }
    }
  }
  </script>
  
  
  