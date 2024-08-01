// This file is for practice purposes only, it is not used in the project

import { describe, expect, test } from 'vitest';
import { addArray, sum } from '../../src/helpers/sum';

// Describe help us to group tests

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    //Preparacion
    const a = 1;
    const b = 2;

    //Estimulo
    const result = sum(a, b);

    // Comportamiento esperado
    expect(result).toBe(a + b); // Se necesita q sea flexible, que solo se cambie la preparacion
  });
});

describe('addArray function', () => {
  test('Should return 0 if the array is empty', () => {
    const arr: any[] = [];

    const result = addArray(arr);

    expect(result).toBe(0);
  });

  test('Should return the sum of the elements in the array', () => {
    const arr = [1, 2, 3, 4, 5];

    const result = addArray(arr);

    expect(result).toBe(15);
  });
});