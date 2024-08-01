import { describe, expect, test } from 'vitest';
import MyCounter from '@/components/MyCounter.vue';
import { mount } from '@vue/test-utils';

describe('<MyCounter />', () => {
  test('Should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 0
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders the counter value correctly', () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value
      }
    });

    // Imprime lo que contiene h1 del componente console.log((wrapper.find('h1').text()))
    expect(wrapper.find('h1').text()).toContain(value); // Espera que el valor del h1 sea igual al valor que se le paso.
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(value * value); // Espera que el valor del h1 sea igual a 5.
    // Donde data-testid es un atributo que se le agrega al elemento que se quiere buscar para hacer el test.
  });

  // Pruebas de triggers

  test('increments the counter when +1 button is clicked', async () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value
      },
    });

    const btnIncrement = wrapper.find('button');
    await btnIncrement.trigger('click'); // Se recomienda un await para los triggers

    expect(wrapper.find('h1').text()).toContain(value + 1);
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain((value + 1) * (value + 1));
  });

  test('decrements the counter when -1 is clicked twice', async () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });

    const [ ,btnDecrement ] = wrapper.findAll('button');
    await btnDecrement.trigger('click');
    await btnDecrement.trigger('click');

    expect(wrapper.find('h1').text()).toContain(value - 2);

  });
});