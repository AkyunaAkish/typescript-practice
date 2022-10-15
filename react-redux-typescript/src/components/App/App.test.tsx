import { Component } from 'react';
import App from './index';

// import { shallow, mount, render } from 'enzyme';
import { shallow, ShallowWrapper } from 'enzyme';

describe('App component testing', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, Component<{}, {}, any>>;

  beforeEach(() => {
    // shallow will render an element but not too deeply nested (no nested components will be rendered)
    wrapper = shallow(<App />);
  });

  test('app component exists', () => {
    expect(wrapper.find('#app')).toBeDefined();
  });
});
