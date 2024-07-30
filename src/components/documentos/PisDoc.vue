<template>
    <div>
       <p>Numero {{Pis }}</p>
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