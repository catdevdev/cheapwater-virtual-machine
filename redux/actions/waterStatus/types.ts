// export const ActionTypes: {
//   AddWaterInMachine: string;
//   SetWaterInMachine: string;
//   GetWaterInMachine;
// } = {
//   AddWaterInMachine: "ADD_WATER_IN_MACHINE",
//   SetWaterInMachine: "SET_WATER_IN_MACHINE",
//   GetWaterInMachine: "GET_WATER_IN_MACHINE",
// };

export const AddWaterInMachine = "ADD_WATER_IN_MACHINE";
export const SetWaterInMachine = "SET_WATER_IN_MACHINE";
export const GetWaterInMachine = "GET_WATER_IN_MACHINE";

import {
  GetWaterInMachineAction,
  SetWaterInMachineAction,
  AddWaterInMachineAction,
} from "./index";

export type Action =
  | GetWaterInMachineAction
  | SetWaterInMachineAction
  | AddWaterInMachineAction;
