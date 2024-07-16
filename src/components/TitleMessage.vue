<template>
    <div class="border-1 border-start-0 border-end-0 text-uppercase border bg-light  text-bg-light p-1 fw-bold">{{Title}}</div>
</template>


<script>

export default{
    name:'TitleMessage',
    props:{
        Title:{
        type:String,
        required:true
        }
    }
}
</script>