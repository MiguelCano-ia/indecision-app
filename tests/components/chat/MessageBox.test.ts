import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import MessageBox from '@/components/chat/MessageBox.vue';

describe('<MessageBox />', () => {
  const wrapper = mount(MessageBox);

  test('renders input and button correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });

  test('emits sendMessage event when button is clicked with message value', async () => {
    const message = 'Hello, World!';

    await wrapper.find('input[type="text"]').setValue(message); // Simula escribir en el input
    await wrapper.find('button').trigger('click'); // Simula hacer click en el botón

    // emmitted: Obtiene los eventos emitidos
    expect(wrapper.emitted('sendMessage')).toBeTruthy(); // Verifica si el evento sendMessage fue emitido
    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]); // Verifica si el evento emitido tiene el mensaje correcto

    expect((wrapper.vm as any).message).toBe(''); // Verifica si el input se limpió
  });

  test('emits sendMessage event when keypress.enter is triggered with message value', async () => {
    const message = 'Hello, World!';
    const input = wrapper.find('input[type="text"]');

    await input.setValue(message); // Simula escribir en el input
    await input.trigger('keypress.enter'); // Simula presionar la tecla enter

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]); // Verifica si el evento emitido tiene el mensaje correcto
  });

  test('emits sendMessage event when keypress.enter is triggered with message value', async () => {
    const wrapper = mount(MessageBox);
    const input = wrapper.find('input[type="text"]');
    await input.trigger('keypress.enter'); // Simula presionar la tecla enter

    expect(wrapper.emitted('sendMessage')).toBeFalsy(); // Verifica si el evento emitido tiene el mensaje correcto
  });
});