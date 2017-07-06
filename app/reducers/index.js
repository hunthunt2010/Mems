import {combineReducers} from 'redux';

const randomCase = (letter) => {
  let x = Math.floor(Math.random() * 2);
  if (x === 0) {
    letter = letter.toLowerCase();
  }
  return letter;
};

export const example = (state = {topText: '', bottomText: ''}, action) => {
  switch (action.type) {
    //Would be a constant that matches the types in actions/index.js
    case 'top_change':
      return Object.assign({}, state, {topText: state.topText + randomCase(action.character)});
    case 'bottom_change':
      return Object.assign({}, state, {bottomText: state.bottomText + randomCase(action.character)});
    case 'top_change_delete':
      return Object.assign({}, state, {topText: state.topText.substring(0, state.topText.length - 1)});
    case 'bottom_change_delete':
      return Object.assign({}, state, {bottomText: state.bottomText.substring(0, state.bottomText.length - 1)});
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  example
});

export default rootReducer;