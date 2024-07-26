// Creando un archivo ts por separado para el script de un componente en caso de ser muy extenso

import { defineComponent} from 'vue';
import { useCounter } from '@/composables/useCounter';

// Una forma distinta de declarar componentes en Vue 3

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  setup( props ) {
    const { counter, squareCounter } = useCounter(props.value);

    //const counter = ref(props.value);
    //const square = computed(() => counter.value * counter.value);

    return {
      counter,
      squareCounter,
    }
  },
})