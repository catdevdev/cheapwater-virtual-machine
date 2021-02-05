export const PutPlasticCup = "PUT_PLASTIC_CUP";
export const RemovePlasticCup = "REMOVE_PLASTIC_CUP";
export const AddWaterInToPlasticCup = "ADD_WATER_IN_TO_PLASTIC_CUP";
export const AddWaterInToSplashContainer = "ADD_WATER_IN_TO_SPLASH_CONTAINER";
export const RemoveWaterInSplashContainer = "REMOVE_WATER_IN_SPLASH_CONTAINER";

import {
  GetWaterInMachineAction,
  SetWaterInMachineAction,
  AddWaterInMachineAction,
} from "./index";

export type Action =
  | GetWaterInMachineAction
  | SetWaterInMachineAction
  | AddWaterInMachineAction;
