<template>
  <div class="opsiones-container">
    <ul>
        <li>Pokemon 1</li>
        <li>Pokemon 2</li>
        <li>Pokemon 3</li>
        <li>Pokemon 4</li>
    </ul>
  </div>
</template>

<script>

export default {

}
</script>

<style>
ul{
    list-style-type:none;
}
li{
    background-color: aliceblue;
    border-radius: 5px;
    border: 1px solid;
    cursor: pointer;
    width: 250px;
    margin-top: 10px;
}
.opsiones-container{
    display: flex;
    justify-content: center;
   
}
</style>