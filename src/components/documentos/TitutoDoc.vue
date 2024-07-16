<template>
    <div>
       <p>Numero {{Titulo.numero }}</p>
       <p>Seção {{Titulo.secao }}</p>
       <p>Zona {{Titulo.zona }}</p>
       <p>Data Emissão {{Titulo.data_emissao }}</p>
       <p>UF {{Titulo.uf }}</p>
    </div>
</template>


<script>

export default{
    name:'TituloDoc',
    props:{
        Titulo:{
        type:Object,
        required:true
        }
    }
}
</script>