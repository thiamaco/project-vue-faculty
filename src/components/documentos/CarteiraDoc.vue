<template>
    <div>
       <p>Carteira CTPS Digital {{formatBoolean(Carteira.utiliza_ctps_digital) }}</p>
       <p>Numero {{Carteira.numero }}</p>
    </div>
</template>


<script>

export default{
    name:'CarteiraDoc',
    props:{
        Carteira:{
        type:Object,
        required:true
        }
    },
methods: {
      formatBoolean(val) {
            if(val){
                return 'Sim'
            }else{
                return 'Não'
            }
      }
    }
}
</script>