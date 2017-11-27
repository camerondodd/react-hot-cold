import React from 'react';
import {shallow,mount} from 'enzyme';

import Game from './game';

describe('<Game />', () =>{
	it('renders without crashing', () =>{
		shallow(<Game />);
	});

	it('actually plays the game', () => {
		let wrapper = shallow(<Game />);
		wrapper.setState({
			correctAnswer:4
		});
		wrapper.instance().guess(95);
		expect(wrapper.state('guesses')).toEqual([95]);
		expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

		wrapper.instance().guess(8);
		expect(wrapper.state('guesses')).toEqual([95, 8]);
		expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

		wrapper.instance().guess(4);
		expect(wrapper.state('guesses')).toEqual([95, 8, 4]);
		expect(wrapper.state('feedback')).toEqual('You got it!');

	})
});