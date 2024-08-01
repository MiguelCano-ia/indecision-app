<template>
  <section>
    <h1>Counter: {{ counter }}</h1>
    <h2>Square: {{ squareCounter }}</h2>
    <button @click="counter++">Increment</button>
    <button @click="counter--">Decrement</button>
  </section>
</template>

<script lang="ts" src="./MyCounterScript2.ts">

</script>

<style scoped>
</style>