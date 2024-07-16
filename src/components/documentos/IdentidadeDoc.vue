<template>
    <div>
       <p>Numero {{Identidade.numero }}</p>
       <p>Orgão Emissor {{Identidade.orgao_emissor }}</p>
       <p>Data Emissão {{Identidade.data_emissao }}</p>
       <p>UF {{Identidade.uf }}</p>
    </div>
</template>


<script>

export default{
    name:'IdentidadeDoc',
    props:{
        Identidade:{
        type:Object,
        required:true
        }
    }
}
</script>