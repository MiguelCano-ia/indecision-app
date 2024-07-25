<template>
  <section>
    <h1>Counter: {{ counter }}</h1>
    <h2>Square: {{ square }}</h2>
    <button @click="counter++">Increment</button>
    <button @click="counter--">Decrement</button>
  </section>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from 'vue';

  // Una forma distinta de declarar componentes en Vue 3

  export default defineComponent({
    props: {
      value: {
        type: Number,
        required: true,
      },
    },
    setup( props ) {
      const counter = ref(props.value);
      const square = computed(() => counter.value * counter.value);

      return {
        counter,
        square,
      }
    },
  })

  /*
  import { ref, computed } from 'vue';

  const props = defineProps<{
    value: number;
  }>();

  const counter = ref(props.value);
  const increment = () => counter.value++;
  const decrement = () => counter.value--;
  const reset = () => counter.value = 0;
  const square = computed(() => counter.value * 2);

  */
</script>

<style scoped>
</style>