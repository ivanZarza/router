<script setup>
//Este componente es un sidebar que se renderiza en la parte izquierda de la página

</script>


<template>
  <ul>
    <li>  
      <RouterLink :to="{name:'protected'}">Dashboard</RouterLink>
    </li>
    <li>  
      <RouterLink :to="{name:'invoices'}">Invoices</RouterLink>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    list-style: none;
    background-color: white;
    padding: 10;
    margin-right: 20px;
  }

  li {
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    background-color: #f0f0f0;
  }



</style>

