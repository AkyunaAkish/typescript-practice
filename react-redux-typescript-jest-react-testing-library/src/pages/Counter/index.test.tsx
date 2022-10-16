/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from '@testing-library/react';
import Counter from './index';
import { MemoryRouter } from 'react-router-dom';

describe('Counter component', () => {
  test('renders the Counter header', () => {
    const { container } = render(
      <MemoryRouter>
        <Counter />
      </MemoryRouter>
    );

    const header = container.querySelector('#counter-title');

    expect(header?.textContent).toBe('Counter');
  });
});
