import { Component } from 'react';
import Todos from './index';

// import { shallow, mount, render } from 'enzyme';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Todos page testing', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, Component<{}, {}, any>>;

  beforeEach(() => {
    // shallow will render an element but not too deeply nested (no nested components will be rendered)
    wrapper = shallow(<Todos />);
  });

  test('render the title of the page', () => {
    expect(wrapper.find('h1').text()).toContain('Todos');
  });

  test('render the home link on the page', () => {
    expect(wrapper.find('#home-link').text()).toContain('Home');
  });

  test('render the todos container on the page', () => {
    expect(wrapper.find('#todos-container')).toBeDefined();
  });
});
