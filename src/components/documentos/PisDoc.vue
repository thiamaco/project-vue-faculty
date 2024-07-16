<template>
    <div>
       <p>Numero {{Pis.numero }}</p>
    </div>
</template>


<script>

export default{
    name:'PisDoc',
    props:{
        Pis:{
        type:Object,
        required:true
        }
    }
}
</script>