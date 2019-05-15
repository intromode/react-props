import React from 'react';
import Color from './Color';
import { shallow } from 'enzyme';

describe('testing the color component', () => {
  it('tests the snapshot', () => {
    const wrapper = shallow(<Color name="purple" hex="#9400D3" rgb="fkfjkdf" />);
    expect(wrapper).toMatchSnapshot();
  });
});
