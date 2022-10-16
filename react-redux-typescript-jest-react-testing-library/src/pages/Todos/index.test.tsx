/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from '@testing-library/react';
import Todos from './index';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../reducers/store';

describe('Todos component', () => {
  test('renders the Todos header', () => {
    const { container } = render(
      <MemoryRouter>
        <Todos store={store} />
      </MemoryRouter>
    );

    const header = container.querySelector('#todos-title');

    expect(header?.textContent).toBe('Todos');
  });
});
