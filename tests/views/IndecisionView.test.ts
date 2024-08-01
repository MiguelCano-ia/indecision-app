import { describe, expect, test } from 'vitest';
import IndecisionView from '@/views/IndecisionView.vue';
import { mount } from '@vue/test-utils';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';

const mockChatMessages = {
  template: '<div data-testid="mock-messages">Mock ChatMessages</div>',
}

describe(' <IndecisionView />', () => {
  test('renders chat messages and messagebox correctly', () => {
    const wrapper = mount(IndecisionView);
    expect(wrapper.findComponent(ChatMessages).exists()).toBe(true);
    expect(wrapper.findComponent(MessageBox).exists()).toBe(true);
  });

  test('calls onMessage when a new message is sent', async () => {
    // Simular el evento personalizado
    const wrapper = mount(IndecisionView, {
      global: {
        stubs: {
          ChatMessages: mockChatMessages,
        }
      }
    });
    const messageboxComponent = wrapper.findComponent(MessageBox);
    messageboxComponent.vm.$emit('sendMessage', 'Hello, World!');

    await new Promise((r) => setTimeout(r, 150));
    console.log(wrapper.html());
  });
});