import React from "react";
import { basicLineHeight } from "../styles";
import { Box } from "./Box";
import { Image } from "./Image";
import { Table } from "./Table";
import { TD } from "./TD";

export const Point = (props) => (
  <Box
    style={{ display: "inline-table", width: 180, lineHeight: 0 }}
    td={{ style: { padding: "0 10px" } }}
  >
    <Table style={{ lineHeight: basicLineHeight }}>
      <tr>
        <TD style={{ paddingTop: "24px", lineHeight: 0 }}>
          <Image
            src={props.src}
            alt={props.alt}
            width={props.width}
            style={{ display: "inline-block" }}
          />
        </TD>
      </tr>
      <tr>
        <TD style={{ fontSize: 14, padding: "24px 0" }}>{props.children}</TD>
      </tr>
    </Table>
  </Box>
);
