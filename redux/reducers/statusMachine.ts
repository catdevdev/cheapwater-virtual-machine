import { StatusMachine } from "./../api/statusMachine";
import {
  TurnOnMachineActionI,
  TurnOffMachineActionI,
} from "../actions/statusMachine";
import { ActionTypes } from "./../actiontypes/index";

export const statusMachineReducer = (
  state: StatusMachine = { turnedOn: false },
  action: TurnOnMachineActionI | TurnOffMachineActionI
) => {
  switch (action.type) {
    case ActionTypes.TurnOnMachine:
      return action.payload;
    case ActionTypes.TurnOffMachine:
      return action.payload;
    default:
      return state;
  }
};
