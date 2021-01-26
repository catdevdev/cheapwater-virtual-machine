import axios from "./index";

interface StatusMachineI {
  turnedOn: boolean;
}

export const statusMachinePatch = () =>
  axios.patch<StatusMachineI>("/statusMachine");


