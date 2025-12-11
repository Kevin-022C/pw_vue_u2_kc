<template>
  <div>
   <img src="https://yesno.wtf/assets/yes/5-64c2804cc48057b94fd0b3eaf323d92c.gif
    " alt="no se puede ver"/>
    <div class="pregunta-containner">
        <input type="text" placeholder="hasme una pregunta">
    <p>Recuerda terminar con el signo de interrogacion (?)</p>
    <h2>sere millonario?</h2>
    <h1>yes,No</h1>
    </div>  
  </div>
    
</template>

<script>
export default {

}
</script>

<style>
img{
    height: 100vh;
    width: 100vw;   
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
  
}
.pregunta-containner{
    position: relative;
    z-index: 1;
    color: white;
    text-align: center;
    margin-top: 20px;
    min-height: 100vh; /* altura de toda la pantalla */
    display: flex;
    flex-direction: column; /* elementos uno debajo del otro */
    justify-content: center; /* centrado vertical */
    align-items: center; /* centrado horizontal */
    text-align: center;
}
input{
    padding: 10px;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
    width: 300px;
    font-size: 16px;
}
input:focus{
    outline: none;
    box-shadow: 0 0 5px #42b983;
}
h1,h2,p{
    color: white;

}
p{
    font-size: 20px;
}
h2{
    margin-top: 150px;
}
</style>