import { render } from '@testing-library/react';
import Todos from './index';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../reducers/store';

describe('Todos component', () => {
  test('renders the Todos outermost container', () => {
    const { container } = render(
      <MemoryRouter>
        <Todos store={store} />
      </MemoryRouter>
    );

    const element = container.querySelector('#todos');

    expect(element).toBeInTheDocument();
  });

  test('renders the Todos header', () => {
    const { container } = render(
      <MemoryRouter>
        <Todos store={store} />
      </MemoryRouter>
    );

    const element = container.querySelector('#todos-title');

    expect(element?.textContent).toBe('Todos');
  });

  test('renders the Todos home link', () => {
    const { container } = render(
      <MemoryRouter>
        <Todos store={store} />
      </MemoryRouter>
    );

    const element = container.querySelector('#todos-home-link');

    expect(element?.textContent).toBe('Home');
  });

  test('renders the Todos content container', () => {
    const { container } = render(
      <MemoryRouter>
        <Todos store={store} />
      </MemoryRouter>
    );

    const element = container.querySelector('#todos-container');

    expect(element).toBeInTheDocument();
  });
});
