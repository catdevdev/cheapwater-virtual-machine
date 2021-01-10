import c from "./index.module.scss";
import styled from "styled-components";

const Code = styled.div`
  font-size: 12px;
  font-family: Menlo;
`;
const Time = styled(Code)`
  color: #353535;
  margin-right: 10px;
`;
const Key = styled(Code)`
  color: #b9740c;
`;
const Colons = styled(Code)`
  color: #353535;
  margin-right: 8px;
`;
const Value = styled(Code)`
  color: #a25abb;
`;

const Record = () => {
  return (
    <div className={c.container}>
      <Time>11:32:34PM ={">"}</Time>
      <Key>glassInWindow</Key>
      <Colons>:</Colons>
      <Value>true</Value>
    </div>
  );
};

export default Record;
