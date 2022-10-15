// App.test.tsx
import { Component } from 'react';
import Home from './index';

// import { shallow, mount, render } from 'enzyme';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Home page testing', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, Component<{}, {}, any>>;

  beforeEach(() => {
    // shallow will render an element but not too deeply nested (no nested components will be rendered)
    wrapper = shallow(<Home />);
  });

  test('render the title of the page', () => {
    expect(wrapper.find('h1').text()).toContain('Home');
  });
});
