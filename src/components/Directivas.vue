<template>
    <div>
        <label for="id_nombre">Nombre</label>
        <input id="id_nombre" type="text" v-model="nombre" />
        <!-- Directiva v-model es una propiedad reactiva que enlaza el valor del input con la data "nombre" -->
        <p v-if="nombre.length > 0">Hola {{ nombre }}, bienvenido a Vue.js</p>
 
        <label for="id_apellido">Apellido</label>
        <input id="id_apellido" type="text" v-model="apellido" /><br>
        <button @click="imprimirNombre">Imprimir Nombre</button>
        <button @click="agregarEstudiante">Agregar Estudiante</button>
 
        
        <br>
        <label for="id_nombre_1">Nombre</label>
        <input id="id_nombre_1"  type="text">

        <label for="id_apellido_1">Apellido</label>
        <input v-on:keypress.enter="agregarEstudiante1" id="id_apellido_1"  type="text">
        


        <ul>
            <li 

            v-show="nombre !== null"
            v-for="(estudiante, index) in arreglo" :key="index">
                {{ estudiante.nombre }} - {{ estudiante.apellido }}
            </li>
        </ul>
        <br>
        
        <h2>Tabla</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(estudiante, index) in arreglo" :key="index">
                    <td>{{ estudiante.nombre }}</td>
                    <td>{{ estudiante.apellido }}</td>
                </tr>
            </tbody>
        </table>



 
        <h3>{{ arreglo.length }}</h3>
    </div>
</template>
 
<script>
export default {
    name: 'Directivas',
    data() {
        return {
            nombre: '',
            apellido: '',
            arreglo: []
        }
    },
    methods: {
        imprimirNombre() {
            console.log(this.nombre);
        },
 
        agregarEstudiante() {
            const estudiante = {
                nombre: this.nombre,
                apellido: this.apellido
            }
            this.arreglo.push(estudiante);
            console.log("Estudiante agregado:", estudiante);
            this.limpiarFormulario();
            console.log(this.arreglo);
        },
        // metodo de 3/12/25
        // modificadoes de eventos: nacen despues del evento es decir despues del click, keypress, etc
        agregarEstudiante1(event){
            console.log("evento ");
            if(event.charCode!==13){
                return;
            }
            // dame haciendo con el enter
            const estudiante = {
                nombre: document.getElementById("id_nombre_1").value,
                apellido: document.getElementById("id_apellido_1").value
            } 
            console.log("presiono el enter")
            console.log("Agregar estudiante 1");
            console.log(estudiante);
            this.arreglo.push(estudiante);
            this.limpiarFormulario();
            console.log(event);
            console.log(event.charCode);
        },
 
        limpiarFormulario() {
            this.nombre = '';
            this.apellido = '';
        }
 
    }
}
</script>
 
<style></style>