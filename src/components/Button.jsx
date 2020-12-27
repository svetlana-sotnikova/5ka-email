import React from "react";

export const Button = (
  /**
   * @type {React.HTMLProps<HTMLAnchorElement>}
   */
  props
) => (
  <a
    target="_blank"
    {...props}
    style={{
      display: "inline-block",
      textDecoration: "none",
      color: "#ffffff",
      backgroundColor: "#e51a22",
      borderTop: "16px solid #e51a22",
      borderBottom: "16px solid #e51a22",
      borderLeft: "40px solid #e51a22",
      borderRight: "40px solid #e51a22",
      borderColor: "#e51a22",
      borderRadius: 26,
      ...props.style,
    }}
  />
);
