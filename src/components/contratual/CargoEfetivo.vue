<template>
    <div class="container p-2 ">
        <p>Tipo Salário {{Cargo.tipo_salario}}</p>
        <p>Cargo {{Cargo.cargo}}</p>
    </div>
</template>



<script>


export default {

name:'CargoEfetivo',
props:{
    Cargo:{
        type:Object,
        required: true
    }
}
}
</script>
