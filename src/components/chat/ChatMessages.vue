<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">

      <!-- Messages go here -->
      <ChatBubble
        v-for="message in messages"
        :key="message.id"
        v-bind="message"
      />
      <!--
      v-bind es una forma de pasar todas las propiedades de un objeto a un componente
        :its-mine="message.itsMine"
        :message="message.message"
        :image="message.image"
      -->
    </div>
  </div>
</template>
<script setup lang="ts">
  import ChatBubble from '@/components/chat/ChatBubble.vue';
  import type { ChatMessage } from '@/interfaces/chat-message.interface';
  import { ref, watch } from 'vue';

  interface Props {
    messages: ChatMessage[];
  }

  const props = defineProps<Props>();

  const chatRef = ref<HTMLDivElement | null>(null);

  // watch: Ejecuta una funcion cada vez que cambia una variable
  watch( props, () => {
    console.log('Messages changed');
    setTimeout(() => {
      chatRef.value?.scrollTo({
        top: chatRef.value.scrollHeight, // scrollHeight es la altura total del div
        behavior: 'smooth', // smooth es para que el scroll sea suave
      });
    }, 100);
  });
</script>