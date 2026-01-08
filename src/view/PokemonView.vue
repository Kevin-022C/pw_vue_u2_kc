<template>
  <div class="contenedorPrincipal">
    <PokemonImagen :pokemonId="6"/>
    <PokemonOpsiones/>
  </div>

</template>

<script>
import PokemonImagen from '../components/PokemonImagen.vue';
import pokemonImagen from '../components/PokemonImagen.vue'
import PokemonOpsiones from '../components/PokemonOpsiones'
export default {
    components : {
        PokemonImagen,
        PokemonOpsiones
    }

}
</script>

<style>
.contenedorPrincipal{
    background-color: orange;
}
</style>