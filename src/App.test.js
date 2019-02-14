import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App, { AppService } from './App';

// spy(App.prototype, 'performSearch');
// chai.use()

describe('<App />', () => {
  it('should find the search <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.search')).to.have.lengthOf(1);
  });
  it('should succeed on fetching the restaurants', async () => {
    let result = await AppService.queryRestaurants("Toronto"); 
    expect(result).to.have.keys(['restaurants', 'loading', 'no_results', 'query']);
    expect(result.restaurants).not.to.be.empty;
  });
  it('should fail on fetching the restaurants', async () => {
    let result = await AppService.queryRestaurants("..."); 
    expect(result).to.have.keys(['restaurants', 'loading', 'no_results', 'query']);
    expect(result.restaurants).to.be.empty;
  });
  it('should fail when there is no querystring (fallback)', async () => {
    let result = await AppService.queryRestaurants(null); 
    expect(result).to.have.keys(['no_results']);
    expect(result.no_results).to.be.true;
  });
  it('should fail when there is an empty string (fallback)', async () => {
    let result = await AppService.queryRestaurants("   "); 
    expect(result).to.have.keys(['no_results']);
    expect(result.no_results).to.be.true;
  });
});