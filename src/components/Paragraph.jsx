import React from "react";

export const Paragraph = (props) => (
  <div style={{ fontSize: 16, ...props.style }}>{props.children}</div>
);
