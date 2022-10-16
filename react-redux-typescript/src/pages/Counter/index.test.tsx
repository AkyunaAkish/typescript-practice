import { Component } from 'react';
import Counter from './index';

// import { shallow, mount, render } from 'enzyme';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Counter page testing', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, Component<{}, {}, any>>;

  beforeEach(() => {
    // shallow will render an element but not too deeply nested (no nested components will be rendered)
    wrapper = shallow(<Counter />);
  });

  test('render the title of the page', () => {
    expect(wrapper.find('h1').text()).toContain('Counter');
  });

  test('render the home link on the page', () => {
    expect(wrapper.find('#counter-home-link').first().text()).toContain('Home');
  });

  test('render the increment button on the page', () => {
    expect(wrapper.find('#increment-btn').text()).toContain('Increment');
  });

  test('render the decrement button on the page', () => {
    expect(wrapper.find('#decrement-btn').text()).toContain('Decrement');
  });

  test('pressing the increment button should increase the counter by 1', () => {
    wrapper.find('#increment-btn').simulate('click');

    expect(wrapper.find('#counter-value').text()).toBe('1');
  });

  test('pressing the decrement button should decrease the counter by 1', () => {
    wrapper.find('#decrement-btn').simulate('click');

    expect(wrapper.find('#counter-value').text()).toBe('-1');
  });
});
