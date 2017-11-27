import React from 'react';
import {shallow,mount} from 'enzyme';

import Header from './header';

describe('<Header />', () =>{
	it('renders without crashing', () =>{
		shallow(<Header />);
	});

	it('hides info',()=>{
		let wrapper=shallow(<Header />);
		expect(wrapper.find('InfoModal').exists()).toEqual(false);
	})
});