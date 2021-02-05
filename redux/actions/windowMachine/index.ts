/* imports */
import { Dispatch } from "redux";
/* api */
import { getWindowMachine, patchWindowMachine } from "../../api/windowMachine";
/* types */
import {
  GetWaterInMachine,
  SetWaterInMachine,
  AddWaterInMachine,
} from "./types";
import { WaterStatus } from "../../api/waterStatus";

export interface GetWindowMachineAction {
  type: typeof GetWaterInMachine;
  payload: WaterStatus;
}
export interface SetWindowCupInWindowAction {
  type: typeof SetWaterInMachine;
  payload: WaterStatus;
}
export interface AddWaterInMachineAction {
  type: typeof AddWaterInMachine;
  payload: WaterStatus;
}

export const getWaterInMachine = (callback: () => void) => {
  return async (dispatch: Dispatch) => {
    const response = await getWaterStatus();
    dispatch<GetWaterInMachineAction>({
      type: GetWaterInMachine,
      payload: response.data,
    });
    callback();
  };
};

export const setWaterInMachine = (waterQuantity: number) => {
  return async (dispatch: Dispatch) => {
    const response = await patchWaterStatus({ waterQuantity });
    dispatch<SetWaterInMachineAction>({
      type: SetWaterInMachine,
      payload: response.data,
    });
  };
};

export const addWaterInMachine = (waterQuantity: number) => {
  return async (dispatch: Dispatch) => {
    const waterStatus = await getWaterStatus();
    const response = await patchWaterStatus({
      waterQuantity: waterStatus.data.waterQuantity + waterQuantity,
    });
    dispatch<AddWaterInMachineAction>({
      type: AddWaterInMachine,
      payload: response.data,
    });
  };
};
