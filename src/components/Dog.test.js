import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('tests dog component', () => {
  it('matches dog screenshot', () => {
    const wrapper = shallow(<Dog age={5} name="snuggles" weight="60 lbs" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
