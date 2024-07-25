<template>
  <section>
    <h1 class="text-3xl font-bold underline">Counter: {{ counter }}</h1>
    <h2>Square: {{ square }}</h2>
    <button class="btn mr-2" @click="increment">Increment</button>
    <button class="btn mr-2" @click="decrement">Decrement</button>
    <button class="btn" @click="reset">Reset</button>
  </section>
</template>

<script lang="ts" setup> // lang="ts" es para que el script sea en typescript
  import { ref, computed } from 'vue';

  const props = defineProps<{
    value: number;
  }>();

  const counter = ref(props.value);
  const increment = () => counter.value++; // .value solo es necesario en el setup, en el template no
  const decrement = () => counter.value--;
  const reset = () => counter.value = 0;
  const square = computed(() => counter.value * 2); // Dependencia reactiva de counter

  // No se necesitar un return porque el setup se encarga de eso.
</script>

<style scoped> /* scoped es para que el estilo solo afecte a este componente */

.btn {
  /*Lo que hace el apply es que podamos usar clases de tailwind por separado del html */
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
}

</style>