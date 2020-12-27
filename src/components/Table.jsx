import React from "react";

export const Table = (
  /**
   * @type {React.HTMLProps<HTMLTableElement>}
   */
  props
) => {
  const { children, ...table } = props;
  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      border="0"
      {...table}
      style={{
        borderCollapse: "collapse",
        width: "100%",
        ...table.style,
      }}
    >
      <tbody>{children}</tbody>
    </table>
  );
};
