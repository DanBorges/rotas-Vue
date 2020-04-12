<template>
    <div class="menu">
        <ul>
            <router-link to="/" tag="li" active-class="active" exact>
                <a>Home</a>
            </router-link>
            
            <router-link to="/usuario" tag="li" active-class="active">
                <a>User 1</a>
            </router-link>

        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    
</style>