/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
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

    const header = container.querySelector('#home-title');

    expect(header?.textContent).toBe('Home');
  });
});
