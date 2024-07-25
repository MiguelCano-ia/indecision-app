// Creando un archivo ts por separado para el script de un componente en caso de ser muy extenso

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