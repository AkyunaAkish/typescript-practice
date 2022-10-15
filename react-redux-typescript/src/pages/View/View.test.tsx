// App.test.tsx
import { Component } from 'react';
import View from './index';

// import { shallow, mount, render } from 'enzyme';
import { shallow, ShallowWrapper } from 'enzyme';

describe('View page testing', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, Component<{}, {}, any>>;

  beforeEach(() => {
    // shallow will render an element but not too deeply nested (no nested components will be rendered)
    wrapper = shallow(<View />);
  });

  test('render the title of the page', () => {
    expect(wrapper.find('h1').text()).toContain('View');
  });
});
