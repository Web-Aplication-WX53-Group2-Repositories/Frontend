<!--Todos los componentes deben tener en su nombre .component-->

<script setup>

</script>

<template>
  {{ $t('hello', {msg : 'Gustavo'}) }}

  <br/>
  <label for="name">Name</label>
  <pv-input-text id = "name"/>

  <br/>
  <pv-button label="Submit" aria-label="submit"/>
</template>

<style scoped>

</style>