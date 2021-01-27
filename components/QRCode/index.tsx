/* imports */
import React from "react";
import QR from "qrcode.react";
import c from "./index.module.scss";
import { CSSProperties } from "styled-components";
/*  */
interface Props {
  style?: CSSProperties;
}

const QRCode = ({ style }: Props) => {
  return (
    <div style={style} className={c.wrapper}>
      <QR
        renderAs="svg"
        style={{ width: "100%", height: "100%" }}
        value="https://cheapwater.net/token/3da69f03-c866-471c-95dc-862de2e4a2cc"
      />
      <p className={c.statusText}>Scan to buy water💧</p>
    </div>
  );
};

export default QRCode;
