/* imports */
import c from "./index.module.scss";
/* UI */
/* 0 */
import { Row, Col, Label, Input } from "reactstrap";
/* 1 */
import SectionBlock from "../../../components/UI/SectionBlock";
import Button from "../../../components/UI/Button";
import ConsoleOutput from "../../../components/UI/ConsoleOutput";
import { CSSProperties } from "styled-components";

interface Props {
  name: string;
  imgSrc: string;
}

const Sensor = ({ name, imgSrc }: Props) => {
  return (
    <div className={c.container}>
      <div className={c.inner1}>
        <p className={c.nameSensor}>{name}</p>
        <img className={c.img} src={imgSrc} alt="" />
      </div>
      <div style={{ width: 280 }} className={c.inner2}>
        <ConsoleOutput></ConsoleOutput>
      </div>
    </div>
  );
};

export default Sensor;
