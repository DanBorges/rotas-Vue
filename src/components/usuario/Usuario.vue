<template>
    <div class="usuario">
        <h2>Usuário</h2>

        <button sucesso @click="irInicio">Ir Inicio</button>
        <hr>
        <router-view />
    </div>
</template>

<script>
export default {
    // props: ['id'],
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    methods: {
        irInicio() {
            // this.$router.push('/')
            this.$router.push({path: '/'})
        }
    },

    // watch: {
    //     $route(to, from) {
    //         this.id = to.params.id
    //     }
    // }
}
</script>

<style>
    
</style>