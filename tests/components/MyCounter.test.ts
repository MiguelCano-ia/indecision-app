import { describe, test } from 'vitest';
import MyCounter from '../../src/components/MyCounter.vue';
import { mount } from '@vue/test-utils';

describe( '<MyCounter />', () => {
  test('Should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 0
      }
    });
  });
});