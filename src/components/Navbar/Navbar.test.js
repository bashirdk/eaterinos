import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('<Navbar />', () => {
  it('should have eaterinos text', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('.navBar nav div').text()).to.contain('Eaterinos');
  });
})
