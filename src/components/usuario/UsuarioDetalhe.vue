<template>
  <div class="usuario-detalhe">
      <h2>Usuaário detalhe</h2>
      <hr>
      <p><strong>Código</strong> {{id}}</p>
      <router-link tag = "button" primario 
                  :to="{name: 'editarUsuario', params: {id},
                  query: {completo: true, lingua: 'pt'}}"> 
      Editar
      </router-link>
  </div>
</template>

<script>
export default {
    props: ['id'],

}
</script>

<style>

</style>