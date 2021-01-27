export enum ActionTypes {
  GetTurnOnMachine,
  TurnOnMachine,
  TurnOffMachine,
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
