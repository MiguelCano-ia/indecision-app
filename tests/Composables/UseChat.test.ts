import { describe, expect, test, vi } from 'vitest';
import { useChat } from '@/composables/useChat';

describe('UseChat', () => {
  test('add message correctly when onMessage is called', async () => {
    const text = 'Hello, World!';
    const { messages, onMessage } = useChat();

    await onMessage(text);
    expect(messages.value).toHaveLength(1);
    expect(messages.value[0].message).toBe(text);
    expect(messages.value[0].itsMine).toBe(true);
    expect(messages.value[0]).toEqual({
      id: expect.any(Number),
      message: text,
      itsMine: true,
    });
  });

  test('gets his response correctly when message end with "?"', async () => {
    const text = 'How are you?';
    const { messages, onMessage } = useChat();
    await onMessage(text);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const [ myMessage, response ] = messages.value;
    expect(messages.value.length).toBe(2);
    expect(myMessage.itsMine).toBe(true);
  });

  test('mock response - fetch api', async () => {

    const mockResponse = { answer: 'Yes', image: 'example.gif' };

    (window as any).fetch = vi.fn(async() => ({
      json: async () => mockResponse,
    }));

    const text = 'How are you?';
    const { messages, onMessage } = useChat();
    await onMessage(text);

    await new Promise((resolve) => setTimeout(resolve, 1600));
    const [, response ] = messages.value;

    expect(response).toEqual({
      id: expect.any(Number),
      message: mockResponse.answer,
      itsMine: false,
      image: mockResponse.image,
    });
  });
});