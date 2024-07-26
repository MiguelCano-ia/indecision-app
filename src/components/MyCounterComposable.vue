<template>
  <section>
    <h1 class="text-3xl font-bold underline">Counter: {{ counter }}</h1>
    <h2>Square: {{ squareCounter }}</h2>

    <div>
      <button class="btn mr-2" @click="counter++">Increment</button>
      <button class="btn mr-2" @click="counter--">Decrement</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

const { counter, squareCounter} = useCounter(10)

</script>

<style scoped>
  .btn {
    @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
  }
</style>