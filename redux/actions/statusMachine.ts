/* imports */
import { Dispatch } from "redux";
/* api */
import { statusMachinePatch } from "./../api/statusMachine";
/* types */
import { ActionTypes } from "../actiontypes/index";
import { StatusMachineI } from "../api/statusMachine";

interface TurnOnMachineAction {
  type: ActionTypes.TurnOnMachine;
  payload: StatusMachineI;
}

interface TurnOffMachineAction {
  type: ActionTypes.TurnOffMachine;
  payload: StatusMachineI;
}

export const turnOnMachine = () => {
  return async (dispatch: Dispatch) => {
    const response = await statusMachinePatch({ turnedOn: true });
    dispatch<TurnOnMachineAction>({
      type: ActionTypes.TurnOnMachine,
      payload: response.data,
    });
  };
};

export const turnOffMachine = () => {
  return async (dispatch: Dispatch) => {
    const response = await statusMachinePatch({ turnedOn: false });
    dispatch<TurnOffMachineAction>({
      type: ActionTypes.TurnOffMachine,
      payload: response.data,
    });
  };
};
