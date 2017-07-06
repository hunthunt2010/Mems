import api from '../apis';

const topInputChange = (character) => ({
  type: 'top_change',
  character
});

const bottomInputChange = (character) => ({
  type: 'bottom_change',
  character
});

const topInputDeleteChange = () => ({
  type: 'top_change_delete'
});

const bottomInputDeleteChange = () => ({
  type: 'bottom_change_delete'
});

export const topInputOnChange = (character) => dispatch => {
  dispatch(topInputChange(character));
};

export const bottomInputOnChange = (character) => dispatch => {
  dispatch(bottomInputChange(character));
};

export const topInputOnDeleteChange = () => dispatch => {
  dispatch(topInputDeleteChange());
};

export const bottomInputOnDeleteChange = () => dispatch => {
  dispatch(bottomInputDeleteChange());
};