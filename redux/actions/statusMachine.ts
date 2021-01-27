/* imports */
import { Dispatch } from "redux";
/* api */
import { statusMachinePatch } from "./../api/statusMachine";
/* types */
import { ActionTypes } from "../actiontypes/index";
import { StatusMachine } from "../api/statusMachine";

export interface TurnOnMachineActionI {
  type: ActionTypes.TurnOnMachine;
  payload: StatusMachine;
}

export interface TurnOffMachineActionI {
  type: ActionTypes.TurnOffMachine;
  payload: StatusMachine;
}

export const turnOnMachine = () => {
  return async (dispatch: Dispatch) => {
    const response = await statusMachinePatch({ turnedOn: true });
    dispatch<TurnOnMachineActionI>({
      type: ActionTypes.TurnOnMachine,
      payload: response.data,
    });
  };
};

export const turnOffMachine = () => {
  return async (dispatch: Dispatch) => {
    const response = await statusMachinePatch({ turnedOn: false });
    dispatch<TurnOffMachineActionI>({
      type: ActionTypes.TurnOffMachine,
      payload: response.data,
    });
  };
};
