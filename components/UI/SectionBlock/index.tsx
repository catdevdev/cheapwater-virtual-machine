import styled, { CSSProperties, CSSProp } from "styled-components";

interface Props {
  style?: CSSProp;
}

export default styled.div<Props>`
  ${({ style }) => style ?? {}};
  width: 100%;
  display: inline-block;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  padding: 12px;
`;
