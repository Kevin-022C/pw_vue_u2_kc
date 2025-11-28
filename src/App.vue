<template>
  <div>
    <DirectivasView/>
  </div>
</template>

<script>
import ContadorView from '../src/view/ContadorView.vue';
import DirectivasView from '../src/view/DirectivasView.vue';

export default {
  name: 'App',
  components: {
    ContadorView,
    DirectivasView
   
  }
}
</script>

<style>

</style>
