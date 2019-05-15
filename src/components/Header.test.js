import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('test header component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
