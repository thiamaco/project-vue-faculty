<template>
    <div>
       <p>Documento {{Certificado.documento }}</p>
       <p>Numero {{Certificado.numero }}</p>
    </div>
</template>


<script>

export default{
    name:'CertificadoDoc',

    props:{
        Certificado:{
        type:Object,
        required:true
        }
    }
}
</script>