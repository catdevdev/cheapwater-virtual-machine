export const GetWindowMachine = "GET_WINDOW_MACHINE";
export const PutPlasticCup = "PUT_PLASTIC_CUP";
export const RemovePlasticCup = "REMOVE_PLASTIC_CUP";
export const AddWaterInToPlasticCup = "ADD_WATER_IN_TO_PLASTIC_CUP";
export const AddWaterInToSplashContainer = "ADD_WATER_IN_TO_SPLASH_CONTAINER";
export const ResetWaterInSplashContainer = "RESET_WATER_IN_SPLASH_CONTAINER";

import {
  GetWindowMachineAction,
  PutPlasticCupAction,
  RemovePlasticCupAction,
  AddWaterInToPlasticCupAction,
  AddWaterInToSplashContainerAction,
  ResetWaterInSplashContainerAction,
} from "./index";

export type Action =
  | GetWindowMachineAction
  | PutPlasticCupAction
  | RemovePlasticCupAction
  | AddWaterInToPlasticCupAction
  | AddWaterInToSplashContainerAction
  | ResetWaterInSplashContainerAction;
