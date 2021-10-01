import { createAction } from '../../store/action-heplers';

export const COUNTER_INCREMENT = 'COUNTER INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER DECREMENT';

export const counterPageActions = {
  increment: () => createAction(COUNTER_INCREMENT),
  decrement: () => createAction(COUNTER_DECREMENT),
};
