import { ref } from 'vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import type { YesNoResponse } from '@/interfaces/yes-no.response';
import { sleep } from '@/helpers/sleep';

export const useChat = () => {
  /* ChatMessage[] es un array de objetos de tipo ChatMessage y
  ([]) es el valor inicial que indica que el valor inicial de messages es un array vacio */
  const messages = ref<ChatMessage[]>([
  ]);

  const getResponse = async (): Promise<YesNoResponse> => {
    try {
      const response = await fetch('https://yesno.wtf/api');
      return await response.json();
    } catch (error) {
      console.info({ error });
      return {
        answer: 'Error',
        forced: false,
        image: '',
      };
    }
  }

  const onMessage = async ( text: string ) => {
    if (text.length === 0) return;

    messages.value.push({
      id: new Date().getTime(),
      message: text,
      itsMine: true,
    });

    // Evaluar si termina con ?
    if (!text.endsWith('?')) return;

    await sleep(1.5);
    const { answer, image} = await getResponse();

    messages.value.push({
      id: new Date().getTime(),
      message: answer.charAt(0).toUpperCase() + answer.slice(1),
      itsMine: false,
      image: image,
    });
  };

  return {
    messages,
    onMessage,
  }
}