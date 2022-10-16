// READ THIS:
// this file is mostly working but it throws a warning:
// warning: An update to null inside a test was not wrapped in act(...)
// There are many solutions online but they mainly use the built in
// @testing-library/react library instead of enzyme
// to fix this, this repo should be refactored to use that library
// instead of enzyme to workaround the act(...) warning 
// I'm leaving this file here because it has good examples of 
// testing a redux connected component and react router component
// by wrapping the mounted component in MemoryRouter and passing
// the store to the connected component

import { Component } from 'react';
import Todos from './index';
import { store } from '../../reducers/store';
import { mount, ReactWrapper } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

describe('Todos page testing', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>>;

  beforeEach(() => {
    // since todos is a redux connected component, we have to pass it our store
    // we also need to wrap this in the MemoryRouter
    // to avoid useHref context errors
    wrapper = mount(
      <MemoryRouter>
        <Todos store={store} />
      </MemoryRouter>
    );

    // // eslint-disable-next-line testing-library/no-debugging-utils
    // console.log(wrapper.debug());
  });

  test('render the title of the page', () => {
    expect(wrapper.find('#todos-title').text()).toContain('Todos');
  });

  test('render the home link on the page', () => {
    expect(wrapper.find('#todos-home-link').first().text()).toContain('Home');
  });

  test('render the todos container on the page', () => {
    expect(wrapper.find('#todos-container')).toBeDefined();
  });
});
