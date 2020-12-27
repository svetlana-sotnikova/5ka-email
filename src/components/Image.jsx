import React from "react";

export const Image = (
  /**
   * @type {React.HTMLProps<HTMLImageElement>}
   */
  props
) => <img {...props} style={{ display: "block", ...props.style }} />;
