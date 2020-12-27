import React from "react";
import { Box, Image, Table, TD } from "../../../components";
import card from "./card.png";
import logo from "./logo.png";

export const Header = () => (
  <Box td={{ style: { padding: "16px 30px 24px 30px" } }}>
    <Box
      style={{ display: "inline-table", width: "235px" }}
      td={{ style: { padding: "8px 0" } }}
    >
      <a href="https://5ka.ru/" style={{ display: "block" }}>
        <Image src={logo} alt="Пятёрочка" width="184" />
      </a>
    </Box>
    <Box
      style={{ display: "inline-table", width: "auto" }}
      td={{ style: { padding: "8px 0" } }}
    >
      <Table>
        <tr>
          <TD style={{ paddingRight: "8px" }}>
            <Image src={card} alt="Карта" width="52" />
          </TD>
          <TD>
            Карта №
            <br />
            Баланс баллов:
          </TD>
        </tr>
      </Table>
    </Box>
  </Box>
);
