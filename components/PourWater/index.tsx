/* imports */
import styled from "styled-components";
import c from "./index.module.scss";
/* UI */
/* 0 */
import { Row, Col, Label, Input } from "reactstrap";
/* 1 */
import Container from "../../components/UI/Container";
import SectionBlock from "../../components/UI/SectionBlock";
import Button from "../../components/UI/Button";

const PourWater = () => {
  return (
    <div className={c.wrapper}>
      <SectionBlock>
        <div className={c.pourWaterBlock}>
          <Label>Pour water into a machine (local)</Label>
          <Button style={{ marginTop: 14 }}>Add</Button>
          <Button style={{ marginTop: 14 }}>Set</Button>
          <Input placeholder="Enter water volume" style={{ marginTop: 14 }} />
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
