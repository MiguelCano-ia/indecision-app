<template>
  <h1>Mi first counter</h1>
  <hr>

  <MyCounter :value="1" /> <!--: = v-bind -->
  <MyCounterScript :value="2"/>
  <MyCounterScript2 :value="3" />
</template>

<script lang="ts" setup> // lang="ts" es para que el script sea en typescript
  import MyCounter from '@/components/MyCounter.vue';
  import MyCounterScript from '@/components/MyCounterScript.vue';
  import MyCounterScript2 from '@/components/my-counter-script/MyCounterScript2.vue';
</script>
