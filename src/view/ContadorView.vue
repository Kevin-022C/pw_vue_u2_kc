<template>
    <div>
        <ContadorUno tit="contador 1" v-bind='20' :mostrar="true"/>
        <ContadorUno tit="contador 2" :inicio="10" :mostrar="false"/>
        
    </div>
</template>

<script>
import ContadorUno from '../components/contadorUno.vue';

export default {
  name: 'ContadorView',
  components: {
    ContadorUno
  }
}
</script>

<style>
</style>