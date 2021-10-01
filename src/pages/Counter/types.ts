import { ActionsUnion } from '../../store/action-heplers';

import { counterPageActions } from './actions';

export type TCounter = number;
export type TState = {
  counter: TCounter;
};

export type TCounterPageActions = ActionsUnion<typeof counterPageActions>;
