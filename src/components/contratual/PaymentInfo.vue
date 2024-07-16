<template>
    <div class="container p-2" >
        <p>Banco {{Payment.banco}}</p>
        <p>Agência {{Payment.agencia}}</p>
        <p>Numero Conta Corrente {{Payment.numero_conta}}</p>
    </div>
</template>

<script>


export default {

name:'PaymentInfo',
props:{
    Payment:{
        type:Object,
        required: true
    }
}
}
</script>
