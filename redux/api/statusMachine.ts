import axios from "./index";

export interface StatusMachine {
  turnedOn: boolean;
}

export const patchStatusMachine = (status: StatusMachine) =>
  axios.patch<StatusMachine>("/statusMachine", status);

export const getStatusMachine = () =>
  axios.get<StatusMachine>("/statusMachine");
