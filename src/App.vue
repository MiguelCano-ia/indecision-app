<template>
  <section>
    <h1>Counter: {{ counter }}</h1>
    <h2>Square: {{ square }}</h2>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
  </section>
</template>

<script lang="ts" setup> // lang="ts" es para que el script sea en typescript
  import { ref, computed } from 'vue';

  const counter = ref(0);
  const increment = () => counter.value++; // .value solo es necesario en el setup, en el template no
  const decrement = () => counter.value--;
  const reset = () => counter.value = 0;
  const square = computed(() => counter.value * 2); // Dependencia reactiva de counter

  // No se necesitar un return porque el setup se encarga de eso.
</script>

<style scoped> /* scoped es para que el estilo solo afecte a este componente */
  h1 {
    color: red;
  }
</style>