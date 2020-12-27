import React from "react";

export const TD = (
  /**
   * @type {React.HTMLProps<HTMLTableCellElement>}
   */
  props
) => (
  <td {...props} style={{ padding: 0, ...props.style }}>
    {props.children}
  </td>
);
