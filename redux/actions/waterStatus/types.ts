export const ActionTypes: {
  AddWaterInMachine;
  SetWaterInMachine;
  GetWaterInMachine;
} = {
  AddWaterInMachine: "AddWaterInMachine",
  SetWaterInMachine: "SetWaterInMachine",
  GetWaterInMachine: "GetWaterInMachine",
};

import {
  GetWaterInMachineAction,
  SetWaterInMachineAction,
  AddWaterInMachineAction,
} from "./index";

export type Action =
  | GetWaterInMachineAction
  | SetWaterInMachineAction
  | AddWaterInMachineAction;
