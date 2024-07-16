<template>
    <div class="container p-2">
        <p>Matricula {{ Contract.id_matricula}}</p>
        <p>Data de Admissão {{Contract.data_admissao}}</p>
        <p>Regime Trabalhista {{Contract.regime_trabalhista }}</p>
        <p>Lotação {{Contract.lotacao}}</p>
        <p>Centro de Custo {{Contract.centro_custo}}</p>
        <p>Sindicato {{Contract.sindicato}}</p>
        <p>Salário Atual {{Contract.salario}}</p>
        <p>Marca Ponto {{ formatBoolean(Contract.marca_ponto)}}</p>
        <p>Contribuição Sindical  {{formatBoolean(Contract.contribuicao_sindical) }}</p>

    </div>
</template>


<script>

export default{

name:'ContratoInfo',


props:{
    Contract: {
        type: Object,
        required: true
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