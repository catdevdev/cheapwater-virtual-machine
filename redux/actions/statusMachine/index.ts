/* imports */
import { Dispatch } from "redux";
/* api */
import { patchStatusMachine, getStatusMachine } from "../../api/statusMachine";
/* types */
import { ActionTypes } from "./types";
import { StatusMachine } from "../../api/statusMachine";

export interface GetTurnOnMachineAction {
  type: ActionTypes.GetTurnOnMachine;
  payload: StatusMachine;
}

export interface TurnOnMachineAction {
  type: ActionTypes.TurnOnMachine;
  payload: StatusMachine;
}

export interface TurnOffMachineAction {
  type: ActionTypes.TurnOffMachine;
  payload: StatusMachine;
}

export const getTurnOnMachine = () => {
  return async (dispatch: Dispatch) => {
    const response = await getStatusMachine();
    dispatch<GetTurnOnMachineAction>({
      type: ActionTypes.GetTurnOnMachine,
      payload: response.data,
    });
  };
};

export const turnOnMachine = () => {
  return async (dispatch: Dispatch) => {
    const response = await patchStatusMachine({ turnedOn: true });
    dispatch<TurnOnMachineAction>({
      type: ActionTypes.TurnOnMachine,
      payload: response.data,
    });
  };
};

export const turnOffMachine = () => {
  return async (dispatch: Dispatch) => {
    const response = await patchStatusMachine({ turnedOn: false });
    dispatch<TurnOffMachineAction>({
      type: ActionTypes.TurnOffMachine,
      payload: response.data,
    });
  };
};
