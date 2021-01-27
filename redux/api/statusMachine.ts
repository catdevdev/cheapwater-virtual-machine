import axios from "./index";

export interface StatusMachineI {
  turnedOn: boolean;
}

export const statusMachinePatch = (status: StatusMachineI) =>
  axios.patch<StatusMachineI>("/statusMachine", status);
