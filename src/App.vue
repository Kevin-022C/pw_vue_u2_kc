<template>
  <div>
   <!-- <ContadorView/>-->
    <!--<DirectivasView/>-->
   <!-- <PreguntaView/>-->
   <PokemonView></PokemonView>
  </div>
</template>

<script>
import ContadorView from '../src/view/ContadorView.vue';
import DirectivasView from '../src/view/DirectivasView.vue';
import PreguntaView from '../src/view/PreguntaView.vue';
import PokemonView from './view/PokemonView.vue';

export default {
  name: 'App',
  components: {
    ContadorView,
    DirectivasView,
    PreguntaView,
    PokemonView
   
  }
}
</script>

<style>

</style>
