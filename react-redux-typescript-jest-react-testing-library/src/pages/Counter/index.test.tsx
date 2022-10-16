/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, fireEvent } from '@testing-library/react';
import Counter from './index';
import { MemoryRouter } from 'react-router-dom';

describe('Counter component', () => {
  test('renders the Counter header', () => {
    const { container } = render(
      <MemoryRouter>
        <Counter />
      </MemoryRouter>
    );

    const element = container.querySelector('#counter-title');

    expect(element?.textContent).toBe('Counter');
  });

  test('renders the Home link', () => {
    const { container } = render(
      <MemoryRouter>
        <Counter />
      </MemoryRouter>
    );

    const element = container.querySelector('#counter-home-link');

    expect(element?.textContent).toBe('Home');
  });

  test('renders the Counter header label', () => {
    const { container } = render(
      <MemoryRouter>
        <Counter />
      </MemoryRouter>
    );

    const element = container.querySelector('#counter-header-label');

    expect(element?.textContent).toBe('Counter:');
  });

  test('renders the Counter value', () => {
    const { container } = render(
      <MemoryRouter>
        <Counter />
      </MemoryRouter>
    );

    const element = container.querySelector('#counter-value');

    expect(element).toBeInTheDocument();
  });

  test('renders the Increment button', () => {
    const { container } = render(
      <MemoryRouter>
        <Counter />
      </MemoryRouter>
    );

    const element = container.querySelector('#increment-btn');

    expect(element?.textContent).toBe('Increment');
  });

  test('renders the Decrement button', () => {
    const { container } = render(
      <MemoryRouter>
        <Counter />
      </MemoryRouter>
    );

    const element = container.querySelector('#decrement-btn');

    expect(element?.textContent).toBe('Decrement');
  });

  test('pressing the increment button increases counter value', () => {
    const { container } = render(
      <MemoryRouter>
        <Counter />
      </MemoryRouter>
    );

    const element = container.querySelector('#increment-btn');

    expect(element).toBeInTheDocument();

    if (element) {
      fireEvent(
        element,
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        })
      );
    }

    const counterValue = container.querySelector('#counter-value');

    expect(counterValue?.textContent).toBe('1');
  });

  test('pressing the decrement button decreases counter value', () => {
    const { container } = render(
      <MemoryRouter>
        <Counter />
      </MemoryRouter>
    );

    const element = container.querySelector('#decrement-btn');

    expect(element).toBeInTheDocument();

    if (element) {
      fireEvent(
        element,
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        })
      );
    }

    const counterValue = container.querySelector('#counter-value');

    expect(counterValue?.textContent).toBe('-1');
  });
});
