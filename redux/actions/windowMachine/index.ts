/* imports */
import { Dispatch } from "redux";
/* api */
import { getWindowMachine, patchWindowMachine } from "../../api/windowMachine";
/* types */
import {
  GetWindowMachine,
  PutPlasticCup,
  RemovePlasticCup,
  AddWaterInToPlasticCup,
  AddWaterInToSplashContainer,
  ResetWaterInSplashContainer,
} from "./types";
import { WindowMachine } from "../../api/windowMachine";

export interface GetWindowMachineAction {
  type: typeof GetWindowMachine;
  payload: WindowMachine;
}
export interface PutPlasticCupAction {
  type: typeof PutPlasticCup;
  payload: WindowMachine;
}
export interface RemovePlasticCupAction {
  type: typeof RemovePlasticCup;
  payload: WindowMachine;
}
export interface AddWaterInToPlasticCupAction {
  type: typeof AddWaterInToPlasticCup;
  payload: WindowMachine;
}
export interface AddWaterInToSplashContainerAction {
  type: typeof AddWaterInToSplashContainer;
  payload: WindowMachine;
}
export interface ResetWaterInSplashContainerAction {
  type: typeof ResetWaterInSplashContainer;
  payload: WindowMachine;
}

/* to refuctor */
export const getWindowMachineObject = () => {
  return async (dispatch: Dispatch) => {
    const response = await getWindowMachine();
    dispatch<GetWindowMachineAction>({
      type: GetWindowMachine,
      payload: response.data,
    });
    // callback();
  };
};
export const putPlasticCup = (size: number) => {
  return async (dispatch: Dispatch) => {
    const response = await patchWindowMachine({
      inWindowCup: true,
      cupSize: size,
      amountOfWaterInCup: 0
    });
    dispatch<PutPlasticCupAction>({
      type: PutPlasticCup,
      payload: response.data,
    });
    // callback();
  };
};

export const removePlasticCup = () => {
  return async (dispatch: Dispatch) => {
    const response = await patchWindowMachine({
      inWindowCup: false,
      cupSize: null,
      amountOfWaterInCup: null
    });
    dispatch<RemovePlasticCupAction>({
      type: RemovePlasticCup,
      payload: response.data,
    });
    // callback();
  };
};

export const addWaterInToPlasticCup = (waterQuantity: number) => {
  return async (dispatch: Dispatch) => {
    const windowMachine = await getWindowMachine();
    const response = await patchWindowMachine({
      amountOfWaterInCup: windowMachine.data.amountOfWaterInCup + waterQuantity,
    });
    dispatch<AddWaterInToPlasticCupAction>({
      type: AddWaterInToPlasticCup,
      payload: response.data,
    });
    // callback();
  };
};

export const addWaterInToSplashContainer = (waterQuantity: number) => {
  return async (dispatch: Dispatch) => {
    const windowMachine = await getWindowMachine();
    const response = await patchWindowMachine({
      splash: windowMachine.data.splash + waterQuantity,
    });
    dispatch<AddWaterInToSplashContainerAction>({
      type: AddWaterInToSplashContainer,
      payload: response.data,
    });
    // callback();
  };
};

export const resetWaterInSplashContainer = () => {
  return async (dispatch: Dispatch) => {
    const response = await patchWindowMachine({
      splash: 0,
    });
    dispatch<ResetWaterInSplashContainerAction>({
      type: ResetWaterInSplashContainer,
      payload: response.data,
    });
    // callback();
  };
};
