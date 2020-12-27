import React from "react";
import { Image, Table, TD } from "../../../components";
import { fontFamilies } from "../../../styles";
import food from "./food2.png";

export const Promo = () => (
  <Table style={{ backgroundColor: "#f54505" }}>
    <tr>
      <TD style={{ maxWidth: 303, verticalAlign: "bottom", textAlign: "left" }}>
        <Image
          src={food}
          alt="Еда"
          style={{ maxWidth: "100%", height: "auto", maxHeight: 255 }}
        />
      </TD>

      <TD
        style={{
          padding: "28px 56px 28px 0",
        }}
      >
        <Table
          align="right"
          style={{
            color: "#ffffff",
            fontFamily: fontFamilies.Tahoma,
            fontWeight: "bold",
            textAlign: "right",
            maxWidth: 230,
          }}
        >
          <tr>
            <TD style={{ fontSize: 96, lineHeight: 1 }}>700</TD>
          </tr>
          <tr>
            <TD style={{ fontSize: 32 }}>
              баллов в&nbsp;подарок за&nbsp;покупку
            </TD>
          </tr>
          <tr>
            <TD style={{ fontSize: 19, fontWeight: "normal", paddingTop: 12 }}>
              Успейте до&nbsp;17&nbsp;декабря!
            </TD>
          </tr>
        </Table>
      </TD>
    </tr>
  </Table>
);
