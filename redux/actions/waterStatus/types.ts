export enum ActionTypes {
  AddWaterInMachine,
  RemoveWaterInMachine,
  GetWaterInMachine,
}

import {
  GetTurnOnMachineAction,
  TurnOnMachineAction,
  TurnOffMachineAction,
} from "./index";

export type Action =
  | GetTurnOnMachineAction
  | TurnOnMachineAction
  | TurnOffMachineAction;