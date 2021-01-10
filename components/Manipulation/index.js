/* imports */
import c from "./index.module.scss";
/* UI */
/* 0 */
import { Row, Col, Label, Input } from "reactstrap";
/* 1 */
import Container from "../../components/UI/Container";
import SectionBlock from "../../components/UI/SectionBlock";
import Button from "../../components/UI/Button";

const Manipulation = () => {
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

export default Manipulation;
