import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './actions';
import { TCounter, TCounterPageActions } from './types';

export const counterInitialState: TCounter = 0;

const counterReducer = (state = 0, action: TCounterPageActions): TCounter => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + 1;

    case COUNTER_DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

export default counterReducer;
