/* imports */
import c from "./index.module.scss";
import { useState } from "react";
/* UI */
/* 0 */
import { Label, Input } from "reactstrap";
/* 1 */
import Container from "../../components/UI/Container";
import SectionBlock from "../../components/UI/SectionBlock";
import Button from "../../components/UI/Button";
/* redux */
import { useDispatch } from "react-redux";
import {
  addWaterInMachine,
  setWaterInMachine,
} from "../../redux/actions/waterStatus";
/* redux types */
import { StoreState } from "../../redux/reducers";

const PourWater = () => {
  const dispatch = useDispatch();
  const [volumeLocalWater, setLocalWater] = useState("0");

  return (
    <div className={c.wrapper}>
      <SectionBlock>
        <div className={c.pourWaterBlock}>
          <Label>Pour water into a machine (local)</Label>
          <Button
            onClick={() => {
              dispatch(addWaterInMachine(+volumeLocalWater));
            }}
            style={{ marginTop: 14 }}
          >
            Add
          </Button>
          <Button
            onClick={() => {
              dispatch(setWaterInMachine(+volumeLocalWater));
            }}
            style={{ marginTop: 14 }}
          >
            Set
          </Button>
          <Input
            onChange={(e) => {
              setLocalWater(e.target.value);
            }}
            placeholder="Enter water volume"
            style={{ marginTop: 14 }}
          />
        </div>
      </SectionBlock>
      <SectionBlock style={{ marginLeft: 14 }}>
        <div className={c.pourWaterBlock}>
          <Label>Set the amount of water on the server</Label>
          <Button style={{ marginTop: 14 }}>Add</Button>
          <Button style={{ marginTop: 14 }}>Set</Button>
          <Input placeholder="Enter water volume" style={{ marginTop: 14 }} />
        </div>
      </SectionBlock>
    </div>
  );
};

export default PourWater;
