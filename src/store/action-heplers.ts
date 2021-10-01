/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
export type TAction<T extends string> = {
  type: T;
}

export type TActionWithPayload<T extends string, P> = {
  type: T;
  payload: P;
}

export function createAction<T extends string>(type: T): TAction<T>;
export function createAction<T extends string, P>(type: T, payload: P): TActionWithPayload<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload };
}

type FunctionType = (...args: any[]) => any;

type ActionCreatorsMapObject = {
  [actionCreator: string]: FunctionType;
}

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
