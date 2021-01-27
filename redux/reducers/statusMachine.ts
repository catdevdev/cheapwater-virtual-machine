import { StatusMachine } from "./../api/statusMachine";
import {
  TurnOnMachineAction,
  TurnOffMachineAction,
  GetTurnOnMachineAction,
} from "../actions/statusMachine";
import { ActionTypes } from "./../actiontypes/index";

type Action =
  | GetTurnOnMachineAction
  | TurnOnMachineAction
  | TurnOffMachineAction;

export const statusMachineReducer = (
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
