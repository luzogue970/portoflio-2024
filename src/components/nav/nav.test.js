import React from 'react';
import { shallow, render, mount } from 'enzyme';
import nav from './nav';

describe('nav', () => {
  let props;
  let shallownav;
  let renderednav;
  let mountednav;

  const shallowTestComponent = () => {
    if (!shallownav) {
      shallownav = shallow(<nav {...props} />);
    }
    return shallownav;
  };

  const renderTestComponent = () => {
    if (!renderednav) {
      renderednav = render(<nav {...props} />);
    }
    return renderednav;
  };

  const mountTestComponent = () => {
    if (!mountednav) {
      mountednav = mount(<nav {...props} />);
    }
    return mountednav;
  };  

  beforeEach(() => {
    props = {};
    shallownav = undefined;
    renderednav = undefined;
    mountednav = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
