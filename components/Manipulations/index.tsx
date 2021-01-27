/* imports */
import c from "./index.module.scss";
/* UI */
/* 0 */
import { Row, Col, Label, Input } from "reactstrap";
/* 1 */
import Container from "../UI/Container";
import SectionBlock from "../UI/SectionBlock";
import Button from "../UI/Button";
/* redux */
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../redux/reducers";
import {
  turnOnMachine,
  turnOffMachine,
  getTurnOnMachine,
} from "../../redux/actions/statusMachine";

const Manipulations = () => {
  const turnedOn = useSelector<StoreState>(
    (state) => state.statusMachine.turnedOn
  );
  const dispatch = useDispatch();

  return (
    <div className={c.wrapper}>
      <SectionBlock style={{ marginBottom: 14 }}>
        <div className={c.inner}>
          <Label>Shake machine</Label>
          <Button>Shake</Button>
        </div>
      </SectionBlock>
      <SectionBlock style={{ marginBottom: 14 }}>
        <div className={c.inner}>
          <Label>Go to the machine</Label>
          <Button>Go</Button>
        </div>
      </SectionBlock>
      <SectionBlock>
        <div className={c.inner}>
          <Label> {turnedOn ? "Turn off" : "Turn on"} machine</Label>
          <Button
            onClick={() => {
              dispatch(turnedOn ? turnOffMachine() : turnOnMachine());
            }}
          >
            {turnedOn ? "Turn off" : "Turn on"}
          </Button>
        </div>
      </SectionBlock>
    </div>
  );
};

export default Manipulations;
