import axios from "./index";

export interface StatusMachine {
  turnedOn: boolean;
}

export const statusMachinePatch = (status: StatusMachine) =>
  axios.patch<StatusMachine>("/statusMachine", status);
