import axios from "axios";
 
const consumirApi = async (id) => {
    const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r=> r.data);
    console.log(respuesta);
    return respuesta;  
}
 
export async function consumirApiFacade(){
    return await consumirApi();
}
 
export async function consumirApiFacade2(){
    return await consumirApi();
}
function obtenerAleatorio(min,max){
    return Math.floor(Math.random()*(max-min + 1)+ min);
}

const obtenerVectorNumerico=() =>{
    const vector=[];
    for(let i=0;i<4;i++){
        vector[i]=obtenerAleatorio(1,118);
    }
    return vector;
}
const obtenerVectorPokemon=(vectorNumerico)=>{
    const data1 = consumirApi(vectorNumerico[0]);
    const data2 = consumirApi(vectorNumerico[1]);
    const data3 = consumirApi(vectorNumerico[2]);
    const data4 = consumirApi(vectorNumerico[3]);

    const obj1 = {
        nombre:data1.name,
        id:data1.id
    }
}