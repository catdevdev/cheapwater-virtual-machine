/* imports */
import c from "./index.module.scss";
import { CSSProperties } from "styled-components";
/* UI */
import Record from "./Record";

interface Props {
  style?: CSSProperties;
}

const ConsoleOutput = ({ style }: Props) => {
  return (
    <div style={style} className={c.container}>
      <div className={c.output}>
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />
      </div>
    </div>
  );
};

export default ConsoleOutput;
