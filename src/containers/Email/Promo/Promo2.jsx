import React from "react";
import { Box, Table, TD } from "../../../components";
import { fontFamilies } from "../../../styles";
import food from "./food.png";

export const Promo2 = () => (
  <Box
    style={{
      backgroundColor: "#f54505",
      backgroundImage: `url(${food})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom right",
    }}
    td={{ style: { padding: "28px 56px 28px 30px" } }}
  >
    <Table
      align="right"
      style={{
        maxWidth: "50%",
        color: "#ffffff",
        fontFamily: fontFamilies.Tahoma,
        fontWeight: "bold",
        textAlign: "right",
      }}
    >
      <tr>
        <TD style={{ fontSize: 96, lineHeight: 1 }}>700</TD>
      </tr>
      <tr>
        <TD style={{ fontSize: 32 }}>баллов в&nbsp;подарок за&nbsp;покупку</TD>
      </tr>
      <tr>
        <TD style={{ fontSize: 19, fontWeight: "normal", paddingTop: 12 }}>
          Успейте до&nbsp;17&nbsp;декабря!
        </TD>
      </tr>
    </Table>
  </Box>
);
