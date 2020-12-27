import React from "react";
import { Table } from "./Table";
import { TD } from "./TD";

export const Box = (
  /**
   * @type {React.HTMLProps<HTMLTableElement> & { td: React.HTMLProps<HTMLTableCellElement> }}
   */
  props
) => {
  const { children, td, ...table } = props;
  return (
    <Table {...table}>
      <tr>
        <TD {...td}>{children}</TD>
      </tr>
    </Table>
  );
};
