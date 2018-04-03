import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  SET_TO_ZERO
} from '../actions/counter';

export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    case SET_TO_ZERO:
      return 0;
    default:
      return state;
  }
};