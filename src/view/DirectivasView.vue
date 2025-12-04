<template>
    <div class="view-container">
        <h2>Prueba</h2>
        <Directivas/>
    </div>
    
</template>

<script>
import Directivas from '../components/Directivas.vue';
export default {
    components:{
        Directivas,
    },

}
</script>

<style scoped>
.view-container {
    display: flex;
    height: 400px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    border: 2px solid #42b983;
    border-radius: 10px;
    
}

h2{
    font-size: 50px;
}
</style>