<template>
  <div>
   <!-- <ContadorView/>-->
    <!--<DirectivasView/>-->
    <PreguntaView/>
  </div>
</template>

<script>
import ContadorView from '../src/view/ContadorView.vue';
import DirectivasView from '../src/view/DirectivasView.vue';
import PreguntaView from '../src/view/PreguntaView.vue';

export default {
  name: 'App',
  components: {
    ContadorView,
    DirectivasView,
    PreguntaView
   
  }
}
</script>

<style>

</style>
