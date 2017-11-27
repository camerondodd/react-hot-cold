import {NEW_GAME,MAKE_GUESS,TOGGLE_INFO_MODAL} from './actions';

let initialState ={
	guesses:[],
	feedback:'Make your guess!',
	correctAnswer: Math.floor(Math.random90*100)+1,
	showInfoModal: false
};

export default (state, action) =>{
	state = state || initialState;
	if (action.type === NEW_GAME){
		state = Object.assign({}, initialState, {
			correctAnswer: action.correctAnswer
		});
		return state;
	}
	else if (action.type === MAKE_GUESS){
		let guess = parseInt(action.guess,10);
		if (inNAN(guess)) {
			state = Object.assign({}, state, {
				feedback:'That is not a number!'
			});
			return state;
		}

		let difference = Math.abs(guess - state.correctAnswer);

		let feedback;
		if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

        state = Object.assign({}, state, {
        	feedback:feedback,
        	guesses:state.guesses.concat(action.guess)
        });

        return state;
	}
	else if (action.type === TOGGLE_INFO_MODAL){
		state = Object.assign({}, state, {
			showInfoModal: !state.showInfoModal
		});
		return state;
	}
	return state;
}