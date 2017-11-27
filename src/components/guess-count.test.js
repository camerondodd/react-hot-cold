import React from 'react';
import {shallow,mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () =>{
	it('renders without crashing', () =>{
		shallow(<GuessCount />);
	});

	it('counts guesses', ()=>{
		let value = 17;
		let wrapper = shallow(<GuessCount count={value} />);
			expect(wrapper.text()).toEqual('Guess #17!');
	})
});