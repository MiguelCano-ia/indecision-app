import { describe, expect, test } from 'vitest';
import ChatBubble from '@/components/chat/ChatBubble.vue';
import { mount } from '@vue/test-utils';

describe('<ChatBubble />', () => {
  test('renders own message correctly', () => {
    const message = 'Hello, World!';
    const wrapper = mount(ChatBubble, {
      props: {
        message: message,
        itsMine: true,
      },
    });

    // exists() verifica si el elemento existe

    expect(wrapper.find('.bg-blue-200').exists()).toBe(true); // El mensaje debe tener el color azul
    expect(wrapper.find('.bg-blue-200').text()).toBe(message); // El mensaje debe ser el mismo
    expect(wrapper.find('.bg-gray-300').exists()).toBe(false); // El otro mensaje no debe existir
  });

  test('renders received message correctly', () => {
    const message = 'Meesage received';
    const wrapper = mount(ChatBubble, {
      props: { // Propiedades que se le pasan al componente
        message: message,
        itsMine: false,
      },
    });

    expect(wrapper.find('.bg-gray-300').exists()).toBe(true); // El mensaje debe tener el color gris
    expect(wrapper.find('.bg-gray-300').text()).toBe(message); // El mensaje debe ser el mismo
    expect(wrapper.find('.bg-blue-200').exists()).toBe(false); // El otro mensaje no debe existir
    expect(wrapper.find('img').exists()).toBe(false);
  });


  test('renders received message with image correctly', () => {
    const message = 'Meesage received';
    const wrapper = mount(ChatBubble, {
      props: { // Propiedades que se le pasan al componente
        message: message,
        itsMine: false,
        image: 'https://via.placeholder.com/150',
      },
    });

    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe('https://via.placeholder.com/150');

  });
});