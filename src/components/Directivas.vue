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
 
        limpiarFormulario() {
            this.nombre = '';
            this.apellido = '';
        }
 
    }
}
</script>
 
<style></style>