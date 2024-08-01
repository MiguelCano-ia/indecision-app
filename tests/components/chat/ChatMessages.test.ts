import { describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';

const messages: ChatMessage[] = [
  { id: 1, message: 'Hello', itsMine: true },
  { id: 2, message: 'Hi', itsMine: false, image: 'https://via.placeholder.com/150' },
];

describe(' <ChatMessages />', () => {
  const wrapper = mount(ChatMessages, {
    props: {
      messages,
    },
  });

  test('renders chat messages correctly', () => {
    const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' }); // Busca todos los componentes ChatBubble
    expect(chatBubbles).toHaveLength(messages.length); // Comprueba que el número de mensajes sea igual al número de componentes ChatBubble.
  });

  test('scroll down to the button after messages update', async () => {
    const scrollToMock = vi.fn(); // Crea una función mock para simular el scroll.
    console.log(wrapper.vm.$refs); // Muestra los refs del componente.

    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement; // Obtiene el ref chat.
    chatRef.scrollTo = scrollToMock; // Sobrescribe la función scrollTo del ref chat.

    await wrapper.setProps({
      messages: [
        ...messages,
        { id: 3, message: 'How are you?', itsMine: true },
      ],
    });

    await new Promise (resolve => setTimeout(resolve, 150)); // Espera 100ms para que se actualice el DOM.
    expect(scrollToMock).toHaveBeenCalled(); // Comprueba que la función scrollTo se haya llamado.
    // Comprueba que la función scrollTo se haya llamado con los parámetros correctos.
    expect(scrollToMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      top: expect.any(Number),
    });
  });
});