/* imports */
import c from "./index.module.scss";
/* UI */
/* 0 */
import { Row, Col, Label, Input } from "reactstrap";
/* 1 */
import Container from "../UI/Container";
import SectionBlock from "../UI/SectionBlock";
import Button from "../UI/Button";

const Manipulations = () => {
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
          <Label>Turn off machine</Label>
          <Button>Turn off</Button>
        </div>
      </SectionBlock>
    </div>
  );
};

export default Manipulations;
