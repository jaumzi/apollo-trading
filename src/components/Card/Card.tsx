import React from "react";
import { ReactWithProps } from "src/types/react";

const Card: ReactWithProps<{
  fullW?: boolean;
  fullH?: boolean;
  height?: number;
  width?: number;
  color?: "red" | "blue";
}> = ({ fullW, fullH, width, height, color = "red", children }) => {
  let classes = fullW ? "w-full " : "";
  classes += color;
  classes += fullH ? " h-full " : "";

  return (
    <div className={classes} style={{ height, width }}>
      {children}
    </div>
  );
};

export default Card;
