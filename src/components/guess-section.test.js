import React from 'react';
import {shallow,mount} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () =>{
	it('renders without crashing', () =>{
		shallow(<GuessSection />);
	});

	it('gives feedback', () =>{
		let feedback = "Chunky Monkey";
		let wrapper = shallow(<GuessSection feedback={feedback} />);
		expect(wrapper.contains(feedback)).toEqual(true);	
	})
});