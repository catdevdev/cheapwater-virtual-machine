import { StatusMachine } from "./../api/statusMachine";

import { ActionTypes, Action } from "../actions/statusMachine/types";

export const statusMachine = (
  state: StatusMachine = { turnedOn: false },
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.GetTurnOnMachine:
      return action.payload;
    case ActionTypes.TurnOnMachine:
      return action.payload;
    case ActionTypes.TurnOffMachine:
      return action.payload;
    default:
      return state;
  }
};
