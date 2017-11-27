import React from 'react';
import {shallow,mount} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal />', () =>{
	it('renders without crashing', () =>{
		shallow(<InfoModal />);
	});
});