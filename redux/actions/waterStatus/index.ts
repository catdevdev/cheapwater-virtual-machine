/* imports */
import { Dispatch } from "redux";
/* api */
import { patchStatusMachine, getStatusMachine } from "../../api/statusMachine";
/* types */
import { ActionTypes } from "./types";
import { WaterStatus } from "../../api/waterStatus";

export interface GetWaterInMachineAction {
  type: ActionTypes;
}
export interface SetWaterInMachineAction {
  type: ActionTypes.SetWaterInMachine;
  payload: WaterStatus;
}
export interface AddWaterInMachineAction {
  type: ActionTypes.AddWaterInMachine;
  payload: WaterStatus;
}

export const getWaterInMachine = () => {
  return async (dispatch: Dispatch) => {
    const response = await getStatusMachine();
    dispatch<GetWaterInMachineAction>({
      type: ActionTypes.GetWaterInMachine,
    });
  };
};

export const setWaterInMachine = () => {
  return async (dispatch: Dispatch) => {
    const response = await getStatusMachine();
    dispatch<SetWaterInMachineAction>({
      type: ActionTypes.SetWaterInMachine,
      payload: response.data,
    });
  };
};
