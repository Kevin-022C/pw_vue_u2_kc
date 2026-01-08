<template>
    <div class="pokemon-container">
        <img :src="srcImagen" alt="imagen no cargada">
    </div>
  
</template>

<script>
export default {
    props:{
        pokemonId:{
            type:Number,
            required:true
        }
    },
    computed:{
        srcImagen(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }        
    }
}
</script>

<style>
img{
    height: 200px;
    right: 32%;
}
.pokemon-container{
    height: 200px;
}
</style>