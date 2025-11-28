<template>
    
    <div>
    
        <h1>{{tit}}</h1>
        <p>{{numero  }} <sup>2</sup> ={{calculaCuadrado }}</p>
        <p>{{ numero }} <sup>2</sup> ={{calculaCuadrado }}</p>
        <p>{{ numero }} <sup>2</sup> ={{calculaCuadrado }}</p>
        <p>{{ numero }} <sup>2</sup> ={{ calculaCuadrado }}</p>
        <p>{{ numero }} <sup>2</sup> ={{obtenerCubo() }}</p>
        <h3>Kevin Celi</h3>
        <div>
            <button v-on:click="incrementar">+1</button>
            <button  @:click="decrementar">-1</button>
            <button v-show="mostrar">prueba</button>
        </div>
    </div>
</template>

<script>
// directivas en vue :son palabras claves que vue interpreta para ejecutar eventos o manipular el doom 
// de manera reactiva

// declara un conjunto de opsion 
// con option api dentro del scrip hago opsiones
//opsion de variables y asi
export default {
  //name: 'ContadorUno'
  // propiedades reactivas :vaRIALBES QUE VOY A USAR DENTRO DEL COMPONETRE
  // cuando se haga un caMBIO reactivamente va a actualizar la pagina
  // cuando nosotros declaramos componetes es como una plantilla
  data(){
    return{
        numero:this.inicio,
        titulo:'contador'
    };
  },
  // opsion de api destinada para los metodos
  methods:{
    optenerCuadrado(){
        console.log('entro a obtener cuadrado')
        return this.numero*this.numero
    },
    obtenerCubo(){
        return this.numero*this.numero*this.numero;
    },
    incrementar(){
        console.log(this.tit)
        this.numero ++;
    },
    decrementar(){
        this.numer --;
    },
  },
  //propiedades computadas
  // son propiedades no metodos se ejecutan solo cuando existe un cambio en su respuesta caso conrario se almacena en cache
  // solo si cambia el resultado caso contrario no se va acambiar
  computed:{
    calculaCuadrado(){
        console.log('entro a propiedad computada')
        return this.numero*this.numero
    },
    calcularCubo(){
        return this.numero*this.numero*this.numero;
    },
    
  },
  // props: son variables que yo puedo instancear o puedo darles un valor
  // desde un componente ya que son variables a nvel de componente
  //
  //props:['tit','inicio',"mostrar"],declaracion basica props
  props:{
    tit: String,
    inicio:{
        type:Number,
        default:99,
        validator(value){
            return value > 10;
        }
    },
    mostrar:Boolean
  }
  /**
   * String,number,Array,obj,Date:para mandar una fecha,Function
   * numeros grandes BigInt
   */
  // DIRECTIVAS PARTE II

};
</script>

<style>
h1 {
    font-family: 'Times New Roman', Times, serif;
    color: rgb(29, 26, 200);
    
}
/*div {
    display: flex;
    height: auto;
    flex-direction: column;
    justify-items: center;
    border-radius: 25px;
    background-color: bisque;
}*/
</style>