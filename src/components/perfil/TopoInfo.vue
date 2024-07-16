<template>
    <div class="row col-12 card-body">
        <div class="col-1">
            <img :src="imagePerson"  class="rounded-circle" width="100px" alt="Imagem Person">
        </div>
        <div class="col-8">
           {{Dados.nome}}
        </div>
        <div class="col-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nesciunt impedit voluptas nemo, magnam animi consectetur temporibus non rem id tempora similique explicabo ad nostrum corrupti obcaecati suscipit debitis cumque?
        </div>
    </div>

</template>


<script>

export default{
    name: 'TopoInfo',
    props: {
      Dados: {
        type: Object,
        required: true
      }
    },
    data(){
        return{
        imagePerson: './perfil/logoperfil.png'
        }
    }
  }

</script>