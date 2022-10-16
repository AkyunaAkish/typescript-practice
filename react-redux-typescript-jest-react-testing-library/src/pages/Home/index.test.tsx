import { render } from '@testing-library/react';
import Home from './index';
import { MemoryRouter } from 'react-router-dom';

describe('Home component', () => {
  test('renders the Home header', () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const element = container.querySelector('#home-title');

    expect(element?.textContent).toBe('Home');
  });

  test('renders the Counter link', () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const element = container.querySelector('#counter-link');

    expect(element?.textContent).toBe('Counter');
  });

  test('renders the Todos link', () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const element = container.querySelector('#todos-link');

    expect(element?.textContent).toBe('Todos');
  });
});
