import { describe, expect, test } from 'vitest';
import { useCounter } from '@/composables/useCounter';

describe('useCounter', () => {
  test('initializes counter with provided initial value', () => {
    const initialValue = 10;
    const { counter, squareCounter } = useCounter(initialValue);

    expect(counter.value).toBe(initialValue);
    expect(squareCounter.value).toBe(initialValue * initialValue);
  });

  test('increments the counter', () => {
    const initialValue = 10;
    const { counter, squareCounter } = useCounter(initialValue);

    counter.value++; // Incrementa el valor de counter en 1
    expect(counter.value).toBe(initialValue + 1); // Espera que el valor de counter sea igual a 11
    expect(squareCounter.value).toBe((initialValue + 1) * (initialValue + 1));
  });
});