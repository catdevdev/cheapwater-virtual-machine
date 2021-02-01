import { WaterStatus } from "./../api/waterStatus";
import {
  TurnOnMachineAction,
  TurnOffMachineAction,
  GetTurnOnMachineAction,
} from "../actions";
import {
  GetWaterInMachine,
  SetWaterInMachine,
  AddWaterInMachine,
  Action,
} from "../actions/waterStatus/types";
export const waterStatus = (
  state: WaterStatus = { waterQuantity: null },
  action: Action
) => {
  switch (action.type) {
    case GetWaterInMachine:
      return action.payload;
    case SetWaterInMachine:
      return action.payload;
    case AddWaterInMachine:
      return action.payload;
    default:
      return state;
  }
};
