import React from "react";

export const Link = (
  /**
   * @type {React.HTMLProps<HTMLAnchorElement>}
   */
  props
) => (
  <a
    target="_blank"
    {...props}
    style={{ color: "#000000", textDecoration: "none", ...props.style }}
  >
    {props.children}
  </a>
);
